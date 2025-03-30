import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ICardData } from '@pattern/card/card.type';
import { ICardDataResponse } from '@shared/mock/httpResponse.interface';
import { HomeService } from '@shared/services/home.service';
import { catchError, EMPTY, map, Observable, switchMap, tap } from 'rxjs';
export interface IReviewState {
  reviewInfos: ICardData[];
}

@Injectable()
export class ReviewStore extends ComponentStore<IReviewState> {
  readonly reviewInfos$: Observable<ICardData[]> = this.select((state) => {
    return state.reviewInfos;
  });
  constructor(private homeService: HomeService) {
    super({
      reviewInfos: [],
    });
  }

  readonly fetchMovie = this.effect<void>((trigget$: Observable<void>) => {
    return trigget$.pipe(
      switchMap(() =>
        this.homeService.getCardInfo().pipe(
          map((data: ICardDataResponse[]) =>
            data.map((item) => ({
              description: item.description,
              name: item.name,
              occupations: item.occupations,
              avt: item.avatar, // Ensure 'avatar' is a property of ICardDataResponse
            }))
          ),
          tap((reviewInfos: ICardData[]) => {
            this.patchState((state) => ({ ...state, reviewInfos }));
          }),
          catchError((e) => EMPTY)
        )
      )
    );
  });
}
