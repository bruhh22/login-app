// import express from 'express';
// import cors from 'cors';
// import authRoutes from './routes/auth.routes.js';
// import errorHandler from './middleware/error.middleware.js';

// const app = express();

// // Middlewares
// app.use(cors()); // Enable CORS for React frontend integration
// app.use(express.json()); // Parse JSON request bodies

// // API Routes
// app.use('/api', authRoutes);

// // Global Error Handler (Must be registered last)
// app.use(errorHandler);

// export default app;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import authRoutes from './routes/auth.routes.js';
import errorHandler from './middleware/error.middleware.js';
import { config } from './config/env.js';

const app = express();

// 1. Security Headers
app.use(helmet());

// 2. Logging Middleware
if (config.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// 3. Dynamic CORS Configuration
app.use(cors({
    origin: config.FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true
}));

// 4. Rate Limiting (Brute-force protection for login)
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login requests per window
    message: { message: "Too many login attempts, please try again after 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});

// 5. Body Parsing
app.use(express.json());

// 6. API Routes
app.use('/api', authRoutes);
app.post('/api/login', loginLimiter); // Re-applying limiter if needed specifically on the endpoint

// 7. Global Error Handler
app.use(errorHandler);

export default app;