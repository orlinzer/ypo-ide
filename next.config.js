/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    // Theared party domains to take images from
    domains:[

    ],
    loader: 'custom',
    path: '/utils'
  },
  pageExtensions: ['tsx'],

}

module.exports = nextConfig
