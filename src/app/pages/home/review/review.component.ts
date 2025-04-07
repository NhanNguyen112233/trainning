import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardData } from '@pattern/card/card.type';
import { ReviewStore } from '@shared/store/review.store';
import { IReviewOfStudentResponse } from '@shared/mock/httpResponse.interface';
import { ELoadingStatus } from '@shared/constant/global.const';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  defaultSkeleton = Array.from({ length: 2 }).map((i) => {
    return {
      avt: '',
      description: '',
      name: '',
      occupations: '',
    };
  }) as ICardData[];
  cardReview: Observable<ICardData[]>;
  studentReview: Observable<IReviewOfStudentResponse>;
  reviewLoading: Observable<{
    cardLoadingStatus: ELoadingStatus;
    studentLoadingReviewStatus: ELoadingStatus;
    isCardLoadingStatusCompleted: boolean;
    isStudentLoadingReviewCompleted: boolean;
  }>;
  constructor(private reviewStore: ReviewStore) {
    this.cardReview = this.reviewStore.cardReviewInfos$;
    this.studentReview = this.reviewStore.studentReview$;
    this.reviewLoading = this.reviewStore.reviewLoading$;
  }
}
