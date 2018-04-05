import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharingOptionsPage } from './sharing-options';

@NgModule({
  declarations: [
    SharingOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SharingOptionsPage),
  ],
  exports: [
    SharingOptionsPage
  ]
})
export class SharingOptionsPageModule {}
