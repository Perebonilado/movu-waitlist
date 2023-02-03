/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'avatars.dicebear.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
