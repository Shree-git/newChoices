(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impulse-detail-impulse-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot= start>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteImpulse()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ impulse.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">Title</ion-label>\n        <ion-input type=\"text\" placeholder=\"Enter Title\" [(ngModel)]=\"impulse.title\"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"stacked\">Rating</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"impulse.rating\"></ion-input>\n      </ion-item> -->\n      <ion-item>\n        <ion-range min=\"1\" max=\"10\" step=\"1\" value=\"5\" pin snaps color=\"danger\" [(ngModel)]=\"impulse.rating\">\n          <ion-label slot=\"start\" size=\"small\" color=\"danger\">1</ion-label>\n          <ion-label slot=\"end\" size=\"large\" color=\"danger\">10</ion-label>\n          <!-- <ion-icon slot=\"start\" size=\"small\" color=\"danger\" name=\"thermometer\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"thermometer\"></ion-icon> -->\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-textarea autoGrow=\"true\" placeholder=\"Enter description here...\" [(ngModel)]=\"impulse.detail\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Date Created/Modified</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"impulse.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n      </ion-item>\n     <div class=\"ion-text-center\">\n      <ion-button [disabled]=\"impulse.title==''\" (click)=\"updateImpulse()\" class=\"ion-padding\">\n        <ion-icon name=\"create\"></ion-icon>\n        UPDATE\n      </ion-button>\n     </div>\n        \n     \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content> \n");

/***/ }),

/***/ "./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ImpulseDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpulseDetailPageRoutingModule", function() { return ImpulseDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _impulse_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impulse-detail.page */ "./src/app/tab2/impulse-detail/impulse-detail.page.ts");




const routes = [
    {
        path: '',
        component: _impulse_detail_page__WEBPACK_IMPORTED_MODULE_3__["ImpulseDetailPage"]
    }
];
let ImpulseDetailPageRoutingModule = class ImpulseDetailPageRoutingModule {
};
ImpulseDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImpulseDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/impulse-detail/impulse-detail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/tab2/impulse-detail/impulse-detail.module.ts ***!
  \**************************************************************/
/*! exports provided: ImpulseDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpulseDetailPageModule", function() { return ImpulseDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _impulse_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impulse-detail-routing.module */ "./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts");
/* harmony import */ var _impulse_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impulse-detail.page */ "./src/app/tab2/impulse-detail/impulse-detail.page.ts");







let ImpulseDetailPageModule = class ImpulseDetailPageModule {
};
ImpulseDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _impulse_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImpulseDetailPageRoutingModule"]
        ],
        declarations: [_impulse_detail_page__WEBPACK_IMPORTED_MODULE_6__["ImpulseDetailPage"]]
    })
], ImpulseDetailPageModule);



/***/ }),

/***/ "./src/app/tab2/impulse-detail/impulse-detail.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/tab2/impulse-detail/impulse-detail.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvaW1wdWxzZS1kZXRhaWwvaW1wdWxzZS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab2/impulse-detail/impulse-detail.page.ts":
/*!************************************************************!*\
  !*** ./src/app/tab2/impulse-detail/impulse-detail.page.ts ***!
  \************************************************************/
/*! exports provided: ImpulseDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpulseDetailPage", function() { return ImpulseDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _impulse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../impulse.service */ "./src/app/tab2/impulse.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







// import { Observable } from 'rxjs';
let ImpulseDetailPage = class ImpulseDetailPage {
    constructor(activatedRoute, impulseService, location, afStore, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.impulseService = impulseService;
        this.location = location;
        this.afStore = afStore;
        this.alertCtrl = alertCtrl;
        this.impulse = {
            title: '',
            rating: 5,
            detail: '',
            date: ''
        };
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('impulseId');
        this.iId = id;
    }
    ionViewWillEnter() {
        if (this.iId) {
            this.impulseService.getImpulse(this.iId).subscribe(impulse => {
                console.log(impulse);
                this.impulse = impulse;
            });
        }
    }
    deleteImpulse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Delete',
                cssClass: 'buttonCss',
                message: 'Do you want to delete this impulse?',
                buttons: [
                    {
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: () => {
                            this.impulseService.deleteImpulse(this.iId).then(() => {
                                this.location.back();
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        cssClass: 'second-button',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateImpulse() {
        this.impulseService.updateImpulse(this.impulse).then(() => {
            this.location.back();
        });
    }
};
ImpulseDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _impulse_service__WEBPACK_IMPORTED_MODULE_3__["ImpulseService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ImpulseDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-impulse-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./impulse-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./impulse-detail.page.scss */ "./src/app/tab2/impulse-detail/impulse-detail.page.scss")).default]
    })
], ImpulseDetailPage);



/***/ })

}]);
//# sourceMappingURL=impulse-detail-impulse-detail-module-es2015.js.map