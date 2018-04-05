import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import{ PopupStudyPage } from './popup-study';
import { SharingOptionsPage } from '../sharing-options/sharing-options';

const slides = [
  {
    id: 1,
    title: "Welcome",
    description: "This simple walkthrough will explain the research study, the impact it may have on your life and allow you to provide your consent to participate.",
    icon: "home",
    linkMore: '',
  },
  {
    id: 2,
    title: "Purpose",
    description: "You are invited to participate in a research study using an app called LifeSpot. LifeSpot is a research study to explore how measurements of daily activity can be combined with blood tests to yield better information about health. You will conduct all study activities at home without ever needing to travel to a research site.",
    icon: "home",
    linkMore: '',
  },
  {
    id: 3,
    title: "Activities",
    description: "We will ask you to wear a wristband,perform tasks, respond to surveys, and collect blood spots(drops) with a study provided kit. The researchers will analyze your blood and combine the measurements with the activity information gathered from your wristband.",
    icon: "home",
    linkMore: 'I EARN MORE',
  },
  {
    id: 4,
    title: "Study Description",
    description: "It is expected that up to 12 people will participate in this study. If you choose to participate, you will be asked to electronically sign this form. Next, you will be asked to create a LifeSpot account and will be provided with a wristband. You will be asked to wear the wristband for 6-12 months and to complete several cognitive tests, survey questions, and dried blood spot collections. We anticipate completion of tasks, surveys and collection of blood spots to take about 15 minutes a week.",
    icon: "",
    linkMore: 'LEARN MORE',
  },
  {
    id: 5,
    title: "Sensor and Health Data",
    description: "If you choose to participate, you will have access to the data gathered by your wristband via the app associated with the device. Your participation may benefit you by motivating you to sustain or improve your walking and sleeping behavior however this cannot be guraranted.",
    icon: "eye",
    linkMore: 'I EARN MORE',
  },
  {
    id: 6,
    title: "Issues to Consider",
    description: "You may experience some pain from the finger prick for the blood spot collections.",
    icon: "chatbubbles",
    linkMore: 'LEARN MORE',
  },
  {
    id: 7,
    title: "Risk to Privacy",
    description: "Your privacy is very important to us and we will use many safety measures to protect your privacy, but total anonymity cannot be guaranteed.",
    icon: "eye",
    linkMore: 'LEARN MORE',
  },
  {
    id: 8,
    title: "Protecting your Data and Samples",
    description: "Your data and samples will be stored securely at TGen, with your name replaced by a random unique study code.",
    icon: "eye",
    linkMore: 'LEARN MORE',
  },
  {
    id: 9,
    title: "Alternatives",
    description: "This is not a treatment study. Your alternative to being in this study is to not participate.",
    icon: "eye",
    linkMore: '',
  },
  {
    id: 10,
    title: "Cost",
    description: "There are no costs to you to participate in this study.",
    icon: "eye",
    linkMore: 'LEARN MORE',
  },
  {
    id: 11,
    title: "Questions and Contact Information",
    description: "If you have any questions, complaints, or concerns about the study or if you feel you were injured by the research, you can email us at crc@tgen.org or call us at (602) 343-8653.",
    icon: "eye",
    linkMore: 'LEARN MORE',
  },
  {
    id: 12,
    title: "Participant's Rights",
    description: "If you have read this form and you have decided to participate in this research study, please understand that your particiption in this study is voluntary.",
    icon: "eye",
    linkMore: 'LEARN MORE',
  },
  {
    id: 13,  
    title: "Consent",
    description: "I understand that by signing this consent form: I am agreeing to participate in this research study. I am agreeing to complete the study tasks using a wristband device and mobile phone application('App'). My de-identified data and samples will be stored at TGen. I am being asked to return the wearable device/wristband when I have completed the study (or withdrawn from the study).",
    icon: "eye",
    linkMore: '',
  },
];

@IonicPage()
@Component({
  selector: 'page-research-study',
  templateUrl: 'research-study.html',
})
export class ResearchStudyPage {

  currentIndex = 0;
  @ViewChild('slider') slider: Slides;
  slides : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.slides = slides.sort(this.GetSortOrder("id"));;
    console.log('ionViewDidLoad ResearchStudyPage');
  }
  
  slideToNext() {
    let currentIndex = this.slider.getActiveIndex() + 1;
    this.slider.slideNext();
  }

  slideToPrev() {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slidePrev();
  }

  // function: onclick popup on slide
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopupStudyPage);
    popover.present();
  }

  slideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    let EndIndex = this.slider.isEnd();
  }

  //function to sort the slide order for display
  GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
  }  

  // function: end slide redirect on Sharing page
  sharingPage(){
    this.navCtrl.push(SharingOptionsPage);
  }

}
