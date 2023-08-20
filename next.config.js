/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENVIRONMENT: process.env.NODE_ENV === "production" ? "prod" : "dev",
        BACKEND_URL:
            process.env.NODE_ENV === "production"
                ? "https://ecommerce-backend-bou8.onrender.com/"
                : // ? "https://mighty-coast-67371.herokuapp.com/"
                  "http://localhost:8000/",
        RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: false,
    },
};

module.exports = nextConfig;
