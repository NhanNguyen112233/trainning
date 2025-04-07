import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReviewStore } from '@shared/store/review.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private reviewStore: ReviewStore) {}

  ngOnInit(): void {
    console.log('call store');

    this.reviewStore.getReviews();
  }
}
