import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from './booklist.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<IBook>> {
    return this.http
      .get<{ items: IBook[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
