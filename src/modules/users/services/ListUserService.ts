import AppError from '../../../shared/errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import User from '../schemas/User';

class ListUserService {
  public async execute(id: string): Promise<User | undefined> {
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    return user;
  }
}

export default ListUserService;
