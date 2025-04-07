import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ICardData } from '@pattern/card/card.type';
import {
  ICardDataResponse,
  IReviewOfStudentResponse,
} from '@shared/mock/httpResponse.interface';
import { HomeService } from '@shared/services/home.service';
import {
  catchError,
  EMPTY,
  forkJoin,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
export interface IReviewState {
  cardReviewInfos: ICardData[];
  studentReviews: IReviewOfStudentResponse;
}

@Injectable()
export class ReviewStore extends ComponentStore<IReviewState> {
  readonly cardReviewInfos$ = this.select((state) => state.cardReviewInfos);
  readonly studentReview$ = this.select((state) => state.studentReviews);
  constructor(private homeService: HomeService) {
    super({
      cardReviewInfos: [],
      studentReviews: {
        descriptions: [],
        title: '',
      },
    });
    console.log('init store');
  }

  readonly getReviews = this.effect<void>((trigget$: Observable<void>) => {
    return trigget$.pipe(
      switchMap(() => forkJoin([this.fetchMovie(), this.fetchStudentReview()]))
    );
  });

  private fetchStudentReview() {
    return this.homeService.getStudentReview().pipe(
      tap((studentReviews) =>
        this.patchState((state) => ({
          ...state,
          studentReviews,
        }))
      ),
      catchError((e) => EMPTY)
    );
  }

  private fetchMovie() {
    return this.homeService.getCardInfo().pipe(
      map((data: ICardDataResponse[]) =>
        data.map((item) => ({
          description: item.description,
          name: item.name,
          occupations: item.occupations,
          avt: item.avatar, // Ensure 'avatar' is a property of ICardDataResponse
        }))
      ),
      tap((cardReviewInfos: ICardData[]) => {
        this.patchState((state) => ({ ...state, cardReviewInfos })); // Corrected property name
      }),
      catchError((e) => EMPTY)
    );
  }
}
