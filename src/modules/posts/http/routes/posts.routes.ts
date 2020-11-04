import { Router } from 'express';

import PostsController from '../controllers/PostsController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.post('/', postsController.create);
postsRouter.get('/', postsController.read);
postsRouter.put('/:id', postsController.update);
postsRouter.delete('/:id', postsController.remove);
postsRouter.get('/:id', postsController.readOne);

export default postsRouter;
