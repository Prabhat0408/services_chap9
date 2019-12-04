import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountServices) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.accountAdd(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus);
  }
}
