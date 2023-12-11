import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const category = await Category.create(payload);
  return category;
};

const getAllCategoriesFromDB = async () => {
  const categories = await Category.find();
  return categories;
};

const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};

export default CategoryServices;
