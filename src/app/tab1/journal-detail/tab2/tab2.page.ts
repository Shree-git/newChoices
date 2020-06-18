import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Journal as Impulse } from './impulse.model';
import { ImpulseService } from './impulse.service';
import { Observable } from 'rxjs';
import { AlertController, PopoverController, Platform } from '@ionic/angular';

import { PopoverComponent } from '../tab2/popover/popover.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  impulses: Observable<Impulse[]>
  tempImpulse: Observable<Impulse[]>
  isSearchBarOn: boolean = false
  funnelShow: boolean = false
  currentPopover = null;
  backButtonSubscription;
  userId: string;
  constructor(private impulseService: ImpulseService, private alertCtrl: AlertController, private popoverController: PopoverController, 
    private platform: Platform,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('userId');
    this.userId = id
    this.impulses = this.impulseService.getAllImpulses(this.userId)
  }

  ionViewWillEnter(){
    this.impulses = this.impulseService.getAllImpulses(this.userId)
  }

  // ngAfterViewInit(){
  //   this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, ()=>{
  //     navigator['app'].exitApp();
  //   })
  // }

  // ngOnDestroy(){
  //   this.backButtonSubscription.unsubscribe();
  // }

  // async deleteImpulse(id){
  //   let alert = await this.alertCtrl.create({
  //     header: 'Delete',
  //     message: 'Do you want to delete this impulse?',
  //     cssClass: 'buttonCss',
  //     buttons: [{
  //       text: 'Delete',
  //       cssClass: 'first-button',
  //       handler: ()=>{ this.impulseService.deleteImpulse(id) }
  //     },
  //     {
  //       text: 'Cancel',
  //       cssClass: 'second-button',
  //       role: 'cancel'
  //     }]
  //   })
  //   await alert.present()
  // }

  doRefresh(event) {
  
    
    setTimeout(() => {
      this.impulses = this.impulseService.getAllImpulses(this.userId)
      event.target.complete();
    }, 1000);
  }

  onChange($event){
  
    switch($event.target.value){
      case 'newest':
        this.sortByNewest();
        break;
      case 'oldest':
        this.sortByOldest();
        break;
      case 'highest':
        this.sortByHighest();
        break;
      case 'lowest':
        this.sortByLowest();
        break;
    }
  }

  search(event){
    var searchWord = event.target.value
 
    if (!searchWord || !searchWord.trim()){
      this.impulses = this.impulseService.getAllImpulses(this.userId)
    }else{
      // console.log(searchWord.toLowerCase())
      this.impulses = this.impulseService.searchImpulse(this.userId, searchWord)
    }
  }
  
  cancelSearch(){
    this.isSearchBarOn=false;
    this.impulses = this.impulseService.impulses;
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
    this.impulses = this.impulseService.impulses;
  })
}

sortByHighest(){
  this.impulses = this.impulseService.sortBy('rating', 'desc')
  this.funnelShow = false
}

sortByLowest(){
  this.impulses = this.impulseService.sortBy('rating', 'asc')
  this.funnelShow = false
}


sortByOldest(){
  this.impulses = this.impulseService.sortBy('date', 'asc')
  this.funnelShow = false
}

sortByNewest(){
  this.impulses = this.impulseService.sortBy('date', 'desc')
  this.funnelShow = false
}
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

