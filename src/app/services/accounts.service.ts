import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  account: Account[] = [];

  constructor() { }

  getAccounts(url: string){
    fetch(url)
      .then(response => response.json())
      .then(data => {this.account = data.accounts});

    console.log(this.account);
    return this.account;
  }

}
