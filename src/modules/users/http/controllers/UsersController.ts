import { Request, Response } from 'express';

import CreateUserService from '../../services/CreateUserService';
import EditUserService from '../../services/EditUserService';
import RemoveUserService from '../../services/RemoveUserService';
import ListAllUsersService from '../../services/ListAllUsersService';
import ListUserService from '../../services/ListUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, avatar, role } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      avatar,
      role,
    });

    return response.json(user);
  }

  public async edit(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, avatar, role } = request.body;

    const editUser = new EditUserService();

    const user = await editUser.execute({
      id,
      name,
      email,
      avatar,
      role,
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
    const listAll = new ListAllUsersService();

    const users = await listAll.execute();

    return response.json(users);
  }

  public async listOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const listUser = new ListUserService();

    const user = await listUser.execute(id);

    return response.json(user);
  }
}
