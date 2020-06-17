import { Component, OnInit } from '@angular/core';
import { InboxService } from './inbox.service';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { PresenceService } from '../services/presence.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  users: Observable<any[]>
  userData: Observable<User[]>
  myId: string
  presence$;
  constructor(
    private presence: PresenceService,
    private inboxService: InboxService, private authService: AuthenticationService) { 
    this.myId = this.authService.user.uid
  }

  ngOnInit() {
    this.users = this.inboxService.getUsers();
    // this.inboxService.getUsers().subscribe(elem=>{
    //   console.log(elem)
    // })
    // this.inboxService.getUsers().subscribe(user=>{
    //   user.forEach(elem=>{
    //     this.presence$ = this.presence.getPresence(elem.id);

    // this.presence.getPresence(elem.id).subscribe(ele=>{
    //   console.log(ele)
    // })
    //   })
    // });
    // this.userData = this.inboxService.getUserData();
    // this.users.subscribe(()=>{
      
    // })

    // this.presence$ = this.presence.getPresence(this.iId);

    // this.presence.getPresence(this.iId).subscribe(elem=>{
    //   console.log(elem)
    // })
  }

  ionViewWillEnter(){

    // this.users = this.inboxService.getUsers();
    // console.log(this.users)
  }
}
