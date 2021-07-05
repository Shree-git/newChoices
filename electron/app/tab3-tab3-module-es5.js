function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Calendar \n    </ion-title>\n    <!-- <div class=\"ion-text-center\">\n      <ion-text>{{ viewTitle }}</ion-text>\n    </div> -->\n    <ion-buttons slot=\"end\" >\n      <ion-button (click)=\"today()\">TODAY</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"secondary\">\n    <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n      <ion-card-title class=\"ion-text-center\">New Event</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"!collapseCard\">\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"event.title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.detail\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>End</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n      </ion-item>\n      <ion-text>\n        <ion-label class=\"ion-padding\">All Day?</ion-label>\n        <ion-checkbox color=\"secondary\" [(ngModel)]=\"event.allDay\"></ion-checkbox>\n      </ion-text>\n      <ion-button color=\"tertiary\" fill=\"solid\" expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title==''\">Add Event</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='month' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('month')\">Month</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='week' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('week')\">Week</ion-button>\n    </ion-col>\n    <ion-col  size=\"4\">\n      <ion-button expand=\"full\" [color]=\"calendar.mode=='day' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('day')\">Day</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"ion-text-left\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-circle\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-center\" style=\"top:10px;\" size=\"6\">\n      <ion-label>{{ viewTitle }}</ion-label>\n    </ion-col>\n    <ion-col class=\"ion-text-right\">\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward-circle\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <calendar \n        [eventSource]=\"eventSource\"\n        [calendarMode]=\"calendar.mode\"\n        [currentDate]=\"calendar.currentDate\"\n        (onEventSelected)=\"onEventSelected($event)\"\n        (onTitleChanged)=\"onViewTitleChanged($event)\"\n        (onTimeSelected)=\"onTimeSelected($event)\"\n        step=\"30\">\n        \n  </calendar>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/event.service.ts":
  /*!***************************************!*\
    !*** ./src/app/tab3/event.service.ts ***!
    \***************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppTab3EventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
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


    var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore/ */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EventService = /*#__PURE__*/function () {
      function EventService(afStore, aService) {
        _classCallCheck(this, EventService);

        this.afStore = afStore;
        this.aService = aService;
        this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('events');
      }

      _createClass(EventService, [{
        key: "getAllEvents",
        value: function getAllEvents() {
          this.eventsCollection = this.afStore.collection('users').doc(this.aService.getUser().uid).collection('events');
          this.events = this.eventsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              data.id = a.payload.doc.id;
              return data;
            });
          }));
          return this.events;
        }
      }, {
        key: "getEvent",
        value: function getEvent(eventId) {
          return this.eventsCollection.doc(eventId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (journal) {
            journal.id = eventId;
            return journal;
          }));
        }
      }, {
        key: "updateEvent",
        value: function updateEvent(event) {
          return this.eventsCollection.doc(event.id).update({
            title: event.title,
            detail: event.detail
          });
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventId) {
          return this.eventsCollection.doc(eventId)["delete"]();
        }
      }, {
        key: "addEvent",
        value: function addEvent(event) {
          return this.eventsCollection.add(event);
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventService);
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".monthview-primary-with-event {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9EOlxcVmFscG8gQ291cnNlc1xcU3ByaW5nICcyMFxcU29mdHdhcmUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFxcSW9uaWMgUHJvamVjdHNcXE5ld0Nob2ljZXNcXGNob2ljZXNOZXcvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb250aHZpZXctcHJpbWFyeS13aXRoLWV2ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59IiwiLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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


    var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ionic2-calendar/calendar */
    "./node_modules/ionic2-calendar/calendar.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/tab3/event.service.ts");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(alertCtrl, locale, eService) {
        _classCallCheck(this, Tab3Page);

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

      _createClass(Tab3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.allEvents = this.eService.getAllEvents();
                    console.log(this.eventSource);
                    _context.next = 4;
                    return this.allEvents.subscribe(function (event) {
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
                      _this.eventSource = [];
                      event.forEach(function (element) {
                        var eventCopy = {
                          id: element.id,
                          title: element.title,
                          detail: element.detail,
                          startTime: new Date(element.startTime),
                          endTime: new Date(element.endTime),
                          allDay: element.allDay
                        };

                        _this.eventSource.push(eventCopy);
                      }); // this.myCal.loadEvents()
                      //   console.log(this.copyEventSource)
                      // this.eventSource = this.copyEventSource

                      console.log(_this.eventSource);

                      _this.myCal.loadEvents();
                    });

                  case 4:
                    //this.eventSource.push(this.eService.getAllEvents())
                    this.resetEvent();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.allEvents = this.eService.getAllEvents();
                    console.log(this.eventSource);
                    _context2.next = 4;
                    return this.allEvents.subscribe(function (event) {
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
                      _this2.eventSource = [];
                      event.forEach(function (element) {
                        var eventCopy = {
                          id: element.id,
                          title: element.title,
                          detail: element.detail,
                          startTime: new Date(element.startTime),
                          endTime: new Date(element.endTime),
                          allDay: element.allDay
                        };

                        _this2.eventSource.push(eventCopy);
                      }); // this.myCal.loadEvents()
                      //   console.log(this.copyEventSource)
                      // this.eventSource = this.copyEventSource

                      console.log(_this2.eventSource);

                      _this2.myCal.loadEvents();
                    });

                  case 4:
                    //this.eventSource.push(this.eService.getAllEvents())
                    this.resetEvent();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "resetEvent",
        value: function resetEvent() {
          this.event = {
            title: '',
            detail: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
          };
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          var eventCopy = {
            title: this.event.title,
            detail: this.event.detail,
            startTime: this.event.startTime,
            endTime: this.event.endTime,
            allDay: this.event.allDay
          };

          if (eventCopy.allDay) {
            var start = new Date(eventCopy.startTime);
            var end = new Date(eventCopy.endTime);
            var s = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            var e = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
            eventCopy.startTime = s.toISOString();
            eventCopy.endTime = e.toISOString();
          }

          this.eService.addEvent(eventCopy);
          this.myCal.loadEvents();
          this.resetEvent();
          this.collapseCard = true;
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(event) {
          // this.eventSource.filter(ev =>{
          //   ev !== event
          // })
          this.eService.deleteEvent(event.id); // let index = this.eventSource.indexOf(event)
          // if(index > -1){
          //   this.eventSource.splice(index,1)
          // }
          // // this.eventSource.pop()
          // this.myCal.loadEvents()
        }
      }, {
        key: "changeMode",
        value: function changeMode($event) {
          this.calendar.mode = $event;
        }
      }, {
        key: "back",
        value: function back() {
          var swiper = document.querySelector('.swiper-container')['swiper'];
          swiper.slidePrev();
        }
      }, {
        key: "next",
        value: function next() {
          var swiper = document.querySelector('.swiper-container')['swiper'];
          swiper.slideNext();
        }
      }, {
        key: "today",
        value: function today() {
          this.calendar.currentDate = new Date();
        }
      }, {
        key: "onEventSelected",
        value: function onEventSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.event.startTime, 'medium', this.locale);
                    end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.event.endTime, 'medium', this.locale);
                    _context3.next = 4;
                    return this.alertCtrl.create({
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
                        handler: function handler() {
                          _this3.deleteEvent(event);
                        }
                      }]
                    }).then(function (al) {
                      al.present();
                    });

                  case 4:
                    alert = _context3.sent;

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        }
      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(eve) {
          var selected = new Date(eve.selectedTime);
          this.event.startTime = selected.toISOString();
          selected.setHours(selected.getHours() + 1);
          this.event.endTime = selected.toISOString();
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: _event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"], {
      "static": false
    })], Tab3Page.prototype, "myCal", void 0);
    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map