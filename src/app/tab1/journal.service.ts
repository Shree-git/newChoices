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
    
   }

  getAllJournals(): Observable<Journal[]>{
    console.log(this.aService.getUserInfo().email)
    this.journalsCollection = this.afStore.collection('users').doc(this.aService.getUserInfo().uid).collection('journals')
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

  updateJournal(journal: Journal): Promise<void>{
    return this.journalsCollection.doc(journal.id).update({title: journal.title,
    detail: journal.detail})
  }

  deleteJournal(journalId: string): Promise<void>{
    return this.journalsCollection.doc(journalId).delete()
  }

  addJournal(journal: Journal): Promise<DocumentReference>{
    return this.journalsCollection.add(journal)
  }
}
