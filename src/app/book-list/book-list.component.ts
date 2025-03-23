import { Component, OnInit } from '@angular/core';
import { CollectionsComponent } from './collections/collections.component';
import { ListComponent } from './list/list.component';
import { BookListService } from './book-list.service';
import { Store } from '@ngrx/store';
import { IBook } from './booklist.model';
import { BookActions, BookApiActions } from './books.actions';
import { selectBookCollections, selectBooks } from './books.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CollectionsComponent, ListComponent, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  protected books$!: Observable<readonly IBook[]>;
  protected collections$!: Observable<readonly IBook[]>;

  constructor(
    private bookListService: BookListService,
    private store: Store<IBook[]>
  ) {
    this.books$ = this.store.select(selectBooks);
    this.collections$ = this.store.select(selectBookCollections);
  }

  ngOnInit(): void {
    this.bookListService.getBooks().subscribe((books) => {
      this.store.dispatch(BookApiActions.getBooks({ books }));
    });
  }

  addBook(bookId: string): void {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  removeBook(bookId: string): void {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }
}
