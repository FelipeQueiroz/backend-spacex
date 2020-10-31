import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  id: string;
}

class RemoveUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const usersRepository = new UsersRepository();

    await usersRepository.deleteUser(id);
  }
}

export default RemoveUserService;
