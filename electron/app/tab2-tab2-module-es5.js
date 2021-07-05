function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2PopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul>\n  <!-- <ion-list-header>Ionic</ion-list-header> -->\n  <li button (click)=\"sortByNewest()\">Newest</li>\n  <li button (click)=\"sortByOldest()\">Oldest</li>\n  <li button (click)=\"sortByHighest()\">Highest</li>\n  <li button (click)=\"sortByLowest()\">Lowest</li>\n  <!-- <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item> -->\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" *ngIf=\"!isSearchBarOn\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!isSearchBarOn\">\n      Impulses\n    </ion-title>\n    <ion-searchbar *ngIf=\"isSearchBarOn\" (ionInput)=\"search($event)\" showCancelButton=\"true\" (ionCancel)=\"cancelSearch()\" placeholder=\"Search by Rating (Enter Number)\"></ion-searchbar>\n    <ion-buttons slot=\"end\" *ngIf=\"!isSearchBarOn\">\n      <ion-button (click)=\"isSearchBarOn=true\">\n        <ion-icon name=\"search\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"openPopover($event)\">\n\n        <ion-icon name=\"filter\" slot=\"icon-only\"></ion-icon>\n        \n      </ion-button>\n      <!-- <ion-button (click)=\"funnelShow=!funnelShow\">\n        <ion-icon name=\"funnel\" slot=\"icon-only\"></ion-icon>\n      </ion-button> -->\n      <!-- <button class=\"sort\" id=\"drop\" (click)=\"dropMenu()\">Sort</button>\n      <div class=\"dropdown\">\n        <div id=\"myDrop\" class=\"dropdown-cont\">\n          <a (click)=\"sortByOldest()\">Oldest</a>\n          <a (click)=\"sortByNewest()\">Newest</a>\n        </div>\n      </div> -->\n    </ion-buttons>\n    <!-- <ion-select *ngIf=\"funnelShow\" interface=\"action-sheet\">\n      <ion-select-option (click)=\"sortByOldest()\">Oldest</ion-select-option>\n      <ion-select-option (click)=\"sortByNewest()\">Newest</ion-select-option>\n    </ion-select> -->\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n     \n      refreshingSpinner=\"circles\"\n     >\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">impulse</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  \n  <!-- <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByHighest()\">Highest</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"full\" (click)=\"sortByLowest()\">Lowest</ion-button>\n    </ion-col>\n  </ion-row> -->\n  <ion-card *ngFor=\"let impulse of (impulses|async)\">\n\n    <ion-card-content>\n    \n      <div style=\"background-color: var(--ion-color-tertiary, #ffffff) ;float: left; height: 50px; width: 50px; text-align: center; font-size: 30px; border-radius: 20%;\">\n        <h1 style=\"padding-top: 25%\">{{ impulse.rating }}</h1>\n      </div>\n          <ion-row>\n            <ion-col class=\"ion-text-left ion-no-padding\" [routerLink]=\"['./impulse-detail/', impulse.id]\" size='9'>\n              <ion-item lines=\"none\">\n               \n                  <!-- <ion-badge slot=\"start\" class=\"ion-no-padding\">{{ impulse.rating }}</ion-badge> -->\n                \n                \n                <h2 style=\"padding: 0\"><strong>{{ impulse.title }}</strong></h2>\n              </ion-item>\n              \n              \n            </ion-col>\n            <ion-col class=\"ion-text-right\" style=\"padding: 0\">\n              <ion-button fill=\"clear\" (click)=\"deleteImpulse(impulse.id)\" color=\"secondary\">\n                <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row  [routerLink]=\"['./impulse-detail/', impulse.id]\">\n            <ion-col style=\"padding: 0 0 0 20px\">\n              \n            </ion-col>\n          </ion-row>\n          <ion-row  [routerLink]=\"['./impulse-detail/', impulse.id]\">\n            <ion-col style=\"padding: 0 0 0 20px\">\n              <!-- <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" [(ngModel)]=\"impulse.date\" class=\"ion-no-padding\"></ion-datetime> -->\n              <!-- <h5 style=\"padding: 0\">{{ impulse.date }}</h5> -->\n              <!-- <h5 style=\"padding: 0\">{{ impulse.detail }}</h5> -->\n              <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"impulse.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n          \n     \n    </ion-card-content>\n  </ion-card>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"./impulseAdd\" color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/impulse.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/tab2/impulse.service.ts ***!
    \*****************************************/

  /*! exports provided: ImpulseService */

  /***/
  function srcAppTab2ImpulseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseService", function () {
      return ImpulseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore/ */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ImpulseService = /*#__PURE__*/function () {
      function ImpulseService(afStore, aService) {
        _classCallCheck(this, ImpulseService);

        this.afStore = afStore;
        this.aService = aService;
        this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses');
      }

      _createClass(ImpulseService, [{
        key: "getAllImpulses",
        value: function getAllImpulses() {
          console.log(this.aService.getUser().email);
          this.impulsesCollection = this.afStore.collection('users').doc(this.aService.user.uid).collection('impulses');
          this.impulses = this.impulsesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
          return this.impulses;
        }
      }, {
        key: "getImpulse",
        value: function getImpulse(impulseId) {
          return this.impulsesCollection.doc(impulseId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (impulse) {
            impulse.id = impulseId;
            return impulse;
          }));
        }
      }, {
        key: "searchImpulse",
        value: function searchImpulse(searchWord) {
          // searchWord = searchWord.toUpperCase()
          searchWord = Number(searchWord);
          return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses', function (ref) {
            return ref.where('rating', '==', searchWord);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // data = {
              //   title: data.title.toLowerCase(),
              //   detail: data.detail,
              //   date: data.date
              // }
              // console.log(data.title)
              // data.title = data.title.toLowerCase()

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "sortBy",
        value: function sortBy(rating, desAsc) {
          return this.afStore.collection('users').doc(this.aService.getUser().uid).collection('impulses', function (ref) {
            return ref.orderBy(rating, desAsc);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // data = {
              //   title: data.title.toLowerCase(),
              //   detail: data.detail,
              //   date: data.date
              // }
              // data.title = data.title.toLowerCase()

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "updateImpulse",
        value: function updateImpulse(impulse) {
          return this.impulsesCollection.doc(impulse.id).update({
            title: impulse.title,
            detail: impulse.detail,
            rating: impulse.rating,
            date: new Date().toISOString()
          });
        }
      }, {
        key: "deleteImpulse",
        value: function deleteImpulse(impulseId) {
          return this.impulsesCollection.doc(impulseId)["delete"]();
        }
      }, {
        key: "addImpulse",
        value: function addImpulse(impulse) {
          return this.impulsesCollection.add(impulse);
        }
      }]);

      return ImpulseService;
    }();

    ImpulseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    ImpulseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ImpulseService);
    /***/
  },

  /***/
  "./src/app/tab2/popover/popover.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/tab2/popover/popover.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2PopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab2/popover/popover.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/tab2/popover/popover.component.ts ***!
    \***************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppTab2PopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _impulse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../impulse.service */
    "./src/app/tab2/impulse.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(impulseService, popController) {
        _classCallCheck(this, PopoverComponent);

        this.impulseService = impulseService;
        this.popController = popController;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sortByHighest",
        value: function sortByHighest() {
          this.impulseService.impulses = this.impulseService.sortBy('rating', 'desc');
          this.popController.dismiss();
        }
      }, {
        key: "sortByLowest",
        value: function sortByLowest() {
          this.impulseService.impulses = this.impulseService.sortBy('rating', 'asc');
          this.popController.dismiss();
        }
      }, {
        key: "sortByOldest",
        value: function sortByOldest() {
          this.impulseService.impulses = this.impulseService.sortBy('date', 'asc');
          this.popController.dismiss();
        }
      }, {
        key: "sortByNewest",
        value: function sortByNewest() {
          this.impulseService.impulses = this.impulseService.sortBy('date', 'desc');
          this.popController.dismiss();
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _impulse_service__WEBPACK_IMPORTED_MODULE_2__["ImpulseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/tab2/popover/popover.component.scss"))["default"]]
    })], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }, {
      path: 'impulseAdd',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | impulse-add-impulse-add-module */
        "impulse-add-impulse-add-module").then(__webpack_require__.bind(null,
        /*! ./impulse-add/impulse-add.module */
        "./src/app/tab2/impulse-add/impulse-add.module.ts")).then(function (m) {
          return m.ImpulseAddPageModule;
        });
      }
    }, {
      path: 'impulse-detail/:impulseId',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | impulse-detail-impulse-detail-module */
        "impulse-detail-impulse-detail-module").then(__webpack_require__.bind(null,
        /*! ./impulse-detail/impulse-detail.module */
        "./src/app/tab2/impulse-detail/impulse-detail.module.ts")).then(function (m) {
          return m.ImpulseDetailPageModule;
        });
      }
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _impulse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./impulse.service */
    "./src/app/tab2/impulse.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tab2/popover/popover.component */
    "./src/app/tab2/popover/popover.component.ts");

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(impulseService, alertCtrl, popoverController, platform) {
        _classCallCheck(this, Tab2Page);

        this.impulseService = impulseService;
        this.alertCtrl = alertCtrl;
        this.popoverController = popoverController;
        this.platform = platform;
        this.isSearchBarOn = false;
        this.funnelShow = false;
        this.currentPopover = null;
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.impulses = this.impulseService.getAllImpulses();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.impulses = this.impulseService.getAllImpulses();
        } // ngAfterViewInit(){
        //   this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(1, ()=>{
        //     navigator['app'].exitApp();
        //   })
        // }
        // ngOnDestroy(){
        //   this.backButtonSubscription.unsubscribe();
        // }

      }, {
        key: "deleteImpulse",
        value: function deleteImpulse(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Delete',
                      message: 'Do you want to delete this impulse?',
                      cssClass: 'buttonCss',
                      buttons: [{
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: function handler() {
                          _this.impulseService.deleteImpulse(id);
                        }
                      }, {
                        text: 'Cancel',
                        cssClass: 'second-button',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this2 = this;

          setTimeout(function () {
            _this2.impulses = _this2.impulseService.getAllImpulses();
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
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
      }, {
        key: "search",
        value: function search(event) {
          var searchWord = event.target.value;

          if (!searchWord || !searchWord.trim()) {
            this.impulses = this.impulseService.getAllImpulses();
          } else {
            // console.log(searchWord.toLowerCase())
            this.impulses = this.impulseService.searchImpulse(searchWord);
          }
        }
      }, {
        key: "cancelSearch",
        value: function cancelSearch() {
          this.isSearchBarOn = false;
          this.impulses = this.impulseService.impulses;
        }
      }, {
        key: "dropMenu",
        value: function dropMenu() {
          document.getElementById("myDrop").classList.toggle("show"); //makes it so that clicking anywhere else on the screen closes drop down

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
      }, {
        key: "openPopover",
        value: function openPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context2.sent;
                    this.currentPopover = popover;
                    console.log(ev);
                    _context2.next = 7;
                    return popover.present();

                  case 7:
                    _context2.next = 9;
                    return popover.onWillDismiss().then(function () {
                      _this3.impulses = _this3.impulseService.impulses;
                    });

                  case 9:
                    return _context2.abrupt("return", _context2.sent);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sortByHighest",
        value: function sortByHighest() {
          this.impulses = this.impulseService.sortBy('rating', 'desc');
          this.funnelShow = false;
        }
      }, {
        key: "sortByLowest",
        value: function sortByLowest() {
          this.impulses = this.impulseService.sortBy('rating', 'asc');
          this.funnelShow = false;
        }
      }, {
        key: "sortByOldest",
        value: function sortByOldest() {
          this.impulses = this.impulseService.sortBy('date', 'asc');
          this.funnelShow = false;
        }
      }, {
        key: "sortByNewest",
        value: function sortByNewest() {
          this.impulses = this.impulseService.sortBy('date', 'desc');
          this.funnelShow = false;
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _impulse_service__WEBPACK_IMPORTED_MODULE_2__["ImpulseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map