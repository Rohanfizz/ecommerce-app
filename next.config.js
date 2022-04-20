/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENVIRONMENT: process.env.NODE_ENV === "production" ? "prod" : "dev",
    },
};

module.exports = nextConfig;
