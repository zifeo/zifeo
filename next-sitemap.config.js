/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "GPTBot", disallow: "/" }],
  },
  outDir: "out",
};
