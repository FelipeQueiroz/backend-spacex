import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import EditUserService from '../services/EditUserService';
import RemoveUserService from '../services/RemoveUserService';
import ListAllUserService from '../services/ListAllUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, avatar, role, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      avatar,
      role,
      password,
    });

    return response.json(user);
  }

  public async edit(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, avatar, role, password } = request.body;

    const editUser = new EditUserService();

    const user = await editUser.execute({
      id,
      name,
      email,
      avatar,
      role,
      password,
    });

    return response.json(user);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeUser = new RemoveUserService();

    await removeUser.execute({ id });

    return response.status(200).send();
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listAll = new ListAllUserService();

    const users = await listAll.execute();

    return response.json(users);
  }
}
