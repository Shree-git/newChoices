import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.page.html',
  styleUrls: ['./journal-detail.page.scss'],
})
export class JournalDetailPage implements OnInit {
  journal: Journal
  constructor(private activatedRoute: ActivatedRoute, private journalService: JournalService, private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.journal = this.journalService.getJournal(this.activatedRoute.snapshot.paramMap.get('journalId'))
  }

  async deleteJournal(){
    const res = await this.journalService.deleteJournal(this.journal.id)
    this.location.back()
  }
}
