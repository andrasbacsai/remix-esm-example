/** @type {import("@remix-run/dev").AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 8002,
  serverBuildTarget: "vercel",
  serverDependenciesToBundle: [/.*/],
};

