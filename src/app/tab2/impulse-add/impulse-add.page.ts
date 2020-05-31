import { Component, OnInit } from '@angular/core';
import { ImpulseService } from '../impulse.service';
import { Journal as Impulse } from '../impulse.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-impulse-add',
  templateUrl: './impulse-add.page.html',
  styleUrls: ['./impulse-add.page.scss'],
})
export class ImpulseAddPage implements OnInit {
  id: string
  title: string
  rating: number
  detail: string
  impulse: Impulse
  constructor(private impulseService: ImpulseService, private location: Location) { }

  ngOnInit() {
    this.id = ''
    this.title = ''
    this.rating = 5
    this.detail = ''
  }

  clear(){
    this.id = ''
    this.title = ''
    this.rating = 5
    this.detail = ''
  }

  addImpulse(){
    // this.id = this.title
    this.impulse = {
      // id: this.id,
      title: this.title,
      rating: this.rating,
      detail: this.detail,
      date: new Date().toISOString()
    }
    this.impulseService.addImpulse(this.impulse)
    this.location.back()
  }
}
