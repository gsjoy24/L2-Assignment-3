import TReview from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (data: TReview) => {
  const review = await Review.create(data);
  return review;
};
const getReviewsFromDB = async (courseId: string) => {
  const reviews = await Review.find({ courseId });
  return reviews;
};
const ReviewServices = { createReviewIntoDB, getReviewsFromDB };

export default ReviewServices;
