import mongoose, { Schema } from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.ObjectId,
    required: true,
  },
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
