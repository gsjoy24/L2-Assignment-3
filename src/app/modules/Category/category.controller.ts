import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import CategoryServices from './category.service';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const category = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully!',
    data: category,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const categories = await CategoryServices.getAllCategoriesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully!',
    data: categories,
  });
});

const CategoryControllers = {
  createCategory,
  getAllCategories,
};

export default CategoryControllers;
