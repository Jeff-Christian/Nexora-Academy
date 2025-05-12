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
  modules: [
    {
      type: Schema.ObjectId,
      ref: "Module",
    },
  ],
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
