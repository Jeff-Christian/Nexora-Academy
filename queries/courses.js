import { Course } from "@/model/courseModel";

export async function getCourses() {
  const courses = await Course.find({});
  return courses;
}
