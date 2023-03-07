import { Router } from 'express';
import { celebrate } from 'celebrate';
import { userValidator } from '../../middlewares/userValidator';
import { createUserController } from '../../controllers/user/createUserController';
import { getUsersController } from '../../controllers/user/getUsersController';

const routes = Router();

routes.post('/', celebrate(userValidator), createUserController);
routes.get('/', getUsersController);

export default routes;
