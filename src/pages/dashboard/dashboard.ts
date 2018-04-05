import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserLogin } from '../user-login/user-login';
import { Http } from '@angular/http';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
	public user_id: any;
	public activity_data: any[] = [];
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private http: Http) {
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

		
  }

  ionViewDidLoad() {
  	  //LOGIN CHECK
	  this.storage.get('user_id').then((val) => {
		  if (val == '' || val == null) {
			  this.navCtrl.push(UserLogin);
		  }
	  })
    console.log('ionViewDidLoad Dashboard');
  }
}
