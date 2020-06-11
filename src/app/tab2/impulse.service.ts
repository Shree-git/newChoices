import { Injectable } from '@angular/core';
import { Journal as Impulse } from './impulse.model';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore/';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImpulseService {
  impulsesCollection: AngularFirestoreCollection<Impulse>

  impulses: Observable<Impulse[]>
  constructor(private afStore: AngularFirestore, private aService: AuthenticationService) {
    this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses')
   }

  getAllImpulses(): Observable<Impulse[]>{
    console.log(this.aService.getUser().email)
    this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses')
    this.impulses = this.impulsesCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Impulse
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
    return this.impulses
  }

  
  getImpulse(impulseId: string): Observable<Impulse>{
    return this.impulsesCollection.doc<Impulse>(impulseId).valueChanges().pipe(
      take(1),
      map(impulse=>{
        impulse.id = impulseId;
        return impulse
      })
    )
  }

  searchImpulse(searchWord){
    // searchWord = searchWord.toUpperCase()
    searchWord = Number(searchWord)
    return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses' , ref => 
    ref.where('rating' ,'==', searchWord)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Impulse
        // data = {
        //   title: data.title.toLowerCase(),
        //   detail: data.detail,
        //   date: data.date
        // }
        // console.log(data.title)
        // data.title = data.title.toLowerCase()
        const id = a.payload.doc.id
        return {id, ...data };
      })
    }))
  }

  sortBy(rating: string, desAsc){
    return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses' , ref => 
    ref.orderBy(rating, desAsc)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Impulse
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
  }

  updateImpulse(impulse: Impulse): Promise<void>{
    return this.impulsesCollection.doc(impulse.id).update({title: impulse.title,
    detail: impulse.detail, rating: impulse.rating, date: new Date().toISOString()})
  }

  deleteImpulse(impulseId: string): Promise<void>{
    return this.impulsesCollection.doc(impulseId).delete()
  }

  addImpulse(impulse: Impulse): Promise<DocumentReference>{
    return this.impulsesCollection.add(impulse)
  }
}
