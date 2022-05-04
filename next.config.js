/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENVIRONMENT: process.env.NODE_ENV === "production" ? "prod" : "dev",
        BACKEND_URL:
            process.env.NODE_ENV === "production"
                ? "https://mighty-coast-67371.herokuapp.com/"
                : "http://localhost:8000/",
    },
};

module.exports = nextConfig;
