import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../booklist.model';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent {
  @Input({
    transform: (value: any) => {
      console.log('value', value);
      return value;
    },
  })
  collections: readonly IBook[] = [];

  @Output() remove = new EventEmitter<string>();
}
