/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        qualities: [75, 95, 100],
        dangerouslyAllowSVG: true,
    },
};

module.exports = nextConfig;
