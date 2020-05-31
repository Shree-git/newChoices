import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Account } from 'src/app/models/account.model';
import { map, take } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account: Account = {
    id: '',
    fName: '',
    lName: ''
  }
  constructor(private accountService: AccountService, private location: Location) { }

  ngOnInit() {
    this.account = this.accountService.getAccount()
  }

  updateAccount(){
    this.accountService.updateAccount(this.account)
    this.location.back()
  }
  
}
