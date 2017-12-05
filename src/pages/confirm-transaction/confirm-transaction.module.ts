import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmTransactionPage } from './confirm-transaction';

@NgModule({
  declarations: [
    ConfirmTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmTransactionPage),
  ],
})
export class ConfirmTransactionPageModule {}
