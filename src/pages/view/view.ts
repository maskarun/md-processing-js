import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { Flight } from '../domain/flight';
import { Restaurant } from '../domain/restaurant';
import { QuestionPage } from '../question/question';
import { AppService } from '../service/app.service';
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  flight:Flight;

  constructor(public navCtrl: NavController,  public navParams: NavParams, public toastCtrl:ToastController,
    public appService:AppService) {
    this.flight = navParams.get('flight');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  restaurantType(){
    let restaurant:Restaurant = new Restaurant();
    restaurant.destination = this.flight.toPlace;
    // restaurant.reqType = "Dish";
    this.appService.restaurant(restaurant).subscribe(
      data => {
        if(data != null && data.questionMap != null){
          restaurant = data;  
          console.log(restaurant.questionMap);
          this.navCtrl.push(QuestionPage, {destination:restaurant});
        } else {
          this.presentToast("The type is null/empty");
        }
      }
    );	
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
