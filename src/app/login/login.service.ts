import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }


  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }
}
