import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { RoutesModule } from '../routes/routes.modules';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [RoutesModule],
      providers: [],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const homeController = app.get<HomeController>(HomeController);
      expect(homeController.get()).toBe('Hello world!');
    });
  });
});
