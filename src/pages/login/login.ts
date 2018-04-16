import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AppService } from '../service/app.service';

import { User } from '../domain/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user:User = new User();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController,
    public appService:AppService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');   
  }

  loginIn(){
  	console.log("Successfully Logged In" + this.user);
    if(this.user.username != null && this.user.password != null ){
      this.appService.checkLogin(this.user).subscribe(
        user => { 
          this.user = user;
          if(this.user.status == null){
            this.navCtrl.setRoot(TabsPage, {userProfile: this.user});
          } else {
            this.presentToast(this.user.status);
          }
      });
    } else {
      this.presentToast("Please enter mobile no.")
    }
  }

  register(){
  	console.log("Successfully Register");	
  	this.navCtrl.push(RegisterPage);
  }


  presentToast(message:string){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 3000,
      position : 'top'
    });

    toast.present();
  }

}
