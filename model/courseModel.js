import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
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
    ref: "Category",
  },
  instructor: {
    type: Schema.ObjectId,
    ref: "User",
  },
  testimonials: [
    {
      type: Schema.ObjectId,
      ref: "Testimonial",
    },
  ],
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
