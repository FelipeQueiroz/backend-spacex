import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  password: string;
}

class EditUserService {
  public async execute({
    id,
    name,
    email,
    avatar,
    role,
    password,
  }: IRequest): Promise<void> {
    // FIX: update ta mechendo em todos campos
    const usersRepository = new UsersRepository();

    await usersRepository.editUser({
      id,
      name,
      email,
      avatar,
      role,
      password,
    });
  }
}

export default EditUserService;
