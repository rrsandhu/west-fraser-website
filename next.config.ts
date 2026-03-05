import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "westfraserdev.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/residential", destination: "/projects", permanent: false },
      { source: "/residential/:slug", destination: "/projects", permanent: false },
      { source: "/rentals", destination: "/projects", permanent: false },
      { source: "/rentals/:slug", destination: "/projects", permanent: false },
      { source: "/commercial", destination: "/services", permanent: false },
      { source: "/commercial/:slug", destination: "/services", permanent: false },
      { source: "/hospitality", destination: "/about", permanent: false },
      { source: "/customer-service", destination: "/contact", permanent: false },
      { source: "/careers", destination: "/about", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/about-us", destination: "/about", permanent: false },
      { source: "/contact-us", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
