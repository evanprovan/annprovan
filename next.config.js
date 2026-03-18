/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
        qualities: [75, 95, 100],
        dangerouslyAllowSVG: true,
    },
};

module.exports = nextConfig;
