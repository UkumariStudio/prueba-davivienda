import { Component, OnInit } from '@angular/core';
import { ICON_CHECK, ICON_WARNING, IMG_NO_RESULTADOS, PATH_ACCOUNTS_SERVICE } from 'src/app/constants';
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
  activeAccount: boolean = false;
  noResults: boolean = true;
  imgNoHayResultados = IMG_NO_RESULTADOS;

  constructor(
    private accountsService: AccountsService,
  ) { }

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe(
      response => {
        if (response.accounts.length > 0) {
          this.accountList = response.accounts;
          
          this.accountList.forEach(account => {
            account.checked = false;
          });
          
          this.noResults = false;
          console.log(this.accountList);
        } else {
          this.noResults = true;
        }
      }
    )
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

}
