// signinRoutes.js
import express from 'express';
import { addsign } from '../controllers/signup.js';

const router = express.Router();

router.post('/', addsign);

export default router;
