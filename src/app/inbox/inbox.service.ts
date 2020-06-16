import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AccountService } from '../settings/account/account.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Account } from '../models/account.model';
import { map, take } from 'rxjs/operators';
import { Chat } from '../models/chat.model';
import { of } from 'rxjs';
// import { combineLatest } from 'rxjs/observable/combineLatest';
@Injectable({
  providedIn: 'root'
})
export class InboxService {
  usersCollection: AngularFirestoreCollection
  // users: Observable<Account[]>
  users: Observable<Account[]>
  accounts: Observable<Account>[]
  // messages: Observable<Chat[]>
  messages: any
  account: Account = {
    id: '',
    fName: '',
    lName: '',
    role: '',
    darkTheme: null,
  }
  myAccount: Account = {
    id: '',
    fName: '',
    lName: '',
    role: '',
    darkTheme: null,
  }
  constructor(private authService: AuthenticationService, private accService: AccountService,
    private afStore: AngularFirestore) {
    this.users = this.afStore.collection('accounts').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Account
        const id = a.payload.doc.id;
        return { id, ...data }
      })
    }))
    // this.users = this.afStore.collection('users').snapshotChanges().pipe(map(actions=>{
    //   return actions.map(a=>{
    //     const data = a.payload.doc.data()
    //     const id = a.payload.doc.id;

    //     // const acc = this.getAccount(id)
    //     // console.log(acc)
    //     return {id, data}
    //     // return {id, data}
    //   })
    // }))

    // this.users.forEach(element => {
    //   element.forEach(e => {
    //     this.accounts.push(this.getAccount(e.id))
    //   });
    //   // this.accounts.push(this.getAccount(element.id))
    // });

    // console.log(this.accounts)
  }

  getUsers() {
    this.users = this.afStore.collection('accounts').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Account
        var id = a.payload.doc.id;

        // const acc = this.getAccount(id)
        // // console.log(acc)
        // return {acc}
        return { id, ...data }
      })
    }))
    return this.users;
  }

  getAccount(id: string) {
    this.afStore.collection('accounts').doc<Account>
      (id).
      valueChanges().pipe(
        take(1),
        map(account => {
          account.id = id;
          return account
        })
      ).subscribe(account => {
        this.account = account
      })
    return this.account
  }

  getChat(sender: string, receiver: string): Observable<Chat[]> {
    // return this.afStore.collection('users').doc(this.authService.user.uid).collection('chat').doc<Chat>(chatId).valueChanges().pipe(
    //   // take(1),
    //   map(chat=>{
    //     chat.id = chatId;
    //     return chat
    //   })
    // )

    const californiaRef = this.afStore
      .collection("chat", ref => ref.where('sender', '==', sender)
        .where('receiver', '==', receiver)
        .orderBy('createdAt', 'asc'));
    const coloradoRef = this.afStore
      .collection("chat", ref => ref
        .where('sender', '==', receiver)
        .where('receiver', '==', sender)
        .orderBy('createdAt', 'asc'));
    this.messages =
      combineLatest(californiaRef.valueChanges(),
        coloradoRef.valueChanges()).pipe(
    switchMap(cities => {
          const [californiaCities, coloradoCities] = cities;
          const combined = californiaCities.concat(coloradoCities);

          return of(combined);
        }));
    // .pipe(
    //   map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),)

    // this.messages = this.afStore.collection('chat', ref => {
    //   return ref.where('sender', 'in', [sender, receiver])
    //     // .where('sender', '==', receiver)
    //     // .where('receiver', '==', sender)
    //     .where('receiver', '==', receiver)
    //     .orderBy('createdAt', 'asc')
    // })
    //   .snapshotChanges()
    //   .pipe(map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Chat
    //       const id = a.payload.doc.id
    //       return { id, ...data };
    //     })
    //   }))

    return this.messages
    // this.journals = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
    //   return actions.map(a =>{
    //     const data = a.payload.doc.data() as Journal
    //     const id = a.payload.doc.id
    //     return {id, ...data };
    //   })
    // }))
  }

  // getOtherChat(chatId: string): Observable<Chat>{
  //   return this.afStore.collection('users').doc(chatId).collection('chat').doc<Chat>(this.authService.user.uid).valueChanges().pipe(
  //     // take(1),
  //     map(chat=>{
  //       chat.id = chatId;
  //       return chat
  //     })
  //   )
  // }

  addMessage(message: Chat): Promise<DocumentReference> {
    return this.afStore.collection('chat').add(message)
  }

}
