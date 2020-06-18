import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Location } from '@angular/common';
import { Account } from 'src/app/models/account.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-journal-add',
  templateUrl: './journal-add.page.html',
  styleUrls: ['./journal-add.page.scss'],
})
export class JournalAddPage implements OnInit {
  id: string
  title: string
  detail: string
  journal: Journal
  clients: Observable<Account[]>
  therapists: Observable<Account[]>
  clientSelected: string = '';
  clientId: string;
  therapistId: string;
  therapistSelected: string = '';
  constructor(private journalService: JournalService, private location: Location) { }

  ngOnInit() {
    this.id = ''
    this.title = ''
    this.detail = ''
    this.clients = this.journalService.sortByRole('client');
    this.therapists = this.journalService.sortByRole('therapist');
  }

  clear(){
    this.id = ''
    this.title = ''
    this.detail = ''
  }

  changeClient(event){
    this.clientSelected = event.target.value
    this.clients.subscribe(elem=>{
      elem.forEach(user => {
        var name = user.fName + " " + user.lName;
        if(name == this.clientSelected){
          this.clientId = user.id
        }
      });
    })
  }

  changeTherapist(event){
    this.therapistSelected = event.target.value
    this.therapists.subscribe(elem=>{
      elem.forEach(user => {
        var name = user.fName + " " + user.lName;
        if(name == this.therapistSelected){
          this.therapistId = user.id
        }
      });
    })
  }

  pair(){
    if(this.clientId != '' && this.therapistId != ''){
      this.journalService.pair(this.clientId, this.therapistId).then(()=>{
        this.location.back();
      })
    }
    // this.journalService.pair()
  }

  // addJournal(){
  //   // this.id = this.title
  //   this.journal = {
  //     // id: this.id,
  //     title: this.title,
  //     detail: this.detail,
  //     date: new Date().toISOString()
  //   }
  //   this.journalService.addJournal(this.journal)
  //   this.location.back()
  // }
}
