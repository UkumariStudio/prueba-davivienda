import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountList: Account[] = [];

  constructor(
    private accountsService: AccountsService,
  ) { }

  ngOnInit(): void {
    let response = {
      "accounts": [
        {
          "name": "Davivienda MAESTRO",
          "number": "430-658-901-123",
          "type": "Ahorros",
          "status": "activa",
          "balance": "2392000.0000"
        },
        {
          "name": "Davivienda VISA",
          "number": "430-658-901-124",
          "type": "Ahorros",
          "status": "inactiva",
          "balance": "7392000.0000"
        },
        {
          "name": "CUENTA DAV 1",
          "number": "430-658-901-125",
          "type": "Ahorros",
          "status": "activa",
          "balance": "5392000.0000"
        },
        {
          "name": "Davivienda Nomina",
          "number": "430-658-901-126",
          "type": "Ahorros",
          "status": "inactiva",
          "balance": "23452000.0000"
        },
        {
          "name": "Daviviendo Pensión",
          "number": "430-658-901-127",
          "type": "Corriente",
          "status": "activa",
          "balance": "298392000.0000"
        }
      ]
    };

    this.accountList = response.accounts;

    console.log(this.accountList);
  }

}
