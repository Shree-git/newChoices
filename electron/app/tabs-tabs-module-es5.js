function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu contentId=\"content\" side=\"start\">\n  <ion-header style=\"margin-bottom: 8px;\">\n    <ion-toolbar color=\"primary\" style=\"padding: 10px 0 10px 10px;\">\n      \n        <ion-avatar\n          slot=\"start\"\n          routerLink=\"/tabs/settings/account/display-photo\"\n        >\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-img [src]=\"authService.getUser().photoURL\"></ion-img>\n        </ion-menu-toggle>\n        </ion-avatar>\n    \n      <ion-menu-toggle auto-hide=\"false\">\n      <ion-title\n        routerLink=\"/tabs/settings/account\">{{ accountService.account.fName }} {{ accountService.account.lName\n        }}</ion-title\n      >\n    </ion-menu-toggle>\n      <ion-title size=\"small\">{{ authService.user.email }}</ion-title>\n    \n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list *ngFor=\"let p of pages\">\n      <ion-menu-toggle auto-hide=\"false\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"forward\">\n          <ion-icon [name]=\"p.icon\" slot=\"start\"> </ion-icon>\n          {{ p.title }}\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n    <ion-list>\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item routerLink=\"/tabs/settings\" routerDirection=\"forward\"> \n        <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\n        Settings\n      </ion-item>\n    </ion-menu-toggle>\n    </ion-list>\n    <ion-list>\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item (click)=\"logOut()\" routerDirection=\"forward\">\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n        Log Out\n      </ion-item>\n    </ion-menu-toggle>\n  </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"journal\"></ion-icon>\n      <ion-label>Journals</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"stats-chart\"></ion-icon>\n      <ion-label>Impulses</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Calendar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"inbox\">\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n      <ion-label>Chats</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }, {
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab1-tab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
          /*! ../tab1/tab1.module */
          "./src/app/tab1/tab1.module.ts")).then(function (m) {
            return m.Tab1PageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab2-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../tab2/tab2.module */
          "./src/app/tab2/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        }
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab3-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ../tab3/tab3.module */
          "./src/app/tab3/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | inbox-inbox-module */
          "inbox-inbox-module").then(__webpack_require__.bind(null,
          /*! ../inbox/inbox.module */
          "./src/app/inbox/inbox.module.ts")).then(function (m) {
            return m.InboxPageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts"); // import { Network } from '@ionic-native/network/ngx';


    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n  image: url(\"https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-penguin-penguin-cartoon-cartoon-cartoon-penguin-png-image_485345.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcVmFscG8gQ291cnNlc1xcU3ByaW5nICcyMFxcU29mdHdhcmUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFxcSW9uaWMgUHJvamVjdHNcXE5ld0Nob2ljZXNcXGNob2ljZXNOZXcvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSwrSUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWc6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcbiAgICBpbWFnZTogdXJsKCdodHRwczovL3BuZy5wbmd0cmVlLmNvbS9wbmctdmVjdG9yLzIwMTkwMTIwL291cmxhcmdlL3BuZ3RyZWUtcGVuZ3Vpbi1wZW5ndWluLWNhcnRvb24tY2FydG9vbi1jYXJ0b29uLXBlbmd1aW4tcG5nLWltYWdlXzQ4NTM0NS5qcGcnKTtcbn1cbiIsImlvbi1pbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xuICBpbWFnZTogdXJsKFwiaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLXZlY3Rvci8yMDE5MDEyMC9vdXJsYXJnZS9wbmd0cmVlLXBlbmd1aW4tcGVuZ3Vpbi1jYXJ0b29uLWNhcnRvb24tY2FydG9vbi1wZW5ndWluLXBuZy1pbWFnZV80ODUzNDUuanBnXCIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _settings_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../settings/account/account.service */
    "./src/app/settings/account/account.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _services_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/messaging.service */
    "./src/app/services/messaging.service.ts"); // import { Network } from '@ionic-native/network/ngx';


    var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Network;

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(authService, accountService, platform, // private networkStatus: NetworkStatus,
      // private networkListener: PluginListenerHandle,
      router, alertCtrl, msg) {
        _classCallCheck(this, TabsPage);

        //               // watch network for a disconnection
        // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        //   console.log('network was disconnected :-(');
        // });
        this.authService = authService;
        this.accountService = accountService;
        this.platform = platform;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.msg = msg; // // stop disconnect watch
        // disconnectSubscription.unsubscribe();
        // // watch network for a connection
        // let connectSubscription = this.network.onConnect().subscribe(() => {
        //   console.log('network connected!');
        //   // We just got a connection but we need to wait briefly
        //    // before we determine the connection type. Might need to wait.
        //   // prior to doing any api requests as well.
        //   setTimeout(() => {
        //     if (this.network.type === 'wifi') {
        //       console.log('we got a wifi connection, woohoo!');
        //     }
        //   }, 3000);
        // });
        // // stop connect watch
        // connectSubscription.unsubscribe();
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.getAccount();
                    this.sideMenu();
                    this.getPhoto();
                    this.networkListener = Network.addListener('networkStatusChange', function (status) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log("Network status changed", status);
                                this.networkStatus = status;

                                if (this.networkStatus.connected) {
                                  _context.next = 10;
                                  break;
                                }

                                _context.next = 5;
                                return this.alertCtrl.create({
                                  header: 'No Internet Connection',
                                  message: 'Connect to the internet to use the application.',
                                  cssClass: 'buttonCss',
                                  backdropDismiss: false
                                });

                              case 5:
                                alert = _context.sent;
                                _context.next = 8;
                                return alert.present();

                              case 8:
                                _context.next = 11;
                                break;

                              case 10:
                                // alert.dismiss();
                                alert.dismiss();

                              case 11:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });
                    _context2.next = 6;
                    return Network.getStatus();

                  case 6:
                    this.networkStatus = _context2.sent;

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getAccount();
          this.sideMenu();
          this.getPhoto();
        } // ngAfterViewInit(){
        //   this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(666666, ()=>{
        //     if(this.constructor.name == "TabsPage"){
        //        navigator['app'].exitApp();
        //     }
        //   })
        // }
        // ngOnDestroy(){
        //   this.backButtonSubscription.unsubscribe();
        // }

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (_this2.router.isActive('/tabs/tab1', true) && _this2.router.url === '/tabs/tab1' || _this2.router.isActive('/tabs/tab2', true) && _this2.router.url === '/tabs/tab2' || _this2.router.isActive('/tabs/tab3', true) && _this2.router.url === '/tabs/tab3' || _this2.router.isActive('/tabs/inbox', true) && _this2.router.url === '/tabs/inbox') {
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
        key: "getAccount",
        value: function getAccount() {
          this.account = this.accountService.getAccount();
        }
      }, {
        key: "getPhoto",
        value: function getPhoto() {
          this.photoURL = this.authService.getUser().photoURL;
        }
      }, {
        key: "sideMenu",
        value: function sideMenu() {
          this.pages = [{
            title: 'Journal',
            url: '/tabs/tab1',
            icon: 'journal'
          }, {
            title: 'Impulses',
            url: '/tabs/tab2',
            icon: 'stats-chart'
          }, {
            title: 'Calendar',
            url: '/tabs/tab3',
            icon: 'calendar'
          }, {
            title: 'Chats',
            url: '/tabs/inbox',
            icon: 'chatbox-ellipses'
          }];
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.logOut();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          if (this.user == null) {
            this.user = this.authService.user;
          }
        }
      }, {
        key: "getreturnUser",
        value: function getreturnUser() {
          return this.authService.getUser();
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _settings_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"]
      }];
    };

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map