import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../booklist.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() booksList: readonly IBook[] = [];

  @Output() add = new EventEmitter<string>();
}
