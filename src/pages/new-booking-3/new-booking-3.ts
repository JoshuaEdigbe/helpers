import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewBooking_4Page } from "../new-booking-4/new-booking-4";

/**
 * Generated class for the NewBooking_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking-3',
  templateUrl: 'new-booking-3.html',
})
export class NewBooking_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBooking_3Page');
  }

  openNextForm(){
    this.navCtrl.push(NewBooking_4Page);
  }
}
