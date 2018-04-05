import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import{ PopupOptionsPage } from './popup-options';

/**
 * Generated class for the SharingOptionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sharing-options',
  templateUrl: 'sharing-options.html',
})
export class SharingOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modelPopup: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharingOptionsPage');
  }

  // function: onclick popup on slide
  presentPopover(ev) {
    let popover = this.modelPopup.create(PopupOptionsPage);
    popover.present();
  }

}
