import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserVerify } from '../user-verify/user-verify';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
import * as Constants from '../../services/constants';
import { LoadingController } from 'ionic-angular';

import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
   selector: 'page-user-login',
   templateUrl: 'user-login.html',
})
export class UserLogin {

   constructor(public navCtrl: NavController, public navParams: NavParams, private _jsonp: Jsonp, private alertCtrl: AlertController, private http: Http, private RequestOptions: RequestOptions, private storage: Storage, public loadingController:LoadingController) { }

   onSubmit(formData) {

      let error = '';
      if (!this.isset(formData.userEmail) || formData.userEmail=='') {
        
         error += 'Please enter your email.<br />';
      }
      else {
         let phonePattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (!(formData.userEmail.match(phonePattern))) {
          
            error += 'Please enter valid email address.<br />';
         }
      }
      if (!this.isset(formData.userPassword) || formData.userPassword=='') {
        
         error += 'Please enter your password.';
      }
      if (error == '') {
        let loading = this.loadingController.create({content : "Logging in ,please wait..."});
        loading.present(); 
         var authenticationData = {
           Username : formData.userEmail.toLowerCase(),
           Password : formData.userPassword,
         };
         var authenticationDetails = new AuthenticationDetails(authenticationData);

         var poolData = { UserPoolId : Constants.AWS_USERPOOLID, ClientId : Constants.AWS_CLIENTID };
         const userPool = new CognitoUserPool(poolData);

         var userData = {
           Username : formData.userEmail.toLowerCase(),
           Pool : userPool
         };
         var cognitoUser = new CognitoUser(userData);
         cognitoUser.authenticateUser(authenticationDetails, {
           onSuccess: (result)=> {
              
               var authToken = result.getAccessToken().getJwtToken();
               cognitoUser.getUserAttributes((err, result)=> {
                  if (err) {
                    
                     let alert = this.alertCtrl.create({
                        title: 'Login Error',
                        subTitle: err.message,
                        buttons: ['Dismiss']
                     });
                     alert.present();
                     loading.dismiss();
                  }
                  else {
                     var userArray = [];
                     for (let i = 0; i < result.length; i++) {
                         userArray[result[i].getName()] = result[i].getValue();
                     }
                     console.log(userArray['name']);
                     this.storage.remove('auth_token');
                     this.storage.remove('user_id');
                     this.storage.remove('user_email');
                     this.storage.remove('user_name');

                     this.storage.set('auth_token', authToken);
                     this.storage.set('user_id', userArray['sub']);
                     this.storage.set('user_email', userArray['email'].toLowerCase());
                     this.storage.set('user_name', userArray['name']);
                     loading.dismiss();
                     this.navCtrl.push(Dashboard); 
                  }
               });
               
           },
           onFailure:(err)=> {
               let alert = this.alertCtrl.create({
                  title: 'Login Error',
                  subTitle: err.message,
                  buttons: ['Dismiss']
               });
               alert.present();
               loading.dismiss();
           },

         });
         
      }
      else {
         let alert = this.alertCtrl.create({
            title: 'Login Error',
            subTitle: error,
            buttons: ['Dismiss']
         });
         alert.present();
         
      }
   }
   isset(s: any) {
      return typeof s !== typeof undefined ? true : false;
   };

   ionViewDidLoad() {
      //this.storage.remove('user_name');
      this.storage.get('user_id').then((val) => {
         if (val !== '' && val!==null) {
            this.navCtrl.push(Dashboard); 
         }
      })
      console.log('ionViewDidLoad UserLogin');
   }
  
   signupPage() { this.navCtrl.push(UserSignup); }
   forgotPasswordPage() { this.navCtrl.push(UserForgotpassword); }

}
