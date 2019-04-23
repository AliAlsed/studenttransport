import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, ActionSheetController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the AddCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {
  firecars = firebase.database().ref(`requests/${this.auth.auth.currentUser.uid}`);

  constructor(public navCtrl: NavController, public load : LoadingController,
    public db : AngularFireDatabase,public auth : AngularFireAuth,public toast : ToastController,
    public ac : ActionSheetController,public params : NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarPage');
  }
  addData(name,age,phone,mntkal,addrl,price,count,type){
    if(name.length > 0 && age.length > 0 && mntkal.length > 0 && type.length > 0 && addrl.length > 0 && count.length > 0 &&  price.length > 0  && phone.length > 0){
      var obj={
        'name':name,
        'age':age,
        'phone':phone,
        'mntkal':mntkal,
        'addrl':addrl,
        'price':price,
        'count':count,
        'type':type
      };
     this.firecars.set(obj).then( (res)=> {
    var toast = this.toast.create({
      message:"تم تعديل الاعلان",
      cssClass:"setdire",
      duration:3000
    })
    toast.present();
    console.log(res);
    toast.dismiss();
     },(err)=>{
       console.log(err);
     })
  
    }
  }

}
