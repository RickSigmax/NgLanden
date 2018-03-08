webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_dashboard_country_dashboard_component__ = __webpack_require__("./src/app/country-dashboard/country-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__ = __webpack_require__("./src/app/country-list/country-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_detail_country_detail_component__ = __webpack_require__("./src/app/country-detail/country-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__country_dashboard_country_dashboard_component__["a" /* CountryDashboardComponent */] },
    { path: 'list/:id', component: __WEBPACK_IMPORTED_MODULE_3__country_list_country_list_component__["a" /* CountryListComponent */] },
    { path: 'detail/:name', component: __WEBPACK_IMPORTED_MODULE_4__country_detail_country_detail_component__["a" /* CountryDetailComponent */] },
    {
        //catch all route
        path: '**', redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class = \"jumbotron\" >   \n        <table>\n            <tr>\n                <td>\n                        <img src=\"../assets/img/angularIcon.png\"/>\n                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n                </td>\n                <td>\n                        <h1>{{title}}</h1>\n                        <h2>Angular app made by Rick</h2>\n                </td>\n            </tr>\n        </table>\n        \n       \n    </div>\n    \n            <router-outlet></router-outlet>\n        <!-- <div class=\"panel-heading\">\n            Status\n        </div>\n        <div class=\"panel-body\">\n            body\n        </div> -->\n    \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NgLanden';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_dashboard_country_dashboard_component__ = __webpack_require__("./src/app/country-dashboard/country-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__country_detail_country_detail_component__ = __webpack_require__("./src/app/country-detail/country-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__country_list_country_list_component__ = __webpack_require__("./src/app/country-list/country-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__country_search_country_search_component__ = __webpack_require__("./src/app/country-search/country-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_clock_service__ = __webpack_require__("./src/app/shared/services/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_favorite_service__ = __webpack_require__("./src/app/shared/services/favorite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_region_service__ = __webpack_require__("./src/app/shared/services/region.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//MODULE IMPORTS


//import {HttpModule} from '@angular/http';


 //Angular Google Maps
//COMPONENT IMPORTS





//SERVICE IMPORTS




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            //Declarations om alle componenten in te declareren;
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__country_dashboard_country_dashboard_component__["a" /* CountryDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__country_detail_country_detail_component__["a" /* CountryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__country_list_country_list_component__["a" /* CountryListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__country_search_country_search_component__["a" /* CountrySearchComponent */],
            ],
            //Import om alle modules in te laden Dependency Injection;
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD23cc2r8zHIAISUvlWjp7_CDFQaX5X3IQ'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_services_country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_13__shared_services_region_service__["a" /* RegionService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_clock_service__["a" /* ClockService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_favorite_service__["a" /* FavoriteService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country-dashboard/country-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "a:hover, a:focus {\r\n  color: #2a6496;\r\n  text-decoration: none;\r\n}\r\n.square-service-block{\r\n    position:relative;\r\n    overflow:hidden;\r\n    margin:15px auto;\r\n    }\r\n.square-service-block a {\r\n  background-color: #e74c3c;\r\n  border-radius: 5px;\r\n  display: block;\r\n  padding: 60px 20px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.square-service-block a:hover{\r\n  background-color: rgba(231, 76, 60, 0.8);\r\n  border-radius: 5px;\r\n}\r\n.ssb-icon {\r\n  color: #fff;\r\n  display: inline-block;\r\n  font-size: 28px;\r\n  margin: 0 0 20px;\r\n}\r\nh2.ssb-title {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 200;\r\n  margin:0;\r\n  padding:0;\r\n  text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/country-dashboard/country-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"panel panel-primary\">\n  <div class=\"panel-heading\">\n      <table>\n          <tr>\n              <td><h3>Landen zoeker:</h3></td>\n          </tr>\n        </table>\n  </div>\n  <div class=\"panel-body\">\n      <app-country-search></app-country-search> \n  </div> \n</div>\n<div class = \"panel panel-primary\">\n    <div class=\"panel-heading\">\n    <table>\n        <tr>\n            <td> <h3>Werelddeel kiezer:</h3> </td>\n        </tr>\n    </table>\n</div>\n<!-- ------------------------------------------------------------------------------------------------------------------- -->\n<div class=\"container\" >\n    <div class=\"row\" >\n        <div class=\"col-md-4\" *ngFor=\"let region of regions | slice:0:3\">\n          <div class=\"square-service-block\">\n              <a routerLink=\"/list/{{region.id}}\">\n                <div class=\"ssb-icon\">\n                  <img src=\"../assets/img/{{region.icon}}\" width=\"60%\">\n                </div>\n                <h2 class=\"ssb-title\">{{region.nameNL}}</h2>  \n              </a>\n          </div>\n      </div>  \n    </div>\n    <div class=\"row\">  \n      <div class=\"col-md-4\" *ngFor=\"let region of regions | slice:3\">\n          <div class=\"square-service-block\">\n              <a routerLink=\"/list/{{region.id}}\">\n                <div class=\"ssb-icon\"><img src=\"../assets/img/{{region.icon}}\" width=\"60%\"></div>\n                <h2 class=\"ssb-title\">{{region.nameNL}}</h2>  \n              </a>\n          </div>\n        </div>\n      </div>      \n  </div>\n</div> \n<!-- ------------------------------------------------------------------------------------------------------------------- -->\n<div *ngIf='favorites.length > 0' class = \"panel panel-primary\">\n  <div class=\"panel-heading\">\n      <table><tr>\n          <td> <h3>Favoriete landen:</h3> </td>\n          <!-- <td> <div style=\"width:30px\"> &nbsp;</div></td>\n          <td> <div *ngIf=\"country\"><h2>{{country.name | uppercase }} </h2></div></td> -->\n      </tr></table>\n  </div>\n  <div class=\"panel-body\">\n      <ul>\n        <li *ngFor='let fav of favorites'>{{fav}}</li>\n      </ul>\n  </div> \n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/country-dashboard/country-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_region_service__ = __webpack_require__("./src/app/shared/services/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_favorite_service__ = __webpack_require__("./src/app/shared/services/favorite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryDashboardComponent = /** @class */ (function () {
    function CountryDashboardComponent(regionService, favoriteService) {
        this.regionService = regionService;
        this.favoriteService = favoriteService;
        this.favorites = [];
    }
    CountryDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('country-dashboard.comp: ngOnInit()');
        this.regionService.getRegions().subscribe(function (regionData) {
            _this.regions = regionData; // 1. success handler
        }, function (err) { return console.log(err); }, // 2. error handler
        function () { return console.log('Getting regions complete...'); } // 3. complete handler
        );
        this.favoriteService.favorites.subscribe(function (f) {
            return _this.setToFavorites(f);
        }, function (err) { return console.log(err); }, // 2. error handler
        function () { return console.log('Set favorite complete...'); } // 3. complete handler
        );
    };
    CountryDashboardComponent.prototype.setToFavorites = function (favorite) {
        console.log('country-dashboard.comp: setToFavorites():', favorite);
        this.favorites.push(favorite);
    };
    CountryDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country-dashboard',
            template: __webpack_require__("./src/app/country-dashboard/country-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/country-dashboard/country-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_region_service__["a" /* RegionService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_favorite_service__["a" /* FavoriteService */]])
    ], CountryDashboardComponent);
    return CountryDashboardComponent;
}());



/***/ }),

