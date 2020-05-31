import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AccountService } from '../settings/account/account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  pages: any
  user: any
  photoURL: string
  account: Account
  
  constructor(private authService: AuthenticationService, public accountService: AccountService) {
    
  }

  ngOnInit(){
    this.getAccount()
    this.sideMenu()
    // this.getUser()
    // console.log(this.user.photoURL)
    // console.log(this.user.uid)
  }

  getAccount(){
    this.account = this.accountService.getAccount()
  }

  getPhoto(){
    if(this.user!=null){
    this.photoURL = this.authService.user.photoURL
    }
  }

  sideMenu(){
    this.pages = [{
      title: 'Journal',
      url: '/tabs/tab1',
      icon: 'journal'
    },{
      title: 'Impulses',
      url: '/tabs/tab2',
      icon: 'stats-chart'
    },{
      title: 'Calendar',
      url: '/tabs/tab3',
      icon: 'calendar'
    }]
  }


  logOut(){
      this.authService.logOut()
  }

  getUser(){
    if(this.user == null){
    this.user = this.authService.user
    }
  }

  getreturnUser(){
    return this.authService.getUserInfo()
  }
}
