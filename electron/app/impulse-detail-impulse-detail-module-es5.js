function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impulse-detail-impulse-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2ImpulseDetailImpulseDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot= start>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteImpulse()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ impulse.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"stacked\">Title</ion-label>\n        <ion-input type=\"text\" placeholder=\"Enter Title\" [(ngModel)]=\"impulse.title\"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"stacked\">Rating</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"impulse.rating\"></ion-input>\n      </ion-item> -->\n      <ion-item>\n        <ion-range min=\"1\" max=\"10\" step=\"1\" value=\"5\" pin snaps color=\"danger\" [(ngModel)]=\"impulse.rating\">\n          <ion-label slot=\"start\" size=\"small\" color=\"danger\">1</ion-label>\n          <ion-label slot=\"end\" size=\"large\" color=\"danger\">10</ion-label>\n          <!-- <ion-icon slot=\"start\" size=\"small\" color=\"danger\" name=\"thermometer\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"thermometer\"></ion-icon> -->\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-textarea autoGrow=\"true\" placeholder=\"Enter description here...\" [(ngModel)]=\"impulse.detail\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Date Created/Modified</ion-label>\n        <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm a\" [(ngModel)]=\"impulse.date\" readonly=\"true\" class=\"ion-no-padding\"></ion-datetime>\n      </ion-item>\n     <div class=\"ion-text-center\">\n      <ion-button [disabled]=\"impulse.title==''\" (click)=\"updateImpulse()\" class=\"ion-padding\">\n        <ion-icon name=\"create\"></ion-icon>\n        UPDATE\n      </ion-button>\n     </div>\n        \n     \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content> \n";
    /***/
  },

  /***/
  "./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ImpulseDetailPageRoutingModule */

  /***/
  function srcAppTab2ImpulseDetailImpulseDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseDetailPageRoutingModule", function () {
      return ImpulseDetailPageRoutingModule;
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


    var _impulse_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./impulse-detail.page */
    "./src/app/tab2/impulse-detail/impulse-detail.page.ts");

    var routes = [{
      path: '',
      component: _impulse_detail_page__WEBPACK_IMPORTED_MODULE_3__["ImpulseDetailPage"]
    }];

    var ImpulseDetailPageRoutingModule = function ImpulseDetailPageRoutingModule() {
      _classCallCheck(this, ImpulseDetailPageRoutingModule);
    };

    ImpulseDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImpulseDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/impulse-detail/impulse-detail.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/tab2/impulse-detail/impulse-detail.module.ts ***!
    \**************************************************************/

  /*! exports provided: ImpulseDetailPageModule */

  /***/
  function srcAppTab2ImpulseDetailImpulseDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseDetailPageModule", function () {
      return ImpulseDetailPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _impulse_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./impulse-detail-routing.module */
    "./src/app/tab2/impulse-detail/impulse-detail-routing.module.ts");
    /* harmony import */


    var _impulse_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./impulse-detail.page */
    "./src/app/tab2/impulse-detail/impulse-detail.page.ts");

    var ImpulseDetailPageModule = function ImpulseDetailPageModule() {
      _classCallCheck(this, ImpulseDetailPageModule);
    };

    ImpulseDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _impulse_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImpulseDetailPageRoutingModule"]],
      declarations: [_impulse_detail_page__WEBPACK_IMPORTED_MODULE_6__["ImpulseDetailPage"]]
    })], ImpulseDetailPageModule);
    /***/
  },

  /***/
  "./src/app/tab2/impulse-detail/impulse-detail.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/tab2/impulse-detail/impulse-detail.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2ImpulseDetailImpulseDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvaW1wdWxzZS1kZXRhaWwvaW1wdWxzZS1kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab2/impulse-detail/impulse-detail.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/tab2/impulse-detail/impulse-detail.page.ts ***!
    \************************************************************/

  /*! exports provided: ImpulseDetailPage */

  /***/
  function srcAppTab2ImpulseDetailImpulseDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseDetailPage", function () {
      return ImpulseDetailPage;
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


    var _impulse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../impulse.service */
    "./src/app/tab2/impulse.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { Observable } from 'rxjs';


    var ImpulseDetailPage = /*#__PURE__*/function () {
      function ImpulseDetailPage(activatedRoute, impulseService, location, afStore, alertCtrl) {
        _classCallCheck(this, ImpulseDetailPage);

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

      _createClass(ImpulseDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.activatedRoute.snapshot.paramMap.get('impulseId');
          this.iId = id;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          if (this.iId) {
            this.impulseService.getImpulse(this.iId).subscribe(function (impulse) {
              console.log(impulse);
              _this.impulse = impulse;
            });
          }
        }
      }, {
        key: "deleteImpulse",
        value: function deleteImpulse() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Delete',
                      cssClass: 'buttonCss',
                      message: 'Do you want to delete this impulse?',
                      buttons: [{
                        text: 'Delete',
                        cssClass: 'first-button',
                        handler: function handler() {
                          _this2.impulseService.deleteImpulse(_this2.iId).then(function () {
                            _this2.location.back();
                          });
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
        key: "updateImpulse",
        value: function updateImpulse() {
          var _this3 = this;

          this.impulseService.updateImpulse(this.impulse).then(function () {
            _this3.location.back();
          });
        }
      }]);

      return ImpulseDetailPage;
    }();

    ImpulseDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _impulse_service__WEBPACK_IMPORTED_MODULE_3__["ImpulseService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    ImpulseDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-impulse-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./impulse-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-detail/impulse-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./impulse-detail.page.scss */
      "./src/app/tab2/impulse-detail/impulse-detail.page.scss"))["default"]]
    })], ImpulseDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=impulse-detail-impulse-detail-module-es5.js.map