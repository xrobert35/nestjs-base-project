import { IMongoModel, MongoModel } from './mongo-base.schema';
import { Role } from '../enum/role.enum';

export interface IUser extends IMongoModel {
  email: string;
  password: string;
  role: Role;
  name: string;
  lastLoginAttempt?: Date;
  lastLoginSuccessful?: Date;
  createdOn?: Date;
  updatedOn?: Date;
}

export class User extends MongoModel {
  email: string;
  password: string;
  role: Role;
  name: string;
  lastLoginAttempt?: Date;
  lastLoginSuccessful?: Date;
  createdOn?: Date;
  updatedOn?: Date;
}