/***/ "./src/app/country-detail/country-detail.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 450px; \r\n}"

/***/ }),

/***/ "./src/app/country-detail/country-detail.component.html":
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-primary btn-lg\" *ngIf='showBack' (click)=\"goBack()\">terug</button>\n<br *ngIf='showBack' /><br *ngIf='showBack' /> \n<div class = \"panel panel-primary\">\n    <div class=\"panel-heading\">\n        <table border=\"0\"><tr>\n            <td style=\"min-width:120px;\"> <h3>Land&nbsp;details:</h3> </td>\n            <td style=\"width:94%;text-align:center;\"> <div *ngIf=\"country\"><h2> {{country.nameNL | uppercase }} </h2></div></td>\n            <td style=\"min-width:10px;text-align:center;\" > \n                 <div [hidden]=\"!isFavorite\"><h3>Favoriet!</h3></div>   \n            </td>\n            <td style=\"width:6%;text-align:center;\">&nbsp;</td>\n            <td style=\"min-width:160px;text-align:right;\" >    \n                <div *ngIf=\"country\" >\n                    <button (click)=\"rate(1)\" class=\"btn btn-lg btn-success\">+1</button>&nbsp;\n                    <button (click)=\"rate(-1)\" class=\"btn btn-lg btn-danger\">-1</button>&nbsp;\n                    <button (click)=\"favorite()\" class=\"btn btn-lg btn-default\">favorite</button>\n                </div>\n            </td>\n        </tr></table>\n    </div>\n    <div class=\"panel-body\">        \n        <div *ngIf=\"country\"> \n            <table border=\"0\" style=\"width:100%;\"> \n                <tr>\n                    <td style=\"width:60%;min-width:300px;\">\n                         <table class=\"table table-bordered\" style=\"font-size: large;font-weight:bold\">\n                            <tr><td style=\"width:170px;\">Land:</td><td>{{country.name}}</td></tr>\n                            <tr><td>Hoofdstad:</td><td>{{country.capital}}</td></tr>\n                            <tr><td>Aantal inwoners:</td><td>{{country.population}}</td></tr>\n                            <tr><td>Tijd ({{country.timeZone}}):</td><td> {{time | date:'HH:mm:ss'}}</td></tr>\n                            <!--<tr><td>fulljson:</td><td><div [innerHTML]=\"country.rawJson | json\"></div></td></tr> -->\n                        </table> \n                    </td>\n                    <td style=\"width:10%\">&nbsp;</td>\n                    <td style=\"width:30%;min-width:120px;max-width:220px; text-align:right;vertical-align:top;\">\n                        <div style=\"border:1px solid black;\"><img src='{{country.flag}}' width=\"100%\" /></div> \n                    </td>       \n                </tr>\n            </table>     \n        </div>\n    </div> \n    <div class=\"panel-body\">\n        <div style=\"border: 1px solid gray;\"> \n            <agm-map [zoom]=\"3\" [latitude]=\"country.lat\" [longitude]=\"country.lng\" *ngIf='country'>\n                <agm-marker [latitude]=\"country.lat\" [longitude]=\"country.lng\"> </agm-marker>\n            </agm-map>\n        </div>  \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/country-detail/country-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_country_model__ = __webpack_require__("./src/app/shared/model/country.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_clock_service__ = __webpack_require__("./src/app/shared/services/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_favorite_service__ = __webpack_require__("./src/app/shared/services/favorite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountryDetailComponent = /** @class */ (function () {
    function CountryDetailComponent(countryService, route, location, clockService, favoriteService) {
        this.countryService = countryService;
        this.route = route;
        this.location = location;
        this.clockService = clockService;
        this.favoriteService = favoriteService;
        this.hourOffset = 0;
        this.showBack = false;
        this.staticDateTime = new Date();
        this.rating = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.fav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isFavorite = false;
    }
    CountryDetailComponent.prototype.ngOnInit = function () {
        console.log('country-detail.comp: ngOnInit()');
        this.getCountry();
        this.getTime();
    };
    CountryDetailComponent.prototype.ngOnChanges = function (change) {
        console.log('country-detail.comp: ngOnChanges(change): ', change);
        if (this.country) {
            this.calcHourOffset();
            this.isFavorite = this.country.favorite;
        }
    };
    CountryDetailComponent.prototype.ngOnDestroy = function () {
        console.log('country-detail.comp: ngOnDestroy()');
        this.clockServiceSubscription.unsubscribe();
    };
    CountryDetailComponent.prototype.getCountry = function () {
        var _this = this;
        console.log('country-detail.comp: getCountry()');
        var name = this.route.snapshot.paramMap.get('name');
        if (!name) {
            this.showBack = false;
            name = this.country.name;
        }
        else {
            this.showBack = true;
        }
        this.countryService.getCountry(name).subscribe(function (x) {
            _this.country = x;
            _this.calcHourOffset();
        }, // 1. success handler
        function (// 1. success handler
            err) { return console.log(err); }, // 2. error handler
        function () { return console.log('Get country complete...'); }); // 3. complete handler
    };
    CountryDetailComponent.prototype.calcHourOffset = function () {
        console.log('country-detail.comp: calcHourOffset()');
        //calculate new UTC hour      
        var timeHour = (new Date()).getHours();
        var houre = +this.country.timeZone.slice(3, 6);
        this.hourOffset = timeHour - 2 + houre;
    };
    CountryDetailComponent.prototype.getTime = function () {
        var _this = this;
        console.log('country-detail.comp: getTime()');
        //calculate new UTC houre      
        this.clockServiceSubscription = this.clockService.getClock().subscribe(function (t) {
            //console.log('time changed');
            t.setUTCHours(_this.hourOffset);
            _this.time = t;
        });
    };
    CountryDetailComponent.prototype.goBack = function () {
        console.log('country-detail.comp: goBack()');
        this.location.back();
    };
    CountryDetailComponent.prototype.rate = function (num) {
        console.log('country-detail.comp: rate()', this.country.name, ': ', num);
        this.rating.emit(num);
    };
    CountryDetailComponent.prototype.favorite = function () {
        console.log('country-detail.comp:favorite()', this.country.name);
        this.isFavorite = !this.isFavorite;
        //this.fav.emit(this.isFavorite);
        console.log('set favorite country:', this.country.name);
        this.favoriteService.favorites.next(this.country.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_country_model__["a" /* Country */] //= new Country('test1','test2','test3');
        )
    ], CountryDetailComponent.prototype, "country", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CountryDetailComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CountryDetailComponent.prototype, "fav", void 0);
    CountryDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country-detail',
            template: __webpack_require__("./src/app/country-detail/country-detail.component.html"),
            styles: [__webpack_require__("./src/app/country-detail/country-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_clock_service__["a" /* ClockService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_favorite_service__["a" /* FavoriteService */]])
    ], CountryDetailComponent);
    return CountryDetailComponent;
}());



