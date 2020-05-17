import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { LoginPageRoutingModule } from './login/login-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: any
  user: any
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
    this.sideMenu();
    this.getUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
    this.user = this.authService.getUser()
  }
}
