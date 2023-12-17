// // routes/reviewRoutes.js
// const express = require('express');
// const { getAllReviews, addReview ,editReview,deleteReview} = require('../controllers/reviews.js');
// const router = express.Router();
// router.get('/reviews', getAllReviews);
// router.post('/reviews', addReview);
// router.put('/reviews/:id', editReview);
// router.delete('/reviews/:id', deleteReview);

// export default router;


// routes/reviews.js
import express from 'express';
import { addReview, deleteReview, editReview, getAllReviews } from '../controllers/reviews.js';

const router = express.Router();

router.get('/reviews', getAllReviews);
router.post('/reviews', addReview);
router.put('/reviews/:id', editReview);
router.delete('/reviews/:id', deleteReview);

export default router;
