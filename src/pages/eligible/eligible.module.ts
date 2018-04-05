import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EligiblePage } from './eligible';

@NgModule({
  declarations: [
    EligiblePage,
  ],
  imports: [
    IonicPageModule.forChild(EligiblePage),
  ],
  exports: [
    EligiblePage
  ]
})
export class EligiblePageModule {}
