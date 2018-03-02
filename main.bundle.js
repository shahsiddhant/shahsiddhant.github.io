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

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  background-color: #E2A695;\n  text-align: center;\n}\n\n.content {\n  text-align: left;\n  top: 30px;\n  position: absolute;\n  margin: 0;\n  color: #f9f9f9;\n  padding: 30px;\n}\n\n.content h2 {\n  font-size: 100px;\n}\n\n.content p {\n  font-size: 30px;\n  margin: 30px 0;\n}\n\n/* Smartphones (portrait) ----------- */\n\n@media only screen and (max-width: 425px) {\n  /* Styles */\n\n  .content {\n    position: unset;\n    padding-top: 100px;\n  }\n  .content h2 {\n    font-size: 50px;\n  }\n  .content p {\n    font-size: 20px;\n    margin: 30px 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <img src=\"{{source}}\"> -->\n  <div class=\"content\">\n    <h2>Siddhant Shah</h2>\n    <p>Bombay transplant, self-taught UI Designer/Developer, eccentric digital artisan.\n      <br> Curious about new technology and collaborative in art and experience.\n      <br> Enjoys coding challenges, tacos, and modern furniture.</p>\n    <p>Siddhant looks for social narratives in the art he personally curates\n      <br> and believes in the work of Don Hertzfeldt as the zeitgeist. Filmmaking is an outlet for his wandering mind,\n        <br> and he hopes to transform audiences with his eccentric style.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_details_view_details_component__ = __webpack_require__("./src/app/view-details/view-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_6__work_work_component__["a" /* WorkComponent */] },
    { path: 'work/:id', component: __WEBPACK_IMPORTED_MODULE_10__view_details_view_details_component__["a" /* ViewDetailsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: '/work', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__view_details_view_details_component__["a" /* ViewDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background-color: white;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.content {\n  text-align: left;\n  margin: 0;\n  color: #f9f9f9;\n  padding: 30px;\n  position: absolute;\n  top: 30%;\n}\n\nimg {\n  max-height: 100vh;\n}\n\n.content p {\n  font-size: 30px;\n  margin: 30px 0;\n}\n\n.title {\n  font-size: 100px;\n  font-weight: 700;\n}\n\n.view-details-button {\n  background: none;\n  font-size: 20px;\n\n  border: none;\n  color: #f9f9f9;\n  padding: 10px 0;\n}\n\n.view-details-button:hover {\n  cursor: pointer;\n  color: #fff;\n\n  /* border-bottom: 3px solid #f9f9f9; */\n}\n\n/* Smartphones (portrait) ----------- */\n\n@media only screen and (max-width: 425px) {\n    /* Styles */\n    .title {\n      font-size: 50px;\n    }\n    .content p {\n      font-size: 20px;\n      margin: 30px 0;\n    }\n  }\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let work of works\">\n  <img src=\"{{work.source}}\">\n  <div class=\"content\">\n    <span class=\"title\">{{work.title}}</span>\n      <p *ngFor=\"let element of work.description\">{{element}}</p>\n      <button [routerLink]=\"[work.id]\" class=\"view-details-button\">View Case Study</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.works = [{
                'id': 'acid',
                'title': 'acid.',
                'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/acid2.png'
            },
            {
                'id': 'Thesis',
                'title': 'Animation Thesis',
                'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing eli123'],
                'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/website.jpg'
            },
            {
                'id': 'CottageCourage',
                'title': 'Cottage Courage',
                'description': ['Lorem ipsum dolor sit amet, consectetur adipiscing el5345.'],
                'source': 'https://s3.us-east-2.amazonaws.com/siddhant-design/knight.png'
            }];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  height: 100vh;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #88D1D4;\n  text-align: center;\n}\n\n.content {\n  text-align: left;\n  top: 10%;\n  position: absolute;\n  margin: 0;\n  color: #f9f9f9;\n  padding: 30px;\n}\n\n.content h2 {\n  font-size: 100px;\n}\n\n.content p {\n  font-size: 30px;\n  margin: 30px 0;\n}\n\n/* Smartphones (portrait) ----------- */\n\n@media only screen and (max-width: 425px) {\n  /* Styles */\n  .content {\n    top: 30%;\n  }\n  .content h2 {\n    font-size: 50px;\n  }\n  .content p {\n    font-size: 20px;\n    margin: 10px 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <img src=\"{{source}}\"> -->\n  <div class=\"content\">\n    <h2>Hello.</h2>\n    <p>Would you like to collaborate, hire me or just grab a slice of pizza?</p>\n    <p>You can email me at <strong>siddhant (at) siddhant.design</strong></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  text-decoration: none;\n  display: inline-block;\n}\n\n.nav-container {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  position: fixed;\n  z-index: 10;\n}\n\n.links {\n  margin: 20px 10vw 0 0;\n  padding: 10px 0;\n  cursor: pointer;\n  color: #f9f9f9;\n  font-size: 20px;\n  outline: none;\n}\n\nul li:last-child {\n  margin-right: 0;\n}\n\n.links:hover,\n.active {\n  border-bottom: 2px solid #f9f9f9;\n}\n\n/* Smartphones (portrait) ----------- */\n\n@media only screen and (max-width: 425px) {\n  /* Styles */\n}\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n  <ul>\n    <li class=\"links\" routerLinkActive=\"active\" [routerLink]=\"'/contact'\">contact</li>\n    <li class=\"links\" routerLinkActive=\"active\" [routerLink]=\"'/about'\">about</li>\n    <li class=\"links\" routerLinkActive=\"active\" [routerLink]=\"'/work'\">work</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent() {
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
    };
    ViewDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-details',
            template: __webpack_require__("./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__("./src/app/view-details/view-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card></app-card>\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
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