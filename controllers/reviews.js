// controllers/reviewController.js
// import Review from '../models/reviews.js';

import { Review } from "../models/reviews.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addReview = async (req, res) => {
  const { text } = req.body;

  try {
    const newReview = await Review.create({ text });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const editReview = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
