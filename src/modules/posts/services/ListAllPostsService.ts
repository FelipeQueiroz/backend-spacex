import NewsRepository from '../repositories/NewsRepository';
import Post from '../schemas/Post';

class ListAllPostsService {
  public async execute(): Promise<Post[]> {
    const newsRepository = new NewsRepository();
    return newsRepository.findAll();
  }
}

export default ListAllPostsService;
