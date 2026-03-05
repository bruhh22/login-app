import dotenv from 'dotenv';

// Initialize dotenv to load variables from .env file
dotenv.config();

export const config = {
    PORT: process.env.PORT || 5000,
    // Add other environment variables here as the app scales
};