import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import AppError from '../../../errors/AppError';

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

  public async editUser({
    id,
    name,
    email,
    avatar,
    role,
    password,
  }: IEditUserDTO): Promise<void> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new AppError('User does not exist');
    }

    await this.ormRepository.updateOne(
      { _id: new ObjectID(id) },
      {
        $set: { name, email, avatar, role, password },
      },
      { upsert: true },
    );
  }

  public async deleteUser(id: string): Promise<void> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new AppError('This user does not exists');
    }

    await this.ormRepository.remove(user);
  }
}

export default UsersRepository;
