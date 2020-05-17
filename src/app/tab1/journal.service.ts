import { Injectable } from '@angular/core';
import { Journal } from './journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  journals: Journal[] = [{
    id: 'j1',
    title: 'Craving Food',
    detail: 'I really want to eat something junk.'
  },{
    id: 'j2',
    title: 'Craving Netlix',
    detail: 'I really want to watch movies.'
  }]
  constructor() { }

  getAllJournals(){
    return this.journals
  }

  getJournal(journalId: string){
    return this.journals.find(journal =>{
      return journal.id === journalId
    })
  }

  deleteJournal(journalId: string){
    return this.journals.filter(journal =>{
      return journal.id !== journalId
    })
  }

  addJournal(journal: Journal){
    this.journals.push(journal)
  }
}
