import { Router } from 'express';

import usersRouter from '../modules/users/routes/users.routes';
import newsRouter from '../modules/news/routes/news.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/news', newsRouter);

export default routes;
