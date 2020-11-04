import { Router } from 'express';

import usersRouter from '../modules/users/http/routes/users.routes';
import postsRouter from '../modules/posts/http/routes/posts.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/posts', postsRouter);

export default routes;