/***/ }),

/***/ "./src/app/country-list/country-list.component.css":
/***/ (function(module, exports) {

module.exports = ".myHeight-small{\r\n    font-size:large; \r\n    overflow-y:auto; \r\n    height:18vh;\r\n}\r\n\r\n.myHeight-large{\r\n    font-size:large; \r\n    overflow-y:auto; \r\n    height:55vh;\r\n}"

/***/ }),

/***/ "./src/app/country-list/country-list.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary btn-lg\" (click)=\"goBack()\">terug</button>\n<br/><br/>\n\n<div class = \"panel panel-primary\">\n  <div class=\"panel-heading\">\n      <table><tr>\n          <td style=\"min-width:120px;\"> <h3>Landen van:</h3> </td>\n          <td style=\"width:94%;text-align:center;\"> <div *ngIf=\"region\"><h2>{{region.nameNL | uppercase }} </h2></div></td>\n          <td style=\"min-width:10px;text-align:center;\">&nbsp;</td>\n          <td style=\"width:6%;text-align:center;\">&nbsp;</td>\n          <td style=\"min-width:160px;text-align:right;\" >&nbsp; </td>\n      </tr></table>\n  </div>\n  <div class=\"panel-body\">\n    <!-- <div *ngIf=\"region\" style=\"font-size:large; overflow-y:auto; height:25vh\"> -->\n        <div *ngIf=\"region\" [ngClass]=\"myHeight\" >\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\"  *ngFor='let country of countries' (click)='setSelected(country)'>\n          <!-- <a routerLink=\"/detail/{{country.name}}\">{{country.name}}</a>   -->\n          <table border=\"0\" style=\"padding-top:0px; margin-top:0px;top:0px;\">\n            <tr>\n                <td style=\"min-width:35px;\">&nbsp;<span class=\"badge badge-dark\">{{country.rating}}</span></td>                \n                <td style=\"width:88%;\">&nbsp;{{country.name}}</td>     \n                <td style=\"min-width:80px; font-weight: bold;\">&nbsp;<span *ngIf='country.favorite'>favoriet!</span></td>   \n                <td style=\"width:12%;\">&nbsp;</td>                              \n            </tr>\n          </table>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<app-country-detail *ngIf='selectedCountry'  [country]='selectedCountry' (rating)=\"updateRating($event)\" ></app-country-detail>\n"

