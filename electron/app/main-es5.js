function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <!-- <div *ngIf=\"msg.currentMessage | async as message\">\n    <h1>{{ message.notification.title }}</h1>\n    <p>{{ message.notification.body }}</p>\n  </div> -->\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'tabs',
      pathMatch: 'full'
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tabs-tabs-module */
        [__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | register-register-module */
        [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./menu/menu.module */
        "./src/app/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      },
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'reset-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reset-password-reset-password-module */
        "reset-password-reset-password-module").then(__webpack_require__.bind(null,
        /*! ./reset-password/reset-password.module */
        "./src/app/reset-password/reset-password.module.ts")).then(function (m) {
          return m.ResetPasswordPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _settings_dark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings/dark.service */
    "./src/app/settings/dark.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _services_messaging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/messaging.service */
    "./src/app/services/messaging.service.ts"); // import { SplashScreen } from '@ionic-native/splash-screen/ngx';


    var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].SplashScreen;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, // private splashScreen: SplashScreen,
      statusBar, authService, darkService, router, msg) {
        _classCallCheck(this, AppComponent);

        // Use matchMedia to check the user preference
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.platform = platform;
        this.statusBar = statusBar;
        this.authService = authService;
        this.darkService = darkService;
        this.router = router;
        this.msg = msg; // this.darkService.toggleDarkTheme(prefersDark.matches);
        // // Listen for changes to the prefers-color-scheme media query
        // prefersDark.addListener((mediaQuery) => this.darkService.toggleDarkTheme(mediaQuery.matches));

        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault(); // this.splashScreen.hide();


            SplashScreen.hide();

            _this.darkService.toggleDarkTheme(JSON.parse(localStorage.getItem('dark')));

            console.log('init', JSON.parse(localStorage.getItem('dark'))); // this.authService.getUserDoc().pipe(filter(user => !!user)).pipe(take(1)).subscribe(user => {
            //   this.msg.getPermission(user);
            //   this.msg.monitorRefresh(user)
            //   this.msg.receiveMessages();
            // })
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _settings_dark_service__WEBPACK_IMPORTED_MODULE_5__["DarkService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_messaging_service__WEBPACK_IMPORTED_MODULE_8__["MessagingService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js");
    /* harmony import */


    var _firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./firebase */
    "./src/app/firebase.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");
    /* harmony import */


    var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-order-pipe */
    "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts"); // import { Network } from '@ionic-native/network/ngx';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_13__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__["AngularFireMessagingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_14__["NgCalendarModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__["OrderModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/firebase.ts":
  /*!*****************************!*\
    !*** ./src/app/firebase.ts ***!
    \*****************************/

  /*! exports provided: firebaseConfig */

  /***/
  function srcAppFirebaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });

    var firebaseConfig = {
      apiKey: "AIzaSyCAO__95vTA48qmYzPTF0gDPT1GPGQTu7Q",
      authDomain: "choicesnew-a0046.firebaseapp.com",
      databaseURL: "https://choicesnew-a0046.firebaseio.com",
      projectId: "choicesnew-a0046",
      storageBucket: "choicesnew-a0046.appspot.com",
      messagingSenderId: "364314151779",
      appId: "1:364314151779:web:b30016de7684ae346a6156",
      measurementId: "G-96YKNTXWM0"
    };
    /***/
  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, afAuth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.afAuth = afAuth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.afAuth.onAuthStateChanged(function (user) {
              if (user) {
                resolve(true);
              } else {
                console.log('User is not logged in');

                _this2.router.navigate(['/login']);

                resolve(false);
              }
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./presence.service */
    "./src/app/services/presence.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { switchMap } from 'rxjs/operators'
    // import { Observable } from 'rxjs/Observable';


    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(afAuth, afStore, alertCtrl, router, presenceService) {
        var _this3 = this;

        _classCallCheck(this, AuthenticationService);

        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.presenceService = presenceService; // this.getUserInfo()
        // this.usersRef = this.afStore.collection('users')
        // this.usersRef = this.usersRef.where('uid','==', this.user.uid)

        this.user = JSON.parse(localStorage.getItem('user'));
        this.afAuth.onAuthStateChanged(function (user) {
          // if (user){
          //   console.log(user.uid)
          //   this.user = user
          //   localStorage.setItem('user', JSON.stringify(this.user))
          //   JSON.parse(localStorage.getItem('user'))
          //   // this.user = {
          //   //   uid: user.uid,
          //   //   email: user.email,
          //   //   photoURL: user.photoURL
          //   // }
          // }else{
          //   this.user = null
          //   localStorage.setItem('user', null)
          //   JSON.parse(localStorage.getItem('user'))
          // }
          if (user) {
            _this3.user = user;
            localStorage.setItem('user', JSON.stringify(_this3.user));
            JSON.parse(localStorage.getItem('user'));
          } else {
            _this3.user = null;
            localStorage.setItem('user', null);
            _this3.user = JSON.parse(localStorage.getItem('user'));
          }
        }); // this.afAuth.authState.subscribe(user => {
        //   if (user) {
        //     this.user = user
        //     localStorage.setItem('user', JSON.stringify(this.user))
        //     JSON.parse(localStorage.getItem('user'))
        //   }else{
        //     this.user = null
        //     localStorage.setItem('user', null)
        //     JSON.parse(localStorage.getItem('user'))
        //   }
        // })
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          return this.afAuth.signInWithEmailAndPassword(email, password);
        } //  getCurrentUser(){
        //    return this.afAuth.currentUser
        //  }

      }, {
        key: "register",
        value: function register(email, password) {
          var _this4 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function () {
            if (_this4.isLoggedIn) {
              console.log(_this4.user.uid);

              _this4.updatePhotoURL("https://firebasestorage.googleapis.com/v0/b/choicesnew-a0046.appspot.com/o/images%2FChoicesProfile.png?alt=media&token=7afd3f21-7b16-4391-b66b-2ec31870ff38");

              _this4.afStore.collection('users').doc(_this4.user.uid).set({
                uid: _this4.user.uid,
                email: _this4.user.email,
                displayName: _this4.user.displayName,
                photoURL: _this4.user.photoURL
              });
            }
          });
        } //  async sendVerificationMail(){
        //    return await (await this.afAuth.currentUser).sendEmailVerification().then(()=>{
        //    })
        //  }

      }, {
        key: "getUserDoc",
        value: function getUserDoc() {
          var _this5 = this;

          var user;
          user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (user) {
            if (user) {
              return _this5.afStore.doc("users/".concat(user.uid)).valueChanges();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
          }));
          return user;
        }
      }, {
        key: "updateEmail",
        value: function updateEmail(email) {
          var _this6 = this;

          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              user.updateEmail(email).then(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this7 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.user = {
                            uid: user.uid,
                            email: user.email,
                            photoURL: user.photoURL
                          };
                          this.afStore.collection('users').doc(user.uid).update({
                            email: email
                          });
                          localStorage.setItem('user', JSON.stringify(this.user));
                          JSON.parse(localStorage.getItem('user'));
                          alert = this.alertCtrl.create({
                            header: 'Success',
                            message: 'Email successfully changed.',
                            buttons: [{
                              text: 'OK',
                              role: 'OK',
                              handler: function handler() {
                                _this7.router.navigate(['/tabs/settings/account']);
                              }
                            }]
                          });
                          _context.next = 7;
                          return alert;

                        case 7:
                          _context.next = 9;
                          return _context.sent.present();

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              })["catch"](function (err) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this8 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          alert = this.alertCtrl.create({
                            header: 'Login and try again',
                            message: 'Changing email requires you to login recently.',
                            buttons: [{
                              text: 'Login',
                              handler: function handler() {
                                _this8.logOut();
                              }
                            }, {
                              text: 'Cancel',
                              role: 'cancel'
                            }]
                          });
                          _context2.next = 3;
                          return alert;

                        case 3:
                          _context2.next = 5;
                          return _context2.sent.present();

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            }
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(password) {
          var _this9 = this;

          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              user.updatePassword(password).then(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var _this10 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          this.user = {
                            uid: user.uid,
                            email: user.email,
                            photoURL: user.photoURL
                          };
                          localStorage.setItem('user', JSON.stringify(this.user));
                          JSON.parse(localStorage.getItem('user'));
                          alert = this.alertCtrl.create({
                            header: 'Success',
                            message: 'Password successfully changed.',
                            cssClass: 'buttonCss',
                            buttons: [{
                              text: 'OK',
                              cssClass: 'first-button',
                              role: 'OK',
                              handler: function handler() {
                                _this10.router.navigate(['/tabs/settings/account']);
                              }
                            }]
                          });
                          _context3.next = 6;
                          return alert;

                        case 6:
                          _context3.next = 8;
                          return _context3.sent.present();

                        case 8:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              })["catch"](function (err) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var _this11 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          alert = this.alertCtrl.create({
                            header: 'Login and try again',
                            message: 'Changing password requires you to login recently.',
                            cssClass: 'buttonCss',
                            buttons: [{
                              text: 'Login',
                              cssClass: 'first-button',
                              handler: function handler() {
                                _this11.logOut();
                              }
                            }, {
                              text: 'Cancel',
                              cssClass: 'second-button',
                              role: 'cancel'
                            }]
                          });
                          _context4.next = 3;
                          return alert;

                        case 3:
                          _context4.next = 5;
                          return _context4.sent.present();

                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              });
            }
          });
        }
      }, {
        key: "passwordReset",
        value: function passwordReset(email) {
          return this.afAuth.sendPasswordResetEmail(email).then(function () {
            window.alert('Password reset email has been sent, please check your inbox.');
          })["catch"](function (error) {
            window.alert(error);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.presenceService.setPresence('offline');

                  case 2:
                    return _context5.abrupt("return", this.afAuth.signOut().then(function () {
                      // this.user = null
                      // this.userData = null
                      localStorage.removeItem('user');
                      console.log(_this12.user);
                      window.location.reload();

                      _this12.router.navigate(['/login']);
                    }));

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // getUserInfo(): User{
        //   //  this.afAuth.onAuthStateChanged((user)=>{
        //   //   if (user){
        //   //     console.log(user.uid)
        //   //     this.user = {
        //   //       uid: user.uid,
        //   //       email: user.email,
        //   //       photoURL: user.photoURL
        //   //     }
        //   //   }else{
        //   //     this.user = null
        //   //   }
        //   // }).then(()=>{
        //   // })
        //   this.user = JSON.parse(localStorage.getItem('user'))
        //   return this.user
        // }

      }, {
        key: "updatePhotoURL",
        value: function updatePhotoURL(pURL) {
          var _this13 = this;

          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              user.updateProfile({
                photoURL: pURL
              }).then(function () {
                _this13.afStore.collection('users').doc(user.uid).update({
                  photoURL: pURL
                });

                console.log(pURL);
                console.log(user.photoURL);
                _this13.user = {
                  uid: user.uid,
                  email: user.email,
                  photoURL: user.photoURL
                };
                localStorage.setItem('user', JSON.stringify(_this13.user));
                JSON.parse(localStorage.getItem('user'));
                console.log(_this13.user.photoURL);

                _this13.router.navigate(['/tabs']); // this.user.photoURL = user.photoURL

              });
            }
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = JSON.parse(localStorage.getItem('user'));

          if (user === null) {
            return null;
          }

          return user;
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null ? true : false;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/messaging.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/messaging.service.ts ***!
    \***********************************************/

  /*! exports provided: MessagingService */

  /***/
  function srcAppServicesMessagingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingService", function () {
      return MessagingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { Subject } from 'rxjs/Subject'


    var MessagingService = function MessagingService() {
      _classCallCheck(this, MessagingService);
    };

    MessagingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessagingService);
    /***/
  },

  /***/
  "./src/app/services/presence.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/presence.service.ts ***!
    \**********************************************/

  /*! exports provided: PresenceService */

  /***/
  function srcAppServicesPresenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresenceService", function () {
      return PresenceService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PresenceService = /*#__PURE__*/function () {
      function PresenceService(afAuth, db) {
        _classCallCheck(this, PresenceService);

        this.afAuth = afAuth;
        this.db = db;
        console.log('let there be presence');
        this.updateOnUser().subscribe();
        this.updateOnDisconnect().subscribe();
        this.updateOnAway();
      }

      _createClass(PresenceService, [{
        key: "getPresence",
        value: function getPresence(uid) {
          return this.db.object("status/".concat(uid)).valueChanges();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).toPromise();
        }
      }, {
        key: "setPresence",
        value: function setPresence(status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var user;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getUser();

                  case 2:
                    user = _context6.sent;

                    if (!user) {
                      _context6.next = 5;
                      break;
                    }

                    return _context6.abrupt("return", this.db.object("status/".concat(user.uid)).update({
                      status: status,
                      timestamp: this.timestamp
                    }));

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "updateOnUser",
        // Implement presence logic here
        // Updates status when logged-in connection to Firebase starts
        value: function updateOnUser() {
          var _this14 = this;

          var connection = this.db.object('.info/connected').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (connected) {
            return connected ? 'online' : 'offline';
          }));
          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return user ? connection : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])('offline');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (status) {
            return _this14.setPresence(status);
          }));
        }
      }, {
        key: "updateOnDisconnect",
        value: function updateOnDisconnect() {
          var _this15 = this;

          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) {
            if (user) {
              _this15.db.object("status/".concat(user.uid)).query.ref.onDisconnect().update({
                status: 'offline',
                timestamp: _this15.timestamp
              });
            }
          }));
        } // async signOut() {
        //   await this.setPresence('offline');
        //   await this.afAuth.auth.signOut();
        // }
        // User navigates to a new tab, case 3

      }, {
        key: "updateOnAway",
        value: function updateOnAway() {
          var _this16 = this;

          document.onvisibilitychange = function (e) {
            if (document.visibilityState === 'hidden') {
              _this16.setPresence('away');
            } else {
              _this16.setPresence('online');
            }
          };
        }
      }, {
        key: "timestamp",
        get: function get() {
          return firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        }
      }]);

      return PresenceService;
    }();

    PresenceService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }];
    };

    PresenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PresenceService);
    /***/
  },

  /***/
  "./src/app/settings/dark.service.ts":
  /*!******************************************!*\
    !*** ./src/app/settings/dark.service.ts ***!
    \******************************************/

  /*! exports provided: DarkService */

  /***/
  function srcAppSettingsDarkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DarkService", function () {
      return DarkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DarkService = /*#__PURE__*/function () {
      function DarkService() {
        _classCallCheck(this, DarkService);
      } // document.body.classList.toggle('dark', false);
      // Add or remove the "dark" class based on if the media query matches


      _createClass(DarkService, [{
        key: "toggleDarkTheme",
        value: function toggleDarkTheme(themeToggle) {
          document.body.classList.toggle('dark', themeToggle);
          localStorage.setItem('dark', themeToggle); // JSON.parse(localStorage.getItem('dark'))
        }
      }]);

      return DarkService;
    }();

    DarkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DarkService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Valpo Courses\Spring '20\Software Design and Development\Ionic Projects\NewChoices\choicesNew\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map