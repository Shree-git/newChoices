import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Account } from '../models/account.model';
import { AccountService } from '../settings/account/account.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string
  fName: string
  lName: string
  password: string
  cpassword: string
  account: Account
  backButtonSubscription;
  constructor(private authService: AuthenticationService, private accountService: AccountService, private router: Router,
    private platform: Platform) { }

  ngOnInit() {
  }

  register(){
    if(this.password === this.cpassword){
      this.authService.register(this.email, this.password).then(()=>{
        this.router.navigate(['/tabs'])
        this.account = {
          fName: this.fName,
          lName: this.lName
        }
        this.accountService.updateAccount(this.account)
        
      })

    }
  }

  ionViewDidEnter(){ this.backButtonSubscription = this.platform.backButton.subscribe(()=>{ 
    if ((this.router.isActive('/register', true) && this.router.url === '/register')) {
      navigator['app'].exitApp();
    }
    }); } 
  
  ionViewWillLeave(){ this.backButtonSubscription.unsubscribe();}
}
