import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardData } from '@pattern/card/card.type';
import { ReviewStore } from '@shared/store/review.store';
import { IReviewOfStudentResponse } from '@shared/mock/httpResponse.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  cardReview: Observable<ICardData[]>;
  studentReview: Observable<IReviewOfStudentResponse>;
  constructor(private reviewStore: ReviewStore) {
    this.cardReview = this.reviewStore.cardReviewInfos$;
    this.studentReview = this.reviewStore.studentReview$;
  }
}
