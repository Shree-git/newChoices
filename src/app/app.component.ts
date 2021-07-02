import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { LoginPageRoutingModule } from './login/login-routing.module';
import { DarkService } from './settings/dark.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { MessagingService } from './services/messaging.service';
const { SplashScreen } = Plugins;
import { filter, take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  backButtonSubscription;
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthenticationService,
    private darkService: DarkService,
    private router: Router,
    private msg: MessagingService
  ) {
 // Use matchMedia to check the user preference
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// this.darkService.toggleDarkTheme(prefersDark.matches);

// // Listen for changes to the prefers-color-scheme media query
// prefersDark.addListener((mediaQuery) => this.darkService.toggleDarkTheme(mediaQuery.matches));

    this.initializeApp();
    
  }

  ngOnInit(){
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      SplashScreen.hide();
      this.darkService.toggleDarkTheme(JSON.parse(localStorage.getItem('dark')))
      console.log('init', JSON.parse(localStorage.getItem('dark')))
      this.authService.getUserDoc().pipe(filter(user => !!user)).pipe(take(1)).subscribe(user => {
        this.msg.getPermission(user);
        this.msg.monitorRefresh(user)
        this.msg.receiveMessages();
        // this.msg.onNotifications();
      })
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