/***/ }),

/***/ "./src/app/country-list/country-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_region_model__ = __webpack_require__("./src/app/shared/model/region.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_region_service__ = __webpack_require__("./src/app/shared/services/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_favorite_service__ = __webpack_require__("./src/app/shared/services/favorite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountryListComponent = /** @class */ (function () {
    function CountryListComponent(countryService, regionService, route, location, favoriteService) {
        this.countryService = countryService;
        this.regionService = regionService;
        this.route = route;
        this.location = location;
        this.favoriteService = favoriteService;
        this.myHeight = "myHeight-large";
    }
    CountryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('country-list.comp: ngOnInit()');
        this.getRegion();
        this.favoriteService.favorites.subscribe(function (f) { return _this.setFavorite(f); });
    };
    CountryListComponent.prototype.setFavorite = function (name) {
        console.log('Country-List.comp: set favorite(): ', name);
        this.countries.forEach(function (c) {
            if (c.name === name) {
                console.log('Country-List.comp: country found');
                c.favorite = true;
            }
        });
    };
    CountryListComponent.prototype.setSelected = function (country) {
        console.log('country-list.comp: setSelected()');
        this.selectedCountry = country;
        this.myHeight = "myHeight-small";
    };
    CountryListComponent.prototype.getRegion = function () {
        var _this = this;
        console.log('country-list.comp: getRegion()');
        var id = +this.route.snapshot.paramMap.get('id');
        console.log('region.id = ' + id);
        //var regions : Region[];
        this.doFilter = true;
        if (id === 1) {
            console.log('id is 1');
            this.doFilter = false;
        }
        this.regionService.getRegion(id).subscribe(function (x) {
            _this.region = x;
            _this.getCountries(); // 1. success handler
        }, function (err) { return console.log(err); }, // 2. error handler
        function () { return console.log('Getting the region'); }); // 3. complete handler
    };
    CountryListComponent.prototype.goBack = function () {
        console.log('country-list.comp: goBack()');
        this.location.back();
    };
    CountryListComponent.prototype.getCountries = function () {
        var _this = this;
        console.log('country-list.comp: getCountries()');
        this.countryService.getAllCountries().subscribe(function (x) {
            _this.countries = x;
            if (_this.doFilter) {
                console.log('filter countries');
                _this.countries = _this.countries.filter(function (c) { return c.region === _this.region.name; });
            }
        }, // 1. success handler
        function (// 1. success handler
            err) { return console.log(err); }, // 2. error handler
        function () { return console.log('get countries complete...'); } // 3. complete handler
        );
    };
    CountryListComponent.prototype.updateRating = function (rating) {
        console.log('country-list.comp: updateRating()');
        this.selectedCountry.rating += rating;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_model_region_model__["a" /* Region */])
    ], CountryListComponent.prototype, "region", void 0);
    CountryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country-list',
            template: __webpack_require__("./src/app/country-list/country-list.component.html"),
            styles: [__webpack_require__("./src/app/country-list/country-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_region_service__["a" /* RegionService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_favorite_service__["a" /* FavoriteService */]])
    ], CountryListComponent);
    return CountryListComponent;
}());



