import { Injectable } from '@angular/core';
import { Journal } from './journal.model';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore/';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JournalService {
  journalsCollection: AngularFirestoreCollection<Journal>

  journals: Observable<Journal[]>
  constructor(private afStore: AngularFirestore, private aService: AuthenticationService) {
   
      this.journalsCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('journals')
    
   }


  getAllJournals(): Observable<Journal[]>{
    console.log(this.aService.getUser().email)
    this.journalsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals')
    this.journals = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Journal
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
    return this.journals
  }

  
  getJournal(journalId: string): Observable<Journal>{
    return this.journalsCollection.doc<Journal>(journalId).valueChanges().pipe(
      take(1),
      map(journal=>{
        journal.id = journalId;
        return journal
      })
    )
  }

  searchJournals(searchWord){
    // searchWord = searchWord.toUpperCase()
    return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals' , ref => 
    ref.where('title' ,'>=', searchWord).where('title','<=', searchWord+'z')).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Journal
        // data = {
        //   title: data.title.toLowerCase(),
        //   detail: data.detail,
        //   date: data.date
        // }
        console.log(data.title)
        // data.title = data.title.toLowerCase()
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
  }

  sortBy(datee: string, desAsc){
    return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals' , ref => 
    ref.orderBy(datee, desAsc)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Journal
        // data = {
        //   title: data.title.toLowerCase(),
        //   detail: data.detail,
        //   date: data.date
        // }
        // data.title = data.title.toLowerCase()
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
    // this.journals = this.getAllJournals();
  }

  updateJournal(journal: Journal): Promise<void>{
    return this.journalsCollection.doc(journal.id).update({title: journal.title,
    detail: journal.detail, date: new Date().toISOString()})
  }

  deleteJournal(journalId: string): Promise<void>{
    return this.journalsCollection.doc(journalId).delete()
  }

  addJournal(journal: Journal): Promise<DocumentReference>{
    return this.journalsCollection.add(journal)
  }
}
