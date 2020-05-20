import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
// import { Entry } from '../../models/entry.interface';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from "@angular/fire/auth";
// import { User } from 'src/app/models/user.interface';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Assignment } from 'src/app/models/assignment.interface';

@Injectable({
  providedIn: 'root',
  
})
export class FirestoreService {
  userId; user;
  public db;
  
  constructor(public firestore: AngularFirestore,  private datePipe: DatePipe, public ngFireAuth: AngularFireAuth,) {
    this.user = this.ngFireAuth.currentUser;
    this.userId = this.user.uid
    this.db = firebase.firestore();
   }

//    getUserID(id: string) {
//     return this.firestore.collection<Assignment>('assignments', ref => ref.where('assignmentUID', 
//       '==', id))
//   .snapshotChanges()
//   .pipe(map(assignments => {
//     const assignment = assignments[0];
//     if (assignment) {
//       const id = assignment.payload.doc.data().userUID;
//       return id;
//     }
//     else {
//       return null;
//     }
//   }));
// }


////////////Assignment methods///////////////

createAssignment( assignerUID: string, userUID: string, title: string, desc: string, dueTime: string, done: boolean, user_response: string): Promise<void> {
  const assignmentUID = this.firestore.createId();
  const eventUID = this.firestore.createId();
  this.createEventAssignment(eventUID,title, desc, dueTime, dueTime, userUID, done, assignerUID, assignmentUID, null)
  return this.firestore.doc('assignments/'  + assignmentUID).set({assignmentUID,assignerUID, userUID, eventUID, title, desc, dueTime, done, user_response});
}
createAssignmentAdmin( assignerUID: string, userUID: string, title: string, desc: string, startTime: string, endTime: string, done: boolean, user_response: string): Promise<void> {
  const assignmentUID = this.firestore.createId();
  const eventUID = this.firestore.createId();
  this.createEventAssignment(eventUID,title, desc, startTime, endTime, userUID, done, assignerUID, assignmentUID, null)
  const dueTime = endTime;
  return this.firestore.doc('assignments/'  + assignmentUID).set({assignmentUID,assignerUID, userUID, eventUID, title, desc, dueTime, done, user_response});
}


editAssignment(assignmentId, new_title, new_desc, new_due, new_user){
  this.db.doc("assignments/"+assignmentId).update({title : new_title, desc: new_desc, dueTime: new_due, userUID: new_user})
} 


 /* EDIT ASSIGNMENT */
/////////////////////////////////////////////////////////////////////////////////////////////////




////////////Event methods///////////////

   createEvent( title: string, desc: string, startTime: string, endTime: string, done: boolean, assignerUID: string, assignmentUID: string, notifTime: string): Promise<void> {
    const eventUID = this.firestore.createId();
    const userUID = this.userId;
    return this.firestore.doc('events/'  + eventUID).set({eventUID, title, desc, startTime, endTime, userUID, done, assignerUID, assignmentUID, notifTime});
  }
  createEventAssignment( eventUID: string, title: string, desc: string, startTime: string, endTime: string, userUID: string, done: boolean, assignerUID: string, assignmentUID: string, notifTime: string): Promise<void> {
    return this.firestore.doc('events/'  + eventUID).set({eventUID, title, desc, startTime, endTime, userUID, done, assignerUID, assignmentUID, notifTime});
  }

  editEventAssignment(uid: string, new_title: string, new_desc: string, new_due: string, new_user: string){
    let doc = this.getOnly("assignments", "assignmentUID", uid ).snapshotChanges()
    let eventID;
    doc.subscribe(payload =>{
      payload.forEach(item =>{
          eventID = item.payload.doc.data().eventUID
      })
      this.db.doc("events/"+ eventID).update({title : new_title, desc: new_desc, startTime: new_due, endTime: new_due, userUID: new_user})

      })
  } 
  

   /* EDIT EVENT */
/////////////////////////////////////////////////////////////////////////////////////////////////






////////////Group methods///////////////

   createGroup(title: string, date: string): Promise<void> {
    const id = this.firestore.createId();
    const leader = this.userId
    return this.firestore.doc('groups/' + id).set({id, title, date, leader});
  }

//updates check field in user (check field says if user is being added to group or not)
  updateCheck(id: string, val:boolean){
    this.db.doc("users/"+id).update({"check" : val})
  }  
  

//updates group field of given user   id: user id, val: groupid
  updateGroup(id: string, val:string){
    this.db.doc("users/"+id).update({"groupUID" : val})
  }  
  //////////////////////////////////////////////////////////////////////////////////////////////






//////////Impulse Methods////////////

  createImpulse(title: string, date: string,
    scale: number, description: string, timestamp: string, userUID : string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc('impulseList/' + id).set({id, title, date, scale, description, timestamp, userUID});
  }
////////////////////////////////////////////////////////////////////////////////////////////////






//////////Entry Methods////////////