/***/ }),

/***/ "./src/app/country-search/country-search.component.css":
/***/ (function(module, exports) {

module.exports = ".rick-input{\r\n    width: 420px; \r\n    font-size: x-large;\r\n}\r\n.rick-block{\r\n    padding-left:10px;\r\n    width: 420px;\r\n    font-size: x-large;\r\n    font-style: bold;\r\n    background-color: rgb(234, 236, 239);  \r\n    /* background-color: rgb(105, 169, 241)  */\r\n}\r\n.rick-block:hover{\r\n    background-color:rgb(221, 78, 65); \r\n}\r\na{\r\n    color: rgb(10, 10, 10);\r\n}\r\na:hover{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/country-search/country-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\" style=\"text-align: center; display:inline-block;\" >\n    <div style=\"display:inline-block\">\n    <table border=\"0\">\n    <tr>\n      <td style=\"width:40%\">&nbsp;</td>\n      <td style=\"min-width:60px\"><h3>Zoek:</h3></td>\n       <td style=\"min-width:100px\"><input class=\"rick-input\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" width=\"80%\" /></td>\n      <td style=\"width:60%\">&nbsp;</td> \n    </tr>\n    <tr>\n      <td>&nbsp;</td>\n      <td>&nbsp;</td>\n      <td>\n          <div class=\"rick-block\" *ngFor=\"let country of countries$ | async | slice:0:5\">\n             <a routerLink=\"/detail/{{country.name}}\">\n                <div style=\"text-align: left;\"> \n                  {{country.name}}   {{country.nameNL}}         \n  \n                </div>         \n             </a>          \n          </div>\n      </td>\n      <td>&nbsp;</td>\n    </tr>\n    </table>\n  </div>\n  </div>      \n\n\n<!-- <div id=\"search-component\" style=\"text-align: center; display:inline-block; width:100vh\" >\n  <div style=\"display:inline-block\">\n  <table border=\"1\">\n  <tr>\n    <td><h3>Zoek:</h3> </td>\n    <td><span>&nbsp;&nbsp;&nbsp;</span></td>\n    <td><input class=\"rick-input\" #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" width=\"100%\" /></td>\n  </tr>\n  <tr>\n    <td><span>&nbsp;&nbsp;&nbsp;</span></td>\n    <td><span>&nbsp;&nbsp;&nbsp;</span></td>\n    <td>\n        <div class=\"rick-block\" *ngFor=\"let country of countries$ | async | slice:0:5\">\n           <a routerLink=\"/detail/{{country.name}}\">\n              <div style=\"text-align: left;\"> \n                {{country.name}}   {{country.nameNL}}         \n\n              </div>         \n           </a>          \n        </div>\n    </td>\n  </tr>\n  </table>\n</div>\n</div>       -->\n  <!-- <div *ngIf=\"countries$?.length < 20\">\n    <p>hallo</p>\n  </div> -->\n  <!-- <ul class=\"search-result\"> -->\n\n\n \n"

/***/ }),

