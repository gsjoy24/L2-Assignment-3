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

const getSingleCourseFromDB = async (id: string) => {
  const course = await Course.findById(id);
  return course;
};

const deleteCourseFromDB = async (id: string) => {
  const course = await Course.findByIdAndDelete(id);
  return course;
};

const updateCourseInDB = async (id: string, data: TCourse) => {
  const course = await Course.findByIdAndUpdate(id, data, { new: true });
  return course;
};

export {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
  updateCourseInDB,
};
