import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceRequest } from '../models/insuranceRequest';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
    public deathPremiumAmount: number = 0;
  constructor(private httpClient: HttpClient) {

   }
   public calculateSumAssured(data:InsuranceRequest): Observable<number>{
    return this.httpClient.post<number>('/api/insurance', data);
  }
}
