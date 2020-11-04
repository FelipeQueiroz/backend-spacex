import AppError from '../../../errors/AppError';
import NewsRepository from '../repositories/NewsRepository';
import Post from '../schemas/Post';

class ListPostService {
  public async execute(id: string): Promise<Post | undefined> {
    const newsRepository = new NewsRepository();

    const post = newsRepository.findById(id);

    if (!post) {
      throw new AppError('Post does not exists.');
    }

    return post;
  }
}

export default ListPostService;
