import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResearchStudyPage } from './research-study';
import{ PopupStudyPage } from './popup-study';

@NgModule({
  declarations: [
    ResearchStudyPage,
    PopupStudyPage
  ],
  imports: [
    IonicPageModule.forChild(ResearchStudyPage),
  ],
  exports: [
    ResearchStudyPage,
    PopupStudyPage
  ]
})
export class ResearchStudyPageModule {}
