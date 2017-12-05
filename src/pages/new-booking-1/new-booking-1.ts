import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewBooking_2Page } from "../new-booking-2/new-booking-2";


/**
 * Generated class for the NewBooking_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking-1',
  templateUrl: 'new-booking-1.html',
})
export class NewBooking_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBooking_1Page');
  }

  openNextForm(){
    this.navCtrl.push(NewBooking_2Page);
  }
}
