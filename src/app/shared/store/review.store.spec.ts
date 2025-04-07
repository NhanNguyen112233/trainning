import { TestBed } from '@angular/core/testing';
import { HomeService } from '@shared/services/home.service';
import { of, throwError } from 'rxjs';
import { ReviewStore } from './review.store';
import { ELoadingStatus } from '@shared/constant/global.const';
import { ICardData } from '@pattern/card/card.type';
import {
  ICardDataResponse,
  IReviewOfStudentResponse,
} from '@shared/mock/httpResponse.interface';

describe('ReviewStore', () => {
  let store: ReviewStore;
  let homeServiceMock: jest.Mocked<HomeService>;

  beforeEach(() => {
    // Create mock HomeService
    homeServiceMock = {
      getCardInfo: jest.fn().mockReturnValue(of([])),
      getStudentReview: jest
        .fn()
        .mockReturnValue(of({ descriptions: [], title: '' })),
    } as unknown as jest.Mocked<HomeService>;

    TestBed.configureTestingModule({
      providers: [
        ReviewStore,
        { provide: HomeService, useValue: homeServiceMock },
      ],
    });

    store = TestBed.inject(ReviewStore);
  });

  describe('testing with selector in the store', () => {
    it('get cardReviewInfos$ selector', () => {
      const expectCardResponse: ICardData[] = [
        {
          avt: 'avt',
          description: 'description',
          name: 'name',
          occupations: 'occupations',
        },
      ];

      store.patchState({
        cardReviewInfos: {
          data: expectCardResponse,
          errorMsg: null,
          status: ELoadingStatus.COMPLETE,
        },
      });

      store.cardReviewInfos$.subscribe((res) => {
        expect(res).toEqual(expectCardResponse);
      });
    });

    it('get studentReview$ selector', () => {
      const expectStudentResponse: IReviewOfStudentResponse = {
        descriptions: ['description'],
        title: 'title',
      };

      store.patchState({
        studentReviews: {
          data: expectStudentResponse,
          errorMsg: null,
          status: ELoadingStatus.COMPLETE,
        },
      });
      store.studentReview$.subscribe((res) => {
        expect(res).toEqual(expectStudentResponse);
      });
    });

    it('get reviewLoading$ selector', () => {
      const expectStudentResponse: IReviewOfStudentResponse = {
        descriptions: ['description'],
        title: 'title',
      };

      const expectCardResponse: ICardData[] = [
        {
          avt: 'avt',
          description: 'description',
          name: 'name',
          occupations: 'occupations',
        },
      ];

      store.patchState({
        cardReviewInfos: {
          data: expectCardResponse,
          errorMsg: null,
          status: ELoadingStatus.COMPLETE,
        },
        studentReviews: {
          data: expectStudentResponse,
          errorMsg: null,
          status: ELoadingStatus.COMPLETE,
        },
      });

      store.reviewLoading$.subscribe((res) => {
        expect(res.isCardLoadingStatusCompleted).toBe(true);
        expect(res.isStudentLoadingReviewCompleted).toBe(true);
        expect(res.cardLoadingStatus).toEqual(ELoadingStatus.COMPLETE);
        expect(res.studentLoadingReviewStatus).toEqual(ELoadingStatus.COMPLETE);
      });
    });
  });

  describe('testing with effect', () => {
    it('testing getReview effect success', (done) => {
      const expectStudentResponse: IReviewOfStudentResponse = {
        descriptions: ['description'],
        title: 'title',
      };

      const expectCardResponse: ICardDataResponse[] = [
        {
          avatar: 'avt',
          description: 'description',
          name: 'name',
          occupations: 'occupations',
        },
      ];

      homeServiceMock.getCardInfo.mockReturnValue(of(expectCardResponse));
      homeServiceMock.getStudentReview.mockReturnValue(
        of(expectStudentResponse)
      );

      const spy = jest.spyOn(store, 'patchState');
      store.getReviews();

      setTimeout(() => {
        expect(spy).toHaveBeenCalledTimes(2);
        store.cardReviewInfos$.subscribe((data) => {
          expect(data).toEqual([
            {
              avt: 'avt',
              description: 'description',
              name: 'name',
              occupations: 'occupations',
            },
          ]);

          store.studentReview$.subscribe((res) => {
            expect(res).toEqual(expectStudentResponse);
          });
        });

        store.reviewLoading$.subscribe((res) => {
          expect(res.isCardLoadingStatusCompleted).toBe(true);
          expect(res.isStudentLoadingReviewCompleted).toBe(true);
          expect(res.cardLoadingStatus).toEqual(ELoadingStatus.COMPLETE);
          expect(res.studentLoadingReviewStatus).toEqual(
            ELoadingStatus.COMPLETE
          );
        });

        done();
      }, 0);
    });

    it('testing getReview effect fail', (done) => {
      const cardReviewError = new Error('failed to fetch card review');
      const studentRevieError = new Error('failed to fetch studen review');

      homeServiceMock.getCardInfo.mockReturnValue(
        throwError(() => cardReviewError)
      );

      homeServiceMock.getStudentReview.mockReturnValue(
        throwError(() => studentRevieError)
      );

      const spy = jest.spyOn(store, 'patchState');

      store.getReviews();

      setTimeout(() => {
        expect(spy).toHaveBeenCalledTimes(2);
        store.cardReviewInfos$.subscribe((data) => {
          expect(data).toEqual([]);
        });

        store.studentReview$.subscribe((res) => {
          expect(res).toEqual({
            descriptions: [],
            title: '',
          });
        });

        store.reviewLoading$.subscribe((res) => {
          expect(res.isCardLoadingStatusCompleted).toBe(false);
          expect(res.isStudentLoadingReviewCompleted).toBe(false);
          expect(res.cardLoadingStatus).toEqual(ELoadingStatus.ERROR);
          expect(res.studentLoadingReviewStatus).toEqual(ELoadingStatus.ERROR);
        });
        done();
      }, 0);
    });
  });
});
