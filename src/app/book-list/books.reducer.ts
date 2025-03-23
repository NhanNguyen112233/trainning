import { Action, ActionCreator, createReducer, on } from '@ngrx/store';
import { IBook } from './booklist.model';
import { BookApiActions } from './books.actions';

export const intialBookState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  intialBookState,
  on(BookApiActions.getBooks, (_state, { books }) => books)
);
