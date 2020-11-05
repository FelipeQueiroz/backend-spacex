import { getMongoRepository, MongoRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';

import User from '../schemas/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IEditUserDTO from '../dtos/IEditUserDTO';

class UsersRepository {
  private ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User, 'default');
  }

  public async getUsers(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async createUser({
    name,
    email,
    avatar,
    role,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      avatar,
      role,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async editUser({
    id,
    name,
    email,
    avatar,
    role,
  }: IEditUserDTO): Promise<User> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new AppError('User does not exist');
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.avatar = avatar || user.avatar;
    user.role = role || user.role;

    await this.ormRepository.save(user);

    return user;
  }

  public async deleteUser(id: string): Promise<void> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new AppError('This user does not exists');
    }

    await this.ormRepository.remove(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default UsersRepository;
