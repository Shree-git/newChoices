import { Component, OnInit } from '@angular/core';
import { Journal } from './journal.model';
import { JournalService } from './journal.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';



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
  constructor(private journalService: JournalService, private alertCtrl: AlertController) {}

  ngOnInit(){
    this.journals = this.journalService.getAllJournals()
  }

  async deleteJournal(id){
    let alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Do you want to delete this journal?',
      buttons: [{
        text: 'Delete',
        handler: ()=>{ this.journalService.deleteJournal(id) }
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

sortByOldest(){
  this.journals = this.journalService.sortBy('date', 'asc')
  this.funnelShow = false
}

sortByNewest(){
  this.journals = this.journalService.sortBy('date', 'desc')
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
