/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENVIRONMENT: process.env.NODE_ENV === "production" ? "prod" : "dev",
        URL:
            process.env.NODE_ENV === "production"
                ? ""
                : "http://localhost:8000/",
    },
};

module.exports = nextConfig;
