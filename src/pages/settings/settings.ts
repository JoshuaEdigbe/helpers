import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YourCardsPage } from "../your-cards/your-cards";
import { ChangePasswordPage } from "../change-password/change-password";
import { UpdateProfilePage } from "../update-profile/update-profile";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openYourCardsPage(){
    this.navCtrl.push(YourCardsPage)
  }

  openChangePasswordPage(){
    this.navCtrl.push(ChangePasswordPage)
  }

  openUpdateProfilePage(){
    this.navCtrl.push(UpdateProfilePage)
  }
}
