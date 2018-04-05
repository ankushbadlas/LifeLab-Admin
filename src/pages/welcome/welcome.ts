import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLogin } from '../user-login/user-login';
import { SlidePage } from '../slide/slide';
import { StudyquestionsPage } from '../studyquestions/studyquestions';


/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  slides = [
    {
      title: "Welcome to LifeSpot",
      description: "You are invited to participate in a research study exploring the relationship between daily activity and biomakers in your blood.",
      icon: "md-information-circle",
    },
    {
      title: "About the study?",
      description: "To participate, you will use a mobile phone app and wristband, which will meassure activity.You will collect drops of blood using a finger prick device.",
      icon: "md-help-circle",
    },
    {
      title: "Study Participation",
      description: "Once you sign the consent, you will be asked to provide basic information about yourself such as age, sex and health conditions. Based on your response to these questions, you may or may not be asked to continue participation. Only participatns asked to continue participation will be sent a wristband.",
      icon: "medical",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  redirectLogin(){
    this.navCtrl.push(UserLogin);
    //this.navCtrl.push(SlidePage);
  }
  questionPage(){
    this.navCtrl.push(StudyquestionsPage);
  }

}
