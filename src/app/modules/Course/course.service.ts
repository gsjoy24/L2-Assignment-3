import { Review } from '../Review/review.model';
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

const updateCourseInDB = async (id: string, data: TCourse) => {
  const course = await Course.findByIdAndUpdate(id, data, { new: true });
  return course;
};

const deleteCourseFromDB = async (id: string) => {
  const course = await Course.findByIdAndDelete(id);
  return course;
};

const getTheBestCourseFromDB = async () => {
  const course = await Course.find();
  const reviews = await Review.find();
  return {
    course,
    reviews,
  };
};

const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseInDB,
  deleteCourseFromDB,
  getTheBestCourseFromDB,
};

export default CourseServices;
