import { Component, OnInit } from '@angular/core';
import { AccountServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountServices]
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountServices) {}
  accounts: {name: string, status: string}[] = [];

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
