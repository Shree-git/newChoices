import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string
  password: string
  cpassword: string
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.password === this.cpassword){
      this.authService.register(this.email, this.password).then(()=>{
        this.router.navigate(['/tabs'])
      })

    }
  }
}
