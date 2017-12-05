import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardDetailsPage } from "../card-details/card-details";

/**
 * Generated class for the YourCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-cards',
  templateUrl: 'your-cards.html',
})
export class YourCardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourCardsPage');
  }

  openCardDetailsPage(){
    this.navCtrl.push(CardDetailsPage);
  }

}
