import { Course } from "@/model/courseModel";
import { Category } from "@/model/categoryModel";
import { User } from "@/model/userModel";

export async function getCourses() {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    });
  return courses;
}
