import UsersRepository from '../repositories/UsersRepository';
import User from '../schemas/User';

interface IRequest {
  name: string;
  email: string;
  avatar: string;
  role: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    avatar,
    role,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = new UsersRepository();

    const user = usersRepository.createUser({
      name,
      email,
      avatar,
      role,
      password,
    });

    return user;
  }
}

export default CreateUserService;
