import PostsRepository from '../repositories/PostsRepository';

interface IRequest {
  id: string;
}

class RemovePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const postsRepository = new PostsRepository();

    await postsRepository.deletePost(id);
  }
}

export default RemovePostService;
