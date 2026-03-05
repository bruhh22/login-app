import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const router = Router();

// Route: POST /api/login
router.post('/login', login);

export default router;