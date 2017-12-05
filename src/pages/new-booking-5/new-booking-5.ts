import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ConfirmTransactionPage } from "../confirm-transaction/confirm-transaction";

/**
 * Generated class for the NewBooking_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking-5',
  templateUrl: 'new-booking-5.html',
})
export class NewBooking_5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBooking_5Page');
  }

  finishOrder(){
    let confirm = this.modalCtrl.create(ConfirmTransactionPage);
    confirm.present();
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }
}
