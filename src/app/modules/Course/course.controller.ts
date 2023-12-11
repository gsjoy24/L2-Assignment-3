import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import CourseServices from './course.service';
import { Request, Response } from 'express';
import ReviewServices from '../Review/review.service';

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const Course = await CourseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully',
    data: Course,
  });
});

const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const courses = await CourseServices.getAllCoursesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    data: courses,
  });
});

const getSingleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Course = await CourseServices.getSingleCourseFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: Course,
  });
});

const getSingleWithReviewsCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const course = await CourseServices.getSingleCourseFromDB(id);
    const reviews = await ReviewServices.getReviewsFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course and Reviews retrieved successfully',
      data: { course, reviews },
    });
  },
);

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Course = await CourseServices.updateCourseInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: Course,
  });
});

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const course = await CourseServices.deleteCourseFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: null,
  });
});

const CourseControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  getSingleWithReviewsCourse,
  updateCourse,
  deleteCourse,
};

export default CourseControllers;
