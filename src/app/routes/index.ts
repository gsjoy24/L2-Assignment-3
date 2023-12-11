import { Router } from 'express';
import { CategoryRoutes } from '../modules/Category/category.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
];
moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
