import AppError from '../../../errors/AppError';
import PostsRepository from '../repositories/PostsRepository';
import Post from '../schemas/Post';

class ListPostService {
  public async execute(id: string): Promise<Post | undefined> {
    const postsRepository = new PostsRepository();

    const post = postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post does not exists.');
    }

    return post;
  }
}

export default ListPostService;
