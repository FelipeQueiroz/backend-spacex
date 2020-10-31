import NewsRepository from '../repositories/NewsRepository';

interface IRequest {
  id: string;
  title: string;
  body: string;
}

class UpdatePostService {
  public async execute({ id, title, body }: IRequest): Promise<void> {
    // FIX: update ta mechendo em todos campos
    const newsRepository = new NewsRepository();

    await newsRepository.editPost({
      id,
      title,
      body,
    });
  }
}

export default UpdatePostService;
