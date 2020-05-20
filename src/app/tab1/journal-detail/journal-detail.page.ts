import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Location } from '@angular/common'
import { FirestoreService } from 'src/app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
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
              private location: Location, private afStore: AngularFirestore) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('journalId')
    this.iId = id
    
  }

  ionViewWillEnter(){
    if(this.iId){
      this.journalService.getJournal(this.iId).subscribe(journal =>{
        this.journal = journal
      })
    }
  }
  

  deleteJournal(){
    this.journalService.deleteJournal(this.iId).then(()=>{
      this.location.back()
    })
  }
  // async deleteJournal(){
  //   const res = await this.journalService.deleteJournal(this.journal.id)
  //   this.location.back()
  // }
}
