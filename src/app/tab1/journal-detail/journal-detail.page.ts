import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Location } from '@angular/common'
import { FirestoreService } from 'src/app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.page.html',
  styleUrls: ['./journal-detail.page.scss'],
})
export class JournalDetailPage implements OnInit {
  journalCollection: AngularFirestoreCollection<Journal>
  journal: Journal = {
    title: '',
    detail: '',
    date: ''
  }
  iId: string
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService,
              private location: Location, private afStore: AngularFirestore, private alertCtrl: AlertController) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('journalId')
    this.iId = id
    
  }

  ionViewWillEnter(){
    if(this.iId){
      this.journalService.getJournal(this.iId).subscribe(journal =>{
        console.log(journal)
        this.journal = journal
      })
    }
  }

  // ionViewWillLeave(){
    
  //     this.journalService.getJournal(this.iId).subscribe(journal =>{
  //       console.log(journal)
  //       this.journal = journal
  //     })
    
  // }
  

  async deleteJournal(){
    let alert = await this.alertCtrl.create({
      header: 'Delete',
      cssClass: 'buttonCss',
      message: 'Do you want to delete this journal?',
      buttons: [
        {
          text: 'Delete',
          cssClass: 'first-button',
          handler: ()=>{
            this.journalService.deleteJournal(this.iId).then(()=>{
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

  updateJournal(){
    this.journalService.updateJournal(this.journal).then(()=>{
      this.location.back()
    })
  }
  // async deleteJournal(){
  //   const res = await this.journalService.deleteJournal(this.journal.id)
  //   this.location.back()
  // }
}
