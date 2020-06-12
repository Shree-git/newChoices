import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  registerForm: FormGroup

  public validation_messages = {
  
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
   
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private alertCtrl: AlertController,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
   
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
  
    
    })
  }

  ngOnInit() {
  }

  reset(){
    return this.authService.passwordReset(this.registerForm.get('email').value).then(async ()=>{
      const alert = this.alertCtrl.create({
        header: 'Password Reset Email Sent',
        message: 'Check you email to reset your password',
        buttons: [{
          text: 'OK',
          role: 'OK',
          handler: ()=>{
            this.router.navigate(['../login'])
          }
        }]
      })
      await (await alert).present()
    })
    
  }

}
