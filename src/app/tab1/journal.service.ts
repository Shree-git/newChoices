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
  // journals: Journal[] = [{
  //   id: 'j1',
  //   title: 'Craving Food',
  //   detail: 'I really want to eat something junk.'
  // },{
  //   id: 'j2',
  //   title: 'Craving Netlix',
  //   detail: 'I really want to watch movies.'
  // }]
  journals: Observable<Journal[]>
  constructor(private afStore: AngularFirestore, private aService: AuthenticationService) {
    this.journalsCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('journals')
    this.journals = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Journal
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
   }

  getAllJournals(): Observable<Journal[]>{
  //   this.journals = this.journalsCollection.valueChanges()
  //   return this.journals
  // //  return this.journals
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
    // this.journal = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
    //   return actions.map(a =>{
    //     const data = a.payload.doc.data() as Journal
    //     const id = a.payload.doc.id
        
    //     return {id, ...data };
        
    //   })
    // })).subscribe(a=>{
    //   if (actions.id == journalId){
    //     return 
    //   }
    // })
    
    // return this.journals.find(journal =>{
    //   return journal.id === journalId
    // })
  }

  updateJournal(journal: Journal): Promise<void>{
    return this.journalsCollection.doc(journal.id).update({title: journal.title,
    detail: journal.detail})
  }

  deleteJournal(journalId: string): Promise<void>{
    return this.journalsCollection.doc(journalId).delete()
    // let index = this.journals.indexOf(this.getJournal(journalId))
    // if (index > -1){
    //   this.journals.splice(index,1)
    // }
  }

  addJournal(journal: Journal): Promise<DocumentReference>{
    return this.journalsCollection.add(journal)
    //this.journals.push(journal)
  }
}
