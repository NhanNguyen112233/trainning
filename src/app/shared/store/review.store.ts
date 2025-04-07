import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ICardData } from '@pattern/card/card.type';
import { GenericState } from '@shared/constant/generic.state';
import { ELoadingStatus } from '@shared/constant/global.const';
import {
  ICardDataResponse,
  IReviewOfStudentResponse,
} from '@shared/mock/httpResponse.interface';
import { HomeService } from '@shared/services/home.service';
import {
  catchError,
  combineLatest,
  EMPTY,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Utils } from 'src/app/base/utils/utils-selector';

export interface IReviewState {
  cardReviewInfos: GenericState<ICardData[]>;
  studentReviews: GenericState<IReviewOfStudentResponse>;
}

const defaultStudentReview = {
  descriptions: [],
  title: '',
};

const initialState = {
  cardReviewInfos: {
    ...Utils.defaultGenericConfig([]),
  },
  studentReviews: {
    ...Utils.defaultGenericConfig(defaultStudentReview),
  },
};

@Injectable()
export class ReviewStore extends ComponentStore<IReviewState> {
  /**
   * @description - select data for card review information
   */
  readonly cardReviewInfos$ = this.select(
    (state) => state.cardReviewInfos.data
  );
  /**
   * @description - select data for student review information
   */
  readonly studentReview$ = this.select((state) => state.studentReviews.data);

  /**
   * @description - combine and select the loading state for all state
   */
  readonly reviewLoading$ = combineLatest([
    this.select((state) => state.cardReviewInfos.status),
    this.select((state) => state.studentReviews.status),
  ]).pipe(
    map(([cardLoadingStatus, studentLoadingReviewStatus]) => ({
      isCardLoadingStatusCompleted: Utils.isLoadingWithTarget(
        cardLoadingStatus,
        ELoadingStatus.COMPLETE
      ),
      isStudentLoadingReviewCompleted: Utils.isLoadingWithTarget(
        studentLoadingReviewStatus,
        ELoadingStatus.COMPLETE
      ),
      cardLoadingStatus,
      studentLoadingReviewStatus,
    }))
  );

  constructor(private homeService: HomeService) {
    super(initialState);
  }

  readonly getReviews = this.effect<void>((triggers$: Observable<void>) => {
    return triggers$.pipe(
      switchMap(() =>
        forkJoin([this.fetchCardInfo(), this.fetchStudentReview()])
      )
    );
  });

  private fetchStudentReview() {
    return this.homeService.getStudentReview().pipe(
      tap((data) =>
        this.patchState((state) => ({
          ...state,
          studentReviews: {
            data,
            status: ELoadingStatus.COMPLETE,
            errorMsg: null,
          },
        }))
      ),
      catchError((e) => {
        this.patchState((state) => ({
          ...state,
          studentReviews: {
            data: defaultStudentReview,
            status: ELoadingStatus.ERROR,
            errorMsg: null,
          },
        }));
        return of([]);
      })
    );
  }

  private fetchCardInfo() {
    return this.homeService.getCardInfo().pipe(
      map((data: ICardDataResponse[]) =>
        data.map((item) => ({
          description: item.description,
          name: item.name,
          occupations: item.occupations,
          avt: item.avatar,
        }))
      ),
      tap((data: ICardData[]) => {
        this.patchState((state) => ({
          ...state,
          cardReviewInfos: {
            data,
            status: ELoadingStatus.COMPLETE,
            errorMsg: null,
          },
        }));
      }),
      catchError((e) => {
        this.patchState((state) => ({
          ...state,
          cardReviewInfos: {
            data: [],
            status: ELoadingStatus.ERROR,
            errorMsg: null,
          },
        }));
        return of([]);
      })
    );
  }
}
