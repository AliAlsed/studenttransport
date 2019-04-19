import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';
import * as $ from "jquery";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase,public auth : AngularFireAuth,public load : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(name,email,password){

    var load = this.load.create({
    content:"جاري انشاء الحساب",
    cssClass:"loaddire"
    });

  if(name.replace(/\s/g,"") != "" && email.replace(/\s/g,"") != "" && password.replace(/\s/g,"") != ""){

    load.present();

  this.auth.auth.createUserWithEmailAndPassword(email,password).then( ()=> {

    load.dismiss();

    this.db.list("users").push({
      name:name,
      email:email,
      pass:password
    })
    
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;

  }).catch( ()=> {

    load.dismiss();

  });

  }
  }

  showLogin(){
    $(".register").slideUp();
    $(".login").slideDown();
  }

  login(email,pass){

    
    var load = this.load.create({
      content:"جاري تسجيل الدخول",
      cssClass:"loaddire"
      });  

  if(email.replace(/\s/g,"") != "" && pass.replace(/\s/g,"") != ""){

    load.present();

  this.auth.auth.signInWithEmailAndPassword(email,pass).then( ()=> {

    load.dismiss();

    
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;

  }).catch( ()=> {

    load.dismiss();

  });

  }

  }

  showRegister(){
    $(".login").slideUp();
    $(".register").slideDown();
  }

}
