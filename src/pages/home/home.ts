import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewBooking_1Page } from "../new-booking-1/new-booking-1";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openNewBooking(){
    this.navCtrl.setRoot(NewBooking_1Page)
  }

}
