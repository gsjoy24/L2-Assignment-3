import express from 'express';
import CourseControllers from '../course.controller';

const route = express.Router();

// courses routes

route.get('/', CourseControllers.getAllCourses);
route.get('/:id', CourseControllers.getSingleCourse);
route.get('/:id/reviews', CourseControllers.getSingleCourseWithReviews);
route.put('/:id', CourseControllers.updateCourse);
route.delete('/:id', CourseControllers.deleteCourse);

export const CoursesRoutes = route;
