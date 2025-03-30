import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICardDataResponse } from '@shared/mock/httpResponse.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('/api/cards');
  }

  getCardInfo() {
    return this.http.get<ICardDataResponse[]>('/api/cards');
  }
}
