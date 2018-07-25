import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

const repositories  = [
  UserRepository,
];

@Module({
  imports: [],
  controllers: [],
  providers: [...repositories],
  exports : [...repositories],
})
export class RepositoryModule {
}