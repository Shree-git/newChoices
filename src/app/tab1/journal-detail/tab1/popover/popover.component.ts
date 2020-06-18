import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { JournalService } from '../journal.service';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Journal } from '../journal.model';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  // @Output() sortedData = new EventEmitter<boolean>();
  constructor(private journalService: JournalService, private popController: PopoverController) { }

  ngOnInit() {}

  sortByOldest(){

    this.journalService.journals = this.journalService.sortBy('date', 'asc');

    this.popController.dismiss()

  }
  
  sortByNewest(){

    this.journalService.journals = this.journalService.sortBy('date', 'desc')

    this.popController.dismiss();

  }
}
