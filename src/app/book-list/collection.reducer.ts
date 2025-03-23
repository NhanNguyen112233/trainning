import { createReducer, on } from '@ngrx/store';
import { BookActions } from './books.actions';

export const initialCollectionState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialCollectionState,
  on(BookActions.addBook, (_state, { bookId }) => {
    if (_state.indexOf(bookId) > -1) {
      return _state;
    } else {
      return [..._state, bookId];
    }
  }),
  on(BookActions.removeBook, (_state, { bookId }) => {
    return _state.filter((id) => id !== bookId);
  })
);
