(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/inbox\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ name }}\n    <div *ngIf=\"presence$ | async as presence\" class=\"onOff\"\n      [ngClass]=\"{\n          'is-success':  presence.status  === 'online',\n          'is-warning': presence.status  === 'away',\n          'is-danger':  presence.status  === 'offline'\n      }\"\n>\n\n  {{ presence.status }}\n</div>\n</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  \n  <div\n    *ngFor=\"let message of (combinedMessages|async|orderBy:'createdAt':false)\"\n    class=\"allMsg\"\n  >\n    <ion-row *ngIf=\"message.sender == myAccount.id\" class=\"mainMsg myMsg\">\n      <ion-col>\n        <b>{{ message.senderName }}</b><br />\n        <span>{{ message.message }}</span>\n        <div class=\"time ion-text-right\">\n          {{ message.createdAt | date:'short' }}\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"message.sender == iId\" class=\"mainMsg otherMsg\">\n      <ion-col>\n        <b>{{ message.senderName }}</b><br />\n        <span>{{ message.message }}</span>\n        <div class=\"time ion-text-right\">\n          {{ message.createdAt | date:'short' }}\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <ion-card *ngFor=\"let message of (combinedMessages|async)\" class=\"allMsg\">\n    <ion-card-content class=\"otherMsg\">\n      <h3>{{ account.fName }} {{ account.lName }}</h3>\n      <h2>{{ message.message }}</h2>\n      <h4>{{ message.createdAt | date:'short' }}</h4>\n    </ion-card-content>\n    <!-- <ion-card-content *ngIf=\"message.id == myAccount.id\" class=\"myMsg\">\n      <h3>{{ myAccount.fName }} {{ myAccount.lName }}</h3>\n      <h2>{{ message.message }}</h2>\n      <h4>{{ message.createdAt | date:'short' }}</h4>\n    </ion-card-content> -->\n  <!-- </ion-card> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-input type=\"text\" placeholder=\"Send a message...\" [(ngModel)]=\"message\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"sendMessage()\" [disabled]=\"message === ''\" color=\"primary\" expand=\"block\" class=\"msg-btn\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/inbox/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/inbox/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/inbox/chat/chat.page.ts");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/inbox/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/inbox/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/inbox/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/inbox/chat/chat.page.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js");








let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/inbox/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/inbox/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".allMsg {\n  height: 20px;\n  margin: 5px 3px 5px 3px;\n}\n\n.mainMsg {\n  border-radius: 10px;\n  margin-bottom: 5px;\n  padding: 3px;\n}\n\n.myMsg {\n  width: 70%;\n  float: right;\n  background: var(--ion-color-secondary);\n}\n\n.otherMsg {\n  width: 70%;\n  float: left;\n  background: var(--ion-color-tertiary);\n}\n\n.time {\n  font-size: small;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 10px;\n  padding: 0px 10px;\n}\n\n.is-success {\n  background-color: var(--ion-color-success);\n}\n\n.is-warning {\n  background-color: var(--ion-color-warning);\n}\n\n.is-danger {\n  background-color: var(--ion-color-danger);\n}\n\n.onOff {\n  text-align: center;\n  float: right;\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvY2hhdC9EOlxcVmFscG8gQ291cnNlc1xcU3ByaW5nICcyMFxcU29mdHdhcmUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFxcSW9uaWMgUHJvamVjdHNcXE5ld0Nob2ljZXNcXGNob2ljZXNOZXcvc3JjXFxhcHBcXGluYm94XFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5ib3gvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FDUEo7O0FEY0E7RUFDSSwwQ0FBQTtBQ1hKOztBRGNBO0VBQ0ksMENBQUE7QUNYSjs7QURjQTtFQUNJLHlDQUFBO0FDWEo7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9pbmJveC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbE1zZ3tcclxuICAgIC8vIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweCAzcHggNXB4IDNweDtcclxuICAgIC8vIHBhZGRpbmc6IDNweDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLm1haW5Nc2d7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubXlNc2d7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5vdGhlck1zZ3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbn1cclxuXHJcbi50aW1le1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLy8gYntcclxuLy8gICAgIGZsb2F0OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi5tZXNzYWdlLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5tc2ctYnRue1xyXG5cclxufVxyXG5cclxuLmlzLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5pcy13YXJuaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG59XHJcblxyXG4uaXMtZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5vbk9mZntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSIsIi5hbGxNc2cge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNXB4IDNweCA1cHggM3B4O1xufVxuXG4ubWFpbk1zZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubXlNc2cge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ub3RoZXJNc2cge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5pcy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaXMtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cblxuLmlzLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4ub25PZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/inbox/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/inbox/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox.service */ "./src/app/inbox/inbox.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_settings_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/settings/account/account.service */ "./src/app/settings/account/account.service.ts");
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/presence.service */ "./src/app/services/presence.service.ts");







