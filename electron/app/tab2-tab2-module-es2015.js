(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\n  <!-- <ion-list-header>Ionic</ion-list-header> -->\n  <li button (click)=\"sortByNewest()\">Newest</li>\n  <li button (click)=\"sortByOldest()\">Oldest</li>\n  <li button (click)=\"sortByHighest()\">Highest</li>\n  <li button (click)=\"sortByLowest()\">Lowest</li>\n  <!-- <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item> -->\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" *ngIf=\"!isSearchBarOn\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!isSearchBarOn\">\n      Impulses\n    </ion-title>\n    <ion-searchbar *ngIf=\"isSearchBarOn\" (ionInput)=\"search($event)\" showCancelButton=\"true\" (ionCancel)=\"cancelSearch()\" placeholder=\"Search by Rating (Enter Number)\"></ion-searchbar>\n    <ion-buttons slot=\"end\" *ngIf=\"!isSearchBarOn\">\n      <ion-button (click)=\"isSearchBarOn=true\">\n        <ion-icon name=\"search\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openPopover($event)\">\n\n        <ion-icon name=\"filter\" slot=\"icon-only\"></ion-icon>\n        \n      </ion-button>\n      <!-- <ion-button (click)=\"funnelShow=!funnelShow\">\n        <ion-icon name=\"funnel\" slot=\"icon-only\"></ion-icon>\n      </ion-button> -->\n      <!-- <button class=\"sort\" id=\"drop\" (click)=\"dropMenu()\">Sort</button>\n      <div class=\"dropdown\">\n        <div id=\"myDrop\" class=\"dropdown-cont\">\n          <a (click)=\"sortByOldest()\">Oldest</a>\n          <a (click)=\"sortByNewest()\">Newest</a>\n        </div>\n      </div> -->\n    </ion-buttons>\n    <!-- <ion-select *ngIf=\"funnelShow\" interface=\"action-sheet\">\n      <ion-select-option (click)=\"sortByOldest()\">Oldest</ion-select-option>\n      <ion-select-option (click)=\"sortByNewest()\">Newest</ion-select-option>\n    </ion-select> -->\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n     \n      refreshingSpinner=\"circles\"\n     >\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">impulse</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  \n  <!-- <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByHighest()\">Highest</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByLowest()\">Lowest</ion-button>\n    </ion-col>\n  </ion-row> -->\n  <ion-card *ngFor=\"let impulse of (impulses|async)\">\n\n    <ion-card-content>\n    \n      <div style=\"background-color: var(--ion-color-tertiary, #ffffff) ;float: left; height: 50px; width: 50px; text-align: center; font-size: 30px; border-radius: 20%;\">\n        <h1 style=\"padding-top: 25%\">{{ impulse.rating }}</h1>\n      </div>\n          <ion-row>\n            <ion-col class=\"ion-text-left ion-no-padding\" [routerLink]=\"['./impulse-detail/', impulse.id]\" size='9'>\n              <ion-item lines=\"none\">\n               \n                  <!-- <ion-badge slot=\"start\" class=\"ion-no-padding\">{{ impulse.rating }}</ion-badge> -->\n                \n                \n                <h2 style=\"padding: 0\"><strong>{{ impulse.title }}</strong></h2>\n              </ion-item>\n              \n              \n            </ion-col>\n            <ion-col class=\"ion-text-right\" style=\"padding: 0\">\n              <ion-button fill=\"clear\" (click)=\"deleteImpulse(impulse.id)\" color=\"secondary\">\n                <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row  [routerLink]=\"['./impulse-detail/', impulse.id]\">\n            <ion-col style=\"padding: 0 0 0 20px\">\n              \n            </ion-col>\n          </ion-row>\n          <ion-row  [routerLink]=\"['./impulse-detail/', impulse.id]\">\n            <ion-col style=\"padding: 0 0 0 20px\">\n              <!-- <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"impulse.date\" class=\"ion-no-padding\"></ion-datetime> -->\n              <!-- <h5 style=\"padding: 0\">{{ impulse.date }}</h5> -->\n              <!-- <h5 style=\"padding: 0\">{{ impulse.detail }}</h5> -->\n              <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"impulse.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n          \n     \n    </ion-card-content>\n  </ion-card>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"./impulseAdd\" color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/impulse.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tab2/impulse.service.ts ***!
  \*****************************************/
/*! exports provided: ImpulseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpulseService", function() { return ImpulseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/ */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ImpulseService = class ImpulseService {
    constructor(afStore, aService) {
        this.afStore = afStore;
        this.aService = aService;
        this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses');
    }
    getAllImpulses() {
        console.log(this.aService.getUser().email);
        this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses');
        this.impulses = this.impulsesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        return this.impulses;
    }
    getImpulse(impulseId) {
        return this.impulsesCollection.doc(impulseId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(impulse => {
            impulse.id = impulseId;
            return impulse;
        }));
    }
    searchImpulse(searchWord) {
        // searchWord = searchWord.toUpperCase()
        searchWord = Number(searchWord);
        return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses', ref => ref.where('rating', '==', searchWord)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // data = {
                //   title: data.title.toLowerCase(),
                //   detail: data.detail,
                //   date: data.date
                // }
                // console.log(data.title)
                // data.title = data.title.toLowerCase()
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    sortBy(rating, desAsc) {
        return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses', ref => ref.orderBy(rating, desAsc)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
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
    }
    updateImpulse(impulse) {
        return this.impulsesCollection.doc(impulse.id).update({ title: impulse.title,
            detail: impulse.detail, rating: impulse.rating, date: new Date().toISOString() });
    }
    deleteImpulse(impulseId) {
        return this.impulsesCollection.doc(impulseId).delete();
    }
    addImpulse(impulse) {
        return this.impulsesCollection.add(impulse);
    }
};
ImpulseService.ctorParameters = () => [
    { type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ImpulseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImpulseService);



/***/ }),

/***/ "./src/app/tab2/popover/popover.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab2/popover/popover.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab2/popover/popover.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tab2/popover/popover.component.ts ***!
  \***************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _impulse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../impulse.service */ "./src/app/tab2/impulse.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PopoverComponent = class PopoverComponent {
    constructor(impulseService, popController) {
        this.impulseService = impulseService;
        this.popController = popController;
    }
    ngOnInit() { }
    sortByHighest() {
        this.impulseService.impulses = this.impulseService.sortBy('rating', 'desc');
        this.popController.dismiss();
    }
    sortByLowest() {
        this.impulseService.impulses = this.impulseService.sortBy('rating', 'asc');
        this.popController.dismiss();
    }
    sortByOldest() {
        this.impulseService.impulses = this.impulseService.sortBy('date', 'asc');
        this.popController.dismiss();
    }
    sortByNewest() {
        this.impulseService.impulses = this.impulseService.sortBy('date', 'desc');
        this.popController.dismiss();
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _impulse_service__WEBPACK_IMPORTED_MODULE_2__["ImpulseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/tab2/popover/popover.component.scss")).default]
    })
], PopoverComponent);



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    },
    {
        path: 'impulseAdd',
        loadChildren: () => __webpack_require__.e(/*! import() | impulse-add-impulse-add-module */ "impulse-add-impulse-add-module").then(__webpack_require__.bind(null, /*! ./impulse-add/impulse-add.module */ "./src/app/tab2/impulse-add/impulse-add.module.ts")).then(m => m.ImpulseAddPageModule)
    },
    {
        path: 'impulse-detail/:impulseId',
        loadChildren: () => __webpack_require__.e(/*! import() | impulse-detail-impulse-detail-module */ "impulse-detail-impulse-detail-module").then(__webpack_require__.bind(null, /*! ./impulse-detail/impulse-detail.module */ "./src/app/tab2/impulse-detail/impulse-detail.module.ts")).then(m => m.ImpulseDetailPageModule)
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _impulse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impulse.service */ "./src/app/tab2/impulse.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab2/popover/popover.component */ "./src/app/tab2/popover/popover.component.ts");





let Tab2Page = class Tab2Page {
    constructor(impulseService, alertCtrl, popoverController, platform) {
        this.impulseService = impulseService;
        this.alertCtrl = alertCtrl;
        this.popoverController = popoverController;
        this.platform = platform;
        this.isSearchBarOn = false;
        this.funnelShow = false;
        this.currentPopover = null;
    }
    ngOnInit() {
        this.impulses = this.impulseService.getAllImpulses();
    }
    ionViewWillEnter() {
        this.impulses = this.impulseService.getAllImpulses();
    }
    // ngAfterViewInit(){
    //   this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, ()=>{
    //     navigator['app'].exitApp();
    //   })
    // }
    // ngOnDestroy(){
    //   this.backButtonSubscription.unsubscribe();
    // }
    deleteImpulse(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Delete',
                message: 'Do you want to delete this impulse?',
                cssClass: 'buttonCss',
                buttons: [{
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: () => { this.impulseService.deleteImpulse(id); }
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
    doRefresh(event) {
        setTimeout(() => {
            this.impulses = this.impulseService.getAllImpulses();
            event.target.complete();
        }, 1000);
    }
    onChange($event) {
        switch ($event.target.value) {
            case 'newest':
                this.sortByNewest();
                break;
            case 'oldest':
                this.sortByOldest();
                break;
            case 'highest':
                this.sortByHighest();
                break;
            case 'lowest':
                this.sortByLowest();
                break;
        }
    }
    search(event) {
        var searchWord = event.target.value;
        if (!searchWord || !searchWord.trim()) {
            this.impulses = this.impulseService.getAllImpulses();
        }
        else {
            // console.log(searchWord.toLowerCase())
            this.impulses = this.impulseService.searchImpulse(searchWord);
        }
    }
    cancelSearch() {
        this.isSearchBarOn = false;
        this.impulses = this.impulseService.impulses;
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
    openPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                event: ev,
                translucent: true,
            });
            this.currentPopover = popover;
            console.log(ev);
            yield popover.present();
            return yield popover.onWillDismiss().then(() => {
                this.impulses = this.impulseService.impulses;
            });
        });
    }
    sortByHighest() {
        this.impulses = this.impulseService.sortBy('rating', 'desc');
        this.funnelShow = false;
    }
    sortByLowest() {
        this.impulses = this.impulseService.sortBy('rating', 'asc');
        this.funnelShow = false;
    }
    sortByOldest() {
        this.impulses = this.impulseService.sortBy('date', 'asc');
        this.funnelShow = false;
    }
    sortByNewest() {
        this.impulses = this.impulseService.sortBy('date', 'desc');
        this.funnelShow = false;
    }
};
Tab2Page.ctorParameters = () => [
    { type: _impulse_service__WEBPACK_IMPORTED_MODULE_2__["ImpulseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map