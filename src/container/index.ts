import { container } from 'tsyringe';

import UsersRepository from '../modules/repositories/UsersRepository';

container.registerSingleton('UsersRepository', UsersRepository);
