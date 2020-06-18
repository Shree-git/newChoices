import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalDetailPage } from './journal-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JournalDetailPage
  },
  {
    path: 'tab1/:userId',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2/:userId',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3/:userId',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalDetailPageRoutingModule {}
