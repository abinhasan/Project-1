import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { GlobalVariable } from 'src/app/classes/global';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  GetExtraCharge(): Observable<any> {
    return this.http.get(GlobalVariable.LOCAL_CORE_URL + 'Chart/GetSampleChart').pipe(
      map(this.extractData));
  }
}
