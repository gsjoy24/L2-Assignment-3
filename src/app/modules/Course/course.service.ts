import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (data: TCourse) => {
  const course = await Course.create(data);
  return course;
};

const getAllCoursesFromDB = async () => {
  const courses = await Course.find();
  return courses;
};

const updateCourseInDB = async (id: string, data: TCourse) => {
  const course = await Course.findByIdAndUpdate(id, data, { new: true });
  return course;
};

export { createCourseIntoDB, getAllCoursesFromDB, updateCourseInDB };
