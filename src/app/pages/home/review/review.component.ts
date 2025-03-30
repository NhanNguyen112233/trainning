import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ReviewStore } from './review.store';
import { Observable } from 'rxjs';
import { ICardData } from '@pattern/card/card.type';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  providers: [ReviewStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent implements OnInit {
  reviewInformation: Observable<ICardData[]>;

  constructor(private reviewStore: ReviewStore) {
    this.reviewInformation = this.reviewStore.reviewInfos$;
  }

  ngOnInit(): void {
    this.reviewStore.fetchMovie();
  }
}
