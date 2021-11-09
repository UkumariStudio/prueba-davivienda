import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH_ACCOUNTS_SERVICE } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private http: HttpClient
  ) { }

  getAccounts(): Observable<any>{
    return this.http.get(PATH_ACCOUNTS_SERVICE);
  }

}
