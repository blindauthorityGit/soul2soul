import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/impressum", "/datenschutz"];

  return routes.map((route) => ({
    url: `https://www.soul2soul.at${route}`,
    lastModified: new Date(),
  }));
}