let ChatPage = class ChatPage {
    constructor(activatedRoute, inboxService, authService, accountService, presence) {
        this.activatedRoute = activatedRoute;
        this.inboxService = inboxService;
        this.authService = authService;
        this.accountService = accountService;
        this.presence = presence;
        this.message = '';
        this.chat = {
            message: '',
            createdAt: '',
            sender: '',
            receiver: '',
            senderName: '',
            receiverName: ''
        };
    }
    ngOnInit() {
        // this.scrollToBottomOnInit();
        const id = this.activatedRoute.snapshot.paramMap.get('chatId');
        const namee = this.activatedRoute.snapshot.paramMap.get('name');
        this.iId = id;
        this.account = this.inboxService.getAccount(this.iId);
        console.log(this.account);
        this.myAccount = this.accountService.account;
        this.name = namee;
        console.log("my", this.myAccount);
        this.presence$ = this.presence.getPresence(this.iId);
        this.presence.getPresence(this.iId).subscribe(elem => {
            console.log(elem);
        });
        // this.presence.getPresence(this.myAccount.id).subscribe(elem=>{
        //   console.log(elem)
        // })
    }
    ionViewWillEnter() {
        if (this.iId) {
            this.account = this.inboxService.getAccount(this.iId);
            console.log(this.account);
            // var id = this.activatedRoute.snapshot.paramMap.get('chatId')
            // this.iId = id
            // // this.inboxService.getAccount(id)
            // console.log(this.account)
            // this.myAccount = this.accountService.account
            //     this.messages = this.inboxService.getChat(this.authService.user.uid, this.iId);
            //     this.otherMessages = this.inboxService.getChat(this.iId, this.authService.user.uid)
            //     this.combinedMessages = zip(this.messages, this.otherMessages)
            // .pipe(map(x => (x[0].concat(x[1]).sort())))
            //     var msg = zip(this.messages, this.otherMessages)
            //     .pipe(map(x => x[0].concat(x[1])))
            // .subscribe(data => {
            //   console.log('merge', data)
            //   data.forEach(cht =>{
            //     console.log(cht.message)
            //   })
            // })
            // this.inboxService.getChat(this.iId).subscribe(chat =>{
            //   console.log(chat)
            //   this.chat = chat
            // })
            this.combinedMessages = this.inboxService.getChat(this.authService.user.uid, this.iId);
            this.inboxService.getChat(this.authService.user.uid, this.iId).subscribe(item => {
                console.log(item);
                setTimeout(() => {
                    this.scrollToBottomOnInit();
                }, 200);
            });
            // this.combinedMessages.subscribe(item=>{
            //   setTimeout(() => {
            //     this.scrollToBottomOnInit();
            //   }, 500);
            // })
            // this.inboxService.getChat(this.authService.user.uid, this.iId).subscribe(item =>{
            //   // console.log(item)
            // })
            setTimeout(() => {
                this.scrollToBottomOnInit();
            }, 200);
        }
    }
    scrollToBottomOnInit() {
        console.log('scrollToBottom');
        this.content.scrollToBottom();
    }
    // sortBy(prop: string) {
    //   return this.messages.arrcompositions.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    // }
    sendMessage() {
        this.chat = {
            message: this.message,
            createdAt: new Date().toISOString(),
            sender: this.authService.user.uid,
            receiver: this.iId,
            senderName: this.myAccount.fName + ' ' + this.myAccount.lName,
            receiverName: this.account.fName + ' ' + this.account.lName
        };
        this.message = '';
        this.inboxService.addMessage(this.chat).then(() => {
            //     this.messages = this.inboxService.getChat(this.authService.user.uid, this.iId);
            //     this.otherMessages = this.inboxService.getChat(this.iId, this.authService.user.uid)
            //     this.combinedMessages = zip(this.messages, this.otherMessages)
            // .pipe(map(x => x[0].concat(x[1])))
            setTimeout(() => {
                this.scrollToBottomOnInit();
            }, 200);
            // this.combinedMessages = this.inboxService.getChat(this.authService.user.uid, this.iId);
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_settings_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true })
], ChatPage.prototype, "content", void 0);
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/chat/chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/inbox/chat/chat.page.scss")).default]
    })
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map