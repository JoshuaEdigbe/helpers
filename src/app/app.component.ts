import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from "../pages/landing/landing";
import { HomePage } from "../pages/home/home";
import { BalancePage } from "../pages/balance/balance";
import { InvitePage } from "../pages/invite/invite";
import { HelpPage } from '../pages/help/help';
import { NewBooking_1Page } from "../pages/new-booking-1/new-booking-1";
import { SettingsPage } from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Dashboard', component: HomePage},
      { title: 'Your Balance', component: BalancePage},
      { title: 'Invite Your Friends', component: InvitePage},
      { title: 'Get Help', component: HelpPage}
    ]

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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  OpenNewBooking(){
    this.nav.setRoot(NewBooking_1Page)
  }

  openSettigs(){
    this.nav.setRoot(SettingsPage)
  }

  openLandingPage(){
    this.nav.setRoot(LandingPage)
  }
}