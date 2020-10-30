import { MongoRepository } from 'typeorm';

import User from '../schemas/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  avatar: string;
  password: string;
  role: string;
}

class UsersRepository {
  private ormRepository: MongoRepository<User>;

  public async getUsers(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async createUser({
    name,
    email,
    avatar,
    role,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      avatar,
      role,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
