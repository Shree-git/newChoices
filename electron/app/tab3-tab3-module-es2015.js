(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Calendar \n    </ion-title>\n    <!-- <div class=\"ion-text-center\">\n      <ion-text>{{ viewTitle }}</ion-text>\n    </div> -->\n    <ion-buttons slot=\"end\" >\n      <ion-button (click)=\"today()\">TODAY</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n      <ion-card-title class=\"ion-text-center\">New Event</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"!collapseCard\">\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"event.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.detail\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-text>\n        <ion-label class=\"ion-padding\">All Day?</ion-label>\n        <ion-checkbox color=\"secondary\" [(ngModel)]=\"event.allDay\"></ion-checkbox>\n      </ion-text>\n      <ion-button color=\"tertiary\" fill=\"solid\" expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title==''\">Add Event</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='month' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('month')\">Month</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='week' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('week')\">Week</ion-button>\n    </ion-col>\n    <ion-col  size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='day' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('day')\">Day</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"ion-text-left\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-circle\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" style=\"top:10px;\" size=\"6\">\n      <ion-label>{{ viewTitle }}</ion-label>\n    </ion-col>\n    <ion-col class=\"ion-text-right\">\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward-circle\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <calendar \n        [eventSource]=\"eventSource\"\n        [calendarMode]=\"calendar.mode\"\n        [currentDate]=\"calendar.currentDate\"\n        (onEventSelected)=\"onEventSelected($event)\"\n        (onTitleChanged)=\"onViewTitleChanged($event)\"\n        (onTimeSelected)=\"onTimeSelected($event)\"\n        step=\"30\">\n        \n  </calendar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab3/event.service.ts":
/*!***************************************!*\
  !*** ./src/app/tab3/event.service.ts ***!
  \***************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore/ */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EventService = class EventService {
    constructor(afStore, aService) {
        this.afStore = afStore;
        this.aService = aService;
        this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('events');
    }
    getAllEvents() {
        this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('events');
        this.events = this.eventsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.events;
    }
    getEvent(eventId) {
        return this.eventsCollection.doc(eventId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(journal => {
            journal.id = eventId;
            return journal;
        }));
    }
    updateEvent(event) {
        return this.eventsCollection.doc(event.id).update({ title: event.title,
            detail: event.detail });
    }
    deleteEvent(eventId) {
        return this.eventsCollection.doc(eventId).delete();
    }
    addEvent(event) {
        return this.eventsCollection.add(event);
    }
};
EventService.ctorParameters = () => [
    { type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"]
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".monthview-primary-with-event {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9EOlxcVmFscG8gQ291cnNlc1xcU3ByaW5nICcyMFxcU29mdHdhcmUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFxcSW9uaWMgUHJvamVjdHNcXE5ld0Nob2ljZXNcXGNob2ljZXNOZXcvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb250aHZpZXctcHJpbWFyeS13aXRoLWV2ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59IiwiLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.service */ "./src/app/tab3/event.service.ts");






let Tab3Page = class Tab3Page {
    constructor(alertCtrl, locale, eService) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.eService = eService;
        this.event = {
            title: '',
            detail: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
        this.collapseCard = true;
        this.minDate = new Date(Date.UTC(new Date(this.event.startTime).getUTCFullYear(), new Date(this.event.startTime).getUTCMonth() - 3, new Date(this.event.startTime).getUTCDate())).toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: "month",
            currentDate: new Date()
        };
        this.viewTitle = '';
        this.copyEventSource = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.allEvents = this.eService.getAllEvents();
            console.log(this.eventSource);
            yield this.allEvents.subscribe(event => {
                // console.log(event)
                // console.log(this.eventSource)
                // try{
                //   this.eventSource = event
                // }catch(error){
                //   console.log(error.code)
                // }
                // console.log(this.eventSource)
                // this.eventSource.push(event)
                // console.log(this.eventSource)
                this.eventSource = [];
                event.forEach(element => {
                    let eventCopy = {
                        id: element.id,
                        title: element.title,
                        detail: element.detail,
                        startTime: new Date(element.startTime),
                        endTime: new Date(element.endTime),
                        allDay: element.allDay
                    };
                    this.eventSource.push(eventCopy);
                });
                // this.myCal.loadEvents()
                //   console.log(this.copyEventSource)
                // this.eventSource = this.copyEventSource
                console.log(this.eventSource);
                this.myCal.loadEvents();
            });
            //this.eventSource.push(this.eService.getAllEvents())
            this.resetEvent();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.allEvents = this.eService.getAllEvents();
            console.log(this.eventSource);
            yield this.allEvents.subscribe(event => {
                // console.log(event)
                // console.log(this.eventSource)
                // try{
                //   this.eventSource = event
                // }catch(error){
                //   console.log(error.code)
                // }
                // console.log(this.eventSource)
                // this.eventSource.push(event)
                // console.log(this.eventSource)
                this.eventSource = [];
                event.forEach(element => {
                    let eventCopy = {
                        id: element.id,
                        title: element.title,
                        detail: element.detail,
                        startTime: new Date(element.startTime),
                        endTime: new Date(element.endTime),
                        allDay: element.allDay
                    };
                    this.eventSource.push(eventCopy);
                });
                // this.myCal.loadEvents()
                //   console.log(this.copyEventSource)
                // this.eventSource = this.copyEventSource
                console.log(this.eventSource);
                this.myCal.loadEvents();
            });
            //this.eventSource.push(this.eService.getAllEvents())
            this.resetEvent();
        });
    }
    resetEvent() {
        this.event = {
            title: '',
            detail: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    }
    addEvent() {
        let eventCopy = {
            title: this.event.title,
            detail: this.event.detail,
            startTime: this.event.startTime,
            endTime: this.event.endTime,
            allDay: this.event.allDay
        };
        if (eventCopy.allDay) {
            let start = new Date(eventCopy.startTime);
            let end = new Date(eventCopy.endTime);
            let s = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            let e = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
            eventCopy.startTime = s.toISOString();
            eventCopy.endTime = e.toISOString();
        }
        this.eService.addEvent(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
        this.collapseCard = true;
    }
    deleteEvent(event) {
        // this.eventSource.filter(ev =>{
        //   ev !== event
        // })
        this.eService.deleteEvent(event.id);
        // let index = this.eventSource.indexOf(event)
        // if(index > -1){
        //   this.eventSource.splice(index,1)
        // }
        // // this.eventSource.pop()
        // this.myCal.loadEvents()
    }
    changeMode($event) {
        this.calendar.mode = $event;
    }
    back() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    }
    next() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.event.startTime, 'medium', this.locale);
            var end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.event.endTime, 'medium', this.locale);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.detail,
                cssClass: 'buttonCss',
                message: 'From: ' + start + '<br><br>To: ' + end,
                buttons: [{
                        text: 'OK',
                        cssClass: 'first-button',
                        role: 'OK'
                    }, {
                        text: 'Delete',
                        cssClass: 'second-button',
                        handler: () => {
                            this.deleteEvent(event);
                        }
                    }]
            }).then(al => {
                al.present();
            });
        });
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onTimeSelected(eve) {
        var selected = new Date(eve.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = selected.toISOString();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"], { static: false })
], Tab3Page.prototype, "myCal", void 0);
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map