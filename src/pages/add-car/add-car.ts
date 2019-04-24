import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ActionSheetController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

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
  imgURL: any;
  firecars = firebase.database().ref(`requests/${this.auth.auth.currentUser.uid}`);
  loading;
  mySelectedPhoto;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public auth: AngularFireAuth, public toast: ToastController, public ac: ActionSheetController, private camera: Camera, public load: LoadingController, public params: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCarPage');
  }
  addData(name, age, phone, mntkal, addrl, price, count, type) {
    console.log(' data ');
    if (name.length > 0 && age.length > 0 && mntkal.length > 0 && type.length > 0 && addrl.length > 0 && count.length > 0 && price.length > 0 && phone.length > 0) {
      var obj = {
        'name': name,
        'age': age,
        'phone': phone,
        'mntkal': mntkal,
        'addrl': addrl,
        'price': price,
        'count': count,
        'image': this.imgURL,
        'type': type
      };
      this.firecars.set(obj).then((res) => {
        var toast = this.toast.create({
          message: "تم تعديل الاعلان",
          cssClass: "setdire",
          duration: 3000
        })
        toast.present();
        console.log(res);
        toast.dismiss();
      }, (err) => {
        console.log(err);
      })

    }
  }
  takePhoto() {
    const options: CameraOptions = {
      targetHeight: 720,
      targetWidth: 720,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.load.create({
        content: "جاري اضافة الصورة ",
        cssClass: "loaddire"
      });
      this.loading.present();
      this.mySelectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,' + imageData);
      this.upload();

    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
  dataURLtoBlob(myURL) {
    let binary = atob(myURL.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  upload() {


    var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];
    var rand1 = Math.floor(Math.random() * char.length);
    var rand2 = Math.floor(Math.random() * char.length);
    var rand3 = Math.floor(Math.random() * char.length);
    var rand4 = Math.floor(Math.random() * char.length);
    var rand = char[rand1] + char[rand2] + char[rand3] + char[rand4];

    if (this.mySelectedPhoto) {
      var uploadTask = firebase.storage().ref().child('images/' + rand + ".jpg");
      var put = uploadTask.put(this.mySelectedPhoto);
      put.then(() => {
        this.loading.dismiss();

        uploadTask.getDownloadURL().then(url => {

          this.imgURL = url;

        });

      });

      put.catch(err => {
        this.loading.dismiss();

        alert(JSON.stringify(err));
      })


    }
  }


  diabled() {
    if (this.imgURL == null) {
      return true;
    } else {
      return false;
    }
  }


}
