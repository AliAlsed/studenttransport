import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LikedPage } from '../pages/liked/liked';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegisterPage } from '../pages/register/register';
import { AddCarPage } from '../pages/add-car/add-car';
import { Camera } from '@ionic-native/camera/ngx';

var config = {
  apiKey: "AIzaSyDj3ktbJ1M29flYCyimwSRMW3li5GnozlE",
  authDomain: "student-trans.firebaseapp.com",
  databaseURL: "https://student-trans.firebaseio.com",
  projectId: "student-trans",
  storageBucket: "student-trans.appspot.com",
  messagingSenderId: "222742087524"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    AddCarPage,
    LikedPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SettingsPage,
    AddCarPage,
    LikedPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
