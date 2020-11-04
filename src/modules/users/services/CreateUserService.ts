import AppError from '../../../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import User from '../schemas/User';

interface IRequest {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

class CreateUserService {
  public async execute({ name, email, avatar, role }: IRequest): Promise<User> {
    const usersRepository = new UsersRepository();

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const user = usersRepository.createUser({
      name,
      email,
      avatar,
      role,
    });

    return user;
  }
}

export default CreateUserService;
