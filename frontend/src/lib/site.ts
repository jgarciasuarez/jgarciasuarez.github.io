const canonicalFallback = "https://jgarciasuarez.github.io";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || canonicalFallback,
);

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
