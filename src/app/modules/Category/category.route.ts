import express from 'express';
import CategoryControllers from './category.controller';

const route = express.Router();

route.post('/', CategoryControllers.createCategory);
route.get('/', CategoryControllers.getAllCategories);
route.patch('/:id', CategoryControllers.updateCategory);
route.delete('/:id', CategoryControllers.deleteCategory);
export const CategoryRoutes = route;
