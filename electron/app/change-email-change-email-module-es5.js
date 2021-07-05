function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-email-change-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/change-email/change-email.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/change-email/change-email.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsAccountChangeEmailChangeEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"text\" [(ngModel)]=\"email\" required></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    </form>\n    <ion-button\n        expand=\"full\"\n        color=\"primary\"\n        [disabled]=\"!registerForm.valid\"\n        (click)=\"updateEmail()\"\n        color=\"tertiary\"\n        >Update Email</ion-button\n      >\n  <!-- <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col >\n      <ion-button expand=\"full\"\n        (click)=\"updateEmail()\"\n        [disabled]=\"email==''\"\n        >Update</ion-button\n      >\n    </ion-col>\n  </ion-row> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/settings/account/change-email/change-email-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/settings/account/change-email/change-email-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ChangeEmailPageRoutingModule */

  /***/
  function srcAppSettingsAccountChangeEmailChangeEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPageRoutingModule", function () {
      return ChangeEmailPageRoutingModule;
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


    var _change_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-email.page */
    "./src/app/settings/account/change-email/change-email.page.ts");

    var routes = [{
      path: '',
      component: _change_email_page__WEBPACK_IMPORTED_MODULE_3__["ChangeEmailPage"]
    }];

    var ChangeEmailPageRoutingModule = function ChangeEmailPageRoutingModule() {
      _classCallCheck(this, ChangeEmailPageRoutingModule);
    };

    ChangeEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangeEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/account/change-email/change-email.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/settings/account/change-email/change-email.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ChangeEmailPageModule */

  /***/
  function srcAppSettingsAccountChangeEmailChangeEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPageModule", function () {
      return ChangeEmailPageModule;
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


    var _change_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-email-routing.module */
    "./src/app/settings/account/change-email/change-email-routing.module.ts");
    /* harmony import */


    var _change_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-email.page */
    "./src/app/settings/account/change-email/change-email.page.ts");

    var ChangeEmailPageModule = function ChangeEmailPageModule() {
      _classCallCheck(this, ChangeEmailPageModule);
    };

    ChangeEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeEmailPageRoutingModule"]],
      declarations: [_change_email_page__WEBPACK_IMPORTED_MODULE_6__["ChangeEmailPage"]]
    })], ChangeEmailPageModule);
    /***/
  },

  /***/
  "./src/app/settings/account/change-email/change-email.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/settings/account/change-email/change-email.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsAccountChangeEmailChangeEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2FjY291bnQvY2hhbmdlLWVtYWlsL2NoYW5nZS1lbWFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/settings/account/change-email/change-email.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/settings/account/change-email/change-email.page.ts ***!
    \********************************************************************/

  /*! exports provided: ChangeEmailPage */

  /***/
  function srcAppSettingsAccountChangeEmailChangeEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeEmailPage", function () {
      return ChangeEmailPage;
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


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChangeEmailPage = /*#__PURE__*/function () {
      function ChangeEmailPage(formBuilder, authService) {
        _classCallCheck(this, ChangeEmailPage);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validation_messages = {
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email address'
          }]
        };

        if (this.authService.isLoggedIn) {
          this.email = this.authService.user.email;
        }

        this.registerForm = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
        });
      }

      _createClass(ChangeEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.authService.isLoggedIn) {
            this.email = this.authService.user.email;
          }
        }
      }, {
        key: "updateEmail",
        value: function updateEmail() {
          return this.authService.updateEmail(this.registerForm.get('email').value);
        }
      }]);

      return ChangeEmailPage;
    }();

    ChangeEmailPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    ChangeEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-email',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./change-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/change-email/change-email.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./change-email.page.scss */
      "./src/app/settings/account/change-email/change-email.page.scss"))["default"]]
    })], ChangeEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=change-email-change-email-module-es5.js.map