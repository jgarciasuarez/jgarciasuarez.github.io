import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

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

test("all DDCF images open complete in the accessible image viewer", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/ddcf");

  for (const item of dialogs) {
    const opener = page.getByRole("button", {
      name: `Open details for ${item.opener}`,
    });
    await opener.click();

    const detailsDialog = page.getByRole("dialog", { name: item.title });
    const imageTrigger = detailsDialog.getByRole("button", {
      name: /View full image:/,
    });
    await imageTrigger.click();

    const imageDialog = page.getByRole("dialog", {
      name: `Full image: ${item.title}`,
    });
    const fullImage = imageDialog.getByRole("img");
    await expect(imageDialog).toBeVisible();
    await expect(fullImage).toBeVisible();
    await expect(fullImage).toHaveCSS("object-fit", "contain");
    await expect(
      imageDialog.getByRole("button", { name: "Close full image" }),
    ).toBeFocused();

    const imageState = await fullImage.evaluate((image) => {
      const element = image as HTMLImageElement;
      const dialog = element.closest('[role="dialog"]');
      const imageRect = element.getBoundingClientRect();
      const dialogRect = dialog?.getBoundingClientRect();

      return {
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight,
        insideDialog:
          Boolean(dialogRect) &&
          imageRect.left >= dialogRect!.left &&
          imageRect.right <= dialogRect!.right &&
          imageRect.top >= dialogRect!.top &&
          imageRect.bottom <= dialogRect!.bottom,
        dialogInsideViewport:
          Boolean(dialogRect) &&
          dialogRect!.left >= 0 &&
          dialogRect!.top >= 0 &&
          dialogRect!.right <= window.innerWidth &&
          dialogRect!.bottom <= window.innerHeight,
      };
    });
    expect(imageState.naturalWidth).toBeGreaterThan(0);
    expect(imageState.naturalHeight).toBeGreaterThan(0);
    expect(imageState.insideDialog).toBe(true);
    expect(imageState.dialogInsideViewport).toBe(true);

    await page.keyboard.press("Escape");
    await expect(detailsDialog).toBeVisible();
    await expect(imageTrigger).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(detailsDialog).toBeHidden();
    await expect(opener).toBeFocused();
  }
});

test("the full-image viewer fits mobile and has no detectable A/AA violations", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ddcf");
  await page.getByRole("button", { name: "Open details for DDCF" }).click();

  const detailsDialog = page.getByRole("dialog", {
    name: "Data-Driven Computational Friction",
  });
  await detailsDialog
    .getByRole("button", { name: /View full image:/ })
    .click();

  const imageDialog = page.getByRole("dialog", {
    name: "Full image: Data-Driven Computational Friction",
  });
  const bounds = await imageDialog.evaluate((dialog) => {
    const rect = dialog.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  });
  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.top).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewportWidth);
  expect(bounds.bottom).toBeLessThanOrEqual(bounds.viewportHeight);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
