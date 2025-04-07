import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import {
  ICardDataResponse,
  IReviewOfStudentResponse,
} from '@shared/mock/httpResponse.interface';
import { endPoints } from '@shared/constant/endpoint.const';

describe('HomeService', () => {
  let service: HomeService;
  let http: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HomeService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCardInfo()', () => {
    it('get url', () => {
      const baseUrl = endPoints.CARD;

      service.getCardInfo().subscribe();

      const req = http.expectOne({
        url: baseUrl,
        method: 'GET',
      });

      expect(req.request.url).toEqual(baseUrl);
      req.flush([]);

      http.verify();
    });

    it('get response success', () => {
      const expectRS: ICardDataResponse[] = [
        {
          avatar: '1',
          description: 'description',
          name: 'nhan',
          occupations: 'occupations',
        },
      ];

      service.getCardInfo().subscribe((res) => expect(res).toEqual(expectRS));

      http.expectOne({}).flush(expectRS);

      http.verify();
    });

    it('return error', (done) => {
      const errorStatus = {
        status: 400,
        statusText: 'Bad request',
      };

      service.getCardInfo().subscribe({
        next: () => fail('should not return'),
        error: (e) => {
          expect(e).toBeInstanceOf(HttpErrorResponse);
          done();
        },
      });

      http.expectOne({}).error(new ProgressEvent('error'), errorStatus);
      http.verify();
    });
  });

  describe('getStudentReview', () => {
    it('get student correct Url', () => {
      const baseUrl = endPoints.STUDENT_REVIEW;

      service.getStudentReview().subscribe();

      const req = http.expectOne({
        url: baseUrl,
        method: 'GET',
      });
      expect(req.request.url).toEqual(baseUrl);

      req.flush([]);
      http.verify();
    });

    it('get student review success', () => {
      const expectedResult: IReviewOfStudentResponse = {
        descriptions: ['des'],
        title: 'title',
      };

      service
        .getStudentReview()
        .subscribe((res) => expect(res).toBe(expectedResult));

      http.expectOne({}).flush(expectedResult);

      http.verify();
    });

    it('get studen failed', (done) => {
      const errorResponse = {
        status: 500,
        statusText: 'Unavailable service',
      };

      service.getStudentReview().subscribe({
        next: () => fail('this should not to be return'),
        error: (e) => {
          expect(e).toBeInstanceOf(HttpErrorResponse);
          done();
        },
      });

      http.expectOne({}).error(new ProgressEvent('error'), errorResponse);

      http.verify();
    });
  });
});
