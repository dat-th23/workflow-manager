import { Test, TestingModule } from '@nestjs/testing';
import { TaskAssigneesController } from './task-assignees.controller';
import { TaskAssigneesService } from './task-assignees.service';

describe('TaskAssigneesController', () => {
  let controller: TaskAssigneesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskAssigneesController],
      providers: [TaskAssigneesService],
    }).compile();

    controller = module.get<TaskAssigneesController>(TaskAssigneesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
