import { Request, Response } from 'express';

import CreatePostService from '../services/CreatePostService';
import RemovePostService from '../services/RemovePostService';
import ListAllPostsService from '../services/ListAllPostsService';
import UpdatePostService from '../services/UpdatePostService';

export default class NewsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, body, owner_id } = request.body;

    const createPost = new CreatePostService();

    const post = await createPost.execute({
      title,
      body,
      owner_id,
    });

    return response.json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body, title } = request.body;

    const editPost = new UpdatePostService();

    const post = await editPost.execute({
      id,
      body,
      title,
    });

    return response.json(post);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removePost = new RemovePostService();

    await removePost.execute({ id });

    return response.status(200).send();
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const listAll = new ListAllPostsService();

    const posts = await listAll.execute();

    return response.json(posts);
  }
}
