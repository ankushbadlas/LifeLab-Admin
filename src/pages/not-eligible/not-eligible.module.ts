import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotEligiblePage } from './not-eligible';

@NgModule({
  declarations: [
    NotEligiblePage,
  ],
  imports: [
    IonicPageModule.forChild(NotEligiblePage),
  ],
  exports: [
    NotEligiblePage
  ]
})
export class NotEligiblePageModule {}
