import type { MetadataRoute } from "next";

const baseUrl = "https://antonis-portfolio.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Αν later έχεις blog/notes, βάλε τα εδώ
  ];
}
