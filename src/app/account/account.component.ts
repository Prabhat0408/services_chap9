import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountServices) {}


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);


    // const service = new LoggingService();
    // console.log('A server status changed, new status: ' + status);
    // service.logStatusChange(status);
   // this.loggingService.logStatusChange(status);
    console.log('A server status changed, of account : ' + this.id + '  ' + this.account.name);
  }
}
