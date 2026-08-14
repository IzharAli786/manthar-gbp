import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/services";

export default function robots(): MetadataRoute.Robots {
  return {
    // Everyone welcome — including AI crawlers (GPTBot, ClaudeBot,
    // PerplexityBot, etc.): being cited by answer engines is the point.
    // Private meeting rooms stay out of the index.
    rules: [{ userAgent: "*", allow: "/", disallow: "/consultation/room/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
