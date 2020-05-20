import { Component, OnInit } from '@angular/core';
import { Journal } from './journal.model';
import { JournalService } from './journal.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  journals: Observable<Journal[]>
  constructor(private journalService: JournalService) {}

  ngOnInit(){
    this.journals = this.journalService.getAllJournals()
  }

  deleteJournal(id){
    this.journalService.deleteJournal(id)
  }

}
