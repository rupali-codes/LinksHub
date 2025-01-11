import { NextApiRequest, NextApiResponse } from 'next';
import { sidebarData } from 'database/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://linkshub.dev';
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${today}</lastmod>
      <priority>1.0</priority>
    </url>
    ${sidebarData
      .map(
        (category) => `
    <url>
      <loc>${baseUrl}/${category.category}</loc>
      <lastmod>${today}</lastmod>
      <priority>0.8</priority>
    </url>
    ${category.subcategory
      .map(
        (subcategory) => `
    <url>
      <loc>${baseUrl}/${category.category}${subcategory.url}</loc>
      <lastmod>${today}</lastmod>
      <priority>0.7</priority>
    </url>`
      )
      .join('')}
  `
      )
      .join('')}
  </urlset>`;

  // Set the response headers and return the sitemap as XML
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(sitemap);
}