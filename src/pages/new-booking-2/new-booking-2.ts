import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewBooking_3Page } from "../new-booking-3/new-booking-3";

/**
 * Generated class for the NewBooking_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking-2',
  templateUrl: 'new-booking-2.html',
})
export class NewBooking_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBooking_2Page');
  }

  openNextForm(){
    this.navCtrl.push(NewBooking_3Page)
  }
}
