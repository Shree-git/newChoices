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

    this.journalService.users = this.journalService.sortBy('fName', 'desc');

    this.popController.dismiss()

  }
  
  sortByNewest(){

    this.journalService.users = this.journalService.sortBy('fName', 'asc')

    this.popController.dismiss();

  }
}
