(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"full\">\n      <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n      <ion-label>\n        Dark Theme\n      </ion-label>\n      <ion-toggle (ionChange)=\"toggle($event)\" [(ngModel)]=\"themeToggle\" slot=\"end\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-item routerLink=\"./account\">\n    <ion-row>\n      <ion-col>\n        <ion-title>Account</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Edit name, email, password</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  \n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/settings/account/account.module.ts")).then(m => m.AccountPageModule)
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark.service */ "./src/app/settings/dark.service.ts");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.service */ "./src/app/settings/account/account.service.ts");




let SettingsPage = class SettingsPage {
    constructor(darkService, acccountService) {
        this.darkService = darkService;
        this.acccountService = acccountService;
        this.themeToggle = false;
        // if(this.acccountService.account.darkTheme == null){
        //   this.acccountService.updateTheme(this.themeToggle)
        //   console.log("initial ", this.acccountService.account.darkTheme)
        // }else{
        //   this.themeToggle = this.acccountService.account.darkTheme;
        //   console.log("final ", this.acccountService.account.darkTheme)
        // }
        // document.body.classList.toggle('dark', this.themeToggle);
        this.themeToggle = JSON.parse(localStorage.getItem('dark'));
        // // this.darkService.toggleDarkTheme(this.themeToggle)
        // if (typeof localStorage.getItem('dark') == "undefined"){
        //   localStorage.setItem('dark', this.themeToggle.toString()) 
        //   console.log("initial", localStorage.getItem('dark'))
        //   document.body.classList.toggle('dark', JSON.parse(localStorage.getItem('dark')));
        // }else{
        //   this.themeToggle = JSON.parse(localStorage.getItem('dark'))
        //   console.log("already", localStorage.getItem('dark'))
        //   document.body.classList.toggle('dark', JSON.parse(localStorage.getItem('dark')));
        // }
    }
    ngOnInit() {
    }
    toggle(event) {
        // console.log(event.target.value)
        // this.themeToggle = !this.themeToggle
        console.log('change', this.themeToggle);
        // this.acccountService.updateTheme(this.themeToggle);
        // localStorage.setItem('dark', this.themeToggle.toString())
        // // this.darkService.toggleDarkTheme(this.themeToggle)
        // document.body.classList.toggle('dark', this.themeToggle);
        this.darkService.toggleDarkTheme(this.themeToggle);
        // console.log(JSON.parse(localStorage.getItem('dark')))
    }
};
SettingsPage.ctorParameters = () => [
    { type: _dark_service__WEBPACK_IMPORTED_MODULE_2__["DarkService"] },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map