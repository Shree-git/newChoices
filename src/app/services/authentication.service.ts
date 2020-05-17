import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
    ) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user
          localStorage.setItem('user', JSON.stringify(this.userData))
          JSON.parse(localStorage.getItem('user'))
        }else{
          localStorage.setItem('user', null)
          JSON.parse(localStorage.getItem('user'))
        }
      })
     }

     login(email, password){
       return this.afAuth.signInWithEmailAndPassword(email, password)
     }

     register(email, password){
       return this.afAuth.createUserWithEmailAndPassword(email, password)
     }
     
    //  async sendVerificationMail(){
    //    return await (await this.afAuth.currentUser).sendEmailVerification().then(()=>{
         
    //    })
    //  }

    passwordReset(email){
      return this.afAuth.sendPasswordResetEmail(email)
      .then(()=>{
        window.alert('Password reset email has been sent, please check your inbox.');
      }).catch((error)=>{
        window.alert(error)
      })
    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'))
      return (user !== null) ? true : false
    }

    logOut() {
      return this.afAuth.signOut().then(()=>{
        localStorage.removeItem('user')
        this.router.navigate(['/login'])
      })
    }

    getUser(){
      const user = JSON.parse(localStorage.getItem('user'))
      if (user === null){
        return
      }
      return user
    }
}
