import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popup-study',
  template: `
  <ion-header>

  <ion-navbar>
    <ion-buttons end>
     <button ion-button color="light" (click)="closePopover()"><ion-icon name="arrow-back"></ion-icon></button>
   </ion-buttons>
  </ion-navbar>

</ion-header>
<ion-content padding>
  <ion-card>
  <ion-card-header>
    Please answer a few review questions<br/> to ensure that you understand<br/> the consent form.
  </ion-card-header>
  <ion-card-content>
    Once I start participating in the study, I am free to withdraw at any time but the data I contributed will not be deleted.
  </ion-card-content>
  <ion-list radio-group>
    <ion-item>
      <ion-label>Yes</ion-label>
      <ion-radio value="1" checked></ion-radio>
    </ion-item>
    <ion-item>
      <ion-label>No</ion-label>
      <ion-radio value="0" checked></ion-radio>
    </ion-item>
  </ion-list>
  </ion-card>
</ion-content>`
})
export class PopupOptionsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }
  closePopover(){
    this.viewCtrl.dismiss();  
  }
}
