import { IReviewOfStudentResponse } from './../mock/httpResponse.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoints } from '@shared/constant/endpoint.const';
import { ICardDataResponse } from '@shared/mock/httpResponse.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCardInfo() {
    return this.http.get<ICardDataResponse[]>(endPoints.CARD);
  }

  getStudentReview() {
    return this.http.get<IReviewOfStudentResponse>(endPoints.STUDENT_REVIEW);
  }
}
