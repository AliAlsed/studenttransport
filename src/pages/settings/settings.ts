import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AddCarPage } from '../add-car/add-car';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  add(){
    this.navCtrl.push(
      AddCarPage
    );
  }

}
