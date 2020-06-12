import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string
  password: string
  backButtonSubscription;
  registerForm: FormGroup
  loginError: boolean = false;
  loginErrorMessage: string = ''
  public validation_messages = {
 
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      // { type: 'pattern', message: 'Please enter a valid password' },
      { type: 'minLength', message: 'Password must be over 5 characters' }
    ],
  
  }
  constructor(private formBuilder: FormBuilder,

    private authService: AuthenticationService, private router: Router, private platform: Platform) {
    this.registerForm = this.formBuilder.group({
   
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
    
    })
   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.registerForm.get('email').value, this.registerForm.get('password').value).then(()=>{
      this.router.navigate(['/tabs'])
    }).catch(err=>{
      this.loginError = true;
      this.loginErrorMessage = err.message
    })

  }

  
  ionViewDidEnter(){ this.backButtonSubscription = this.platform.backButton.subscribe(()=>{ 
    if ((this.router.isActive('/login', true) && this.router.url === '/login')) {
      navigator['app'].exitApp();
    }
    }); } 
  
  ionViewWillLeave(){ this.backButtonSubscription.unsubscribe();}
}
