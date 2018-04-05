import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { UserLogin } from '../pages/user-login/user-login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { WelcomePage } from '../pages/welcome/welcome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import * as Constants from '../services/constants';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make Welcome the root (or first) page
  rootPage: any = WelcomePage;
  pages: Array<{title: string,icon:string, component: any}>;
  userName= 'Guest';

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashbaord',icon:'home', component: Dashboard },
      { title: 'Logout',icon:'lock', component: UserLogin }
    ];

    this.storage.get('user_name').then((val) => {
      if (val && val !== null && val !== '') {
        this.userName = val;
      }
    })
  }

 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if (page.title == 'Logout') {

      var poolData = { UserPoolId : Constants.AWS_USERPOOLID, ClientId : Constants.AWS_CLIENTID };

      var userPool = new CognitoUserPool(poolData);
      var cognitoUser = userPool.getCurrentUser();

      if (cognitoUser !== null) {
          cognitoUser.signOut();
      }
      this.storage.remove('auth_token');
      this.storage.remove('user_id');
      this.storage.remove('user_email');
      this.storage.remove('user_name');
      
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
    else {
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
    
  }
}
