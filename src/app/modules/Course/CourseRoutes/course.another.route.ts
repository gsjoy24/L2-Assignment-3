import express from 'express';
import CourseControllers from '../course.controller';
import validateRequest from '../../../middlewares/validateRequest';
import CourseValidators from '../course.validation';

const route = express.Router();

route.post(
  '/',
  validateRequest(CourseValidators.CourseValidationSchema),
  CourseControllers.createCourse,
);

export const CourseRoutesForPostAndBestCourse = route;
