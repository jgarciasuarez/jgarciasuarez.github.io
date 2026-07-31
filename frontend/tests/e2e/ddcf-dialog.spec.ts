import { expect, test } from "@playwright/test";

const dialogs = [
  { opener: "DDCF", title: "Data-Driven Computational Friction" },
  {
    opener: "Data-Driven Constitutive Modeling",
    title: "Data-Driven Constitutive Modeling",
  },
  { opener: "Learning Neural Operators", title: "Learning Neural Operators" },
  { opener: "GPU Acceleration", title: "GPU Acceleration" },
  {
    opener: "Automatic Differentiation",
    title: "Automatic Differentiation",
  },
] as const;

test("DDCF detail dialogs keep all content reachable in a short desktop viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/ddcf");

  for (const item of dialogs) {
    const opener = page.getByRole("button", {
      name: `Open details for ${item.opener}`,
    });
    await opener.click();

    const dialog = page.getByRole("dialog", { name: item.title });
    const content = dialog.getByRole("region", {
      name: `${item.title} details content`,
    });
    await expect(dialog).toBeVisible();

    const dimensions = await content.evaluate((element) => {
      const dialogElement = element.closest('[role="dialog"]');
      const contentRect = element.getBoundingClientRect();
      const dialogRect = dialogElement?.getBoundingClientRect();

      return {
        contentBottom: contentRect.bottom,
        dialogBottom: dialogRect?.bottom ?? 0,
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
      };
    });

    expect(dimensions.contentBottom).toBeLessThanOrEqual(
      dimensions.dialogBottom + 1,
    );

    const maximumScroll = dimensions.scrollHeight - dimensions.clientHeight;
    if (maximumScroll > 0) {
      await content.focus();
      await page.keyboard.press("PageDown");
      await expect
        .poll(() => content.evaluate((element) => element.scrollTop))
        .toBeGreaterThan(0);

      await content.hover();
      await page.mouse.wheel(0, maximumScroll * 2);
      await expect
        .poll(() => content.evaluate((element) => element.scrollTop))
        .toBeGreaterThanOrEqual(maximumScroll - 1);
    }

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(opener).toBeFocused();
  }
});

test("the complete DDCF overview remains reachable on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ddcf");

  const opener = page.getByRole("button", { name: "Open details for DDCF" });
  await opener.click();

  const dialog = page.getByRole("dialog", {
    name: "Data-Driven Computational Friction",
  });
  const finalResource = dialog.getByRole("link", { name: "Companion dataset" });

  await finalResource.scrollIntoViewIfNeeded();
  await expect(finalResource).toBeInViewport();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(opener).toBeFocused();
});
