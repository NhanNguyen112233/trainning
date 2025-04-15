import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { MediaBreakpointStore } from '@shared/store/media-breakpoint.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx';
  constructor(private m: MediaBreakpointStore) {
    // console.log('m', m);
    // this.m.currentScreen.subscribe((screen) =>
    //   console.log('Current screen:', screen)
    // );
  }
}
