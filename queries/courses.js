import { Course } from "@/model/courseModel";
import { Category } from "@/model/categoryModel";

export async function getCourses() {
  const courses = await Course.find({}).populate({
    path: "category",
    model: Category,
  });
  return courses;
}
