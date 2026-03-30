import type { MetadataRoute } from "next";

const baseUrl = "https://antonis-portfolio.netlify.app";

//σαιτμαπ/ρομποτσ χανντουλ μπεισικ σεο ινφαστρακτουρ ιν πλεισ

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // later έχεις blog/notes, βάλε τα εδώ
  ];
}
