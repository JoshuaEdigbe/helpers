import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourCardsPage } from './your-cards';

@NgModule({
  declarations: [
    YourCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourCardsPage),
  ],
})
export class YourCardsPageModule {}
