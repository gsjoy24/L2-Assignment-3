import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import ReviewServices from './review.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const Course = await ReviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully',
    data: Course,
  });
});

const getReviews = catchAsync(async (req: Request, res: Response) => {
  const courses = await ReviewServices.getReviewsFromDB(req.params.courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews retrieved successfully',
    data: courses,
  });
});

const ReviewControllers = {
  createReview,
  getReviews,
};

export default ReviewControllers;
