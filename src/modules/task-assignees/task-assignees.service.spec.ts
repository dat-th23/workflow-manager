import { Test, TestingModule } from '@nestjs/testing';
import { TaskAssigneesService } from './task-assignees.service';

describe('TaskAssigneesService', () => {
  let service: TaskAssigneesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskAssigneesService],
    }).compile();

    service = module.get<TaskAssigneesService>(TaskAssigneesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
