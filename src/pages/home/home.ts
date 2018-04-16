import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { ViewPage } from '../view/view';
import { Flight } from '../domain/flight';
import { User } from '../domain/user';
import { AppService } from '../service/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	flight:Flight = new Flight();
	user:User;
	isBooked:boolean;
	value:number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppService,
				public toastCtrl:ToastController) {
    	this.user = navParams.get('userProfile');
    	this.flight.place = this.user.places;
    	this.flight.fromPlace = this.flight.place[0];
    	this.flight.toPlace = this.flight.place[0];
	}

	bookNow(){
		if(this.flight.fromPlace != this.flight.toPlace){
			this.flight.username = this.user.username;
			this.flight.airline = this.flight.airlines[this.value];
			console.log(this.flight.airline +"---"+ this.value);
			this.appService.bookFlight(this.flight).subscribe(
				isBooked => {
					this.isBooked = isBooked;
					if(this.isBooked){
						this.value = this.value + 1;
						if(this.value > 3){
							this.value = 0;
						}

						let copyflight = Object.assign({}, this.flight);
						if(this.user.bookedFlights == null){
							this.user.bookedFlights = copyflight;
						} else {
							this.user.bookedFlights.push(copyflight);
						}
						this.navCtrl.push(ViewPage, {flight : copyflight});	
					}		
				}
			);
		} else {
			this.presentToast('From Place and To Place cannot be same');
		}
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
