import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  _url = "http://127.0.0.1:8000";

  constructor(
    private http: HttpClient
  ) { }

  applyCode(code, amount) {
    let params = new HttpParams()
      .set('code', code)
      .set('amount', amount);

    return this.http.get(this._url + '/applycode', {params: params});
    
  }
}
