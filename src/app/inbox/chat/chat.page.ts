import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxService } from '../inbox.service';
import { Chat } from 'src/app/models/chat.model';
import { Observable, zip } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map } from 'rxjs/operators';
import { ISODateString } from '@capacitor/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/settings/account/account.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  iId: string
  message: string = ''
  chat: Chat = {

    message: '',
    createdAt: '',
    sender: '',
    receiver: '',
    senderName: '',
    receiverName: ''
  }
  account: Account
  myAccount: Account
  messages: Observable<Chat[]>
  otherMessages: Observable<Chat[]>
  combinedMessages: Observable<Chat[]>
  constructor(private activatedRoute: ActivatedRoute, private inboxService: InboxService, private authService: AuthenticationService,
    private accountService: AccountService) { 
    
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('chatId')
    this.iId = id
    this.account = this.inboxService.getAccount(this.iId)
    console.log(this.account)
   
    this.myAccount = this.accountService.account
    console.log("my", this.myAccount)
    
  }

  ionViewWillEnter(){
    if(this.iId){
      // var id = this.activatedRoute.snapshot.paramMap.get('chatId')
      // this.iId = id
      // // this.inboxService.getAccount(id)
      // console.log(this.account)
     
      // this.myAccount = this.accountService.account
  //     this.messages = this.inboxService.getChat(this.authService.user.uid, this.iId);
  //     this.otherMessages = this.inboxService.getChat(this.iId, this.authService.user.uid)
  //     this.combinedMessages = zip(this.messages, this.otherMessages)
  // .pipe(map(x => (x[0].concat(x[1]).sort())))
  //     var msg = zip(this.messages, this.otherMessages)
  //     .pipe(map(x => x[0].concat(x[1])))
  // .subscribe(data => {
  //   console.log('merge', data)
  //   data.forEach(cht =>{
  //     console.log(cht.message)
  //   })
  // })
      // this.inboxService.getChat(this.iId).subscribe(chat =>{
      //   console.log(chat)
      //   this.chat = chat
      // })
      this.combinedMessages = this.inboxService.getChat(this.authService.user.uid, this.iId);
      this.inboxService.getChat(this.authService.user.uid, this.iId).subscribe(item =>{
        console.log(item)
      })
    }
  }

  // sortBy(prop: string) {
  //   return this.messages.arrcompositions.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  // }

  sendMessage(){
    this.chat = {
      message: this.message,
      createdAt: new Date().toISOString(),
      sender: this.authService.user.uid,
      receiver: this.iId,
      senderName: this.myAccount.fName + ' ' + this.myAccount.lName,
      receiverName: this.account.fName + ' ' + this.account.lName
    }
    this.message = ''
    this.inboxService.addMessage(this.chat).then(()=>{
  //     this.messages = this.inboxService.getChat(this.authService.user.uid, this.iId);
  //     this.otherMessages = this.inboxService.getChat(this.iId, this.authService.user.uid)
  //     this.combinedMessages = zip(this.messages, this.otherMessages)
  // .pipe(map(x => x[0].concat(x[1])))
  console.log('Message added')
  // this.combinedMessages = this.inboxService.getChat(this.authService.user.uid, this.iId);
})
  }

}
