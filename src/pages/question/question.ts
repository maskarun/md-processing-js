import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Restaurant } from '../domain/restaurant';
import { RestArray } from '../domain/restarray';
import { RestaurantPage } from '../restaurant/restaurant';
import { AppService } from '../service/app.service';
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

	restaurant:Restaurant = new Restaurant();
	restArray:RestArray;
	public questionArray:any;
	public question:string = "";
	public answers:any = [];
	public questionNo:number = 0;
	public isAnswerSelect:boolean = true;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController,
		public appService:AppService) {
		this.restaurant = navParams.get('destination');
		// this.restaurant.reqType = 'Type';
		// this.question = this.restaurant.questionMap[1].question;
		// this. = this.restaurant.questionMap[1].arrayList;
		// this.questionNo = this.questionNo + 1;
		this.questionNo = 0;
		this.loadQuestion(this.restaurant);
		
  	}

  	loadQuestion(restaurant:Restaurant){
  		let questionArray = Object.keys(restaurant.questionMap).map(function (key){
  			return restaurant.questionMap[key];
  		});
  		this.questionArray = questionArray;
  		this.loadnextQuestion();
  	}

  	loadnextQuestion(){
  		if(this.restaurant.requestType == 'Pub'|| this.restaurant.requestType == 'Cafes'){
			this.restaurant.restaurants = {};
	  		this.restaurantDetails();
  		}else if(this.questionArray != null && this.isAnswerSelect){
  			if(this.questionNo <= (this.questionArray.length-1)){  			
	  			this.isAnswerSelect = false;
		  		this.restArray = this.questionArray[this.questionNo];  
		  		this.question = this.restArray.question;
		  		this.answers = this.restArray.arrayList;
		  		this.questionNo = this.questionNo + 1;
		  	} else if(this.questionNo > (this.questionArray.length-1)) {
		  		console.log("Calling restaurant details :" + this.questionNo);
		  		this.restaurant.restaurants = {};
		  		this.restaurantDetails();
		  	}
  		} else {
			this.presentToast("Please select any of choice.");
		}
  	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad QuestionPage');
	}

	questionAnswer(questionId, answer){
		this.isAnswerSelect = true;
		if(answer != null){
			this.restaurant.requestType = answer;
			this.restArray.answer = answer;
			let key = this.restArray.key;
			this.restaurant.answerMap[key] = this.restArray;
		}
	}

	restaurantDetails(){
		if(this.isAnswerSelect){
			this.isAnswerSelect = false;
			this.appService.restaurant(this.restaurant).subscribe(
				data =>{
					if(data != null){
						this.restaurant = data;
						this.navCtrl.push(RestaurantPage, {restaurant:this.restaurant});
					}
				}
			);
		} else {
			this.presentToast("Please select any of choice.");
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
