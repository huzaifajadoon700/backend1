// signin.js
import express from 'express';
import { signIn } from '../controllers/signin.js';

const router = express.Router();

router.post('/', signIn);

export default router;
   