import { Component, OnInit, ViewChild } from '@angular/core';
import { Journal } from './journal.model';
import { JournalService } from './journal.service';
import { Observable } from 'rxjs';
import { AlertController, IonSelect, PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../tab1/popover/popover.component';
import { AccountService } from '../settings/account/account.service';
import { DarkService } from '../settings/dark.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  journals: Observable<Journal[]>
  tempJournals: Observable<Journal[]>
  isSearchBarOn: boolean = false
  funnelShow: boolean = false
  hideList:boolean = true;
  @ViewChild('mySelect') select: IonSelect
  currentPopover = null;

  constructor(private popoverController: PopoverController,
    private journalService: JournalService,
    private darkService: DarkService,
    private accountService: AccountService, private alertCtrl: AlertController) {
      customElements.define('popover-example-page', class ModalContent extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
            <ion-list>
              <ion-list-header>Ionic</ion-list-header>
              <ion-item button>Learn Ionic</ion-item>
              <ion-item button>Documentation</ion-item>
              <ion-item button>Showcase</ion-item>
              <ion-item button>GitHub Repo</ion-item>
              <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item>
            </ion-list>
          `;
        }
      });
    }

  ngOnInit(){
    this.journals = this.journalService.getAllJournals()
    // this.darkService.toggleDarkTheme(this.accountService.account.darkTheme);

  }

  ionViewWillEnter(){
    this.journals = this.journalService.getAllJournals()
  }

  doRefresh(event) {
  
    
    setTimeout(() => {
      this.journals = this.journalService.getAllJournals()
      event.target.complete();
    }, 1000);
  }

  // onChange($event){
  
  //   switch($event.target.value){
  //     case 'newest':
  //       this.sortByNewest();
  //       break;
  //     case 'oldest':
  //       this.sortByOldest();
  //       break;
  //   }
  // }

  async openPopover(ev) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
    });
    this.currentPopover = popover;
    console.log(ev)
    await popover.present()
    return await popover.onWillDismiss().then(()=>{
      this.journals = this.journalService.journals;
    })
  }

  cancelSearch(){
    this.isSearchBarOn=false;
    this.journals = this.journalService.journals;
  }
 

  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => { this.currentPopover = null; this.journals = this.journalService.getAllJournals(); });
    }
  }

  

  // async openPopover($event){
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: $event,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  openFilter(){
    // this.funnelShow = true;
    this.select.interface = "popover";
    this.select.open();
    
  }

  async deleteJournal(id){
    let alert = await this.alertCtrl.create({
      header: 'Delete',
      cssClass: 'buttonCss',
      message: 'Do you want to delete this journal?',
      buttons: [{
        text: 'Delete',
        cssClass: 'first-button',
        handler: ()=>{ this.journalService.deleteJournal(id) }
      },
      {
        text: 'Cancel',
        cssClass: 'second-button',
        role: 'cancel'
      }]
    })
    await alert.present()
   
  }

  search(event){
    var searchWord = event.target.value
 
    if (!searchWord || !searchWord.trim()){
      this.journals = this.journalService.getAllJournals()
    }else{
      // console.log(searchWord.toLowerCase())
      this.journals = this.journalService.searchJournals(searchWord)
    }
  }

  dropMenu() {
    document.getElementById("myDrop").classList.toggle("show");
    //makes it so that clicking anywhere else on the screen closes drop down
    window.onclick = function(e) {
    var ele=<Element>e.target;
        if (!ele.matches('#drop')){
          var dropdowns = document.getElementsByClassName("dropdown-cont");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
        }
  }
}

// sortByOldest(){
//   this.journals = this.journalService.sortBy('date', 'asc')
//   this.funnelShow = false
// }

// sortByNewest(){
//   this.journals = this.journalService.sortBy('date', 'desc')
//   this.funnelShow = false
// }
  // search(event){
  //   var searchWord = event.target.value
  //   if (searchWord == 0){
  //     this.journals = this.journalService.getAllJournals()
  //   }else{
  //     this.journals.subscribe(journal=>{
  //       journal.forEach(element => {
  //         if(element.title.toUpperCase().startsWith(searchWord.toUpperCase())){
  //           return element
  //         }
  //       })
  //     })
  //    // this.journals = this.journalService.searchJournals(searchWord)
  //   }
  // }
}
