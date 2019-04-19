import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LikedPage } from '../liked/liked';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  likedRoot = LikedPage;
  settingsRoot = SettingsPage;


  constructor(public navCtrl: NavController) {}

}
