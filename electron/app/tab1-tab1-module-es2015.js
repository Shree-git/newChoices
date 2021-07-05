(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/popover/popover.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/popover/popover.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\n  <!-- <ion-list-header>Ionic</ion-list-header> -->\n  <li button (click)=\"sortByNewest()\">Newest</li>\n  <li button (click)=\"sortByOldest()\">Oldest</li>\n  <!-- <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item> -->\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" *ngIf=\"!isSearchBarOn\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!isSearchBarOn\">\n      Journals\n    </ion-title>\n    <ion-searchbar *ngIf=\"isSearchBarOn\" (ionInput)=\"search($event)\" showCancelButton=\"true\" (ionCancel)=\"cancelSearch()\" placeholder=\"Search by Title\"></ion-searchbar>\n    <ion-buttons slot=\"end\" *ngIf=\"!isSearchBarOn\">\n      <ion-button (click)=\"isSearchBarOn=true\">\n        <ion-icon name=\"search\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openPopover($event)\">\n\n        <ion-icon name=\"filter\" slot=\"icon-only\"></ion-icon>\n        \n      </ion-button>\n      <!-- <ion-button routerLink=\"/tabs/inbox\">\n\n        <ion-icon name=\"chatbox-ellipses\" slot=\"icon-only\"></ion-icon>\n        \n      </ion-button> -->\n      <!-- <ion-item [hidden]=\"hideList\">\n        <ion-select interface=\"popover\" placeholder=\"Order By\" (ionChange)=\"onChange($event)\" #mySelect>\n          <ion-select-option value=\"newest\" >Newest</ion-select-option>\n          <ion-select-option value=\"oldest\">Oldest</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      \n      <!-- <ion-button (click)=\"funnelShow=!funnelShow\">\n        <ion-icon name=\"funnel\" slot=\"icon-only\"></ion-icon>\n      </ion-button> -->\n      <!-- <button class=\"sort\" id=\"drop\" (click)=\"dropMenu()\">Sort</button>\n      <div class=\"dropdown\">\n        <div id=\"myDrop\" class=\"dropdown-cont\">\n          <a (click)=\"sortByOldest()\">Oldest</a>\n          <a (click)=\"sortByNewest()\">Newest</a>\n        </div>\n      </div> -->\n    </ion-buttons>\n    \n\n    <!-- <ion-select *ngIf=\"funnelShow\" interface=\"action-sheet\">\n      <ion-select-option (click)=\"sortByOldest()\">Oldest</ion-select-option>\n      <ion-select-option (click)=\"sortByNewest()\">Newest</ion-select-option>\n    </ion-select> -->\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n     \n      refreshingSpinner=\"circles\"\n     >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Journal</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  \n  <!-- <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByOldest()\">Oldest</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByNewest()\">Newest</ion-button>\n    </ion-col>\n  </ion-row> -->\n  <ion-card *ngFor=\"let journal of (journals|async);\">\n    <ng-template *ngIf=\"journal===null; else displayBlock\">\n      <ion-card-content class=\"noJournal\">\n        <span>No Journals</span>\n      </ion-card-content>\n    </ng-template>\n    <ng-template #displayBlock>\n    <ion-card-content>\n    \n       \n          <ion-row>\n            <ion-col class=\"ion-text-left\" [routerLink]=\"['./journal-detail/', journal.id]\" size='9'>\n              <h2 style=\"padding: 0\"><strong>{{ journal.title }}</strong></h2>\n              \n            </ion-col>\n            <ion-col class=\"ion-text-right\" style=\"padding: 0\">\n              <ion-button fill=\"clear\" (click)=\"deleteJournal(journal.id)\" color=\"secondary\">\n                <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            \n          </ion-row>\n          <ion-row  [routerLink]=\"['./journal-detail/', journal.id]\">\n            <ion-col style=\"padding: 0 0 0 20px\">\n              <!-- <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"journal.date\" class=\"ion-no-padding\"></ion-datetime> -->\n              <!-- <h5 style=\"padding: 0\">{{ journal.date }}</h5> -->\n              <!-- <h5 style=\"padding: 0\">{{ journal.detail }}</h5> -->\n              <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"journal.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n   \n     \n    </ion-card-content>\n  </ng-template>\n \n  </ion-card>\n  \n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"./journalAdd\" color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/journal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tab1/journal.service.ts ***!
  \*****************************************/
/*! exports provided: JournalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalService", function() { return JournalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/ */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let JournalService = class JournalService {
    constructor(afStore, aService) {
        this.afStore = afStore;
        this.aService = aService;
        this.journalsCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('journals');
    }
    getAllJournals() {
        console.log(this.aService.getUser().email);
        this.journalsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals');
        this.journals = this.journalsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.journals;
    }
    getJournal(journalId) {
        return this.journalsCollection.doc(journalId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(journal => {
            journal.id = journalId;
            return journal;
        }));
    }
    searchJournals(searchWord) {
        // searchWord = searchWord.toUpperCase()
        return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals', ref => ref.where('title', '>=', searchWord).where('title', '<=', searchWord + 'z')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // data = {
                //   title: data.title.toLowerCase(),
                //   detail: data.detail,
                //   date: data.date
                // }
                console.log(data.title);
                // data.title = data.title.toLowerCase()
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    sortBy(datee, desAsc) {
        return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('journals', ref => ref.orderBy(datee, desAsc)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // data = {
                //   title: data.title.toLowerCase(),
                //   detail: data.detail,
                //   date: data.date
                // }
                // data.title = data.title.toLowerCase()
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        // this.journals = this.getAllJournals();
    }
    updateJournal(journal) {
        return this.journalsCollection.doc(journal.id).update({ title: journal.title,
            detail: journal.detail, date: new Date().toISOString() });
    }
    deleteJournal(journalId) {
        return this.journalsCollection.doc(journalId).delete();
    }
    addJournal(journal) {
        return this.journalsCollection.add(journal);
    }
};
JournalService.ctorParameters = () => [
    { type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
JournalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JournalService);



/***/ }),

/***/ "./src/app/tab1/popover/popover.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab1/popover/popover.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab1/popover/popover.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tab1/popover/popover.component.ts ***!
  \***************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _journal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal.service */ "./src/app/tab1/journal.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PopoverComponent = class PopoverComponent {
    // @Output() sortedData = new EventEmitter<boolean>();
    constructor(journalService, popController) {
        this.journalService = journalService;
        this.popController = popController;
    }
    ngOnInit() { }
    sortByOldest() {
        this.journalService.journals = this.journalService.sortBy('date', 'asc');
        this.popController.dismiss();
    }
    sortByNewest() {
        this.journalService.journals = this.journalService.sortBy('date', 'desc');
        this.popController.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _journal_service__WEBPACK_IMPORTED_MODULE_2__["JournalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/tab1/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    },
    {
        path: 'journal-detail/:journalId',
        loadChildren: () => __webpack_require__.e(/*! import() | journal-detail-journal-detail-module */ "journal-detail-journal-detail-module").then(__webpack_require__.bind(null, /*! ./journal-detail/journal-detail.module */ "./src/app/tab1/journal-detail/journal-detail.module.ts")).then(m => m.JournalDetailPageModule)
    },
    {
        path: 'journalAdd',
        loadChildren: () => __webpack_require__.e(/*! import() | journal-add-journal-add-module */ "journal-add-journal-add-module").then(__webpack_require__.bind(null, /*! ./journal-add/journal-add.module */ "./src/app/tab1/journal-add/journal-add.module.ts")).then(m => m.JournalAddPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort {\n  position: absolute;\n  top: 5%;\n  left: 0%;\n  background-color: #3498DB;\n  color: white;\n  border: none;\n  cursor: pointer;\n  padding: 15px;\n  font-size: 20px;\n  border-radius: 20px;\n}\n\n.sort:hover, .sort:focus {\n  background-color: #2980B9;\n}\n\n.dropdown-cont {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 20%;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  margin-left: 73%;\n  z-index: 1000;\n}\n\n.dropdown-cont a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown a:hover {\n  background-color: #ddd;\n}\n\n.show {\n  display: block;\n}\n\n#drop:active {\n  box-shadow: 0 2px #666;\n  transform: translateY(3px);\n}\n\n.noJournal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcVmFscG8gQ291cnNlc1xcU3ByaW5nICcyMFxcU29mdHdhcmUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFxcSW9uaWMgUHJvamVjdHNcXE5ld0Nob2ljZXNcXGNob2ljZXNOZXcvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0EseUJBQUE7QUNDQTs7QURDQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0VBOztBRENBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRUE7O0FEQ0E7RUFBbUIsc0JBQUE7QUNHbkI7O0FEREE7RUFBTyxjQUFBO0FDS1A7O0FERkE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDS0E7O0FERkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NSU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbn1cclxuLnNvcnQ6aG92ZXIsIC5zb3J0OmZvY3VzIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcclxufVxyXG4uZHJvcGRvd24tY29udCB7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxubWluLXdpZHRoOiAyMCU7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG5ib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxubWFyZ2luLWxlZnQ6IDczJTtcclxuei1pbmRleDoxMDAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udCBhIHtcclxuY29sb3I6IGJsYWNrO1xyXG5wYWRkaW5nOiAxMnB4IDE2cHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93biBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuXHJcbi5zaG93IHtkaXNwbGF5OiBibG9jazt9XHJcblxyXG5cclxuI2Ryb3A6YWN0aXZlIHtcclxuYm94LXNoYWRvdzogMCAycHggIzY2NjtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XHJcbn1cclxuXHJcbi5ub0pvdXJuYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuIiwiLnNvcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zb3J0OmhvdmVyLCAuc29ydDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XG59XG5cbi5kcm9wZG93bi1jb250IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtaW4td2lkdGg6IDIwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tbGVmdDogNzMlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uZHJvcGRvd24tY29udCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93biBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2Ryb3A6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAycHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XG59XG5cbi5ub0pvdXJuYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _journal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal.service */ "./src/app/tab1/journal.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab1_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab1/popover/popover.component */ "./src/app/tab1/popover/popover.component.ts");
/* harmony import */ var _settings_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/account/account.service */ "./src/app/settings/account/account.service.ts");
/* harmony import */ var _settings_dark_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/dark.service */ "./src/app/settings/dark.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let Tab1Page = class Tab1Page {
    constructor(popoverController, journalService, darkService, accountService, alertCtrl) {
        this.popoverController = popoverController;
        this.journalService = journalService;
        this.darkService = darkService;
        this.accountService = accountService;
        this.alertCtrl = alertCtrl;
        this.isSearchBarOn = false;
        this.funnelShow = false;
        this.hideList = true;
        this.currentPopover = null;
        // customElements.define('popover-example-page', class ModalContent extends HTMLElement {
        //   connectedCallback() {
        //     this.innerHTML = `
        //       <ion-list>
        //         <ion-list-header>Ionic</ion-list-header>
        //         <ion-item button>Learn Ionic</ion-item>
        //         <ion-item button>Documentation</ion-item>
        //         <ion-item button>Showcase</ion-item>
        //         <ion-item button>GitHub Repo</ion-item>
        //         <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item>
        //       </ion-list>
        //     `;
        //   }
        // });
    }
    ngOnInit() {
        this.journals = this.journalService.getAllJournals();
        // this.darkService.toggleDarkTheme(this.accountService.account.darkTheme);
        //   PushNotifications.requestPermission().then( result => {
        //     if (result.granted) {
        //       // Register with Apple / Google to receive push via APNS/FCM
        //       PushNotifications.register();
        //     } else {
        //       // Show some error
        //     }
        //   });
        //   // On success, we should be able to receive notifications
        //   PushNotifications.addListener('registration',
        //     (token: PushNotificationToken) => {
        //       // alert('Push registration success, token: ' + token.value);
        //     }
        //   );
        //   // Some issue with our setup and push will not work
        //   PushNotifications.addListener('registrationError',
        //     (error: any) => {
        //       alert('Error on registration: ' + JSON.stringify(error));
        //     }
        //   );
        //   // Show us the notification payload if the app is open on our device
        //   PushNotifications.addListener('pushNotificationReceived',
        //     (notification: PushNotification) => {
        //       alert('Push received: ' + JSON.stringify(notification));
        //     }
        //   );
        //   PushNotifications.addListener('pushNotificationReceived',
        //   (notification: PushNotification) => {
        //     alert('Push received: ' + JSON.stringify(notification));
        //   }
        // );
        //   // Method called when tapping on a notification
        //   PushNotifications.addListener('pushNotificationActionPerformed',
        //     (notification: PushNotificationActionPerformed) => {
        //       alert('Push action performed: ' + JSON.stringify(notification));
        //     }
        //   );
    }
    ionViewWillEnter() {
        this.journals = this.journalService.getAllJournals();
    }
    doRefresh(event) {
        setTimeout(() => {
            this.journals = this.journalService.getAllJournals();
            event.target.complete();
        }, 1000);
    }
    // onChange($event){
    //   switch($event.target.value){
    //     case 'newest':
    //       this.sortByNewest();
    //       break;
    //     case 'oldest':
    //       this.sortByOldest();
    //       break;
    //   }
    // }
    openPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _tab1_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                event: ev,
                translucent: true,
            });
            this.currentPopover = popover;
            console.log(ev);
            yield popover.present();
            return yield popover.onWillDismiss().then(() => {
                this.journals = this.journalService.journals;
            });
        });
    }
    cancelSearch() {
        this.isSearchBarOn = false;
        this.journals = this.journalService.journals;
    }
    dismissPopover() {
        if (this.currentPopover) {
            this.currentPopover.dismiss().then(() => { this.currentPopover = null; this.journals = this.journalService.getAllJournals(); });
        }
    }
    // async openPopover($event){
    //   const popover = await this.popoverController.create({
    //     component: PopoverComponent,
    //     cssClass: 'my-custom-class',
    //     event: $event,
    //     translucent: true
    //   });
    //   return await popover.present();
    // }
    openFilter() {
        // this.funnelShow = true;
        this.select.interface = "popover";
        this.select.open();
    }
    deleteJournal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Delete',
                cssClass: 'buttonCss',
                message: 'Do you want to delete this journal?',
                buttons: [{
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: () => { this.journalService.deleteJournal(id); }
                    },
                    {
                        text: 'Cancel',
                        cssClass: 'second-button',
                        role: 'cancel'
                    }]
            });
            yield alert.present();
        });
    }
    search(event) {
        var searchWord = event.target.value;
        if (!searchWord || !searchWord.trim()) {
            this.journals = this.journalService.getAllJournals();
        }
        else {
            // console.log(searchWord.toLowerCase())
            this.journals = this.journalService.searchJournals(searchWord);
        }
    }
    dropMenu() {
        document.getElementById("myDrop").classList.toggle("show");
        //makes it so that clicking anywhere else on the screen closes drop down
        window.onclick = function (e) {
            var ele = e.target;
            if (!ele.matches('#drop')) {
                var dropdowns = document.getElementsByClassName("dropdown-cont");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _journal_service__WEBPACK_IMPORTED_MODULE_2__["JournalService"] },
    { type: _settings_dark_service__WEBPACK_IMPORTED_MODULE_6__["DarkService"] },
    { type: _settings_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySelect')
], Tab1Page.prototype, "select", void 0);
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map