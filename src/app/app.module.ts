import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ViewPage } from '../pages/view/view';
import { ListDetailPage } from '../pages/list-detail/list-detail';
import { QuestionPage } from '../pages/question/question';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { AppService } from '../pages/service/app.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ViewPage,
    ListDetailPage,
    QuestionPage,
    RestaurantPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ViewPage,
    ListDetailPage,
    QuestionPage,
    RestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
