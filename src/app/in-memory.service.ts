import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const todoData = [
      { id: 1, todo: 'Sample-Task-1', date: new Date() },
      { id: 2, todo: 'Sample-Task-2', date: new Date() },
      { id: 3, todo: 'Sample-Task-3', date: new Date() },
    ];
    return { todoData };
  }
}