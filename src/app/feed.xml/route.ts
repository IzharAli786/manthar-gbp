import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/services";

export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function GET() {
  const items = [...POSTS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Field Notes — GBP &amp; Local SEO by Manthar Ali</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical guides on Google Business Profile suspensions, reinstatement, reviews, and map-pack ranking — written from real cases.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
