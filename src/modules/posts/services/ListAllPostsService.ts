import PostsRepository from '../repositories/PostsRepository';
import Post from '../schemas/Post';

class ListAllPostsService {
  public async execute(): Promise<Post[]> {
    const postsRepository = new PostsRepository();
    return postsRepository.findAll();
  }
}

export default ListAllPostsService;
