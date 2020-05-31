import { Injectable } from '@angular/core';
import { Event } from './events.model';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore/';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsCollection: AngularFirestoreCollection<Event>

  events: Observable<Event[]>
  constructor(private afStore: AngularFirestore, private aService: AuthenticationService) {
    this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUserInfo().uid).collection('events')

   }

  getAllEvents(): Observable<Event[]>{
    this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUserInfo().uid).collection('events')
    this.events = this.eventsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Event
        data.id = a.payload.doc.id
        return data
      })
    }))
    return this.events
  }

  
  getEvent(eventId: string): Observable<Event>{
    return this.eventsCollection.doc<Event>(eventId).valueChanges().pipe(
      take(1),
      map(journal=>{
        journal.id = eventId;
        return journal
      })
    )
  }

  updateEvent(event: Event): Promise<void>{
    return this.eventsCollection.doc(event.id).update({title: event.title,
    detail: event.detail})
  }

  deleteEvent(eventId: string): Promise<void>{
    return this.eventsCollection.doc(eventId).delete()
  }

  addEvent(event: Event): Promise<DocumentReference>{
    return this.eventsCollection.add(event)
  }
}

