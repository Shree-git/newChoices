import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'impulseAdd',
    loadChildren: () => import('./impulse-add/impulse-add.module').then( m => m.ImpulseAddPageModule)
  },
  {
    path: 'impulse-detail/:impulseId',
    loadChildren: () => import('./impulse-detail/impulse-detail.module').then( m => m.ImpulseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
