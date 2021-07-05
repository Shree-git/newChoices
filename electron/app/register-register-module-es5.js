function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Choices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"registerCard positionCard\">\n    <ion-card-header class=\"ion-text-center\" style=\"background-color: var(--ion-color-primary);\"> <ion-label class=\"signupLabel\">Sign Up</ion-label></ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <form [formGroup]=\"registerForm\">\n          <ion-item class=\"roundedCorners\">\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n              \n              formControlName=\"firstName\"\n              type=\"text\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.firstName\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('firstName').hasError(validation.type) && (registerForm.get('firstName').dirty || registerForm.get('firstName').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input\n              formControlName=\"lastName\"\n              type=\"text\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.lastName\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('lastName').hasError(validation.type) && (registerForm.get('lastName').dirty || registerForm.get('lastName').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Phone Number</ion-label>\n            <ion-input\n              formControlName=\"phoneNumber\"\n              type=\"text\"\n              \n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.phoneNumber\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('phoneNumber').hasError(validation.type) && (registerForm.get('phoneNumber').dirty || registerForm.get('phoneNumber').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input\n              formControlName=\"password\"\n              type=\"password\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.password\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty || registerForm.get('password').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input\n              formControlName=\"cpassword\"\n              type=\"password\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.cpassword\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('cpassword').hasError(validation.type) && (registerForm.get('cpassword').dirty || registerForm.get('cpassword').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n            <div\n              class=\"error-message\"\n              *ngIf=\"!registerForm.get('cpassword').errors && registerForm.hasError('passwordNotMatch') && (registerForm.get('cpassword').dirty || registerForm.get('cpassword').touched)\"\n            >\n              Password and Confirm Password do not match!\n            </div>\n          </div>\n        </form>\n      </ion-list>\n      <ion-button\n        expand=\"full\"\n        color=\"primary\"\n        [disabled]=\"!registerForm.valid\"\n        (click)=\"register()\"\n        color=\"tertiary\"\n        >Create Account!</ion-button\n      >\n      <div class=\"validation-errors\">\n       \n        <div\n          class=\"error-message\"\n          *ngIf=\"loginError\"\n        >\n          {{ loginErrorMessage }}\n        </div>\n   \n    </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"positionCard\">\n    <ion-card-content class=\"ion-text-center\">\n      <h2>Already have an account? <ion-button routerLink=\"../login\" color=\"tertiary\">Login</ion-button></h2>\n      \n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card class=\"card-center\">\n    <ion-card-header color=\"primary\">\n      \n      <ion-card-title class=\"ion-text-center\">Register</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"fName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"lName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" fill=\"solid\" [disabled]=\"email==''&&password==''&&cpassword==''&&fName==''&&lName==''\" (click)=\"register()\">Register</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"secondary\" expand=\"full\" fill=\"solid\" routerLink=\"../login\">Login</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-center {\n  transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  margin: 0;\n  position: absolute;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n.signupLabel {\n  font-size: 1.6em;\n  font-weight: bold;\n}\n\n.positionCard {\n  position: relative;\n  border-radius: 15px;\n  top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFZhbHBvIENvdXJzZXNcXFNwcmluZyAnMjBcXFNvZnR3YXJlIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcXElvbmljIFByb2plY3RzXFxOZXdDaG9pY2VzXFxjaG9pY2VzTmV3L3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFFRixPQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jZW50ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5zaWdudXBMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnBvc2l0aW9uQ2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgXHJcbiAgdG9wOiA3JTtcclxufVxyXG5cclxuXHJcblxyXG4vLyAucm91bmRlZENvcm5lcnN7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyAvLyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4vLyAgICAgLy8gLy8gZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyMTksMjE5LDIxOSkgIWltcG9ydGFudDtcclxuLy8gICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4vLyAgICAgLyogd2lkdGg6IDQxJTsgKi9cclxuLy8gICAgIC8vIG1heC13aWR0aDogNTB2dzsgLy8gdGhpcyBpcyBhcHBseWluZyBwZXJmZWN0bHlcclxuLy8gICAgIC8vIG1heC1oZWlnaHQ6IDEwdmg7XHJcbi8vIH0iLCIuY2FyZC1jZW50ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc2lnbnVwTGFiZWwge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc2l0aW9uQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdG9wOiA3JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _settings_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../settings/account/account.service */
    "./src/app/settings/account/account.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(formBuilder, authService, accountService, router, platform) {
        _classCallCheck(this, RegisterPage);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.accountService = accountService;
        this.router = router;
        this.platform = platform;
        this.loginError = false;
        this.loginErrorMessage = '';
        this.validation_messages = {
          firstName: [{
            type: 'required',
            message: 'First Name is required'
          }],
          lastName: [{
            type: 'required',
            message: 'Last Name is required'
          }],
          phoneNumber: [{
            type: 'pattern',
            message: 'Please enter a valid phone number'
          }],
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email address'
          }],
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
          firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
          cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }, {
          validators: this.password.bind(this)
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (_this.router.isActive('/register', true) && _this.router.url === '/register') {
              navigator['app'].exitApp();
            }
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.backButtonSubscription.unsubscribe();
        }
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
        key: "register",
        value: function register() {
          var _this2 = this;

          // if(this.password === this.cpassword){
          //   this.authService.register(this.email, this.password).then(()=>{
          //     this.router.navigate(['/tabs'])
          //     this.account = {
          //       fName: this.fName,
          //       lName: this.lName
          //     }
          //     this.accountService.updateAccount(this.account)
          //   })
          // }
          this.authService.register(this.registerForm.get('email').value, this.registerForm.get('password').value).then(function () {
            _this2.router.navigate(['/tabs']);

            _this2.account = {
              fName: _this2.registerForm.get('firstName').value,
              lName: _this2.registerForm.get('lastName').value,
              mobileNumber: _this2.registerForm.get('phoneNumber').value
            };

            _this2.accountService.createAccount(_this2.account);
          })["catch"](function (err) {
            _this2.loginError = true;
            _this2.loginErrorMessage = err.message;
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _settings_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map