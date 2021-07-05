(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-detail-journal-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-detail/journal-detail.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-detail/journal-detail.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot= start>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteJournal()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ journal.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">Title</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"journal.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-textarea autoGrow=\"true\" placeholder=\"Enter description here...\" [(ngModel)]=\"journal.detail\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Date Created/Modified</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"journal.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n      </ion-item>\n     <div class=\"ion-text-center\">\n      <ion-button [disabled]=\"journal.title==''\" (click)=\"updateJournal()\" class=\"ion-padding\">\n        <ion-icon name=\"create\"></ion-icon>\n        UPDATE\n      </ion-button>\n     </div>\n        \n     \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content> \n");

/***/ }),

/***/ "./src/app/tab1/journal-detail/journal-detail-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tab1/journal-detail/journal-detail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: JournalDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalDetailPageRoutingModule", function() { return JournalDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _journal_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-detail.page */ "./src/app/tab1/journal-detail/journal-detail.page.ts");




const routes = [
    {
        path: '',
        component: _journal_detail_page__WEBPACK_IMPORTED_MODULE_3__["JournalDetailPage"]
    }
];
let JournalDetailPageRoutingModule = class JournalDetailPageRoutingModule {
};
JournalDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JournalDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/journal-detail/journal-detail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/tab1/journal-detail/journal-detail.module.ts ***!
  \**************************************************************/
/*! exports provided: JournalDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalDetailPageModule", function() { return JournalDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _journal_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journal-detail-routing.module */ "./src/app/tab1/journal-detail/journal-detail-routing.module.ts");
/* harmony import */ var _journal_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journal-detail.page */ "./src/app/tab1/journal-detail/journal-detail.page.ts");







let JournalDetailPageModule = class JournalDetailPageModule {
};
JournalDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _journal_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["JournalDetailPageRoutingModule"]
        ],
        declarations: [_journal_detail_page__WEBPACK_IMPORTED_MODULE_6__["JournalDetailPage"]]
    })
], JournalDetailPageModule);



/***/ }),

/***/ "./src/app/tab1/journal-detail/journal-detail.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/tab1/journal-detail/journal-detail.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvam91cm5hbC1kZXRhaWwvam91cm5hbC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/journal-detail/journal-detail.page.ts":
/*!************************************************************!*\
  !*** ./src/app/tab1/journal-detail/journal-detail.page.ts ***!
  \************************************************************/
/*! exports provided: JournalDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalDetailPage", function() { return JournalDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _journal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal.service */ "./src/app/tab1/journal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







// import { Observable } from 'rxjs';
let JournalDetailPage = class JournalDetailPage {
    constructor(activatedRoute, journalService, location, afStore, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.journalService = journalService;
        this.location = location;
        this.afStore = afStore;
        this.alertCtrl = alertCtrl;
        this.journal = {
            title: '',
            detail: '',
            date: ''
        };
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('journalId');
        this.iId = id;
    }
    ionViewWillEnter() {
        if (this.iId) {
            this.journalService.getJournal(this.iId).subscribe(journal => {
                console.log(journal);
                this.journal = journal;
            });
        }
    }
    // ionViewWillLeave(){
    //     this.journalService.getJournal(this.iId).subscribe(journal =>{
    //       console.log(journal)
    //       this.journal = journal
    //     })
    // }
    deleteJournal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Delete',
                cssClass: 'buttonCss',
                message: 'Do you want to delete this journal?',
                buttons: [
                    {
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: () => {
                            this.journalService.deleteJournal(this.iId).then(() => {
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
    updateJournal() {
        this.journalService.updateJournal(this.journal).then(() => {
            this.location.back();
        });
    }
};
JournalDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _journal_service__WEBPACK_IMPORTED_MODULE_3__["JournalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
JournalDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-detail/journal-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal-detail.page.scss */ "./src/app/tab1/journal-detail/journal-detail.page.scss")).default]
    })
], JournalDetailPage);



/***/ })

}]);
//# sourceMappingURL=journal-detail-journal-detail-module-es2015.js.map