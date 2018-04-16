import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../domain/user';
import { RestaurantPage } from '../restaurant/restaurant';
import { ListDetailPage } from '../list-detail/list-detail';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListDetailPage;
  tab3Root = RestaurantPage;
  
  userProfile:User;

  constructor(params:NavParams) {
  	this.userProfile = params.data;
  	console.log("Tab Page - " + this.userProfile);
  }

}
