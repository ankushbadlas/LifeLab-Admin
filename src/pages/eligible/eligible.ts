import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResearchStudyPage } from '../research-study/research-study';

/**
 * Generated class for the EligiblePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-eligible',
  templateUrl: 'eligible.html',
})
export class EligiblePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EligiblePage');
  }

  researchStudy(){
    this.navCtrl.push(ResearchStudyPage);
  }

}