  createEntry( title: string, date: string, day: string, content: string, timestamp: string, userUID : string,): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc('currentEntries/'  + id).set({id, title, date, day, content, timestamp, userUID,});
  }

  editEntry(entryId, new_title, new_content){
    this.db.doc("currentEntries/"+ entryId).update({title : new_title, content: new_content})
  }
////////////////////////////////////////////////////////////////////////////////////////////////






//////////Contact Methods////////////  

  createContact(title: string, content: string, userUID : string,): Promise<void> {
      const id = this.firestore.createId();
      return this.firestore.doc('userContacts/' + id).set({id, title, content, userUID,});
    }
  
 editContact(contactId, new_title, new_content){
      this.db.doc("userContacts/"+contactId).update({title : new_title, content: new_content})
    }
/////////////////////////////////////////////////////////////////////////////////////////////////







///////////General Collection Methods/////////////


//updates the agent field in of a particular user
updateAgent(id: string, val:string){
  this.db.doc("users/"+id).update({"agentUID" : val})
}  

//updates assignmentUID field of a user
updateAssignment(id: string, val:string){
  this.db.doc("users/"+id).update({"assigmentUID" : val})
}  



 //currently case sensetive 
 //set up to search by two values but is currently incapable
getSearched(search : string, collection : string, condition: string, condition2: string): AngularFirestoreCollection<any> {
  return this.firestore.collection(collection, ref => ref.where(condition ,'>=', search).where(condition, "<=", search+"z")
  );}


 //currently case sensetive 
 //set up to search by two values but is currently incapable
 getSpecificSearched(id: string, field: string, search : string, collection : string, condition: string): AngularFirestoreCollection<any> {
  
  return this.firestore.collection(collection, ref => ref.where(field, "==", id).where(condition ,'>=', search).where(condition, "<=", search+"z"));
  
  }


///gets all documents with field set to a particular condition
getOnly(collection : string, field: string, condition: string): AngularFirestoreCollection<any> {
  return this.firestore.collection(collection, ref => ref.where(field ,'==', condition));

}

///gets all user's data of a particular collection
getMy(collection : string, field: string): AngularFirestoreCollection<any> {
  return this.firestore.collection(collection, ref => ref.where(field ,'==', this.userId));

}

//gets the details of a particular document
getDetail(doc:string, val: string): AngularFirestoreDocument<any>{
  return this.firestore.collection(doc).doc(val);
}
//gets all of ONE user's documents
getList(doc, useriiD): AngularFirestoreCollection<any> {
  return this.firestore.collection(doc, ref => ref.where("userUID" ,'==', useriiD));
}

//gets all of THE ONE LOGGED IN user's documents
getYourList(doc): AngularFirestoreCollection<any> {
  return this.firestore.collection(doc, ref => ref.where("userUID" ,'==', this.userId));
}

//returns ALL documents in that collection
getListAll(doc): AngularFirestoreCollection<any> {
  return this.firestore.collection(doc);
}
//deletes document with corresponding ID
delete(doc: string, id: string): Promise<void>{
  return this.firestore.doc(doc + '/' + id).delete();
}

//deletes document using a bridging id from another ocument
deleteBridge(collect: string, field: string, val: string): Promise<void>{
  let doc = this.getOnly(collect, field, val ).snapshotChanges()
  let eventID;
  doc.subscribe(payload =>{
    payload.forEach(item =>{
        eventID = item.payload.doc.data().eventUID
    })
    return this.firestore.doc(collect + '/' + eventID).delete();      
    })
    return null
/////////////////////////////////////////////////////////////////////////////////////////////////
}

//deletes user and all documents assoicated with user
deleteAll(id: string): Promise<void>{
  this.firestore.doc("users" + '/' + id).delete();
  let assignments = this.getOnly("assignments", "userUID", id ).snapshotChanges()
  let events = this.getOnly("events", "userUID", id ).snapshotChanges()
  let entries = this.getOnly("currentEntries", "userUID", id ).snapshotChanges()
  let impulses = this.getOnly("impulseList", "userUID", id ).snapshotChanges()
  let contacts = this.getOnly("userContacts", "userUID", id).snapshotChanges()
  assignments.subscribe(payload =>{
    payload.forEach(item =>{
        this.firestore.doc("assignments" + '/' + item.payload.doc.data().assignmentUID).delete();})})
    events.subscribe(payload =>{
      payload.forEach(item =>{
          this.firestore.doc("events" + '/' + item.payload.doc.data().eventUID).delete();})})
      entries.subscribe(payload =>{
        payload.forEach(item =>{
            this.firestore.doc("currentEntries" + '/' + item.payload.doc.data().id).delete();})})
        impulses.subscribe(payload =>{
          payload.forEach(item =>{
              this.firestore.doc("impulseList" + '/' + item.payload.doc.data().id).delete();})})
          contacts.subscribe(payload =>{
            payload.forEach(item =>{
                this.firestore.doc("userContacts" + '/' + item.payload.doc.data().id).delete();})})
    return null
/////////////////////////////////////////////////////////////////////////////////////////////////
}
}

