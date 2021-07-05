function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-reset-password-reset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/password-reset/password-reset.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/password-reset/password-reset.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsAccountPasswordResetPasswordResetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/settings/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reset your password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerForm\">\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input\n      formControlName=\"password\"\n      type=\"password\"\n      required\n    ></ion-input>\n  </ion-item>\n\n  <div class=\"validation-errors\">\n    <ng-container\n      *ngFor=\"let validation of validation_messages.password\"\n    >\n      <div\n        class=\"error-message\"\n        *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty || registerForm.get('password').touched)\"\n      >\n        {{ validation.message }}\n      </div>\n    </ng-container>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"floating\">Confirm Password</ion-label>\n    <ion-input\n      formControlName=\"cpassword\"\n      type=\"password\"\n      required\n    ></ion-input>\n  </ion-item>\n\n  <div class=\"validation-errors\">\n    <ng-container\n      *ngFor=\"let validation of validation_messages.cpassword\"\n    >\n      <div\n        class=\"error-message\"\n        *ngIf=\"registerForm.get('cpassword').hasError(validation.type) && (registerForm.get('cpassword').dirty || registerForm.get('cpassword').touched)\"\n      >\n        {{ validation.message }}\n      </div>\n    </ng-container>\n    <div\n      class=\"error-message\"\n      *ngIf=\"!registerForm.get('cpassword').errors && registerForm.hasError('passwordNotMatch') && (registerForm.get('cpassword').dirty || registerForm.get('cpassword').touched)\"\n    >\n      Password and Confirm Password do not match!\n    </div>\n  </div>\n  \n</form>\n<ion-button\n        expand=\"full\"\n        color=\"primary\"\n        [disabled]=\"!registerForm.valid\"\n        (click)=\"resetPassword()\"\n        color=\"tertiary\"\n        >Reset Password</ion-button\n      >\n      <!-- <div class=\"validation-errors\">\n       \n        <div\n          class=\"error-message\"\n          *ngIf=\"loginError\"\n        >\n          {{ loginErrorMessage }}\n        </div>\n   \n    </div> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/settings/account/password-reset/password-reset-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/settings/account/password-reset/password-reset-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: PasswordResetPageRoutingModule */

  /***/
  function srcAppSettingsAccountPasswordResetPasswordResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function () {
      return PasswordResetPageRoutingModule;
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


    var _password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./password-reset.page */
    "./src/app/settings/account/password-reset/password-reset.page.ts");

    var routes = [{
      path: '',
      component: _password_reset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPage"]
    }];

    var PasswordResetPageRoutingModule = function PasswordResetPageRoutingModule() {
      _classCallCheck(this, PasswordResetPageRoutingModule);
    };

    PasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PasswordResetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/account/password-reset/password-reset.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/settings/account/password-reset/password-reset.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PasswordResetPageModule */

  /***/
  function srcAppSettingsAccountPasswordResetPasswordResetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function () {
      return PasswordResetPageModule;
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


    var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./password-reset-routing.module */
    "./src/app/settings/account/password-reset/password-reset-routing.module.ts");
    /* harmony import */


    var _password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./password-reset.page */
    "./src/app/settings/account/password-reset/password-reset.page.ts");

    var PasswordResetPageModule = function PasswordResetPageModule() {
      _classCallCheck(this, PasswordResetPageModule);
    };

    PasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageRoutingModule"]],
      declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetPage"]]
    })], PasswordResetPageModule);
    /***/
  },

  /***/
  "./src/app/settings/account/password-reset/password-reset.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/settings/account/password-reset/password-reset.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsAccountPasswordResetPasswordResetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/settings/account/password-reset/password-reset.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/settings/account/password-reset/password-reset.page.ts ***!
    \************************************************************************/

  /*! exports provided: PasswordResetPage */

  /***/
  function srcAppSettingsAccountPasswordResetPasswordResetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function () {
      return PasswordResetPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var PasswordResetPage = /*#__PURE__*/function () {
      function PasswordResetPage(formBuilder, authService) {
        _classCallCheck(this, PasswordResetPage);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validation_messages = {
          password: [{
            type: 'required',
            message: 'Password is required'
          }, // { type: 'pattern', message: 'Please enter a valid password' },
          {
            type: 'minLength',
            message: 'Password must be over 5 characters'
          }],
          cpassword: [{
            type: 'required',
            message: 'Password is required'
          }]
        };
        this.registerForm = this.formBuilder.group({
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validators: this.password.bind(this)
        });
      }

      _createClass(PasswordResetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "password",
        value: function password(formGroup) {
          var _formGroup$get = formGroup.get('password'),
              password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get('cpassword'),
              confirmPassword = _formGroup$get2.value;

          return password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          return this.authService.updatePassword(this.registerForm.get('password').value);
        }
      }]);

      return PasswordResetPage;
    }();

    PasswordResetPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    PasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-reset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./password-reset.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/password-reset/password-reset.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./password-reset.page.scss */
      "./src/app/settings/account/password-reset/password-reset.page.scss"))["default"]]
    })], PasswordResetPage);
    /***/
  }
}]);
//# sourceMappingURL=password-reset-password-reset-module-es5.js.map