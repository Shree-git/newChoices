import { Component, OnInit } from '@angular/core';
import { ImpulseService } from '../impulse.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private impulseService: ImpulseService, private popController: PopoverController) { }

  ngOnInit() {}

  sortByHighest(){
    this.impulseService.impulses = this.impulseService.sortBy('rating', 'desc')
    this.popController.dismiss();
  }
  
  sortByLowest(){
    this.impulseService.impulses = this.impulseService.sortBy('rating', 'asc')
    this.popController.dismiss();
  }
  
  
  sortByOldest(){
    this.impulseService.impulses = this.impulseService.sortBy('date', 'asc')
    this.popController.dismiss();
  }
  
  sortByNewest(){
    this.impulseService.impulses = this.impulseService.sortBy('date', 'desc')
    this.popController.dismiss();
  }
}
