import AppError from '../../../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import User from '../schemas/User';

interface IRequest {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    avatar,
    role,
  }: IRequest): Promise<User> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    const userWithUpdatedEmail = await usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id.toString() !== id) {
      throw new AppError('E-mail already in use.');
    }

    const userUpdated = await usersRepository.editUser({
      id,
      name,
      email,
      avatar,
      role,
    });

    return userUpdated;
  }
}

export default UpdateUserService;
