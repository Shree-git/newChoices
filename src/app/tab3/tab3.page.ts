import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

 

  event = {
    title: '',
    detail: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
  }

  collapseCard: boolean = true

  minDate = new Date(Date.UTC(new Date(this.event.startTime).getUTCFullYear(), new Date(this.event.startTime).getUTCMonth()-3, new Date(this.event.startTime).getUTCDate())).toISOString()
  
  eventSource = []
  calendar = {
    mode: "day",
    currentDate: new Date()
  }

  viewTitle = ''
  @ViewChild(CalendarComponent) myCal: CalendarComponent

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string) {}

  ngOnInit(){
    this.resetEvent()
  }

  resetEvent(){
    this.event = {
      title: '',
      detail: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    }
  }

  addEvent(){
    let eventCopy = {
      title: this.event.title,
      detail: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay
    }

    if(eventCopy.allDay){
      let start = eventCopy.startTime
      let end = eventCopy.endTime

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()))
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()+1))
    }

    this.eventSource.push(eventCopy)
    this.myCal.loadEvents()
    this.resetEvent()
  }

  deleteEvent(event){
    // this.eventSource.filter(ev =>{
    //   ev !== event
    // })
    let index = this.eventSource.indexOf(event)
    if(index > -1){
      this.eventSource.splice(index,1)
    }
    // this.eventSource.pop()
    this.myCal.loadEvents()
  }

  changeMode($event){
    this.calendar.mode = $event
  }

  back(){
    var swiper = document.querySelector('.swiper-container')['swiper']
    swiper.slidePrev()
  }

  next(){
    var swiper = document.querySelector('.swiper-container')['swiper']
    swiper.slideNext()
  }

  today(){
    this.calendar.currentDate = new Date()
  }

  async onEventSelected(event){
    var start = formatDate(event.startTime, 'medium', this.locale)
    var end = formatDate(event.endTime, 'medium', this.locale)

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.detail,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: [{
        text: 'OK',
        role: 'OK'
      },{
        text: 'Delete',
        handler: ()=>{
          this.deleteEvent(event)
        }
      }]
    }).then(al => {
      al.present()
    })
  }

  onViewTitleChanged(title){
    this.viewTitle = title
  }

  onTimeSelected(eve){
    var selected = new Date(eve.selectedTime)
    this.event.startTime = selected.toISOString()
    selected.setHours(selected.getHours() + 1)
    this.event.endTime = selected.toISOString()
  }
}
