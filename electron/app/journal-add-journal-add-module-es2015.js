(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-add-journal-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-add/journal-add.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-add/journal-add.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Journal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">New Journal</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        \n        <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n      \n        <ion-textarea autoGrow=\"true\" placeholder=\"Enter description here...\" [(ngModel)]=\"detail\"></ion-textarea>\n      </ion-item>\n     \n       \n     \n        <ion-row>\n          <ion-col>\n            <ion-button color=\"danger\" expand=\"full\" (click)=\"clear()\"><ion-icon type=\"icon-only\" name=\"close\"></ion-icon>Clear</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"primary\" expand=\"full\" (click)=\"addJournal()\"  [disabled]=\"title==''\"><ion-icon type=\"icon-only\" name=\"add\"></ion-icon>Create</ion-button>\n          </ion-col>\n        </ion-row>\n    \n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/journal-add/journal-add-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tab1/journal-add/journal-add-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: JournalAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalAddPageRoutingModule", function() { return JournalAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _journal_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-add.page */ "./src/app/tab1/journal-add/journal-add.page.ts");




const routes = [
    {
        path: '',
        component: _journal_add_page__WEBPACK_IMPORTED_MODULE_3__["JournalAddPage"]
    }
];
let JournalAddPageRoutingModule = class JournalAddPageRoutingModule {
};
JournalAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JournalAddPageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/journal-add/journal-add.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab1/journal-add/journal-add.module.ts ***!
  \********************************************************/
/*! exports provided: JournalAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalAddPageModule", function() { return JournalAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _journal_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journal-add-routing.module */ "./src/app/tab1/journal-add/journal-add-routing.module.ts");
/* harmony import */ var _journal_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journal-add.page */ "./src/app/tab1/journal-add/journal-add.page.ts");







let JournalAddPageModule = class JournalAddPageModule {
};
JournalAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _journal_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["JournalAddPageRoutingModule"]
        ],
        declarations: [_journal_add_page__WEBPACK_IMPORTED_MODULE_6__["JournalAddPage"]]
    })
], JournalAddPageModule);



/***/ }),

/***/ "./src/app/tab1/journal-add/journal-add.page.scss":
/*!********************************************************!*\
  !*** ./src/app/tab1/journal-add/journal-add.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvam91cm5hbC1hZGQvam91cm5hbC1hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/journal-add/journal-add.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tab1/journal-add/journal-add.page.ts ***!
  \******************************************************/
/*! exports provided: JournalAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalAddPage", function() { return JournalAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _journal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal.service */ "./src/app/tab1/journal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




let JournalAddPage = class JournalAddPage {
    constructor(journalService, location) {
        this.journalService = journalService;
        this.location = location;
    }
    ngOnInit() {
        this.id = '';
        this.title = '';
        this.detail = '';
    }
    clear() {
        this.id = '';
        this.title = '';
        this.detail = '';
    }
    addJournal() {
        // this.id = this.title
        this.journal = {
            // id: this.id,
            title: this.title,
            detail: this.detail,
            date: new Date().toISOString()
        };
        this.journalService.addJournal(this.journal);
        this.location.back();
    }
};
JournalAddPage.ctorParameters = () => [
    { type: _journal_service__WEBPACK_IMPORTED_MODULE_2__["JournalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
JournalAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journal-add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/journal-add/journal-add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journal-add.page.scss */ "./src/app/tab1/journal-add/journal-add.page.scss")).default]
    })
], JournalAddPage);



/***/ })

}]);
//# sourceMappingURL=journal-add-journal-add-module-es2015.js.map