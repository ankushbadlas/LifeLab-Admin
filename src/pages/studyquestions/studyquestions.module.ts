import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyquestionsPage } from './studyquestions';

@NgModule({
  declarations: [
    StudyquestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyquestionsPage),
  ],
  exports: [
    StudyquestionsPage
  ]
})
export class StudyquestionsPageModule {}
