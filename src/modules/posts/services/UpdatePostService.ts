import NewsRepository from '../repositories/NewsRepository';
import Post from '../schemas/Post';

interface IRequest {
  id: string;
  title: string;
  body: string;
}

class UpdatePostService {
  public async execute({ id, title, body }: IRequest): Promise<Post> {
    // FIX: update ta mechendo em todos campos
    const newsRepository = new NewsRepository();

    const post = await newsRepository.editPost({
      id,
      title,
      body,
    });

    return post;
  }
}

export default UpdatePostService;
