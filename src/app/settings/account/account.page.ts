import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Account } from 'src/app/models/account.model';
import { map, take } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  id: string
  firstName: string
  lastName: string
  email: string
  account: Account = {
    id: '',
    fName: '',
    lName: ''
  }
  items: any
  constructor(private authService: AuthenticationService, private afStore: AngularFirestore, private router: Router,
     private location: Location) { }

  ngOnInit() {
    this.getAccount()
  }
  updateAccount(){
   
   
       this.afStore.collection('users').doc(this.authService.user.uid).collection('accounts').doc<Account>(this.authService.user.uid).set({
          fName: this.account.fName,
          lName: this.account.lName
        }).then(() =>{

          this.location.back()
        })
        
  }

  getAccount(){
    this.afStore.collection('users').doc(this.authService.user.uid).collection('accounts').
    snapshotChanges().pipe(
      map(actions => {
        actions.map(a => {
          const data = a.payload.doc.data();
          this.account.fName = data.firstName
          this.account.lName = data.lastName
          this.account.id = a.payload.doc.id
        });
      }));
      // this.afStore.collection('users').doc(this.authService.user.uid).collection('accounts').doc<Account>
      // (this.authService.user.uid).
      // valueChanges().pipe(
      //   take(1),
      //   map(account=>{
      //     account.id = this.authService.user.uid;
      //     return account
      //   })
      // ).subscribe(account=>{
      //   this.account = account
      // })

    
  }
}
