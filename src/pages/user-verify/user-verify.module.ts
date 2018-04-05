import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { UserVerify } from './user-verify';

@NgModule({
  declarations: [
    UserVerify,
  ],
  imports: [
    IonicPageModule .forChild(UserVerify),
  ],
  exports: [
    UserVerify
  ]
})
export class UserLoginModule {
	
	mytest(){
		console.log("this is my test");
	}
}
