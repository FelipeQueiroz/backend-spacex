import { Router } from 'express';

import NewsController from '../controllers/NewsController';

const newsRouter = Router();
const newsController = new NewsController();

newsRouter.post('/', newsController.create);
newsRouter.get('/', newsController.read);
newsRouter.put('/:id', newsController.update);
newsRouter.delete('/:id', newsController.remove);

export default newsRouter;
