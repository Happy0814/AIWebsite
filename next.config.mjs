const isGitHubPages = process.env.GITHUB_PAGES === "true"
const repoName = "AIWebsite"
const basePath = isGitHubPages ? `/${repoName}` : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ['172.27.9.187'],
}

export default nextConfig
