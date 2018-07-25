import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RepositoryModule } from '../repository/repository.module';

const services = [
  UserService,
];

@Module({
  imports: [RepositoryModule],
  providers: [...services],
  exports : [...services, RepositoryModule],
})
export class ServiceModule {}