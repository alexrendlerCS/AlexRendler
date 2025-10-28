import fs from "fs";
import path from "path";

// Server-side route handler that generates a sitemap XML for rendlr.dev
export async function GET() {
  const baseUrl = "https://rendlr.dev";
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // Static pages to include (explicitly exclude /test-supabase)
  // Order: homepage, about, getting-started, then the rest
  const staticPages = [
    "/",
    "/about",
    "/getting-started",
    "/journey",
    "/journey/demo",
    "/projects",
    "/blog",
  ];

  // Helper to safely read blog directory names
  const blogDir = path.join(process.cwd(), "app", "blog");
  let blogSlugs: string[] = [];

  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    blogSlugs = entries
      .filter((e) => e.isDirectory())
      .map((d) => d.name)
      .filter((n) => n !== "_components" && !n.startsWith("."));
  } catch (err) {
    // If blog dir is missing, continue with an empty list.
    // Avoid throwing so search engines still get the rest of the sitemap.
    console.error("sitemap: failed to read blog directory", err);
    blogSlugs = [];
  }

  // Build list of URL entries
  type Entry = { loc: string; lastmod: string; changefreq: string; priority: number };
  const entries: Entry[] = [];

  for (const p of staticPages) {
    // Assign priorities to reflect desired order and importance
    let priority = 0.7;
    if (p === "/") priority = 1.0; // highest
    else if (p === "/about") priority = 0.95;
    else if (p === "/getting-started") priority = 0.9;
    else if (p === "/blog") priority = 0.85;
    else priority = 0.7;

    entries.push({
      loc: `${baseUrl}${p}`,
      lastmod: today,
      changefreq: "monthly",
      priority,
    });
  }

  for (const slug of blogSlugs) {
    const p = `/blog/${slug}`;
    entries.push({
      loc: `${baseUrl}${p}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    });
  }

  // Optional: sort by priority desc then loc
  entries.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return a.loc.localeCompare(b.loc);
  });

  const headerDate = new Date().toISOString().split("T")[0];

  // Helper to escape XML special characters
  function escapeXml(s: string) {
    return s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  const xmlParts: string[] = [];
  xmlParts.push("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
  xmlParts.push(`<!--  Generated sitemap for rendlr.dev on ${headerDate}  -->`);
  xmlParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  // Each <url> block is rendered on a single line per requirements
  for (const e of entries) {
    const loc = escapeXml(e.loc);
    const lastmod = escapeXml(e.lastmod);
    const changefreq = escapeXml(e.changefreq);
    const priority = escapeXml(e.priority.toFixed(1));

    xmlParts.push(
      `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
    );
  }

  xmlParts.push("</urlset>");

  const xml = xmlParts.join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