/***/ "./src/app/country-search/country-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountrySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountrySearchComponent = /** @class */ (function () {
    function CountrySearchComponent(countryService) {
        this.countryService = countryService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    CountrySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('country-search.comp: ngOnInit()');
        this.countries$ = this.searchTerms.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["debounceTime"])(500), // wait 500 ms  
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["distinctUntilChanged"])(), // request only when term has changed
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (term) { return _this.countryService.searchCountry(term); }) //start country service search when term is adjusted by the user
        );
    };
    CountrySearchComponent.prototype.search = function (term) {
        console.log('country-search.comp: search() : ', term);
        this.searchTerms.next(term);
    };
    CountrySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country-search',
            template: __webpack_require__("./src/app/country-search/country-search.component.html"),
            styles: [__webpack_require__("./src/app/country-search/country-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_country_service__["a" /* CountryService */]])
    ], CountrySearchComponent);
    return CountrySearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/country.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
var Country = /** @class */ (function () {
    function Country(name, capital, region, flag, population, nameNL, timeZone, lat, lng, rawJson) {
        this.name = name;
        this.capital = capital;
        this.region = region;
        this.flag = flag;
        this.population = population;
        this.nameNL = nameNL;
        this.timeZone = timeZone;
        this.lat = lat;
        this.lng = lng;
        this.rawJson = rawJson;
        this.favorite = false;
        this.rating = 0;
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/shared/model/region.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Region; });
var Region = /** @class */ (function () {
    function Region(id, name, nameNL, rating) {
        this.id = id;
        this.name = name;
        this.nameNL = nameNL;
        this.rating = rating;
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/shared/services/clock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockService = /** @class */ (function () {
    function ClockService() {
    }
    //HORRIBLE WRONG CODE!
    // getClock(hours: number): Observable<Date>
    // {
    //   this.clock = Observable.interval(1000).map(tick=> {
    //      var d : Date = new Date();
    //      d.setUTCHours(hours);
    //      return d;
    //     }
    //     ).share();
    //    // ((new Date()).setHours((new Date()).getHours() + hours))).share();
    //   return this.clock ;
    // }
    ClockService.prototype.getClock = function () {
        this.clock = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000).map(function (tick) { return new Date(); }).share();
        return this.clock;
    };
    ClockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ClockService);
    return ClockService;
}());



/***/ }),

