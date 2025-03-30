import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICardDataResponse } from './httpResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    return { users, cards: this.cardDb() };
  }

  constructor() {}

  private cardDb(): ICardDataResponse[] {
    return [
      {
        description: 'this is a great course. It helped me alot.Thanks you',
        name: 'Jane Cooper',
        occupations: 'Developer, Sony',
        avatar:
          'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg',
      },
      {
        description: 'Amazing Works! Well done!',
        name: 'Jacob Jones',
        occupations: 'Designer, Facebook',
        avatar:
          'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg',
      },
    ];
  }
}
