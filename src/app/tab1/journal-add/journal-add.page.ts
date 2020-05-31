import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Location } from '@angular/common';

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
  constructor(private journalService: JournalService, private location: Location) { }

  ngOnInit() {
    this.id = ''
    this.title = ''
    this.detail = ''
  }

  clear(){
    this.id = ''
    this.title = ''
    this.detail = ''
  }

  addJournal(){
    // this.id = this.title
    this.journal = {
      // id: this.id,
      title: this.title,
      detail: this.detail,
      date: new Date().toISOString()
    }
    this.journalService.addJournal(this.journal)
    this.location.back()
  }
}
