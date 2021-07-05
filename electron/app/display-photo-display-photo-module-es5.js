function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["display-photo-display-photo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/display-photo/display-photo.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/display-photo/display-photo.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsAccountDisplayPhotoDisplayPhotoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Display Photo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainDiv\">\n    <!-- <ion-grid>\n      <ion-row>\n      <ion-col size=\"6\" >\n        <ion-img src=\"{{ photoService.photo.base64 ? photoService.photo.base64 : photoService.photo.webviewPath }}\"></ion-img>\n      </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <ion-img style=\"height:200px; width:200px\" [src]=\"downloadURL\"></ion-img>\n    <!-- <ion-button (click)=\"photoService.addNewToGallery()\">\n      <ion-icon name=\"camera\" slot=\"icon-only\"></ion-icon>\n    </ion-button> -->\n    \n    <!-- <ion-label for=\"fileInput\" icon-only ion-button id=\"tempFileInput\">\n      <ion-icon name=\"image\"></ion-icon>\n    </ion-label> -->\n    <!-- <div class=\"fileUpload\"> -->\n      <!-- <ion-button color=\"secondary\">\n        <ion-icon name=\"image\"></ion-icon>\n      </ion-button> -->\n      <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"photoChanged($event)\">\n      <label for=\"file\">Choose an image</label>\n  <!-- </div> -->\n    <ion-button expand=\"block\" (click)=\"savePhoto()\" color=\"tertiary\">\n      <ion-icon name=\"cloud-upload-outline\" style=\"margin-right: 10px\"></ion-icon>Upload</ion-button>\n  </div>\n\n  \n  \n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Camera = _capacitor_core__WEBP.Camera,
        Filesystem = _capacitor_core__WEBP.Filesystem,
        Storage = _capacitor_core__WEBP.Storage;

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService(platform) {
        _classCallCheck(this, PhotoService);

        this.PHOTO_STORAGE = "photos";

        this.convertBlobToBase64 = function (blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        };

        this.platform = platform;
      }

      _createClass(PhotoService, [{
        key: "addNewToGallery",
        value: function addNewToGallery() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                      quality: 100
                    });

                  case 2:
                    capturedPhoto = _context.sent;
                    _context.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context.sent;
                    this.photo = savedImageFile;
                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: this.platform.is('hybrid') ? JSON.stringify(this.photo) : JSON.stringify(function () {
                        // Don't save the base64 representation of the photo data, 
                        // since it's already saved on the Filesystem
                        var photoCopy = Object.assign({}, _this.photo);
                        delete photoCopy.base64;
                        return photoCopy;
                      })
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Save picture to file on device

      }, {
        key: "savePicture",
        value: function savePicture(cameraPhoto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var base64Data, fileName, savedFile;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.readAsBase64(cameraPhoto);

                  case 2:
                    base64Data = _context2.sent;
                    // Write the file to the data directory
                    fileName = new Date().getTime() + '.jpeg';
                    _context2.next = 6;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: base64Data,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 6:
                    savedFile = _context2.sent;

                    if (!this.platform.is('hybrid')) {
                      _context2.next = 11;
                      break;
                    }

                    return _context2.abrupt("return", {
                      filepath: savedFile.uri,
                      webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri)
                    });

                  case 11:
                    return _context2.abrupt("return", {
                      filepath: fileName,
                      webviewPath: cameraPhoto.webPath
                    });

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "readAsBase64",
        value: function readAsBase64(cameraPhoto) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var file, response, blob;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 3;
                    return Filesystem.readFile({
                      path: cameraPhoto.path
                    });

                  case 3:
                    file = _context3.sent;
                    return _context3.abrupt("return", file.data);

                  case 7:
                    _context3.next = 9;
                    return fetch(cameraPhoto.webPath);

                  case 9:
                    response = _context3.sent;
                    _context3.next = 12;
                    return response.blob();

                  case 12:
                    blob = _context3.sent;
                    _context3.next = 15;
                    return this.convertBlobToBase64(blob);

                  case 15:
                    return _context3.abrupt("return", _context3.sent);

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "loadSaved",
        value: function loadSaved() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var photos, readFile;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photos = _context4.sent;
                    this.photo = JSON.parse(photos.value) || []; // Easiest way to detect when running on the web:
                    // “when the platform is NOT hybrid, do this”

                    if (this.platform.is('hybrid')) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 7;
                    return Filesystem.readFile({
                      path: this.photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 7:
                    readFile = _context4.sent;
                    // Web platform only: Save the photo into the base64 field
                    this.photo.base64 = "data:image/jpeg;base64,".concat(readFile.data);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhotoService);
    /***/
  },

  /***/
  "./src/app/settings/account/display-photo/display-photo-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/settings/account/display-photo/display-photo-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: DisplayPhotoPageRoutingModule */

  /***/
  function srcAppSettingsAccountDisplayPhotoDisplayPhotoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayPhotoPageRoutingModule", function () {
      return DisplayPhotoPageRoutingModule;
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


    var _display_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./display-photo.page */
    "./src/app/settings/account/display-photo/display-photo.page.ts");

    var routes = [{
      path: '',
      component: _display_photo_page__WEBPACK_IMPORTED_MODULE_3__["DisplayPhotoPage"]
    }];

    var DisplayPhotoPageRoutingModule = function DisplayPhotoPageRoutingModule() {
      _classCallCheck(this, DisplayPhotoPageRoutingModule);
    };

    DisplayPhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DisplayPhotoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/settings/account/display-photo/display-photo.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/settings/account/display-photo/display-photo.module.ts ***!
    \************************************************************************/

  /*! exports provided: DisplayPhotoPageModule */

  /***/
  function srcAppSettingsAccountDisplayPhotoDisplayPhotoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayPhotoPageModule", function () {
      return DisplayPhotoPageModule;
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


    var _display_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./display-photo-routing.module */
    "./src/app/settings/account/display-photo/display-photo-routing.module.ts");
    /* harmony import */


    var _display_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./display-photo.page */
    "./src/app/settings/account/display-photo/display-photo.page.ts");

    var DisplayPhotoPageModule = function DisplayPhotoPageModule() {
      _classCallCheck(this, DisplayPhotoPageModule);
    };

    DisplayPhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _display_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisplayPhotoPageRoutingModule"]],
      declarations: [_display_photo_page__WEBPACK_IMPORTED_MODULE_6__["DisplayPhotoPage"]]
    })], DisplayPhotoPageModule);
    /***/
  },

  /***/
  "./src/app/settings/account/display-photo/display-photo.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/settings/account/display-photo/display-photo.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsAccountDisplayPhotoDisplayPhotoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.inputfile + label {\n  font-size: 1em;\n  font-weight: 700;\n  color: white;\n  background-color: var(--ion-color-secondary);\n  display: inline-block;\n  margin: 10px;\n  margin-bottom: 75px;\n  width: 180px;\n  height: 50x;\n  padding: 10px;\n  text-align: center;\n}\n\n.inputfile:focus + label,\n.inputfile + label:hover {\n  background-color: var(--ion-color-tertiary);\n}\n\n.inputfile:focus + label {\n  outline: 1px dotted #000;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n.inputfile + label * {\n  pointer-events: none;\n}\n\n.mainDiv {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  padding: 30px 0;\n}\n\n.fileUpload ion-button {\n  width: 50px;\n  height: 50px;\n}\n\n.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvYWNjb3VudC9kaXNwbGF5LXBob3RvL0Q6XFxWYWxwbyBDb3Vyc2VzXFxTcHJpbmcgJzIwXFxTb2Z0d2FyZSBEZXNpZ24gYW5kIERldmVsb3BtZW50XFxJb25pYyBQcm9qZWN0c1xcTmV3Q2hvaWNlc1xcY2hvaWNlc05ldy9zcmNcXGFwcFxcc2V0dGluZ3NcXGFjY291bnRcXGRpc3BsYXktcGhvdG9cXGRpc3BsYXktcGhvdG8ucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9hY2NvdW50L2Rpc3BsYXktcGhvdG8vZGlzcGxheS1waG90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0csV0FBQTtBQ1ZKOztBRGdCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNiSjs7QURnQkE7O0VBRUksMkNBQUE7QUNiSjs7QURnQkE7RUFDQyx3QkFBQTtFQUNBLDBDQUFBO0FDYkQ7O0FEZ0JBO0VBQ0Msb0JBQUE7QUNiRDs7QURnQkE7RUFDSSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUNiRjs7QURnQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDYko7O0FEaUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvYWNjb3VudC9kaXNwbGF5LXBob3RvL2Rpc3BsYXktcGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2ZpbGVJbnB1dHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICB3aWR0aDogNTBweDtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICB9XHJcblxyXG4jdGVtcEZpbGVJbnB1dHtcclxuICAgIFxyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4uaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNTB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRmaWxlOmZvY3VzICsgbGFiZWwsXHJcbi5pbnB1dGZpbGUgKyBsYWJlbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG59XHJcblxyXG4uaW5wdXRmaWxlOmZvY3VzICsgbGFiZWwge1xyXG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgIzAwMDtcclxuXHRvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUgKyBsYWJlbCAqIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLm1haW5EaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZmlsZVVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5maWxlVXBsb2FkIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG59IiwiLmlucHV0ZmlsZSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmlucHV0ZmlsZSArIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNTB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCxcbi5pbnB1dGZpbGUgKyBsYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgIzAwMDtcbiAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xufVxuXG4uaW5wdXRmaWxlICsgbGFiZWwgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWFpbkRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5maWxlVXBsb2FkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cblxuLmZpbGVVcGxvYWQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi51cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/account/display-photo/display-photo.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/settings/account/display-photo/display-photo.page.ts ***!
    \**********************************************************************/

  /*! exports provided: DisplayPhotoPage */

  /***/
  function srcAppSettingsAccountDisplayPhotoDisplayPhotoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayPhotoPage", function () {
      return DisplayPhotoPage;
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


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");

    var DisplayPhotoPage = /*#__PURE__*/function () {
      function DisplayPhotoPage(photoService, firebase, authService, router) {
        _classCallCheck(this, DisplayPhotoPage);

        this.photoService = photoService;
        this.firebase = firebase;
        this.authService = authService;
        this.router = router;
      }

      _createClass(DisplayPhotoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.photoService.loadSaved();
        }
      }, {
        key: "photoChanged",
        value: function photoChanged(photo) {
          var _this2 = this;

          this.file = photo.target.files;
          var filePath = 'images/' + this.file[0].name;
          var fileRef = this.firebase.ref(filePath);
          this.firebase.upload(filePath, this.file[0]).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (url) {
              _this2.downloadURL = url;
            });
          })).subscribe(); //   var storageRef = this.firebase.storage.ref()
          //   console.log(this.file[0].name)
          //   const uploadTask = storageRef.child('images/' + this.file[0].name).put(this.file[0])
          //   const task = storageRef.child('images/' + this.file[0].name)
          //   task.getDownloadURL()
          //   from(task.getDownloadURL()).subscribe(
          //     download => );
          //   uploadTask.on('state_changed', function(snapshot){ 
          //     // var progress =  
          //     //  (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
          //     //   switch (snapshot.state) { 
          //     //     case this.firebase.storage.TaskState.PAUSED: 
          //     //       console.log('Upload is paused'); 
          //     //       break; 
          //     //     case this.firebase.storage.TaskState.RUNNING: 
          //     //       console.log('Upload is running'); 
          //     //       break; 
          //     //   } 
          //   }, function(error) {console.log(error); 
          //   }, function() { 
          //         // Upload completed successfully, now we can get the download URL
          //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
          //     this.downloadURL = downloadURL
          //       console.log('File available at', this.downloadURL);
          // }).then(()=>{
          //   console.log(this.downloadURL)
          //   this.authService.updatePhotoURL(this.downloadURL)
          // })})
        }
      }, {
        key: "savePhoto",
        value: function savePhoto() {
          this.authService.updatePhotoURL(this.downloadURL);
          this.downloadURL = null;
        }
      }, {
        key: "getPhoto",
        value: function getPhoto() {
          this.photoUrl = this.authService.getUser().photoURL;
        }
      }]);

      return DisplayPhotoPage;
    }();

    DisplayPhotoPage.ctorParameters = function () {
      return [{
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    DisplayPhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-display-photo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./display-photo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/account/display-photo/display-photo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./display-photo.page.scss */
      "./src/app/settings/account/display-photo/display-photo.page.scss"))["default"]]
    })], DisplayPhotoPage);
    /***/
  }
}]);
//# sourceMappingURL=display-photo-display-photo-module-es5.js.map