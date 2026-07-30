import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProfessionalEvidence from "@/components/ProfessionalEvidence";
import StatsRibbon from "@/components/StatsRibbon";

describe("portfolio evidence components", () => {
  it("renders the verified publication and grant metrics", () => {
    render(<StatsRibbon />);

    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("Peer-reviewed Articles")).toBeInTheDocument();
    expect(screen.getByText("CHF 830k")).toBeInTheDocument();
    expect(screen.getByText("SNSF Ambizione Grant")).toBeInTheDocument();
  });

  it("exposes verified software, data, and recognition links", () => {
    render(<ProfessionalEvidence />);

    expect(
      screen.getByRole("heading", {
        name: "Built to move between theory and computation",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Demetriades–Tsafka–Kokkalis Prize")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /soft-contact/i })).toHaveAttribute(
      "href",
      "https://github.com/jgarciasuarez/soft-contact",
    );
    expect(
      screen.getByRole("link", { name: /DDCF research data/i }),
    ).toHaveAttribute("href", "https://zenodo.org/records/13341474");
  });
});
