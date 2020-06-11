import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { EventService } from './event.service';
import { Event } from './events.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

 

  event: Event = {
    title: '',
    detail: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
  }
  allEvents: Observable<Event[]>
  sTime: string
  eTime: string

  collapseCard: boolean = true

  minDate = new Date(Date.UTC(new Date(this.event.startTime).getUTCFullYear(), new Date(this.event.startTime).getUTCMonth()-3, new Date(this.event.startTime).getUTCDate())).toISOString()
  
  eventSource = []
  calendar = {
    mode: "month",
    currentDate: new Date()
  }

  viewTitle = ''
  copyEventSource = []
  @ViewChild(CalendarComponent, null) myCal: CalendarComponent

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string, private eService: EventService) {}

  async ngOnInit(){
    this.allEvents = this.eService.getAllEvents()
    console.log(this.eventSource)
    await this.allEvents.subscribe(event =>{
      // console.log(event)
      // console.log(this.eventSource)
      // try{
      //   this.eventSource = event
      // }catch(error){
      //   console.log(error.code)
      // }
     
      // console.log(this.eventSource)
      // this.eventSource.push(event)
      // console.log(this.eventSource)
      this.eventSource = []
      event.forEach(element => {
        let eventCopy = {
          id: element.id,
          title: element.title,
          detail: element.detail,
          startTime: new Date(element.startTime),
          endTime: new Date(element.endTime),
          allDay: element.allDay
        }
        this.eventSource.push(eventCopy)
      });
      // this.myCal.loadEvents()
    //   console.log(this.copyEventSource)
    // this.eventSource = this.copyEventSource
    console.log(this.eventSource)
    
    this.myCal.loadEvents()
    })
    //this.eventSource.push(this.eService.getAllEvents())
    this.resetEvent()
  }

  async ionViewWillEnter(){
    this.allEvents = this.eService.getAllEvents()
    console.log(this.eventSource)
    await this.allEvents.subscribe(event =>{
      // console.log(event)
      // console.log(this.eventSource)
      // try{
      //   this.eventSource = event
      // }catch(error){
      //   console.log(error.code)
      // }
     
      // console.log(this.eventSource)
      // this.eventSource.push(event)
      // console.log(this.eventSource)
      this.eventSource = []
      event.forEach(element => {
        let eventCopy = {
          id: element.id,
          title: element.title,
          detail: element.detail,
          startTime: new Date(element.startTime),
          endTime: new Date(element.endTime),
          allDay: element.allDay
        }
        this.eventSource.push(eventCopy)
      });
      // this.myCal.loadEvents()
    //   console.log(this.copyEventSource)
    // this.eventSource = this.copyEventSource
    console.log(this.eventSource)
    
    this.myCal.loadEvents()
    })
    //this.eventSource.push(this.eService.getAllEvents())
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
      detail: this.event.detail,
      startTime: this.event.startTime,
      endTime: this.event.endTime,
      allDay: this.event.allDay
    }

    if(eventCopy.allDay){
      let start = new Date(eventCopy.startTime)
      let end = new Date(eventCopy.endTime)

      let s = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()))
      let e = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()+1))
      eventCopy.startTime = s.toISOString()
      eventCopy.endTime = e.toISOString()
    }
    
    
   
    
    this.eService.addEvent(eventCopy)
    this.myCal.loadEvents()
    this.resetEvent()
    this.collapseCard = true
  }

  deleteEvent(event){
    // this.eventSource.filter(ev =>{
    //   ev !== event
    // })
 
    this.eService.deleteEvent(event.id)
    // let index = this.eventSource.indexOf(event)
    // if(index > -1){
    //   this.eventSource.splice(index,1)
    // }
    // // this.eventSource.pop()
    // this.myCal.loadEvents()
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
    var start = formatDate(this.event.startTime, 'medium', this.locale)
    var end = formatDate(this.event.endTime, 'medium', this.locale)

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.detail,
      cssClass: 'buttonCss',
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: [{
        text: 'OK',
        cssClass: 'first-button',
        role: 'OK'
      },{
        text: 'Delete',
        cssClass: 'second-button',
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
