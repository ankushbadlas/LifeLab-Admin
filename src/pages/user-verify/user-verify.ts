import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';

import * as Constants from '../../services/constants';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';




@IonicPage()
@Component({
   selector: 'page-user-verify',
   templateUrl: 'user-verify.html',
})
export class UserVerify {
   userVerifyEmail;
   constructor(public navCtrl: NavController, public navParams: NavParams, private _jsonp: Jsonp, private alertCtrl: AlertController, private http: Http, private RequestOptions: RequestOptions, private storage: Storage, public loadingController:LoadingController) { }

   onSubmit(formData) {
     let error = '';
      
      if (!this.isset(formData.verify_code) || formData.verify_code=='') {
         error += 'Please enter verify code.'
      }
      if (error == '') {
        let loading = this.loadingController.create({content : "Logging in ,please wait..."});
        loading.present(); 

         var poolData = { UserPoolId : Constants.AWS_USERPOOLID, ClientId : Constants.AWS_CLIENTID };
         const userPool = new CognitoUserPool(poolData);

         console.log(this.userVerifyEmail)
         var userData = {
            Username: this.userVerifyEmail.toString(), // your username here
            Pool: userPool
         };
         const cognitoUser = new CognitoUser(userData);
         
         cognitoUser.confirmRegistration(formData.verify_code.toString(), true, (err, result)=>{
            if (err) {
               let alert = this.alertCtrl.create({
                  title: 'Signup Error',
                  subTitle: err.message,
                  buttons: ['Dismiss']
               });
               alert.present();
               loading.dismiss();
            }
            else {
               let alert = this.alertCtrl.create({
                  title: 'Confirmation Success',
                  subTitle: 'Confirmation Success',
                  buttons: ['Dismiss']
               });
               alert.present();
               loading.dismiss();
            }
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


   resendVerificationCode() {
      var poolData = { UserPoolId : Constants.AWS_USERPOOLID, ClientId : Constants.AWS_CLIENTID };
      const userPool = new CognitoUserPool(poolData);
      let loading = this.loadingController.create({content : "Logging in ,please wait..."});
      loading.present(); 
      
      let userData = {
         Username: this.userVerifyEmail.toString(), // your username here
         Pool: userPool
     };
     var cognitoUser = new CognitoUser(userData);
     cognitoUser.resendConfirmationCode((err, result) =>{
         if (err) {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: err.message,
              buttons: ['Dismiss']
            });
            alert.present();
            loading.dismiss();
         } else {
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'Verification code successfully sent.',
              buttons: ['Dismiss']
            });
            alert.present();
            loading.dismiss();
         }
     });

   }
   

   isset(s: any) {
      return typeof s !== typeof undefined ? true : false;
   };

   ionViewDidLoad() {
      this.storage.get('user_id').then((val) => {
         if (val !== '' && val!==null) {
            this.navCtrl.push(Dashboard); 
         }
      })
      this.storage.get('user_verify_email').then((val) => {
         this.userVerifyEmail = val;
      });
      console.log('ionViewDidLoad UserLogin');
   }
}
