/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['api.producthunt.com','c2pa.org'],
    },
}

module.exports = nextConfig;
