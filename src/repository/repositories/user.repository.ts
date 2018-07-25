import { MongoBaseRepository } from './mongo-base.repository';
import { IUser } from '../schema/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends MongoBaseRepository<IUser>{

  getCollectionName() {
    return 'user';
  }
}