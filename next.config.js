/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
       protocol: "http",
       hostname: `http://localhost/main/public`,
       port: '',
       pathname: "/courses/**" 
      }
    ]
  }
}

module.exports = nextConfig
