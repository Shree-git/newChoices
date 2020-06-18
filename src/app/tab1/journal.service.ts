import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore/';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, of, combineLatest } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class JournalService {
  usersCollection: AngularFirestoreCollection<Account>

  users: Observable<Account[]>
  constructor(private afStore: AngularFirestore, private aService: AuthenticationService) {
   
      this.usersCollection = this.afStore.collection('accounts', ref=>ref.where('role', 'in', ['client', 'therapist']))
    
   }


  getAllJournals(): Observable<Account[]>{
    // console.log(this.aService.getUser().email)
    this.usersCollection = this.afStore.collection('accounts', ref=>ref.where('role', 'in', ['client', 'therapist']))
    this.users = this.usersCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Account
        const id = a.payload.doc.id
        var account$ = this.afStore.collection('users').doc(id).valueChanges();
        return {id, ...data, account$ };
      })
    }))
    return this.users
  }

  
  getJournal(journalId: string): Observable<Account>{
    return this.usersCollection.doc<Account>(journalId).valueChanges().pipe(
      take(1),
      map(journal=>{
        journal.id = journalId;
        return journal
      })
    )
  }

  searchJournals(searchWord): Observable<Account[]>{
    // searchWord = searchWord.toUpperCase()
    return this.afStore.collection('accounts', ref => 
    ref.where('role', 'in', ['client', 'therapist'])
    .where('fName' ,'>=', searchWord)
    .where('fName','<=', searchWord+'z')).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Account
        const id = a.payload.doc.id
        var account$ = this.afStore.collection('users').doc(id).valueChanges();
        return {id, ...data, account$ };
      })
    }))

    // var a = this.afStore.collection('accounts', ref=>ref.where('therapists', 'array-contains', this.aService.user.uid));
    // var b = this.afStore.collection('accounts', ref => 
    // ref.where('fName' ,'>=', searchWord).where('fName','<=', searchWord+'z'));
    // return combineLatest(a.valueChanges(), b.valueChanges()).pipe(switchMap(actions=>{
    //     var [a, b] = actions
    //     // data = {
    //     //   title: data.title.toLowerCase(),
    //     //   detail: data.detail,
    //     //   date: data.date
    //     // }
    //     // console.log(data.title)
    //     // data.title = data.title.toLowerCase()
    //     var combined = a.concat(b);
    //     // console.log(data)
    //     return of(combined as Account[])
    //   }))
   
  }

  getUserDetails(id: string){
    return this.afStore.collection('users').doc(id).valueChanges();
  }

  pair(clientId: string, therapistId: string){
    return this.afStore.collection("accounts").doc(clientId).set(
      { therapists:  firebase.firestore.FieldValue.arrayUnion(therapistId) },
      { merge: true }
    ).then(()=>{
      this.afStore.collection("accounts").doc(therapistId).set(
        { clients: firebase.firestore.FieldValue.arrayUnion(clientId) },
        { merge: true }
      )
    })
    
  } 

  unpair(role, id: string, myId: string){
    if(role=='client'){
      return this.afStore.collection('accounts').doc(id).set(
        { therapists: firebase.firestore.FieldValue.arrayRemove(myId)},
        { merge: true }
      ).then(()=>{
        this.afStore.collection('accounts').doc(myId).set(
          { clients: firebase.firestore.FieldValue.arrayRemove(id)},
          { merge: true }
      )})
    }
    if(role=='therapist'){
      return this.afStore.collection('accounts').doc(id).set(
        { clients: firebase.firestore.FieldValue.arrayRemove(myId)},
        { merge: true }
      ).then(()=>{
        this.afStore.collection('accounts').doc(myId).set(
          { therapists: firebase.firestore.FieldValue.arrayRemove(id)},
          { merge: true }
      )})
    }

  }

  sortBy(datee: string, desAsc){
    return this.afStore.collection('accounts', ref => 
    ref.where('role', 'in', ['client', 'therapist'])
    .orderBy(datee, desAsc)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Account
        // data = {
        //   title: data.title.toLowerCase(),
        //   detail: data.detail,
        //   date: data.date
        // }
        // data.title = data.title.toLowerCase()
        const id = a.payload.doc.id
        var account$ = this.afStore.collection('users').doc(id).valueChanges();

        return {id, ...data, account$ };
      })
    }))
    // this.journals = this.getAllJournals();
  }

  sortByRole(role: string){
    return this.afStore.collection('accounts', ref => 
    ref.where('role', '==', role)
   ).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Account
        // data = {
        //   title: data.title.toLowerCase(),
        //   detail: data.detail,
        //   date: data.date
        // }
        // data.title = data.title.toLowerCase()
        const id = a.payload.doc.id
        var account$ = this.afStore.collection('users').doc(id).valueChanges();

        return {id, ...data, account$ };
      })
    }))
    // this.journals = this.getAllJournals();
  }

  // updateJournal(journal: Account): Promise<void>{
  //   return this.usersCollection.doc(journal.id).update({title: journal.title,
  //   detail: journal.detail, date: new Date().toISOString()})
  // }

  // deleteJournal(journalId: string): Promise<void>{
  //   return this.usersCollection.doc(journalId).delete()
  // }

  // addJournal(journal: Account): Promise<DocumentReference>{
  //   return this.usersCollection.add(journal)
  // }
}
