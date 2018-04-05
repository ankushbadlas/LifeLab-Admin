import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { Dashboard } from '../pages/dashboard/dashboard';
import { WelcomePage } from '../pages/welcome/welcome';
import { StudyquestionsPage } from '../pages/studyquestions/studyquestions';
import { EligiblePage } from '../pages/eligible/eligible';
import { UserVerify } from '../pages/user-verify/user-verify'
import { SlidePage } from '../pages/slide/slide';
import { NotEligiblePage } from '../pages/not-eligible/not-eligible';
import { ResearchStudyPage } from '../pages/research-study/research-study';
import { PopupStudyPage } from '../pages/research-study/popup-study';
import { SharingOptionsPage } from '../pages/sharing-options/sharing-options';
import { PopupOptionsPage } from '../pages/sharing-options/popup-options';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    WelcomePage,
    StudyquestionsPage,
    EligiblePage,
    UserVerify,
    SlidePage,
    NotEligiblePage,
    ResearchStudyPage,
    PopupStudyPage,
    SharingOptionsPage,
    PopupOptionsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    WelcomePage,
    StudyquestionsPage,
    EligiblePage,
    UserVerify,
    SlidePage,
    NotEligiblePage,
    ResearchStudyPage,
    PopupStudyPage,
    SharingOptionsPage,
    PopupOptionsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
