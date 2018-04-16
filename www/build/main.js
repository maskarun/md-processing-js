webpackJsonp([6],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListDetailPage = (function () {
    function ListDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get('userProfile');
    }
    ListDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListDetailPage - ' + this.user);
    };
    ListDetailPage.prototype.itemClicked = function (flight) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], { flight: flight });
    };
    ListDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-detail',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\list-detail\list-detail.html"*/'<!--\n  Generated template for the ListDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Booked Flights</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list>\n	  <ion-item *ngFor="let flight of user.bookedFlights" text-wrap>\n	    <ion-thumbnail item-start>\n	      <img src="assets/imgs/{{flight.airline}}.png">\n	    </ion-thumbnail>\n	    <h2>{{flight.fromPlace}} - {{flight.toPlace}}</h2>\n	    <p>Adult - {{flight.adult}}  : Child - {{flight.child}} </p>\n	    <button ion-button clear item-end (click)="itemClicked(flight)">View</button>\n	  </ion-item>\n	</ion-list>\n  \n 	<ion-list *ngIf="!(user.bookedFlights?.length > 0)">\n	  <ion-item>\n	    <h2>No booked Flight</h2>\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\list-detail\list-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListDetailPage);
    return ListDetailPage;
}());

//# sourceMappingURL=list-detail.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_restaurant__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(navCtrl, navParams, toastCtrl, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.appService = appService;
        this.restaurant = new __WEBPACK_IMPORTED_MODULE_2__domain_restaurant__["a" /* Restaurant */]();
        this.question = "";
        this.answers = [];
        this.questionNo = 0;
        this.isAnswerSelect = true;
        this.restaurant = navParams.get('destination');
        // this.restaurant.reqType = 'Type';
        // this.question = this.restaurant.questionMap[1].question;
        // this. = this.restaurant.questionMap[1].arrayList;
        // this.questionNo = this.questionNo + 1;
        this.questionNo = 0;
        this.loadQuestion(this.restaurant);
    }
    QuestionPage.prototype.loadQuestion = function (restaurant) {
        var questionArray = Object.keys(restaurant.questionMap).map(function (key) {
            return restaurant.questionMap[key];
        });
        this.questionArray = questionArray;
        this.loadnextQuestion();
    };
    QuestionPage.prototype.loadnextQuestion = function () {
        if (this.restaurant.requestType == 'Pub' || this.restaurant.requestType == 'Cafes') {
            this.restaurant.restaurants = {};
            this.restaurantDetails();
        }
        else if (this.questionArray != null && this.isAnswerSelect) {
            if (this.questionNo <= (this.questionArray.length - 1)) {
                this.isAnswerSelect = false;
                this.restArray = this.questionArray[this.questionNo];
                this.question = this.restArray.question;
                this.answers = this.restArray.arrayList;
                this.questionNo = this.questionNo + 1;
            }
            else if (this.questionNo > (this.questionArray.length - 1)) {
                console.log("Calling restaurant details :" + this.questionNo);
                this.restaurant.restaurants = {};
                this.restaurantDetails();
            }
        }
        else {
            this.presentToast("Please select any of choice.");
        }
    };
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.questionAnswer = function (questionId, answer) {
        this.isAnswerSelect = true;
        if (answer != null) {
            this.restaurant.requestType = answer;
            this.restArray.answer = answer;
            var key = this.restArray.key;
            this.restaurant.answerMap[key] = this.restArray;
        }
    };
    QuestionPage.prototype.restaurantDetails = function () {
        var _this = this;
        if (this.isAnswerSelect) {
            this.isAnswerSelect = false;
            this.appService.restaurant(this.restaurant).subscribe(function (data) {
                if (data != null) {
                    _this.restaurant = data;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurant_restaurant__["a" /* RestaurantPage */], { restaurant: _this.restaurant });
                }
            });
        }
        else {
            this.presentToast("Please select any of choice.");
        }
    };
    QuestionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\question\question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n	    <ion-title>{{this.restaurant.destination}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list radio-group>\n		<ion-label>{{question}}</ion-label>\n		<ion-item *ngFor="let value of answers">\n			<ion-label>{{value}}</ion-label>\n			<ion-radio value="{{value}}" (ionSelect)="questionAnswer(questionNo, value)"></ion-radio>\n		</ion-item>\n	</ion-list>\n	<ion-row>\n        <ion-col width-50>\n  			<button ion-button block (click)="loadnextQuestion()">Continue</button>\n  		</ion-col>\n  	</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_user__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.appService = appService;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__domain_user__["a" /* User */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginIn = function () {
        var _this = this;
        console.log("Successfully Logged In" + this.user);
        if (this.user.username != null && this.user.password != null) {
            this.appService.checkLogin(this.user).subscribe(function (user) {
                _this.user = user;
                if (_this.user.status == null) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { userProfile: _this.user });
                }
                else {
                    _this.presentToast(_this.user.status);
                }
            });
        }
        else {
            this.presentToast("Please enter mobile no.");
        }
    };
    LoginPage.prototype.register = function () {
        console.log("Successfully Register");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n    	<ion-title>LOGIN</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n    	<ion-label color="primary" floating>Mobile No</ion-label>\n    	<ion-input type="text" [(ngModel)]="user.username"></ion-input>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label color="primary" floating>Password</ion-label>\n    	<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  	</ion-item>\n  	<ion-row>\n        <ion-col width-50>\n  			<button ion-button block (click)="loginIn()">Sign In</button>\n  		</ion-col>\n  	</ion-row>\n\n  	<ion-row>\n          <ion-col align-self:center>\n            <ion-label center>New to App name? <a (click)="register()">Signup Now</a></ion-label>\n        </ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_app_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_user__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, toastCtrl, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.appService = appService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__domain_user__["a" /* User */]();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.validateUser(this.user)) {
            this.appService.registerUser(this.user).subscribe(function (isRegister) {
                _this.isRegister = isRegister;
                if (_this.isRegister) {
                    console.log('Successfully Register - ' + _this.isRegister);
                    _this.user = new __WEBPACK_IMPORTED_MODULE_3__domain_user__["a" /* User */]();
                    _this.presentToast("User registered successfully.");
                }
                else {
                    _this.presentToast("Not able to register now, please try again after sometime.");
                }
            });
        }
    };
    RegisterPage.prototype.validateUser = function (usr) {
        var errorMsg = "";
        if (usr.username == "") {
            errorMsg = "Please enter mobile no.";
        }
        if (usr.name == "") {
            errorMsg = errorMsg + "Please enter name.";
        }
        if (usr.gender == "") {
            errorMsg = errorMsg + "Please select gender.";
        }
        if (usr.dateOfBirth == "") {
            errorMsg = errorMsg + "Please select date of birth.";
        }
        if (usr.password == "") {
            errorMsg = errorMsg + "Please enter password.";
        }
        if (this.confirmPassword != usr.password) {
            errorMsg = errorMsg + "Password is mismatch.";
        }
        if (errorMsg != "") {
            this.presentToast(errorMsg);
            return false;
        }
        return true;
    };
    RegisterPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>REGISTER</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n    	<ion-label color="primary" floating>NAME</ion-label>\n    	<ion-input type="text" [(ngModel)]="user.name"></ion-input>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label color="primary" floating>MOBILE NUMBER</ion-label>\n    	<ion-input type="text" [(ngModel)]="user.username"></ion-input>\n  	</ion-item>\n  	<ion-item>\n		<ion-label>GENDER</ion-label>\n		<ion-select [(ngModel)]="user.gender">\n			<ion-option value="Female">Female</ion-option>\n			<ion-option value="Male">Male</ion-option>\n		</ion-select>\n	</ion-item>\n	<ion-item>\n		<ion-label>DATE OF BIRTH</ion-label>\n		<ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="user.dateOfBirth"></ion-datetime>\n	</ion-item>\n  	<ion-item>\n    	<ion-label color="primary" floating>EMAIL</ion-label>\n    	<ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label color="primary" floating>PASSWORD</ion-label>\n    	<ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  	</ion-item>\n  	<ion-item>\n    	<ion-label color="primary" floating>CONFIRM PASSWORD</ion-label>\n    	<ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n  	</ion-item>\n  	<ion-row>\n        <ion-col width-50>\n  			<button ion-button block (click)="register()">REGISTER</button>\n  		</ion-col>\n  	</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_app_service__["a" /* AppService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list-detail/list-detail.module": [
		683,
		5
	],
	"../pages/login/login.module": [
		684,
		4
	],
	"../pages/question/question.module": [
		685,
		3
	],
	"../pages/register/register.module": [
		686,
		2
	],
	"../pages/restaurant/restaurant.module": [
		687,
		1
	],
	"../pages/view/view.module": [
		688,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
var Restaurant = (function () {
    function Restaurant() {
        this.answerMap = {};
    }
    return Restaurant;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_detail_list_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(params) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__list_detail_list_detail__["a" /* ListDetailPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__["a" /* RestaurantPage */];
        this.userProfile = params.data;
        console.log("Tab Page - " + this.userProfile);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [rootParams]="userProfile" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="userProfile" tabTitle="Booked Flight" tabIcon="jet"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="userProfile" tabTitle="Restaurant" tabIcon="cafe"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_flight__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, appService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.toastCtrl = toastCtrl;
        this.flight = new __WEBPACK_IMPORTED_MODULE_3__domain_flight__["a" /* Flight */]();
        this.value = 0;
        this.user = navParams.get('userProfile');
        this.flight.place = this.user.places;
        this.flight.fromPlace = this.flight.place[0];
        this.flight.toPlace = this.flight.place[0];
    }
    HomePage.prototype.bookNow = function () {
        var _this = this;
        if (this.flight.fromPlace != this.flight.toPlace) {
            this.flight.username = this.user.username;
            this.flight.airline = this.flight.airlines[this.value];
            console.log(this.flight.airline + "---" + this.value);
            this.appService.bookFlight(this.flight).subscribe(function (isBooked) {
                _this.isBooked = isBooked;
                if (_this.isBooked) {
                    _this.value = _this.value + 1;
                    if (_this.value > 3) {
                        _this.value = 0;
                    }
                    var copyflight = Object.assign({}, _this.flight);
                    if (_this.user.bookedFlights == null) {
                        _this.user.bookedFlights = copyflight;
                    }
                    else {
                        _this.user.bookedFlights.push(copyflight);
                    }
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], { flight: copyflight });
                }
            });
        }
        else {
            this.presentToast('From Place and To Place cannot be same');
        }
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>FLIGHT SEARCH</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>FROM</ion-label>\n          <ion-select [(ngModel)]="flight.fromPlace">\n            <ion-option *ngFor="let place of flight.place" value="{{place}}">{{place}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>To</ion-label>\n          <ion-select [(ngModel)]="flight.toPlace">\n            <ion-option *ngFor="let place of flight.place" value="{{place}}">{{place}}</ion-option>\n          </ion-select>\n        </ion-item>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>Departure</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="flight.departureDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>Return</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="flight.returnDate"></ion-datetime>\n        </ion-item>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>Adult</ion-label>\n            <ion-select [(ngModel)]="flight.adult">\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>\n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>\n              <ion-option value="5">5</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>Child</ion-label>\n          <ion-select [(ngModel)]="flight.child">\n            <ion-option value="1">1</ion-option>\n            <ion-option value="2">2</ion-option>\n            <ion-option value="3">3</ion-option>\n            <ion-option value="4">4</ion-option>\n            <ion-option value="5">5</ion-option>\n          </ion-select>\n        </ion-item>      \n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary" stacked>Class</ion-label>\n          <ion-select [(ngModel)]="flight.classType">\n            <ion-option value="Economy Class">Economy Class</ion-option>\n            <ion-option value="Premium Economy">Premium Economy</ion-option>\n            <ion-option value="Business Class">Business Class</ion-option>\n          </ion-select>\n        </ion-item>      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <button ion-button block (click)="bookNow()">Book Now</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.bookedFlights = [];
        this.places = [];
        this.restaurants = [];
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_view_view__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_detail_list_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_question_question__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service_app_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_detail_list_detail__["a" /* ListDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* RestaurantPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/list-detail/list-detail.module#ListDetailPageModule', name: 'ListDetailPage', segment: 'list-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant/restaurant.module#RestaurantPageModule', name: 'RestaurantPage', segment: 'restaurant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_detail_list_detail__["a" /* ListDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* RestaurantPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__pages_service_app_service__["a" /* AppService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        //proxyUrl:string = "https://processing.cfapps.io/processing";
        this.proxyUrl = "http://localhost:8080/processing";
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            //'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
            //'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Origin': '*'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
    }
    AppService.prototype.checkLogin = function (user) {
        return this.http.post(this.proxyUrl + '/api/login', user, this.options).map(this.extractData).catch(this.handleError);
    };
    AppService.prototype.registerUser = function (user) {
        return this.http.post(this.proxyUrl + '/api/register', user, this.options).map(this.extractData).catch(this.handleError);
    };
    AppService.prototype.bookFlight = function (flight) {
        return this.http.post(this.proxyUrl + '/api/bookFlight', flight, this.options).map(this.extractData).catch(this.handleError);
    };
    AppService.prototype.restaurant = function (restaurant) {
        return this.http.post(this.proxyUrl + '/api/restaurant', restaurant, this.options).map(this.extractData).catch(this.handleError);
    };
    AppService.prototype.extractData = function (response) {
        var body = response.json();
        console.log(body);
        return body || {};
    };
    AppService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight; });
var Flight = (function () {
    function Flight() {
        this.departureDate = new Date().toISOString();
        this.returnDate = new Date().toISOString();
        this.adult = '1';
        this.child = '1';
        this.classType = 'Economy Class';
        this.airlines = ['Airindia', 'Indigo', 'JetAirways', 'Spicejet'];
        this.place = [];
    }
    return Flight;
}());

//# sourceMappingURL=flight.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_restaurant__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_app_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPage = (function () {
    function ViewPage(navCtrl, navParams, toastCtrl, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.appService = appService;
        this.flight = navParams.get('flight');
    }
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage.prototype.restaurantType = function () {
        var _this = this;
        var restaurant = new __WEBPACK_IMPORTED_MODULE_2__domain_restaurant__["a" /* Restaurant */]();
        restaurant.destination = this.flight.toPlace;
        // restaurant.reqType = "Dish";
        this.appService.restaurant(restaurant).subscribe(function (data) {
            if (data != null && data.questionMap != null) {
                restaurant = data;
                console.log(restaurant.questionMap);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__question_question__["a" /* QuestionPage */], { destination: restaurant });
            }
            else {
                _this.presentToast("The type is null/empty");
            }
        });
    };
    ViewPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\view\view.html"*/'<!--\n  Generated template for the ViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>VIEW</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<ion-card-content>\n		  <ion-card-title>{{flight.fromPlace}} - {{flight.toPlace}}</ion-card-title>\n		  <p>Adult - {{flight.adult}}  : Child - {{flight.child}}  : Type - {{flight.classType}}</p>\n		</ion-card-content>\n	</ion-card>\n  \n  	<ion-card>\n		<ion-item text-wrap (click)="restaurantType()">\n			<span style="color: red;">Click Here</span>, To explore Nearby Resturants/Cafes by answering this simple question.\n		</ion-item>\n\n	<!--	<ion-list>\n			<button ion-item (click)="restaurantType(\'dining\')">\n				<ion-icon name="beer" item-start></ion-icon>Dining\n			</button>\n			<button ion-item (click)="restaurantType(\'cafe\')">\n				<ion-icon name="cafe" item-start></ion-icon>Cafe\n			</button>\n			<button ion-item (click)="restaurantType(\'pub\')">\n				<ion-icon name="beer" item-start></ion-icon>Pub\n			</button>\n		</ion-list> -->\n  	</ion-card> \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\view\view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__service_app_service__["a" /* AppService */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResturantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantPage = (function () {
    function RestaurantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restaurant = [];
        if (navParams.get('restaurant') && navParams.get('restaurant').restaurants) {
            var rest = navParams.get('restaurant');
            this.getRestaurantList(rest);
        }
        else {
            this.restaurant = navParams.get('userProfile').restaurants;
        }
    }
    RestaurantPage.prototype.getRestaurantList = function (rest) {
        if (rest != null && rest.restaurants != null) {
            var restlist_1 = [];
            Object.keys(rest.restaurants).map(function (key) {
                restlist_1.push(rest.restaurants[key]);
            });
            this.restaurant = restlist_1;
        }
    };
    RestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantPage');
    };
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resturant',template:/*ion-inline-start:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\restaurant\restaurant.html"*/'<!--\n  Generated template for the ResturantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RESTAURANTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let rest of restaurant ">\n  <!--  <img src="img/advance-card-map-madison.png"> -->\n    <ion-item text-wrap>\n      <ion-icon name="restaurant" item-start large></ion-icon>\n      <h2 style="color: green;font-weight: bold;">{{rest.name}}</h2>\n      <p style="font-style: italic;">{{rest.address}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <p item-left>Hours : Opens @ {{rest.startHour}} - Closes @ {{rest.stopHour}}</p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card *ngIf="!(restaurant?.length > 0)">\n    <ion-item text-wrap>\n      <h2 style="color: red; font-style: italic;font-weight: bold;">Cannot find the restaurant info. Please use different search criteria.</h2>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Arun Kumar\Project\Query Processing Semantic\ionic-flight\src\pages\restaurant\restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map