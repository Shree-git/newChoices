import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string
  password: string
  backButtonSubscription;
  constructor(private authService: AuthenticationService, private router: Router, private platform: Platform) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password).then(()=>{
      this.router.navigate(['/tabs'])
    })

  }

  
  ionViewDidEnter(){ this.backButtonSubscription = this.platform.backButton.subscribe(()=>{ 
    if ((this.router.isActive('/login', true) && this.router.url === '/login')) {
      navigator['app'].exitApp();
    }
    }); } 
  
  ionViewWillLeave(){ this.backButtonSubscription.unsubscribe();}
}
