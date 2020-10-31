import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.listAll);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.edit);
usersRouter.delete('/:id', usersController.remove);

export default usersRouter;
