import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';
import { UserVerify } from '../user-verify/user-verify';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
import * as Constants from '../../services/constants';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { parseString } from 'xml2js';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {
  attributeList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _jsonp: Jsonp, private alertCtrl: AlertController, private http: Http, private RequestOptions: RequestOptions, private storage: Storage, public loadingController:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  onSubmit(formData) {
    
    
    let error = '';
    if (!this.isset(formData.userEmail) || formData.userEmail=='') {
       error += 'Please enter email.<br />'
    }
    else {
       let phonePattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (!(formData.userEmail.match(phonePattern))) {
          error += 'Please enter valid email address.<br />'
       }
    }

    if (!this.isset(formData.userPassword) || formData.userPassword=='') {
       error += 'Please enter password.<br />'
    }

    if (!this.isset(formData.userInvitationCode) || formData.userInvitationCode=='') {
       error += 'Please enter invitation code.<br />'
    }

    if (!this.isset(formData.userFullName) || formData.userFullName=='') {
       error += 'Please enter full name.<br />'
    }


    if (error == '') {
      let loading = this.loadingController.create({content : "Logging in ,please wait..."});
      loading.present();
        var poolData = { UserPoolId : Constants.AWS_USERPOOLID,
            ClientId : Constants.AWS_CLIENTID
        };
        const userPool = new CognitoUserPool(poolData);

        var attributeList = [];
 
        var dataEmail = {
            Name : 'email',
            Value : formData.userEmail.toLowerCase() // your email here
        };
        var dataName = {
            Name : 'name',
            Value : formData.userFullName // your phone number here with +country code and no delimiters in front
        };
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new CognitoUserAttribute(dataName);
         
        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
        
        userPool.signUp(formData.userEmail.toLowerCase(), formData.userPassword, attributeList, null, (err, result) => {
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
            loading.dismiss();
            var cognitoUser = result.user;
            this.storage.set('user_verify_email', formData.userEmail.toLowerCase());
            this.navCtrl.push(UserVerify);
            //alert('Congratulations! Your registration completed successfully.')
          }
          
        });
    }
    else {
      let alert = this.alertCtrl.create({
            title: 'Signup Error',
            subTitle: error,
            buttons: ['Dismiss']
         });
         alert.present();
    }
  }

  isset(s: any) {
      return typeof s !== typeof undefined ? true : false;
   };

  dashboardPage(){ this.navCtrl.push(Dashboard); }
  loginPage(){ this.navCtrl.push(UserLogin);}


}
