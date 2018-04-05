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
    <div>We will look at DNA, RNA and protein bimakers. DNA is substance in our cells that contain information we inherited from our parents and other family members.</div>
    </ion-content>`
})
export class PopupStudyPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }
  closePopover(){
    this.viewCtrl.dismiss();  
  }
}
