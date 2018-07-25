export interface IMongoModel {
  _id?: string;
  createdOn?: Date;
  updatedOn?: Date;
}

export class MongoModel implements IMongoModel{
  _id?: string;
  createdOn?: Date;
  updatedOn?: Date;
}
