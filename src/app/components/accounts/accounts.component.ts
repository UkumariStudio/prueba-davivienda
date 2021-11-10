import { Component, OnInit } from '@angular/core';
import { ICON_CHECK, 
         ICON_USER, 
         ICON_WARNING, 
         IMG_NO_RESULTADOS } from 'src/app/constants';
import { Account } from 'src/app/model/account.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountList: Account[] = [];
  selectedAccount: boolean = false;
  indexAccount: number = 0;
  checkIcon = ICON_CHECK;
  warningIcon = ICON_WARNING;
  userIcon = ICON_USER;
  activeAccount: boolean = false;
  noResults: boolean = true;
  imgNoHayResultados = IMG_NO_RESULTADOS;

  constructor(
    private accountsService: AccountsService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountsService.getAccounts().subscribe(
      response => {
        if (response.accounts.length > 0) {
          this.noResults = false;

          let accounts: Account[] = response.accounts;
          
          accounts.forEach(account => {
            account.checked = false;
          });

          let activeAccounts: Account[] = [];
          let inactiveAccounts: Account[] = [];

          accounts.forEach(account => {
            if(account.status === 'activa'){
              activeAccounts.push(account);
            }
            if(account.status === 'inactiva'){
              inactiveAccounts.push(account);
            }
          });

          console.log(activeAccounts);
          console.log(inactiveAccounts);

          this.accountList = activeAccounts.concat(inactiveAccounts);

          console.log(this.accountList);
        } else {
          this.noResults = true;
        }
      }
    );
  }

  selectAccount(indexAccount: number) {
    this.indexAccount = indexAccount;

    this.accountList.forEach(account => {
      account.checked = false;
      this.selectedAccount = false;
    });

    this.accountList[indexAccount].checked = true;

    if (this.accountList[indexAccount].checked) {
      this.selectedAccount = true;
    }
  }

  checkStatusAccount(status: string, indexAccount: number) {
    if (status === 'activa' && status === this.accountList[indexAccount].status) {
      return this.checkIcon;
    } else if (status === 'inactiva' && status === this.accountList[indexAccount].status) {
      return this.warningIcon;
    } else {
      return this.warningIcon;
    }
  }

  validateSelected(){
    if(this.accountList.find(account => (account.checked===true && account.status==='activa'))){
      return true;
    } else {
      return false;
    }
  }

}
