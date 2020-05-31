import { Component, OnInit } from '@angular/core';
import { Journal as Impulse } from './impulse.model';
import { ImpulseService } from './impulse.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';



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
  constructor(private impulseService: ImpulseService, private alertCtrl: AlertController) {}

  ngOnInit(){
    this.impulses = this.impulseService.getAllImpulses()
  }

  async deleteImpulse(id){
    let alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Do you want to delete this journal?',
      buttons: [{
        text: 'Delete',
        handler: ()=>{ this.impulseService.deleteImpulse(id) }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    })
    await alert.present()
   
  }

  search(event){
    var searchWord = event.target.value
 
    if (!searchWord || !searchWord.trim()){
      this.impulses = this.impulseService.getAllImpulses()
    }else{
      // console.log(searchWord.toLowerCase())
      this.impulses = this.impulseService.searchImpulse(searchWord)
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

sortByHighest(){
  this.impulses = this.impulseService.sortBy('rating', 'desc')
  this.funnelShow = false
}

sortByLowest(){
  this.impulses = this.impulseService.sortBy('rating', 'asc')
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

