function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetPasswordResetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Choices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"registerCard positionCard\">\n    <ion-card-header class=\"ion-text-center\" style=\"background-color: var(--ion-color-primary);\"> <ion-label class=\"signupLabel\">Reset Password</ion-label></ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <form [formGroup]=\"registerForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Enter Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n        </form>\n      </ion-list>\n      <ion-button\n        expand=\"full\"\n        color=\"primary\"\n        [disabled]=\"!registerForm.valid\"\n        (click)=\"reset()\"\n        >Send</ion-button\n      >\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"positionCard\">\n    <ion-card-content class=\"ion-text-center\">\n      <h2>Don't have an account? <ion-button routerLink=\"../register\">Sign Up</ion-button></h2>\n      <h2>Already have an account? <ion-button routerLink=\"../login\">Login</ion-button></h2>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordPageRoutingModule */

  /***/
  function srcAppResetPasswordResetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function () {
      return ResetPasswordPageRoutingModule;
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


    var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reset-password.page */
    "./src/app/reset-password/reset-password.page.ts");

    var routes = [{
      path: '',
      component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    }];

    var ResetPasswordPageRoutingModule = function ResetPasswordPageRoutingModule() {
      _classCallCheck(this, ResetPasswordPageRoutingModule);
    };

    ResetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/reset-password/reset-password.module.ts ***!
    \*********************************************************/

  /*! exports provided: ResetPasswordPageModule */

  /***/
  function srcAppResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function () {
      return ResetPasswordPageModule;
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


    var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reset-password-routing.module */
    "./src/app/reset-password/reset-password-routing.module.ts");
    /* harmony import */


    var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reset-password.page */
    "./src/app/reset-password/reset-password.page.ts");

    var ResetPasswordPageModule = function ResetPasswordPageModule() {
      _classCallCheck(this, ResetPasswordPageModule);
    };

    ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]],
      declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })], ResetPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/reset-password/reset-password.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetPasswordResetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-message {\n  color: var(--ion-color-danger);\n}\n\n.signupLabel {\n  font-size: 1.6em;\n  font-weight: bold;\n}\n\n.positionCard {\n  position: relative;\n  border-radius: 15px;\n  top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRDpcXFZhbHBvIENvdXJzZXNcXFNwcmluZyAnMjBcXFNvZnR3YXJlIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcXElvbmljIFByb2plY3RzXFxOZXdDaG9pY2VzXFxjaG9pY2VzTmV3L3NyY1xcYXBwXFxyZXNldC1wYXNzd29yZFxccmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUVGLE9BQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG4uc2lnbnVwTGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5wb3NpdGlvbkNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIFxyXG4gIHRvcDogNyU7XHJcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnNpZ251cExhYmVsIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3NpdGlvbkNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRvcDogNyU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/reset-password/reset-password.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reset-password/reset-password.page.ts ***!
    \*******************************************************/

  /*! exports provided: ResetPasswordPage */

  /***/
  function srcAppResetPasswordResetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function () {
      return ResetPasswordPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ResetPasswordPage = /*#__PURE__*/function () {
      function ResetPasswordPage(formBuilder, authService, alertCtrl, router) {
        _classCallCheck(this, ResetPasswordPage);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.validation_messages = {
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email address'
          }]
        };
        this.registerForm = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
        });
      }

      _createClass(ResetPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reset",
        value: function reset() {
          var _this = this;

          return this.authService.passwordReset(this.registerForm.get('email').value).then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      alert = this.alertCtrl.create({
                        header: 'Password Reset Email Sent',
                        cssClass: 'buttonCss',
                        message: 'Check you email to reset your password',
                        buttons: [{
                          text: 'OK',
                          role: 'OK',
                          cssClass: 'first-button',
                          handler: function handler() {
                            _this2.router.navigate(['../login']);
                          }
                        }]
                      });
                      _context.next = 3;
                      return alert;

                    case 3:
                      _context.next = 5;
                      return _context.sent.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return ResetPasswordPage;
    }();

    ResetPasswordPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reset-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reset-password.page.scss */
      "./src/app/reset-password/reset-password.page.scss"))["default"]]
    })], ResetPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=reset-password-reset-password-module-es5.js.map