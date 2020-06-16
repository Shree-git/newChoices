import { Component, OnInit } from '@angular/core';
import { InboxService } from './inbox.service';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  users: Observable<Account[]>
  myId: string
  constructor(private inboxService: InboxService, private authService: AuthenticationService) { 
    this.myId = this.authService.user.uid
  }

  ngOnInit() {
    this.users = this.inboxService.getUsers();
    // this.users.subscribe(()=>{
      
    // })
  }

  ionViewWillEnter(){

    // this.users = this.inboxService.getUsers();
    // console.log(this.users)
  }
}
