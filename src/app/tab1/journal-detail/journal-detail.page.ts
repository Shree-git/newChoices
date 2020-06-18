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
import { Account } from 'src/app/models/account.model';
import { User } from 'src/app/models/user.model';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.page.html',
  styleUrls: ['./journal-detail.page.scss'],
})
export class JournalDetailPage implements OnInit {
  journalCollection: AngularFirestoreCollection<Account>
  journal: Account = {
    id: '',
    fName: '',
    lName: '',
    darkTheme: null,
    role: ''
  }
  userDetail: any
  iId: string
  pairedUpDetail: any
  pairedUpDetailArray: any[] = []
  pairedUpUserDetail: any
  pairedUpUserDetailArray: any[] = []
  pairedUpLabel: string
  tempArray: string[];
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService,
    private router: Router,
              private location: Location, private afStore: AngularFirestore, private alertCtrl: AlertController) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('journalId')
    this.iId = id
    
    
  }
 

  ionViewWillEnter(){
    this.mainRun();
  }

  mainRun(){
    if(this.iId){
      // console.log(this.getPairedUpDetail(this.iId))
      this.journalService.getJournal(this.iId).subscribe(journal =>{
        // console.log(journal)
        this.journal = journal
        if(this.journal.role == 'client'){
          this.pairedUpLabel = "Therapist(s)"
          this.tempArray = this.journal.therapists;
          this.tempArray.forEach(therapist => {
            this.journalService.getJournal(therapist).subscribe(clientDetail=>{
              var temp;

              this.journalService.getUserDetails(clientDetail.id).subscribe(elem=>{
                temp = elem
                this.pairedUpDetailArray.push({clientDetail,temp});
              })
              
              console.log(this.pairedUpDetailArray)
              // this.pairedUpUserDetailArray.push(this.journalService.getUserDetails(this.pairedUpDetail.id))
            })
          });
          // tempTherapistIds.forEach(therapist => {
          //   this.journalService.getJournal(therapist).subscribe(therapistDetail=>{
          //     this.pairedUpDetail = therapistDetail;
          //     // console.log(this.pairedUpDetail.id)
          //     this.pairedUpUserDetail = this.journalService.getUserDetails(this.pairedUpDetail.id)
          //     // this.journalService.getUserDetails(this.pairedUpDetail.id).subscribe(elem=>{
          //     //   console.log(elem)
          //     // })
          //   })
          // });
        }
        if(this.journal.role == 'therapist'){
          this.pairedUpLabel = "Clients(s)"
          this.tempArray = this.journal.clients;
          this.tempArray.forEach(client => {
            this.journalService.getJournal(client).subscribe(clientDetail=>{
              var temp;

              this.journalService.getUserDetails(clientDetail.id).subscribe(elem=>{
                temp = elem
                this.pairedUpDetailArray.push({clientDetail,temp});
              })
              
              console.log(this.pairedUpDetailArray)
              // this.pairedUpUserDetailArray.push(this.journalService.getUserDetails(this.pairedUpDetail.id))
            })
          });
        }
      })

      this.userDetail = this.journalService.getUserDetails(this.iId)
    // this.journalService.getUserDetails(this.iId).subscribe(elem=>{
    //   console.log(elem)
    // })
    }
  }

  ionViewWillLeave(){
    this.pairedUpDetailArray = []
  }

  getPairedUpDetail(id: string){
    if(this.journal.role =='client'){
      this.journalService.getJournal(id).subscribe(therapistDetail=>{
        this.pairedUpDetail = therapistDetail;
        // console.log(this.pairedUpDetail.id)
        this.pairedUpUserDetail = this.journalService.getUserDetails(this.pairedUpDetail.id)
        console.log(this.pairedUpUserDetail.uid)
        
        // this.journalService.getUserDetails(this.pairedUpDetail.id).subscribe(elem=>{
        //   console.log(elem)
        // })
        
      })
    }

    if(this.journal.role == 'therapist'){
      this.journalService.getJournal(id).subscribe(clientDetail=>{
        this.pairedUpDetail = clientDetail;
        
        this.pairedUpUserDetail = this.journalService.getUserDetails(this.pairedUpDetail.id)
        console.log(this.pairedUpUserDetail.uid)
    
      })
      
    }

    return this.pairedUpDetail;
  }

  unpair(uid){
    if(this.journal.role == 'client'){
      this.journalService.unpair('therapist', uid, this.iId).then(()=>{
        // this.router.navigate(['/tabs/tab1'])
        this.pairedUpDetailArray = []
        this.mainRun();
      })
    }
    if(this.journal.role == 'therapist'){
      this.journalService.unpair('client', uid, this.iId).then(()=>{
        this.pairedUpDetailArray = []
        this.mainRun();
      });
     
      // this.router.navigate(['/tabs/tab1'])
    }
  }

  // ionViewWillLeave(){
    
  //     this.journalService.getJournal(this.iId).subscribe(journal =>{
  //       console.log(journal)
  //       this.journal = journal
  //     })
    
  // }
  

  // async deleteJournal(){
  //   let alert = await this.alertCtrl.create({
  //     header: 'Delete',
  //     cssClass: 'buttonCss',
  //     message: 'Do you want to delete this journal?',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         cssClass: 'first-button',
  //         handler: ()=>{
  //           this.journalService.deleteJournal(this.iId).then(()=>{
  //           this.location.back()
  //         })}
  //       },
  //       {
  //         text: 'Cancel',
  //         cssClass: 'second-button',
  //         role: 'cancel'
  //       }
  //     ]
  //   })
  //   await alert.present()
    
  // }

  // updateJournal(){
  //   this.journalService.updateJournal(this.journal).then(()=>{
  //     this.location.back()
  //   })
  // }
  // async deleteJournal(){
  //   const res = await this.journalService.deleteJournal(this.journal.id)
  //   this.location.back()
  // }
}
