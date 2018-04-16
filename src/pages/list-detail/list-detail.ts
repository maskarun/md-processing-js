import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ViewPage } from '../view/view';
import { User } from '../domain/user';
import { Flight } from '../domain/flight';
/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetailPage {

  user:User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('userProfile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage - ' + this.user);
  }

  itemClicked(flight:Flight){
  	this.navCtrl.push(ViewPage, {flight : flight});
  }

}
