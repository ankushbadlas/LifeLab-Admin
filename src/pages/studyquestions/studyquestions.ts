import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { EligiblePage } from '../eligible/eligible';
import { WelcomePage } from '../welcome/welcome';
import { NotEligiblePage } from '../not-eligible/not-eligible';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the StudyquestionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-studyquestions',
  templateUrl: 'studyquestions.html',
})
export class StudyquestionsPage {

  public wsForm : FormGroup;
  public user_id: any;
	public activity_data: any[] = [];
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private http: Http, private alertCtrl: AlertController, public formBuilder : FormBuilder) {
		/*this.storage.get('user_id').then((val) => {
			if (val !== '' || val !== null) {
				this.user_id = val;
				const body = { user_id: this.user_id, action: 'get_list' };
				this.http.post('http://localhost/sanjeev/api/activity.php', body).subscribe(data => {
					// Read the result field from the JSON response.
					let response = data.json();
					if (response.status == 'success') {
						this.activity_data = response.data;
						console.log(response.data)
					}

				});
			}
    })*/
    this.initilizeWSQuestionnaireForm();
		
  }

  onSubmit(formData) {
      console.log(formData)
    if(formData.ages==1 && formData.living==1 && formData.instructions==1){
      this.navCtrl.push(EligiblePage)
    }else{
      this.navCtrl.push(NotEligiblePage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyquestionsPage');
  }

  eligiblePage(){
    this.navCtrl.push(EligiblePage)
  }
  welcomePage(){
    this.navCtrl.push(WelcomePage)
  }
  initilizeWSQuestionnaireForm(){
    this.wsForm = this.formBuilder.group({
      'ages' : ['',Validators.required],
      'living' : ['',Validators.required],
      'instructions' : ['',Validators.required]
    });
  }

}
