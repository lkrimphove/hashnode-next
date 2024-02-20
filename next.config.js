const HASHNODE_ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/badges",
        destination: "/badges",
        permanent: true,
      },
      {
        source: "/blog/newsletter",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/blog/sponsor",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/blog/sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/blog/rss.xml",
        destination: "/rss.xml",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ping/data-event",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/data-event`,
      },
      {
        source: "/ping/view",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/view`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
};

module.exports = nextConfig;
