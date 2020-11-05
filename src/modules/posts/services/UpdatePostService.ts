import PostsRepository from '../repositories/PostsRepository';
import Post from '../schemas/Post';

interface IRequest {
  id: string;
  title: string;
  body: string;
}

class UpdatePostService {
  public async execute({ id, title, body }: IRequest): Promise<Post> {
    const postsRepository = new PostsRepository();

    const post = await postsRepository.editPost({
      id,
      title,
      body,
    });

    return post;
  }
}

export default UpdatePostService;
