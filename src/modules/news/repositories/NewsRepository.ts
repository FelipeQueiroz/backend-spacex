import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import AppError from '../../../errors/AppError';

import Post from '../schemas/Post';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IEditPostDTO from '../dtos/IEditPostDTO';

class NewsRepository {
  private ormRepository: MongoRepository<Post>;

  constructor() {
    this.ormRepository = getMongoRepository(Post, 'default');
  }

  public async getPosts(): Promise<Post[]> {
    const posts = await this.ormRepository.find();

    return posts;
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

  public async editPost({ id, title, body }: IEditPostDTO): Promise<void> {
    const post = await this.ormRepository.findOne(id);

    if (!post) {
      throw new AppError('Post does not exist');
    }

    await this.ormRepository.updateOne(
      { _id: new ObjectID(id) },
      {
        $set: { title, body },
      },
      { upsert: true },
    );
  }

  public async deletePost(id: string): Promise<void> {
    const post = await this.ormRepository.findOne(id);

    if (!post) {
      throw new AppError('This post does not exists');
    }

    await this.ormRepository.remove(post);
  }
}

export default NewsRepository;
