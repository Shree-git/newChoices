import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxService } from '../inbox.service';
import { Chat } from 'src/app/models/chat.model';
import { Observable, zip } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map } from 'rxjs/operators';
import { ISODateString } from '@capacitor/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/settings/account/account.service';
import { IonContent } from '@ionic/angular';
import { PresenceService } from 'src/app/services/presence.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  iId: string
  message: string = ''
 
  @ViewChild('content',{static: true}) content: IonContent
  chat: Chat = {

    message: '',
    createdAt: '',
    sender: '',
    receiver: '',
    senderName: '',
    receiverName: ''
  }
  name: string;
  account: Account
  myAccount: Account
  messages: Observable<Chat[]>
  otherMessages: Observable<Chat[]>
  combinedMessages: Observable<Chat[]>
  presence$;

  constructor(private activatedRoute: ActivatedRoute, private inboxService: InboxService, private authService: AuthenticationService,
    private accountService: AccountService,
    private presence: PresenceService) { 
    
  }

  ngOnInit() {
    // this.scrollToBottomOnInit();
    const id = this.activatedRoute.snapshot.paramMap.get('chatId')
    const namee = this.activatedRoute.snapshot.paramMap.get('name')
    this.iId = id
    this.account = this.inboxService.getAccount(this.iId)
    console.log(this.account)
   
    this.myAccount = this.accountService.account
    this.name = namee;
    console.log("my", this.myAccount)
    this.presence$ = this.presence.getPresence(this.iId);

    this.presence.getPresence(this.iId).subscribe(elem=>{
      console.log(elem)
    })
    // this.presence.getPresence(this.myAccount.id).subscribe(elem=>{
    //   console.log(elem)
    // })
    
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
      this.inboxService.getChat(this.authService.user.uid, this.iId).subscribe(item=>{
        console.log(item)
        setTimeout(() => {
          this.scrollToBottomOnInit();
        }, 200);
      })
      // this.combinedMessages.subscribe(item=>{
      //   setTimeout(() => {
      //     this.scrollToBottomOnInit();
      //   }, 500);
      // })
      // this.inboxService.getChat(this.authService.user.uid, this.iId).subscribe(item =>{
      //   // console.log(item)
      // })
      setTimeout(() => {
        this.scrollToBottomOnInit();
      }, 200);
    }
  }

  scrollToBottomOnInit() {
    console.log('scrollToBottom');

      this.content.scrollToBottom();
    
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
  setTimeout(() => {
    this.scrollToBottomOnInit();
  }, 200);
  // this.combinedMessages = this.inboxService.getChat(this.authService.user.uid, this.iId);
})
  }

}
