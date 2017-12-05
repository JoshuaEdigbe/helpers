import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewBooking_5Page } from "../new-booking-5/new-booking-5";

/**
 * Generated class for the NewBooking_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking-4',
  templateUrl: 'new-booking-4.html',
})
export class NewBooking_4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBooking_4Page');
  }
  
  openNextForm(){
    this.navCtrl.push(NewBooking_5Page)
  }

}
