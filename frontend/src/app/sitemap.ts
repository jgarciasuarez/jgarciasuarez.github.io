import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const lastModified = new Date("2026-07-30");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/research"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/teaching"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/ddcf"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
