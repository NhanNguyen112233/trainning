import { createActionGroup, props } from '@ngrx/store';
import { IBook } from './booklist.model';

export enum EBookSourceType {
  BOOKS = 'BOOKS',
  BOOKS_API = 'BOOKS_API',
}

export enum EBookActionsType {
  ADD_BOOK = 'Add Book',
  REMOVE_BOOK = 'Remove Book',
  GET_BOOKS = 'Get Books',
}

export const BookActions = createActionGroup({
  source: EBookSourceType.BOOKS,
  events: {
    [EBookActionsType.ADD_BOOK]: props<{ bookId: string }>(),
    [EBookActionsType.REMOVE_BOOK]: props<{ bookId: string }>(),
  },
});

export const BookApiActions = createActionGroup({
  source: EBookSourceType.BOOKS_API,
  events: {
    [EBookActionsType.GET_BOOKS]: props<{ books: ReadonlyArray<IBook> }>(),
  },
});
