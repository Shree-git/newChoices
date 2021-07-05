(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Choices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"registerCard positionCard\">\n    <ion-card-header class=\"ion-text-center\" style=\"background-color: var(--ion-color-primary);\"> <ion-label class=\"signupLabel\">Login</ion-label></ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <form [formGroup]=\"registerForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('email').hasError(validation.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input\n              formControlName=\"password\"\n              type=\"password\"\n              required\n            ></ion-input>\n          </ion-item>\n\n          <div class=\"validation-errors\">\n            <ng-container\n              *ngFor=\"let validation of validation_messages.password\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"registerForm.get('password').hasError(validation.type) && (registerForm.get('password').dirty || registerForm.get('password').touched)\"\n              >\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n  \n         \n\n        </form>\n      </ion-list>\n      <ion-button\n        expand=\"full\"\n        color=\"primary\"\n        [disabled]=\"!registerForm.valid\"\n        (click)=\"login()\"\n        color=\"tertiary\"\n        >Login</ion-button\n      >\n      <div class=\"validation-errors\">\n       \n          <div\n            class=\"error-message\"\n            *ngIf=\"loginError\"\n          >\n            {{ loginErrorMessage }}\n          </div>\n     \n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"positionCard\" style=\"margin-top: 50px;\">\n    <ion-card-content class=\"ion-text-center\">\n      <h2>Don't have an account? </h2>\n      <ion-button routerLink=\"../register\" color=\"tertiary\">Sign Up</ion-button>\n      <h2>Forgot your password?</h2>\n      <ion-button routerLink=\"../reset-password\" color=\"tertiary\">Reset Password</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card class=\"card-center\">\n    <ion-card-header color=\"primary\">\n      \n      <ion-card-title class=\"ion-text-center\">Register</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"fName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"lName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" fill=\"solid\" [disabled]=\"email==''&&password==''&&cpassword==''&&fName==''&&lName==''\" (click)=\"register()\">Register</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"secondary\" expand=\"full\" fill=\"solid\" routerLink=\"../login\">Login</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Choices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"card-center\">\n    <ion-card>\n      <ion-card-header color=\"primary\">\n        \n        <ion-card-title class=\"ion-text-center\">Login</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"primary\" expand=\"full\" fill=\"solid\" (click)=\"login()\">Login</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"secondary\" expand=\"full\" fill=\"solid\" routerLink=\"../register\">Register</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-center {\n  transform: translateX(-50%) translateY(-50%);\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  margin: 0;\n  position: absolute;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n.signupLabel {\n  font-size: 1.6em;\n  font-weight: bold;\n}\n\n.positionCard {\n  position: relative;\n  border-radius: 15px;\n  top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFZhbHBvIENvdXJzZXNcXFNwcmluZyAnMjBcXFNvZnR3YXJlIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcXElvbmljIFByb2plY3RzXFxOZXdDaG9pY2VzXFxjaG9pY2VzTmV3L3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksOEJBQUE7QUNWSjs7QURhQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURjQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFFRixPQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2FyZC1jZW50ZXJ7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgd2lkdGg6IDkwJTtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgIFxyXG4vLyB9XHJcblxyXG4uY2FyZC1jZW50ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5zaWdudXBMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnBvc2l0aW9uQ2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgXHJcbiAgdG9wOiA3JTtcclxufVxyXG5cclxuXHJcblxyXG4vLyAucm91bmRlZENvcm5lcnN7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyAvLyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4vLyAgICAgLy8gLy8gZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyMTksMjE5LDIxOSkgIWltcG9ydGFudDtcclxuLy8gICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4vLyAgICAgLyogd2lkdGg6IDQxJTsgKi9cclxuLy8gICAgIC8vIG1heC13aWR0aDogNTB2dzsgLy8gdGhpcyBpcyBhcHBseWluZyBwZXJmZWN0bHlcclxuLy8gICAgIC8vIG1heC1oZWlnaHQ6IDEwdmg7XHJcbi8vIH0iLCIuY2FyZC1jZW50ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc2lnbnVwTGFiZWwge1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc2l0aW9uQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdG9wOiA3JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let LoginPage = class LoginPage {
    constructor(formBuilder, authService, router, platform) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.platform = platform;
        this.loginError = false;
        this.loginErrorMessage = '';
        this.validation_messages = {
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email address' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
                // { type: 'pattern', message: 'Please enter a valid password' },
                { type: 'minLength', message: 'Password must be over 5 characters' }
            ],
        };
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
        });
    }
    ngOnInit() {
    }
    login() {
        this.authService.login(this.registerForm.get('email').value, this.registerForm.get('password').value).then(() => {
            this.router.navigate(['/tabs']);
        }).catch(err => {
            this.loginError = true;
            this.loginErrorMessage = err.message;
        });
    }
    ionViewDidEnter() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            if ((this.router.isActive('/login', true) && this.router.url === '/login')) {
                navigator['app'].exitApp();
            }
        });
    }
    ionViewWillLeave() { this.backButtonSubscription.unsubscribe(); }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map