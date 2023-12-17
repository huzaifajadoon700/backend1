import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  text: String,
});

export const Review = mongoose.model("Review", reviewSchema);
