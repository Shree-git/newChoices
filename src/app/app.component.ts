import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { LoginPageRoutingModule } from './login/login-routing.module';
import { DarkService } from './settings/dark.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonSubscription;
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private darkService: DarkService,
    private router: Router
  ) {
 // Use matchMedia to check the user preference
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// this.darkService.toggleDarkTheme(prefersDark.matches);

// // Listen for changes to the prefers-color-scheme media query
// prefersDark.addListener((mediaQuery) => this.darkService.toggleDarkTheme(mediaQuery.matches));

    this.initializeApp();
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      SplashScreen.hide();
      this.darkService.toggleDarkTheme(JSON.parse(localStorage.getItem('dark')))
      console.log('init', JSON.parse(localStorage.getItem('dark')))
    });
  }

  // ionViewDidEnter(){ this.backButtonSubscription = this.platform.backButton.subscribe(()=>{ 
  //   if ((this.router.isActive('/tabs/tab1', true) && this.router.url === '/tabs/tab1') || 
  //   (this.router. isActive('/tabs/tab2', true) && this.router.url === '/tabs/tab2') || 
  //   (this.router.isActive('/tabs/tab3', true) && this.router.url === '/tabs/tab3') ||
  //   (this.router.isActive('/login', true) && this.router.url === '/login') ||
  //   (this.router.isActive('/register', true) && this.router.url === '/register')) {
  //     navigator['app'].exitApp();
  //   }
  //   }); } 
  
  // ionViewWillLeave(){ this.backButtonSubscription.unsubscribe();}

  
}
