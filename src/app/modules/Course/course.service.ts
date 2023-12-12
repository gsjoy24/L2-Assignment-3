import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import ReviewServices from '../Review/review.service';
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
  const { details, tags, ...restData } = data;
  const modifiedData: Record<string, unknown> = { ...restData };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedData[`details.${key}`] = value;
    }
  }

  if (tags && tags.length > 0) {
    //* deleting tags
    const deletedTags = tags
      .filter((tag) => tag.name && tag.isDeleted)
      .map((tag) => tag.name);

    const deleteTags = await Course.findByIdAndUpdate(
      id,
      {
        $pull: {
          tags: {
            name: {
              $in: deletedTags,
            },
          },
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!deleteTags) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update tags');
    }

    // adding tags
    const addedTags = tags.filter((tag) => tag.name && !tag.isDeleted);

    const addTag = await Course.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          tags: {
            $each: addedTags,
          },
        },
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!addTag) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course');
    }
  }

  const course = await Course.findByIdAndUpdate(id, modifiedData, {
    new: true,
  });
  return course;
};

const deleteCourseFromDB = async (id: string) => {
  const course = await Course.findByIdAndDelete(id);
  return course;
};

const getTheBestCourseFromDB = async () => {
  const courses = await CourseServices.getAllCoursesFromDB();

  if (courses.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'No courses found');
  }

  const reviews = await ReviewServices.getAllReviewsFromDB();
  let course: TCourse | null = null;
  let reviewCount: number = 0;
  let averageRating: number = -1;

  for (const singleCourse of courses) {
    const courseReviews = reviews.filter(
      (review) => String(review?.courseId) === String(singleCourse._id),
    );

    const totalReviews = courseReviews.length;
    const sumRatings = courseReviews.reduce(
      (sum, review) => sum + review.rating,
      0,
    );

    const highestRating = sumRatings / totalReviews;

    if (highestRating > averageRating) {
      averageRating = Number(highestRating.toFixed(1));
      course = singleCourse;
    }
  }

  if (course) {
    reviewCount = reviews.filter(
      (review) => String(review?.courseId) === String(course?._id),
    ).length;
  }

  return {
    course,
    averageRating,
    reviewCount,
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
