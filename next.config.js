const securityHeaders = [
  // prevent xss failure
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // prevent iframe
  {
    key: "X-Frame-Options",
    value: "deny",
  },
  // prevent mime sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  // disabled strict mode for render useEffect only once
  // reactStrictMode: true,
  // import svg
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // init .env variables
  env: {
    NODEENV: process.env.NODEENV,
    WEBHOOK_GENERAL: process.env.WEBHOOK_GENERAL,
    WEBHOOK_COMPUTERS:
      process.env.WEBHOOK_COMPUTERS,
    WEBHOOK_CONSOLES:
      process.env.WEBHOOK_CONSOLES,
    WEBHOOK_MOBILES: process.env.WEBHOOK_MOBILES,
    WEBHOOK_WEB: process.env.WEBHOOK_WEB,
    WEBHOOK_KEYBOARDS:
      process.env.WEBHOOK_KEYBOARDS,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  // disable trash header
  poweredByHeader: false,
  // custom next server headers
  async headers() {
    return [
      {
        // apply to all routes
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  // images cors domain
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: "/demande-de-prise-en-charge",
        destination:
          "/demande-de-prise-en-charge",
      },
      {
        source: "/api/supports",
        destination: "/api/supports",
      },
    ];
  },
};
