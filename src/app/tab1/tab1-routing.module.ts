import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'journal-detail/:journalId',
    loadChildren: () => import('./journal-detail/journal-detail.module').then( m => m.JournalDetailPageModule)
  },
  {
    path: 'journalAdd',
    loadChildren: () => import('./journal-add/journal-add.module').then( m => m.JournalAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
