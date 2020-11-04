import PostsRepository from '../repositories/PostsRepository';
import Post from '../schemas/Post';

interface IRequest {
  title: string;
  body: string;
  owner_id: string;
}

class CreatePostService {
  public async execute({ title, body, owner_id }: IRequest): Promise<Post> {
    const postsRepository = new PostsRepository();

    const post = await postsRepository.createPost({ title, body, owner_id });

    return post;
  }
}

export default CreatePostService;
