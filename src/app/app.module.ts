import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { BalancePage } from "../pages/balance/balance";
import { InvitePage } from "../pages/invite/invite";
import { HelpPage } from "../pages/help/help";
import { NewBooking_1Page } from "../pages/new-booking-1/new-booking-1";
import { NewBooking_2Page } from "../pages/new-booking-2/new-booking-2";
import { NewBooking_3Page } from "../pages/new-booking-3/new-booking-3";
import { NewBooking_4Page } from "../pages/new-booking-4/new-booking-4";
import { NewBooking_5Page } from "../pages/new-booking-5/new-booking-5";
import { SettingsPage } from "../pages/settings/settings";
import { YourCardsPage } from "../pages/your-cards/your-cards";
import { CardDetailsPage } from "../pages/card-details/card-details";
import { ConfirmTransactionPage } from "../pages/confirm-transaction/confirm-transaction";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { UpdateProfilePage } from "../pages/update-profile/update-profile";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    LoginPage,
    RegisterPage,
    BalancePage,
    InvitePage,
    HelpPage,
    NewBooking_1Page,
    NewBooking_2Page,
    NewBooking_3Page,
    NewBooking_4Page,
    NewBooking_5Page,
    SettingsPage,
    YourCardsPage,
    CardDetailsPage,
    ConfirmTransactionPage,
    ChangePasswordPage,
    UpdateProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    LoginPage,
    RegisterPage,
    BalancePage,
    InvitePage,
    HelpPage,
    NewBooking_1Page,
    NewBooking_2Page,
    NewBooking_3Page,
    NewBooking_4Page,
    NewBooking_5Page,
    SettingsPage,
    YourCardsPage,
    CardDetailsPage,
    ConfirmTransactionPage,
    ChangePasswordPage,
    UpdateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
