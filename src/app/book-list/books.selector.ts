import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from './booklist.model';

export enum BookStore {
  BOOKS = 'books',
  COLLECTIONS = 'collection',
}

export const selectBooks = createFeatureSelector<ReadonlyArray<IBook>>(
  BookStore.BOOKS
);

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>(BookStore.COLLECTIONS);

export const selectBookCollections = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collections) => {
    return (
      collections &&
      collections.map(
        (id) =>
          books.find((book) => book.id === id) || {
            id,
            volumeInfo: { title: 'No Title', authors: [] },
          }
      )
    );
  }
);
