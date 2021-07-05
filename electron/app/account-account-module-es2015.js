(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/account.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/account.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"account.fName\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input\n        type=\"text\"\n        [(ngModel)]=\"account.lName\"\n      ></ion-input>\n      </ion-item>\n      \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Phone Number</ion-label>\n        <ion-input\n        type=\"text\"\n        [(ngModel)]=\"account.mobileNumber\"\n      ></ion-input>\n      </ion-item>\n      \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item routerLink=\"../change-email\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input\n        type=\"text\"\n        [(ngModel)]=\"email\"\n        readonly=\"true\"\n      ></ion-input>\n      </ion-item>\n      \n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col >\n      <ion-button expand=\"full\"\n        (click)=\"updateAccount()\"\n        color=\"tertiary\"\n        [disabled]=\"account.fName=='' || account.lName==''\"\n        >Save</ion-button\n      >\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-button expand=\"full\" routerLink=\"../change-email\" color=\"tertiary\">Change Email</ion-button>\n\n    </ion-col>\n    <ion-col >\n      <ion-button expand=\"full\" routerLink=\"../password-reset\" color=\"tertiary\">Change Password</ion-button>\n      \n    </ion-col>\n </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/settings/account/account-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/account/account-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/settings/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    },
    {
        path: 'display-photo',
        loadChildren: () => __webpack_require__.e(/*! import() | display-photo-display-photo-module */ "display-photo-display-photo-module").then(__webpack_require__.bind(null, /*! ./display-photo/display-photo.module */ "./src/app/settings/account/display-photo/display-photo.module.ts")).then(m => m.DisplayPhotoPageModule)
    },
    {
        path: 'password-reset',
        loadChildren: () => __webpack_require__.e(/*! import() | password-reset-password-reset-module */ "password-reset-password-reset-module").then(__webpack_require__.bind(null, /*! ./password-reset/password-reset.module */ "./src/app/settings/account/password-reset/password-reset.module.ts")).then(m => m.PasswordResetPageModule)
    },
    {
        path: 'change-email',
        loadChildren: () => __webpack_require__.e(/*! import() | change-email-change-email-module */ "change-email-change-email-module").then(__webpack_require__.bind(null, /*! ./change-email/change-email.module */ "./src/app/settings/account/change-email/change-email.module.ts")).then(m => m.ChangeEmailPageModule)
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/account/account.module.ts":
/*!****************************************************!*\
  !*** ./src/app/settings/account/account.module.ts ***!
  \****************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/settings/account/account-routing.module.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/settings/account/account.page.ts");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/settings/account/account.page.scss":
/*!****************************************************!*\
  !*** ./src/app/settings/account/account.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/account/account.page.ts":
/*!**************************************************!*\
  !*** ./src/app/settings/account/account.page.ts ***!
  \**************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "./src/app/settings/account/account.service.ts");





let AccountPage = class AccountPage {
    constructor(accountService, location, authService) {
        this.accountService = accountService;
        this.location = location;
        this.authService = authService;
        this.account = {
            id: '',
            fName: '',
            lName: '',
            mobileNumber: ''
        };
        if (this.authService.isLoggedIn) {
            this.email = this.authService.user.email;
        }
    }
    ngOnInit() {
        this.account = this.accountService.getAccount();
    }
    updateAccount() {
        this.accountService.updateAccount(this.account);
        this.location.back();
    }
    ionViewWillEnter() {
        if (this.authService.isLoggedIn) {
            this.email = this.authService.user.email;
        }
        this.account = this.accountService.getAccount();
    }
};
AccountPage.ctorParameters = () => [
    { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.page.scss */ "./src/app/settings/account/account.page.scss")).default]
    })
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map