/***/ "./src/app/shared/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_country_model__ = __webpack_require__("./src/app/shared/model/country.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.baseApiUrl = "https://restcountries.eu/rest/v2";
    }
    CountryService.prototype.getAllCountries = function () {
        var _this = this;
        return this.http.get(this.baseApiUrl + '/all').map(function (res) { return _this.myMap(res); });
    };
    CountryService.prototype.searchCountry = function (term) {
        var _this = this;
        if (!term) {
            // if not search term, return empty hero array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        term = term.trim();
        return this.http.get(this.baseApiUrl + '/name/' + term + '?fields=name').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log('found countries matching ' + term); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('searchCountry', [])), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return _this.myMap(res); }));
    };
    CountryService.prototype.getCountry = function (name) {
        var _this = this;
        var url = this.baseApiUrl + '/name/' + name + '?fullText=true';
        console.log(url);
        return this.http.get(url).map(function (res) { return _this.myMapCounty(res); });
    };
    CountryService.prototype.myMapCounty = function (input) {
        var countries = [];
        input.forEach(function (element) {
            countries.push(new __WEBPACK_IMPORTED_MODULE_4__model_country_model__["a" /* Country */](element.name, element.capital, element.region, element.flag, Number(element.population).toLocaleString('nl-NL'), element ? element.translations["nl"] : '', element.timezones ? element.timezones[0] : '', element.latlng ? element.latlng[0] : 52.14180, element.latlng ? element.latlng[1] : 6.50276, element));
        });
        return countries[0];
    };
    CountryService.prototype.myMap = function (input) {
        var countries = [];
        input.forEach(function (element) {
            countries.push(new __WEBPACK_IMPORTED_MODULE_4__model_country_model__["a" /* Country */](element.name, element.capital, element.region, element.flag, Number(element.population).toLocaleString('nl-NL'), element.translations ? element.translations["nl"] : '', element.timezones ? element.timezones[0] : '', element.latlng ? element.latlng[0] : 52.14180, element.latlng ? element.latlng[1] : 6.50276, element.capital ? element.capital : ''));
        });
        return countries;
    };
    CountryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log('${operation} failed: ${error.message}');
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    CountryService.prototype.log = function (message) {
        console.log(message);
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/shared/services/favorite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoriteService = /** @class */ (function () {
    function FavoriteService() {
        this.favorites = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    FavoriteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/shared/services/region.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/find.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Http} from '@angular/http';





var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
    }
    // retourneer alle regions
    RegionService.prototype.getRegions = function () {
        return this.http.get('../assets/data/regions.json');
    };
    // retourneer alle regions
    RegionService.prototype.getRegion = function (id) {
        return this.http.get('../assets/data/regions.json').map(function (rs) { return rs.find(function (r) { return r.id === id; }); });
        // return this.http.get<Region[]>('../assets/data/regions.json').map((regions: Region[]) => {
        // 	return regions.find(r=>r.name === 'World')});
    };
    RegionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map