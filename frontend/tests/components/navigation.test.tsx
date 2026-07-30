import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Navigation from "@/components/Navigation";

const usePathname = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => usePathname(),
}));

describe("Navigation", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/research");
  });

  it("identifies the active route", () => {
    render(<Navigation />);

    expect(screen.getByRole("link", { name: "Research" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Bio" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("opens and closes the mobile menu with Escape", () => {
    render(<Navigation />);

    const menuButton = document.querySelector<HTMLButtonElement>(
      '[aria-label="Open navigation menu"]',
    );
    expect(menuButton).not.toBeNull();
    if (!menuButton) return;

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-label", "Close navigation menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });
});
