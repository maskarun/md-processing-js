import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { User } from '../domain/user';
import { Restaurant } from '../domain/restaurant';
/**
 * Generated class for the ResturantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resturant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

	restaurant:any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		if(navParams.get('restaurant') && navParams.get('restaurant').restaurants){
			let rest:Restaurant = navParams.get('restaurant');
			this.getRestaurantList(rest);
		} else {
			this.restaurant = navParams.get('userProfile').restaurants;
		}
	}

	getRestaurantList(rest:Restaurant){
		if(rest != null && rest.restaurants != null) {
			let restlist:any = [];
			Object.keys(rest.restaurants).map(function (key){
	  			restlist.push(rest.restaurants[key]);
	  		});
	  		this.restaurant = restlist;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RestaurantPage');
	}

}
