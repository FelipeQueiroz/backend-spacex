import AppError from '../../../shared/errors/AppError';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  id: string;
}

class RemoveUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const usersRepository = new UsersRepository();

    const checkUserExists = await usersRepository.findById(id);

    if (!checkUserExists) {
      throw new AppError('User does not exists');
    }

    await usersRepository.deleteUser(id);
  }
}

export default RemoveUserService;
