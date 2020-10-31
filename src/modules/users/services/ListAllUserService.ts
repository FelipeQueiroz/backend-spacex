import UsersRepository from '../repositories/UsersRepository';
import User from '../schemas/User';

class ListAllUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = new UsersRepository();
    return usersRepository.getUsers();
  }
}

export default ListAllUserService;
