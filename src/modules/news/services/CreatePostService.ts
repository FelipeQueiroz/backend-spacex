import NewsRepository from '../repositories/NewsRepository';
import Post from '../schemas/Post';

interface IRequest {
  title: string;
  body: string;
  owner_id: string;
}

class CreatePostService {
  public async execute({ title, body, owner_id }: IRequest): Promise<Post> {
    const newsRepository = new NewsRepository();

    const post = newsRepository.createPost({ title, body, owner_id });

    return post;
  }
}

export default CreatePostService;
