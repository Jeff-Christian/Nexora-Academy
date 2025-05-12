import { Course } from "@/model/courseModel";
import { Category } from "@/model/categoryModel";
import { User } from "@/model/userModel";
import { Testimonial } from "@/model/testimonialModel";
import { Module } from "@/model/moduleModel";

export async function getCourses() {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    })
    .populate({
      path: "modules",
      model: Module,
    });
  return courses;
}
