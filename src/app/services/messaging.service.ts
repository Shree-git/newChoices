import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'
import { Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { FCM } from '@ionic-native/fcm/ngx';


// import { Subject } from 'rxjs/Subject'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messaging = firebase.messaging();
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  constructor(private afs: AngularFirestore,
              private toastController: ToastController,
              private router: Router,
              // private fcm: FCM
            ) { }


  async makeToast(sender, senderName, body){
    const toast = await this.toastController.create({
      header: senderName,
      message: body,
      duration: 5000,
      position: 'top',
      buttons: [
        // {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // }, 
        {
          text: 'Open',
          handler: () => {
            this.router.navigate(['/tabs/inbox/chat/',sender,senderName]);
            console.log('Open clicked');
          }
        }
      ]
    })
   
    toast.present();
  }

  // onNotifications(){
  //   this.fcm.onNotification().subscribe(data => {
  //     console.log("not tapped", data);
  //     if (data.wasTapped) {
  //       //Notification was received on device tray and tapped by the user.
  //       console.log("tapped", data);
  //       // this.navCtrl.setRoot('DetailPage', { profileId: data.profileId });
  //     }
  //   });
  // }
  getPermission(user){
    this.messaging.requestPermission()
    .then(()=>{
      console.log('Notification permission granted')
      return this.messaging.getToken();
    })
    .then(token=> this.saveToken(user, token))
    .catch(err => console.log(err, 'Unable to get permission'))
  }

  monitorRefresh(user){
    this.messaging.getToken()
    .then(refreshedToken => this.saveToken(user, refreshedToken))
    .catch(err => console.log(err, 'Uanble to retrieve token'))
  }

  receiveMessages(){
    this.messaging.onMessage(payload =>{
      const sender = payload.data.sender;
      const senderName = payload.notification.title;
      const body = payload.notification.body;
      this.makeToast(sender, senderName, body);
      console.log('Message received, ', payload)
      this.messageSource.next(payload)
    })
  }

  private saveToken(user, token): void{
    const currentTokens = user.fcmTokens || { }
    console.log(currentTokens, token)

    if(!currentTokens[token]){
      const userRef = this.afs.collection('users').doc(user.uid)
      const tokens = { ...currentTokens, [token]: true }
      userRef.update({ fcmTokens: tokens })
    }
  }
}
