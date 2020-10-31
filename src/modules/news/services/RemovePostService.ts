import NewsRepository from '../repositories/NewsRepository';

interface IRequest {
  id: string;
}

class RemovePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const newsRepository = new NewsRepository();

    await newsRepository.deletePost(id);
  }
}

export default RemovePostService;
