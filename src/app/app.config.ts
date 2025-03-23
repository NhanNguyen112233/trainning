import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideCore } from './base/core/core.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({
      routes,
    }),
    // provideStore({
    //   [BookStore.BOOKS]: booksReducer,
    //   [BookStore.COLLECTIONS]: collectionReducer,
    // }),
  ],
};
