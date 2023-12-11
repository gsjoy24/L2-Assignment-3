import express from 'express';
import CategoryControllers from './category.controller';

const route = express.Router();

route.post('/', CategoryControllers.createCategory);
route.get('/', CategoryControllers.getAllCategories);
export const CategoryRoutes = route;
