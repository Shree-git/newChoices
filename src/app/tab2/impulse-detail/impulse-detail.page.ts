import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpulseService } from '../impulse.service';
import { Journal as Impulse } from '../impulse.model';
import { Location } from '@angular/common'
import { FirestoreService } from 'src/app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-impulse-detail',
  templateUrl: './impulse-detail.page.html',
  styleUrls: ['./impulse-detail.page.scss'],
})
export class ImpulseDetailPage implements OnInit {
  impulseCollection: AngularFirestoreCollection<Impulse>
  impulse: Impulse = {
    title: '',
    rating: 5,
    detail: '',
    date: ''
  }
  iId: string
  constructor(private activatedRoute: ActivatedRoute, private impulseService: ImpulseService,
              private location: Location, private afStore: AngularFirestore, private alertCtrl: AlertController) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('impulseId')
    this.iId = id
    
  }

  ionViewWillEnter(){
    if(this.iId){
      this.impulseService.getImpulse(this.iId).subscribe(impulse =>{
        console.log(impulse)
        this.impulse = impulse
      })
    }
  }
  

  async deleteImpulse(){
    let alert = await this.alertCtrl.create({
      header: 'Delete',
      cssClass: 'buttonCss',
      message: 'Do you want to delete this impulse?',
      buttons: [
        {
          text: 'Delete',
          cssClass: 'first-button',
          handler: ()=>{
            this.impulseService.deleteImpulse(this.iId).then(()=>{
            this.location.back()
          })}
        },
        {
          text: 'Cancel',
          cssClass: 'second-button',
          role: 'cancel'
        }
      ]
    })
    await alert.present()
    
  }

  updateImpulse(){
    this.impulseService.updateImpulse(this.impulse).then(()=>{
      this.location.back()
    })
  }
  // async deleteJournal(){
  //   const res = await this.journalService.deleteJournal(this.journal.id)
  //   this.location.back()
  // }
}
