import { getMongoRepository, MongoRepository } from 'typeorm';
import AppError from '../../../errors/AppError';

import Post from '../schemas/Post';
import User from '../../users/schemas/User';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IEditPostDTO from '../dtos/IEditPostDTO';

class PostsRepository {
  private ormRepository: MongoRepository<Post>;

  private userRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'default');
    this.userRepository = getMongoRepository(User, 'default');
  }

  public async findAll(): Promise<Post[]> {
    const posts = await this.ormRepository.find({
      relations: ['owner'],
    });

    return posts;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id, {
      relations: ['owner'],
    });

    return post;
  }

  public async createPost({
    title,
    body,
    owner_id,
  }: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create({
      title,
      body,
      owner_id,
    });

    await this.ormRepository.save(post);

    return post;
  }

  public async editPost({ id, title, body }: IEditPostDTO): Promise<Post> {
    const post = await this.ormRepository.findOne(id);

    if (!post) {
      throw new AppError('Post does not exist');
    }

    post.title = title || post.title;
    post.body = body || post.body;

    return post;
  }

  public async deletePost(id: string): Promise<void> {
    const post = await this.ormRepository.findOne(id);

    if (!post) {
      throw new AppError('This post does not exists');
    }

    await this.ormRepository.remove(post);
  }
}

export default PostsRepository;
