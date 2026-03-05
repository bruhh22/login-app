import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

// Middlewares
app.use(cors()); // Enable CORS for React frontend integration
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use('/api', authRoutes);

// Global Error Handler (Must be registered last)
app.use(errorHandler);

export default app;