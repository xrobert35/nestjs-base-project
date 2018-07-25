import { Injectable } from '@nestjs/common';
import { WinLogger } from '../../common/logger/winlogger';
import { IMongoModel } from '../schema/mongo-base.schema';
import { TechnicalException } from '../../common/exception/technical.exception';
import * as lodash from 'lodash';

export interface IRead<E> {
  findById(id: string): Promise<E>;
  findOne(query: any): Promise<E>;
  find(query: any): Promise<E[]>;
  exists(id: string): Promise<boolean>;
  count(cond?: any): Promise<number>;
}

export interface IWrite<E> {
  create(item: E): Promise<E>;
  update(item: E): Promise<E>;
  delete(item: E): Promise<boolean>;
}

@Injectable()
export abstract class MongoBaseRepository<E extends IMongoModel> implements IRead<E>, IWrite<E> {
  private logger: WinLogger = WinLogger.get('data-access');

  private type: string;

  constructor() { }

  findById(id: string): Promise<E> {
    throw new Error('Method not implemented.');
  }
  findOne(query: any): Promise<E> {
    throw new Error('Method not implementedZ.');
  }
  find(query: any): Promise<E[]> {
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  count(cond?: any): Promise<number> {
    throw new Error('Method not implemented.');
  }
  create(item: E): Promise<E> {
    throw new Error('Method not implemented.');
  }
  update(item: E): Promise<E> {
    throw new Error('Method not implemented.');
  }
  delete(item: E): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  abstract getCollectionName(): string;
}
