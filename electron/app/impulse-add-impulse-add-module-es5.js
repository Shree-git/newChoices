function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["impulse-add-impulse-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-add/impulse-add.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-add/impulse-add.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2ImpulseAddImpulseAddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Impulse</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">New Impulse</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        \n        <ion-input type=\"text\" placeholder=\"Enter Title\" [(ngModel)]=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-range min=\"1\" max=\"10\" step=\"1\" value=\"5\" pin snaps color=\"danger\" [(ngModel)]=\"rating\">\n          <ion-label slot=\"start\" size=\"small\" color=\"danger\">1</ion-label>\n          <ion-label slot=\"end\" size=\"large\" color=\"danger\">10</ion-label>\n          <!-- <ion-icon slot=\"start\" size=\"small\" color=\"danger\" name=\"thermometer\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"thermometer\"></ion-icon> -->\n        </ion-range>\n      </ion-item>\n      <ion-item>\n      \n        <ion-textarea autoGrow=\"true\" placeholder=\"Enter description here...\" [(ngModel)]=\"detail\"></ion-textarea>\n      </ion-item>\n     \n        <ion-row>\n          <ion-col>\n            <ion-button color=\"danger\" expand=\"full\" (click)=\"clear()\"><ion-icon type=\"icon-only\" name=\"close\"></ion-icon>Clear</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"primary\" expand=\"full\" (click)=\"addImpulse()\"  [disabled]=\"title==''\"><ion-icon type=\"icon-only\" name=\"add\"></ion-icon>Create</ion-button>\n          </ion-col>\n        </ion-row>\n     \n     \n        \n    \n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/impulse-add/impulse-add-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/tab2/impulse-add/impulse-add-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ImpulseAddPageRoutingModule */

  /***/
  function srcAppTab2ImpulseAddImpulseAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseAddPageRoutingModule", function () {
      return ImpulseAddPageRoutingModule;
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


    var _impulse_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./impulse-add.page */
    "./src/app/tab2/impulse-add/impulse-add.page.ts");

    var routes = [{
      path: '',
      component: _impulse_add_page__WEBPACK_IMPORTED_MODULE_3__["ImpulseAddPage"]
    }];

    var ImpulseAddPageRoutingModule = function ImpulseAddPageRoutingModule() {
      _classCallCheck(this, ImpulseAddPageRoutingModule);
    };

    ImpulseAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImpulseAddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/impulse-add/impulse-add.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/tab2/impulse-add/impulse-add.module.ts ***!
    \********************************************************/

  /*! exports provided: ImpulseAddPageModule */

  /***/
  function srcAppTab2ImpulseAddImpulseAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseAddPageModule", function () {
      return ImpulseAddPageModule;
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


    var _impulse_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./impulse-add-routing.module */
    "./src/app/tab2/impulse-add/impulse-add-routing.module.ts");
    /* harmony import */


    var _impulse_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./impulse-add.page */
    "./src/app/tab2/impulse-add/impulse-add.page.ts");

    var ImpulseAddPageModule = function ImpulseAddPageModule() {
      _classCallCheck(this, ImpulseAddPageModule);
    };

    ImpulseAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _impulse_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImpulseAddPageRoutingModule"]],
      declarations: [_impulse_add_page__WEBPACK_IMPORTED_MODULE_6__["ImpulseAddPage"]]
    })], ImpulseAddPageModule);
    /***/
  },

  /***/
  "./src/app/tab2/impulse-add/impulse-add.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/tab2/impulse-add/impulse-add.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2ImpulseAddImpulseAddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvaW1wdWxzZS1hZGQvaW1wdWxzZS1hZGQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tab2/impulse-add/impulse-add.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/tab2/impulse-add/impulse-add.page.ts ***!
    \******************************************************/

  /*! exports provided: ImpulseAddPage */

  /***/
  function srcAppTab2ImpulseAddImpulseAddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImpulseAddPage", function () {
      return ImpulseAddPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ImpulseAddPage = /*#__PURE__*/function () {
      function ImpulseAddPage(impulseService, location) {
        _classCallCheck(this, ImpulseAddPage);

        this.impulseService = impulseService;
        this.location = location;
      }

      _createClass(ImpulseAddPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = '';
          this.title = '';
          this.rating = 5;
          this.detail = '';
        }
      }, {
        key: "clear",
        value: function clear() {
          this.id = '';
          this.title = '';
          this.rating = 5;
          this.detail = '';
        }
      }, {
        key: "addImpulse",
        value: function addImpulse() {
          // this.id = this.title
          this.impulse = {
            // id: this.id,
            title: this.title,
            rating: this.rating,
            detail: this.detail,
            date: new Date().toISOString()
          };
          this.impulseService.addImpulse(this.impulse);
          this.location.back();
        }
      }]);

      return ImpulseAddPage;
    }();

    ImpulseAddPage.ctorParameters = function () {
      return [{
        type: _impulse_service__WEBPACK_IMPORTED_MODULE_2__["ImpulseService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ImpulseAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-impulse-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./impulse-add.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/impulse-add/impulse-add.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./impulse-add.page.scss */
      "./src/app/tab2/impulse-add/impulse-add.page.scss"))["default"]]
    })], ImpulseAddPage);
    /***/
  }
}]);
//# sourceMappingURL=impulse-add-impulse-add-module-es5.js.map