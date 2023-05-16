/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        dangerouslyAllowSVG: true,
    },
};

module.exports = nextConfig;
