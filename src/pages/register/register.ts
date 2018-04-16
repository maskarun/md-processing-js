import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AppService } from '../service/app.service';
import { User } from '../domain/user';
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

	user:User = new User();
	isRegister:boolean;
  confirmPassword:string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController,
    public appService:AppService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	register(){
    if(this.validateUser(this.user)){
  		this.appService.registerUser(this.user).subscribe(
  			isRegister => {
  				this.isRegister = isRegister
          if(this.isRegister) {
            console.log('Successfully Register - ' + this.isRegister);
            this.user = new User();
            this.presentToast("User registered successfully.");
          } else {
            this.presentToast("Not able to register now, please try again after sometime.");
          }    
  		});
    }
	}

  validateUser(usr:User):boolean{
    let errorMsg:string = "";
    if(usr.username == ""){
      errorMsg = "Please enter mobile no.";
    }
    if(usr.name == ""){
      errorMsg = errorMsg + "Please enter name.";
    }
    if(usr.gender == ""){
      errorMsg = errorMsg + "Please select gender.";
    }
    if(usr.dateOfBirth == ""){
      errorMsg = errorMsg + "Please select date of birth.";
    }
    if(usr.password == ""){
      errorMsg = errorMsg + "Please enter password.";
    }
    if(this.confirmPassword != usr.password){
      errorMsg = errorMsg + "Password is mismatch.";
    }
    if(errorMsg != ""){
      this.presentToast(errorMsg);
      return false;
    } 
    return true;
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
