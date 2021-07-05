function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInboxInboxPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"> \n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"margin-left: 100px;\">Chats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div\n    *ngFor=\"let user of (users|async)\"\n    [routerLink]=\"['./chat/', user.id, user.fName+' '+user.lName]\"\n    \n  >\n    <div *ngIf=\"user.id != myId\" class=\"userCard\">\n      <div class=\"avatarP\">\n        <ion-avatar *ngIf=\"user.account$ | async as accounty\">\n          <ion-img [src]=\"accounty.photoURL\"></ion-img>\n        </ion-avatar>\n      </div>\n      <div class=\"name\">\n        <h2>{{ user.fName }} {{user.lName }}</h2>\n      </div>\n      <!-- <div *ngIf=\"user.unreadCount | async as unread\" class=\"numOfMsg\">\n        <h4>{{ unread }}</h4>\n      </div> -->\n\n      <div\n        *ngIf=\"user.presence$ | async as presence\"\n        class=\"onOff\"\n        [ngClass]=\"{\n        'is-success':  presence.status  === 'online',\n        'is-warning': presence.status  === 'away',\n        'is-danger':  presence.status  === 'offline'\n    }\"\n      >\n        <!-- {{ presence.status }} -->\n      </div>\n    </div>\n  </div>\n  <!-- <ion-card *ngFor=\"let user of (users|async)\" [routerLink]=\"['./chat/', user.id]\" class=\"userCard\"> -->\n  <!-- <ion-card-header *ngIf=\"user.id != myId\">\n      <div *ngIf=\"user.presence$ | async as presence\" class=\"onOff\"\n      [ngClass]=\"{\n          'is-success':  presence.status  === 'online',\n          'is-warning': presence.status  === 'away',\n          'is-danger':  presence.status  === 'offline'\n      }\"\n>\n\n  {{ presence.status }}\n</div>\n    </ion-card-header> -->\n  <!-- <ion-card-content *ngIf=\"user.id != myId\">\n      \n      <ion-avatar *ngIf=\"user.account$ | async as accounty\">\n        <ion-img [src]=\"accounty.photoURL\"></ion-img>\n      </ion-avatar>\n    \n      <h2>{{ user.fName }} {{user.lName }}</h2>\n      <div *ngIf=\"user.presence$ | async as presence\" class=\"onOff\"\n      [ngClass]=\"{\n          'is-success':  presence.status  === 'online',\n          'is-warning': presence.status  === 'away',\n          'is-danger':  presence.status  === 'offline'\n      }\"\n>\n\n  {{ presence.status }}\n</div>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/inbox/inbox-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/inbox/inbox-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: InboxPageRoutingModule */

  /***/
  function srcAppInboxInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function () {
      return InboxPageRoutingModule;
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


    var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inbox.page */
    "./src/app/inbox/inbox.page.ts");

    var routes = [{
      path: '',
      component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }, {
      path: 'chat/:chatId/:name',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-chat-module */
        "chat-chat-module").then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/inbox/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }];

    var InboxPageRoutingModule = function InboxPageRoutingModule() {
      _classCallCheck(this, InboxPageRoutingModule);
    };

    InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InboxPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inbox/inbox.module.ts":
  /*!***************************************!*\
    !*** ./src/app/inbox/inbox.module.ts ***!
    \***************************************/

  /*! exports provided: InboxPageModule */

  /***/
  function srcAppInboxInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPageModule", function () {
      return InboxPageModule;
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


    var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inbox-routing.module */
    "./src/app/inbox/inbox-routing.module.ts");
    /* harmony import */


    var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inbox.page */
    "./src/app/inbox/inbox.page.ts");

    var InboxPageModule = function InboxPageModule() {
      _classCallCheck(this, InboxPageModule);
    };

    InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]],
      declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
    })], InboxPageModule);
    /***/
  },

  /***/
  "./src/app/inbox/inbox.page.scss":
  /*!***************************************!*\
    !*** ./src/app/inbox/inbox.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppInboxInboxPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".userCard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin: auto;\n  height: 50px;\n  margin-top: 5px;\n  background: linear-gradient(to right, var(--ion-color-primary), var(--ion-color-secondary), var(--ion-color-tertiary));\n  padding: 10px;\n}\n\n.avatarP {\n  flex: 0.35;\n  align-items: center;\n}\n\nion-avatar {\n  max-width: 35px;\n  max-height: 35px;\n}\n\n.name {\n  flex: 2;\n}\n\n.name h2 {\n  font-weight: 100;\n}\n\n.is-success {\n  background-color: var(--ion-color-success);\n}\n\n.is-warning {\n  background-color: var(--ion-color-warning);\n}\n\n.is-danger {\n  background-color: var(--ion-color-danger);\n}\n\n.onOff {\n  flex: 0.12;\n  align-items: center;\n  height: 20px;\n  width: 20px;\n  border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvRDpcXFZhbHBvIENvdXJzZXNcXFNwcmluZyAnMjBcXFNvZnR3YXJlIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcXElvbmljIFByb2plY3RzXFxOZXdDaG9pY2VzXFxjaG9pY2VzTmV3L3NyY1xcYXBwXFxpbmJveFxcaW5ib3gucGFnZS5zY3NzIiwic3JjL2FwcC9pbmJveC9pbmJveC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0Esc0hBQUE7RUFFQSxhQUFBO0FDTEo7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksT0FBQTtBQ05KOztBRFdBO0VBQ0ksZ0JBQUE7QUNSSjs7QURZQTtFQUNJLDBDQUFBO0FDVEo7O0FEWUE7RUFDSSwwQ0FBQTtBQ1RKOztBRFlBO0VBQ0kseUNBQUE7QUNUSjs7QURZQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUlBLFlBQUE7RUFDSSxXQUFBO0VBR1IsbUJBQUE7QUNaQSIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICp7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyB9XHJcbi51c2VyQ2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLy8gd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSx2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSk7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyUHtcclxuICAgIGZsZXg6IDAuMzU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICAgIG1heC13aWR0aDogMzVweDtcclxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgZmxleDoyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLm5hbWUgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgLy8gZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaXMtc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxufVxyXG5cclxuLmlzLXdhcm5pbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XHJcbn1cclxuXHJcbi5pcy1kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuLm9uT2Zme1xyXG4gICAgZmxleDogMC4xMjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgLy8gZmxvYXQ6cmlnaHQ7XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogNDBweDtcclxuLW1vei1ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4iLCIudXNlckNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpKTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmF2YXRhclAge1xuICBmbGV4OiAwLjM1O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWF4LXdpZHRoOiAzNXB4O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xufVxuXG4ubmFtZSB7XG4gIGZsZXg6IDI7XG59XG5cbi5uYW1lIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmlzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4uaXMtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5vbk9mZiB7XG4gIGZsZXg6IDAuMTI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/inbox/inbox.page.ts":
  /*!*************************************!*\
    !*** ./src/app/inbox/inbox.page.ts ***!
    \*************************************/

  /*! exports provided: InboxPage */

  /***/
  function srcAppInboxInboxPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPage", function () {
      return InboxPage;
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


    var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inbox.service */
    "./src/app/inbox/inbox.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_presence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/presence.service */
    "./src/app/services/presence.service.ts");

    var InboxPage = /*#__PURE__*/function () {
      function InboxPage(presence, inboxService, authService) {
        _classCallCheck(this, InboxPage);

        this.presence = presence;
        this.inboxService = inboxService;
        this.authService = authService;
        this.myId = this.authService.user.uid;
      }

      _createClass(InboxPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users = this.inboxService.getUsers(); // this.inboxService.getUsers().subscribe(elem=>{
          //   console.log(elem)
          // })
          // this.inboxService.getUsers().subscribe(user=>{
          //   user.forEach(elem=>{
          //     this.presence$ = this.presence.getPresence(elem.id);
          // this.presence.getPresence(elem.id).subscribe(ele=>{
          //   console.log(ele)
          // })
          //   })
          // });
          // this.userData = this.inboxService.getUserData();
          // this.users.subscribe(()=>{
          // })
          // this.presence$ = this.presence.getPresence(this.iId);
          // this.presence.getPresence(this.iId).subscribe(elem=>{
          //   console.log(elem)
          // })
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// this.users = this.inboxService.getUsers();
          // console.log(this.users)
        }
      }]);

      return InboxPage;
    }();

    InboxPage.ctorParameters = function () {
      return [{
        type: _services_presence_service__WEBPACK_IMPORTED_MODULE_4__["PresenceService"]
      }, {
        type: _inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inbox',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inbox.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inbox.page.scss */
      "./src/app/inbox/inbox.page.scss"))["default"]]
    })], InboxPage);
    /***/
  },

  /***/
  "./src/app/inbox/inbox.service.ts":
  /*!****************************************!*\
    !*** ./src/app/inbox/inbox.service.ts ***!
    \****************************************/

  /*! exports provided: InboxService */

  /***/
  function srcAppInboxInboxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxService", function () {
      return InboxService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_presence_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/presence.service */
    "./src/app/services/presence.service.ts"); // import { combineLatest } from 'rxjs/observable/combineLatest';


    var InboxService = /*#__PURE__*/function () {
      function InboxService(presence, authService, accService, afStore) {
        _classCallCheck(this, InboxService);

        this.presence = presence;
        this.authService = authService;
        this.accService = accService;
        this.afStore = afStore;
        this.account = {
          id: '',
          fName: '',
          lName: '',
          role: '',
          darkTheme: null
        };
        this.myAccount = {
          id: '',
          fName: '',
          lName: '',
          role: '',
          darkTheme: null
        };
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.users = this.afStore.collection('accounts').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); // this.users = this.afStore.collection('users').snapshotChanges().pipe(map(actions=>{
        //   return actions.map(a=>{
        //     const data = a.payload.doc.data()
        //     const id = a.payload.doc.id;
        //     // const acc = this.getAccount(id)
        //     // console.log(acc)
        //     return {id, data}
        //     // return {id, data}
        //   })
        // }))
        // this.users.forEach(element => {
        //   element.forEach(e => {
        //     this.accounts.push(this.getAccount(e.id))
        //   });
        //   // this.accounts.push(this.getAccount(element.id))
        // });
        // console.log(this.accounts)
      }

      _createClass(InboxService, [{
        key: "getUsers",
        value: function getUsers() {
          var _this = this;

          this.users = this.afStore.collection('accounts', function (ref) {
            return ref.where('clients', 'array-contains', _this.authService.user.uid);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;

              var presence$ = _this.presence.getPresence(id);

              _this.presence.getPresence(id).subscribe(function (ele) {
                console.log(ele);
              });

              var account$ = _this.afStore.collection('users').doc(id).valueChanges();

              var unreadCount = _this.getData().subscribe(function (dat) {
                console.log(dat);
                console.log(dat.length);
                return dat.length;
              });

              console.log(unreadCount); // console.log(account$)
              // const acc = this.getAccount(id)
              // // console.log(acc)
              // return {acc}

              return Object.assign(Object.assign({
                id: id
              }, data), {
                presence$: presence$,
                account$: account$,
                unreadCount: unreadCount
              });
            });
          }));
          return this.users;
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          this.userData = this.afStore.collection('users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id; // const acc = this.getAccount(id)
              // // console.log(acc)
              // return {acc}

              return Object.assign({
                id: id
              }, data);
            });
          }));
          return this.userData;
        }
      }, {
        key: "getAccount",
        value: function getAccount(id) {
          var _this2 = this;

          this.afStore.collection('accounts').doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (account) {
            account.id = id;
            return account;
          })).subscribe(function (account) {
            _this2.account = account;
          });
          return this.account;
        }
      }, {
        key: "getChat",
        value: function getChat(sender, receiver) {
          // return this.afStore.collection('users').doc(this.authService.user.uid).collection('chat').doc<Chat>(chatId).valueChanges().pipe(
          //   // take(1),
          //   map(chat=>{
          //     chat.id = chatId;
          //     return chat
          //   })
          // )
          var californiaRef = this.afStore.collection("chat", function (ref) {
            return ref.where('sender', '==', sender).where('receiver', '==', receiver).limit(50);
          });
          var coloradoRef = this.afStore.collection("chat", function (ref) {
            return ref.where('sender', '==', receiver).where('receiver', '==', sender).limit(50);
          });
          this.messages = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(californiaRef.valueChanges(), coloradoRef.valueChanges()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (cities) {
            var _cities = _slicedToArray(cities, 2),
                californiaCities = _cities[0],
                coloradoCities = _cities[1];

            var combined = californiaCities.concat(coloradoCities);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(combined);
          })); // .pipe(
          //   map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),)
          // this.messages = this.afStore.collection('chat', ref => {
          //   return ref.where('sender', 'in', [sender, receiver])
          //     // .where('sender', '==', receiver)
          //     // .where('receiver', '==', sender)
          //     .where('receiver', '==', receiver)
          //     .orderBy('createdAt', 'asc')
          // })
          //   .snapshotChanges()
          //   .pipe(map(actions => {
          //     return actions.map(a => {
          //       const data = a.payload.doc.data() as Chat
          //       const id = a.payload.doc.id
          //       return { id, ...data };
          //     })
          //   }))

          return this.messages; // this.journals = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
          //   return actions.map(a =>{
          //     const data = a.payload.doc.data() as Journal
          //     const id = a.payload.doc.id
          //     return {id, ...data };
          //   })
          // }))
        }
      }, {
        key: "getUnreadChat",
        value: function getUnreadChat(sender, receiver) {
          var _this3 = this;

          // var count;
          this.afStore.collection("chat", function (ref) {
            return ref.where('sender', '==', sender).where('receiver', '==', receiver).where('read', '==', false);
          }).valueChanges().subscribe(function (count) {
            _this3.data.next(count);
          }); // return this.afStore.collection('users').doc(this.authService.user.uid).collection('chat').doc<Chat>(chatId).valueChanges().pipe(
          //   // take(1),
          //   map(chat=>{
          //     chat.id = chatId;
          //     return chat
          //   })
          // )
          // const californiaRef = this.afStore
          //   .collection("chat", ref => ref.where('sender', '==', sender)
          //     .where('receiver', '==', receiver).limit(50)
          //     );
          // const coloradoRef = this.afStore
          //   .collection("chat", ref => ref
          //     .where('sender', '==', receiver)
          //     .where('receiver', '==', sender).limit(50)
          //     );
          // this.messages =
          //   combineLatest(californiaRef.valueChanges(),
          //     coloradoRef.valueChanges()).pipe(
          // switchMap(cities => {
          //       const [californiaCities, coloradoCities] = cities;
          //       const combined = californiaCities.concat(coloradoCities);
          //       return of(combined);
          //     }));
          // .pipe(
          //   map(arr => arr.reduce((acc, cur) => acc.concat(cur) ) ),)
          // this.messages = this.afStore.collection('chat', ref => {
          //   return ref.where('sender', 'in', [sender, receiver])
          //     // .where('sender', '==', receiver)
          //     // .where('receiver', '==', sender)
          //     .where('receiver', '==', receiver)
          //     .orderBy('createdAt', 'asc')
          // })
          //   .snapshotChanges()
          //   .pipe(map(actions => {
          //     return actions.map(a => {
          //       const data = a.payload.doc.data() as Chat
          //       const id = a.payload.doc.id
          //       return { id, ...data };
          //     })
          //   }))

          return this.messages; // this.journals = this.journalsCollection.snapshotChanges().pipe(map(actions=>{
          //   return actions.map(a =>{
          //     const data = a.payload.doc.data() as Journal
          //     const id = a.payload.doc.id
          //     return {id, ...data };
          //   })
          // }))
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.data.asObservable();
        } // getOtherChat(chatId: string): Observable<Chat>{
        //   return this.afStore.collection('users').doc(chatId).collection('chat').doc<Chat>(this.authService.user.uid).valueChanges().pipe(
        //     // take(1),
        //     map(chat=>{
        //       chat.id = chatId;
        //       return chat
        //     })
        //   )
        // }

      }, {
        key: "addMessage",
        value: function addMessage(message) {
          return this.afStore.collection('chat').add(message);
        }
      }]);

      return InboxService;
    }();

    InboxService.ctorParameters = function () {
      return [{
        type: _services_presence_service__WEBPACK_IMPORTED_MODULE_7__["PresenceService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _settings_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    InboxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InboxService);
    /***/
  }
}]);
//# sourceMappingURL=inbox-inbox-module-es5.js.map