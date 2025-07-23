import express from "express";
import Article from "../models/article.model.js"; // adjust path to your Article model

const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const articles = await Article.find().sort({ updatedAt: -1 });

    const articleUrls = articles.map((article) => {
      const slug = encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, "-")); // generate slug from title if not stored
      return `
        <url>
          <loc>https://frontend-static-d3dl.onrender.com/articles/${slug}</loc>
          <lastmod>${article.updatedAt.toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>`;
    }).join("");

    const staticUrls = `
      <url>
        <loc>https://frontend-static-d3dl.onrender.com/</loc>
        <lastmod>2025-07-21</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://frontend-static-d3dl.onrender.com/about</loc>
        <lastmod>2025-07-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://frontend-static-d3dl.onrender.com/processes</loc>
        <lastmod>2025-07-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://frontend-static-d3dl.onrender.com/scope</loc>
        <lastmod>2025-07-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://frontend-static-d3dl.onrender.com/contact</loc>
        <lastmod>2025-07-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${articleUrls}
    </urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Sitemap generation failed");
  }
});

export default router;
