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


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"text-muted\">\n  <p class=\"text-center text-md-right text-lg-center\">\n    <cite>ABC</cite> Transport company vehicle logistics, all &copy; reserved. since {{appYear}}\n  </p>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBreakdownhistoryBreakdownhistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faHistory\"></fa-icon>\n            Breakdown Histories\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Breakdown History\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search by engineNo.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Driver Name</th>\n                      <th>Vehicle Engine No.</th>\n                      <th class=\"w-20\">Description</th>\n                      <th>Breakdown Date</th>\n                      <th>Repair Date</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let history of breakdownHistories; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{history.Driver.firstName}} {{history.Driver.lastName}}</td>\n                      <td>{{history.Vehicle.engineNo}}</td>\n                      <td>\n                        <div style=\"max-width: 200px; max-height: 50px; overflow: auto;\">\n                          {{history.description}}\n                        </div>\n                      </td>\n                      <td>{{history.breakdownDate | date}}</td>\n                      <td>{{history.repairDate | date}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(history)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit breakdown details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(history)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete breakdown details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Routes\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Breakdown\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Breakdown\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #breakdownForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <textarea name=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"Breakdown Description\" maxlength=\"300\"\n                      [(ngModel)]=\"newBreakdownHistory.description\" required></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"driverId\"\n                      [(ngModel)]=\"newBreakdownHistory.driverId\" required>\n                      <option [value]=\"null\">Select Driver</option>\n                      <option [value]=\"driver.id\" *ngFor=\"let driver of drivers\">\n                        {{driver.firstName}} {{driver.lastName}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"vehicleId\"\n                      [(ngModel)]=\"newBreakdownHistory.vehicleId\" required>\n                      <option [value]=\"null\">Select Vehicle</option>\n                      <option [value]=\"vehicle.id\" *ngFor=\"let vehicle of vehicles\">\n                        {{vehicle.engineNo}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"form-control-custom form-control d-flex align-items-center\">\n                      <input type=\"text\" name=\"breakdownDate\" class=\"w-100\" placeholder=\"Breakdown Date\"\n                        [(ngModel)]=\"breakdownDate\" ngbDatepicker #d=\"ngbDatepicker\" required readonly\n                        aria-readonly=\"true\" />\n                      <label (click)=\"d.toggle()\" class=\"mb-0 text-info\">\n                        <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                      </label>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group\" *ngIf=\"isEditMode\">\n                    <div class=\"form-control-custom form-control d-flex align-items-center\">\n                      <input type=\"text\" name=\"repairDate\" class=\"w-100\" placeholder=\"Repair Date\"\n                        [(ngModel)]=\"repairDate\" ngbDatepicker #d1=\"ngbDatepicker\" readonly aria-readonly=\"true\" />\n                      <label (click)=\"d1.toggle()\" class=\"mb-0 text-info\">\n                        <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!breakdownForm.form.valid\"\n                      (click)=\"saveBreakdown()\" *ngIf=\"isNewItemMode\">\n                      Save Breakdown\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!breakdownForm.form.valid\"\n                      (click)=\"updateBreakdown()\" *ngIf=\"isEditMode\">\n                      Update Breakdown\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"d-flex justify-content-between mt-2\">\n    <h4 class=\"text-muted\">\n      <fa-icon [icon]=\"faTh\"></fa-icon>\n      Dashboard\n    </h4>\n\n    <button class=\"btn btn-sm btn-danger\" (click)=\"onLogOut()\">\n      <fa-icon [icon]=\"faPowerOff\"></fa-icon>\n      Logout\n    </button>\n  </div>\n  <hr class=\"socket\" />\n\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faCar\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Vehicles\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalVehicles}}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faUsers\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Drivers\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalDrivers}}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faRoute\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Routes\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalRoutes}}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faListAlt\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Tracker\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalTrackers}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-8 mx-auto mt-5 p-0\">\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/profile\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faUser\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Profile</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/vehicletracker\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faListAlt\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Vehicle Tracker</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/vehicles/\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faCar\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Vehicles</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/drivers\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faUsers\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Drivers</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/routes\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faRoute\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Travel Routes</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/breakdownhistories\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faHistory\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Breakdown History</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriverDriverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faUsers\"></fa-icon>\n            Drivers\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Driver\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\"\n                        placeholder=\"Search driver by last name, first name or email.\" [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Last Name</th>\n                      <th>First Name</th>\n                      <th>Email</th>\n                      <th>Marital Status</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let driver of drivers; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{driver.lastName}}</td>\n                      <td>{{driver.firstName}}</td>\n                      <td>{{driver.email}}</td>\n                      <td>{{driver.maritalStatus}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onViewProfile(driver)\">\n                              <fa-icon [icon]=\"faUser\" class=\"mr-2\"></fa-icon>\n                              View driver profile\n                            </label>\n                            <label class=\"dropdown-item\" (click)=\"onEdit(driver)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit driver details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(driver)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete driver details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Driver\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Driver\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #driverForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"lastName\" class=\"form-control form-control-custom\" placeholder=\"Last Name\"\n                      [(ngModel)]=\"newDriver.lastName\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"firstName\" class=\"form-control form-control-custom\"\n                      placeholder=\"First Name\" [(ngModel)]=\"newDriver.firstName\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" class=\"form-control form-control-custom\"\n                      placeholder=\"Email Address\" maxlength=\"60\" [(ngModel)]=\"newDriver.email\" required email />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"tel\" name=\"mobile\" class=\"form-control form-control-custom\" placeholder=\"Mobile No.\"\n                      [(ngModel)]=\"newDriver.mobile\" maxlength=\"11\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <select name=\"maritalStatus\" class=\"form-control form-control-custom\"\n                      [(ngModel)]=\"newDriver.maritalStatus\" required>\n                      <option [value]=\"null\">Marital Status</option>\n                      <option value=\"single\">\n                        Single\n                      </option>\n                      <option value=\"married\">\n                        Married\n                      </option>\n                      <option value=\"divorced\">\n                        Divorced\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!driverForm.form.valid\"\n                      (click)=\"saveDriver()\" *ngIf=\"isNewItemMode\">\n                      Save Driver\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!driverForm.form.valid\"\n                      (click)=\"updateDriver()\" *ngIf=\"isEditMode\">\n                      Update Driver\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto my-5\">\n  <a routerLink=\"/login\" class=\"btn btn-warning btn-sm mb-2 btn-rounded\">\n    <fa-icon [icon]=\"faArrowCircleLeft\"></fa-icon>\n    Login\n  </a>\n  <div class=\"card shadow\">\n    <div class=\"card-body\">\n      <div class=\"text-center\">\n        <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n\n        <h5 class=\"mt-3 text-muted\">\n          Reset Forgotten Password\n        </h5>\n      </div>\n\n\n      <form #confirmEmailForm=\"ngForm\" *ngIf=\"!isValidEmail\">\n        <div class=\"form-group mt-3\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" autocomplete=\"off\" #email=\"ngModel\"\n              [(ngModel)]=\"confirmEmail.email\" email required />\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onConfirmEmail()\"\n            [disabled]=\"!confirmEmailForm.form.valid\">\n            Continue\n            <fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\n          </button>\n        </div>\n      </form>\n\n      <form #resetPasswordForm=\"ngForm\" *ngIf=\"isValidEmail\">\n        <div class=\"form-group\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" autocomplete=\"off\"\n              [(ngModel)]=\"resetPassword.password\" required />\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" #password=\"ngModel\"\n              autocomplete=\"off\" [(ngModel)]=\"resetPassword.confirmPassword\" required />\n          </div>\n          <span class=\"text-danger mt-1\" *ngIf=\"resetPassword.confirmPassword !== resetPassword.password\">\n            <small>Password does not match</small>\n          </span>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onResetPassword()\"\n            [disabled]=\"!resetPasswordForm.form.valid\">\n            Reset Password\n          </button>\n        </div>\n      </form>\n\n      <div *ngIf=\"isProcessing\" class=\"text-center\">\n        <span>\n          <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n          Processing request\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto my-5\">\n  <form #loginForm=\"ngForm\">\n    <div class=\"card shadow\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n        </div>\n\n        <div class=\"my-2\" *ngIf=\"isProcessing\">\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" style=\"width:100%\">\n              authenticating...\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group mt-3\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <span class=\"mr-2 text-muted\">\n              <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n            </span>\n            <input type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" autocomplete=\"off\" #email=\"ngModel\"\n              [(ngModel)]=\"loginModel.email\" email required />\n          </div>\n\n        </div>\n        <div class=\"form-group\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <span class=\"mr-2 text-muted\">\n              <fa-icon [icon]=\"faLock\"></fa-icon>\n            </span>\n            <input type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" autocomplete=\"off\"\n              [(ngModel)]=\"loginModel.password\" required />\n          </div>\n\n        </div>\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onLogin()\" [disabled]=\"!loginForm.form.valid\">\n            Login\n            <fa-icon [icon]=\"faSignInAlt\"></fa-icon>\n          </button>\n        </div>\n        <div class=\"form-group text-center\">\n          <a routerLink=\"/forgot/password\">\n            <small>\n              Forgot your password?\n            </small>\n          </a>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageboxMessageboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">\n    {{settings.title}}\n  </h5>\n</div>\n<div class=\"modal-body text-center\">\n  <p class=\"text-center\" *ngIf=\"settings.type == 0\">\n    <fa-icon [icon]=\"faExclamationTriangle\" class=\"fa-2x text-warning\"></fa-icon>\n  </p>\n\n  <p class=\"text-center\" *ngIf=\"settings.type == 1\">\n    <fa-icon [icon]=\"faCheckCircle\" class=\"fa-2x text-success\"></fa-icon>\n  </p>\n\n  <p class=\"text-center\" *ngIf=\"settings.type == 2\">\n    <fa-icon [icon]=\"faInfoCircle\" class=\"fa-2x text-info\"></fa-icon>\n  </p>\n\n  {{settings.message}}\n</div>\n<div class=\"modal-footer\">\n  <div *ngIf=\"settings.type == 0\">\n    <button class=\"btn btn-sm btn-danger mr-2\" (click)=\"cancel()\">\n      Cancel\n    </button>\n    <button class=\"btn btn-sm btn-success\" (click)=\"ok()\">\n      Continue\n    </button>\n  </div>\n  <div *ngIf=\"settings.type == 1\">\n    <button class=\"btn btn-sm btn-success\" (click)=\"ok()\">\n      Ok\n    </button>\n  </div>\n  <div *ngIf=\"settings.type == 2\">\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"close()\">\n      Close\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilePopupProfilePopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header border-0\">\n  <h5 class=\"modal-title\">\n    <fa-icon [icon]=\"faIdCard\" class=\"text-info\"></fa-icon>\n    <span class=\"text-secondary\">\n      Profile\n    </span>\n  </h5>\n  <a href=\"javascript: void(0)\" class=\"close\" (click)=\"close()\">\n    <fa-icon [icon]=\"faTimes\"></fa-icon>\n  </a>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-5 mb-2\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"assets/avatar.png\" alt=\"user profile picture\">\n      </div>\n    </div>\n    <div class=\"col-md-7 mb-2\">\n      <div class=\"card bg-light\">\n        <div class=\"card-body\">\n          <p class=\"mb-1\">\n            <b>Name:</b>\n            <span class=\"text-capitalize\">\n              {{user.firstName}} {{user.lastName}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Email:</b>\n            <span>\n              {{user.email}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Mobile:</b>\n            <span>\n              {{user.mobile}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Marital Status:</b>\n            <span class=\"text-capitalize\">\n              {{user.maritalStatus}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRouteRouteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faRoute\"></fa-icon>\n            Travel Routes\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Route\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search route by departure or destination.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-md\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Departed From</th>\n                      <th>Destination</th>\n                      <th>Scheduled At</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let route of routes; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{route.departure}}</td>\n                      <td>{{route.destination}}</td>\n                      <td>{{route.scheduledAt}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(route)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit route details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(route)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete route details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Routes\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Route\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Route\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #routeForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"departure\" class=\"form-control form-control-custom\" placeholder=\"Departure\"\n                      [(ngModel)]=\"newRoute.departure\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"destination\" class=\"form-control form-control-custom\"\n                      placeholder=\"Destination\" [(ngModel)]=\"newRoute.destination\" required />\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <label for=\"schedule\">\n                      Travel Schedule\n                    </label>\n                    <input type=\"text\" id=\"schedule\" name=\"scheduledAt\" class=\"form-control form-control-custom\"\n                      placeholder=\"Schedule\" [value]=\"time.hour + ':' + time.minute + ' ' + getMeridan()\" required\n                      readonly aria-readonly />\n                    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"true\" name=\"time\"></ngb-timepicker>\n                  </div>\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!routeForm.form.valid\" (click)=\"saveRoute()\"\n                      *ngIf=\"isNewItemMode\">\n                      Save Route\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!routeForm.form.valid\"\n                      (click)=\"updateRoute()\" *ngIf=\"isEditMode\">\n                      Update Route\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-light\">\n  <button class=\"navbar-toggler ml-auto\" data-toggle=\"collapse\" data-target=\"#topMenu\">\n    <span class=\"line-1\"></span>\n    <span class=\"line-2\"></span>\n    <span class=\"line-3\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"topMenu\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4 col-lg-3 col-xl-2 p-0 bg-dark fixed-top sidebar\">\n          <div class=\"text-right\">\n            <button class=\"navbar-toggler mt-1 mr-1 text-light\" data-toggle=\"collapse\" data-target=\"#topMenu\">\n              <fa-icon [icon]=\"faTimes\"></fa-icon>\n            </button>\n          </div>\n          <div class=\"my-2 text-center\">\n            <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n            <p class=\"text-light mt-1\">Vehicle Logisitics</p>\n          </div>\n          <ul class=\"navbar-nav flex-column\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/dashboard\" class=\"nav-link\">\n                <fa-icon [icon]=\"faTh\" class=\"text-warning mr-2\"></fa-icon>\n                Dashboard\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/profile\" class=\"nav-link\">\n                <fa-icon [icon]=\"faUser\" class=\"text-warning mr-2\"></fa-icon>\n                Profile\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/vehicletracker\" class=\"nav-link\">\n                <fa-icon [icon]=\"faListAlt\" class=\"text-warning mr-2\"></fa-icon>\n                Tracker\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/breakdownhistories\" class=\"nav-link\">\n                <fa-icon [icon]=\"faHistory\" class=\"text-warning mr-2\"></fa-icon>\n                Breakdown History\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/vehicles/\" class=\"nav-link\">\n                <fa-icon [icon]=\"faCarAlt\" class=\"text-warning mr-2\"></fa-icon>\n                Vehicle\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/drivers\" class=\"nav-link\">\n                <fa-icon [icon]=\"faUsers\" class=\"text-warning mr-2\"></fa-icon>\n                Driver\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/routes\" class=\"nav-link\">\n                <fa-icon [icon]=\"faRoute\" class=\"text-warning mr-2\"></fa-icon>\n                Route\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript: void(0)\" class=\"nav-link\" (click)=\"onLogOut()\">\n                <fa-icon [icon]=\"faPowerOff\" class=\"text-danger mr-2\"></fa-icon>\n                logout\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTrackerTrackerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faListAlt\"></fa-icon>\n            Vehicle Tracker\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            Track Vehicle\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search by driver name\" [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Driver Name</th>\n                      <th>Vehicle Engine No.</th>\n                      <th>Departs From</th>\n                      <th>Destination</th>\n                      <th>Scheduled At</th>\n                      <th>Date</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let tracker of trackers; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{tracker.Driver.firstName}} {{tracker.Driver.lastName}}</td>\n                      <td>{{tracker.Vehicle.engineNo}}</td>\n                      <td>{{tracker.Route.departure}}</td>\n                      <td>{{tracker.Route.destination}}</td>\n                      <td>{{tracker.Route.scheduledAt}}</td>\n                      <td>{{tracker.createdAt | date}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(tracker)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit tracker details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(tracker)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete tracker details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Vehicle Tracker\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  New Tracker Record\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Tracker Record\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #trackerForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"driverId\" [(ngModel)]=\"newTracker.driverId\"\n                      required>\n                      <option [value]=\"null\">Select Driver</option>\n                      <option [value]=\"driver.id\" *ngFor=\"let driver of drivers\">\n                        {{driver.firstName}} {{driver.lastName}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"vehicleId\" [(ngModel)]=\"newTracker.vehicleId\"\n                      required>\n                      <option [value]=\"null\">Select Vehicle</option>\n                      <option [value]=\"vehicle.id\" *ngFor=\"let vehicle of vehicles\">\n                        {{vehicle.engineNo}}\n                      </option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"routeId\" [(ngModel)]=\"newTracker.routeId\"\n                      required>\n                      <option [value]=\"null\">Select Travel Route</option>\n                      <option [value]=\"route.id\" *ngFor=\"let route of routes\">\n                        {{route.departure}} -> {{route.destination}} ({{route.scheduledAt}})\n                      </option>\n                    </select>\n                  </div>\n\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!trackerForm.form.valid\"\n                      (click)=\"saveTracker()\" *ngIf=\"isNewItemMode\">\n                      Save Tracker\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!trackerForm.form.valid\"\n                      (click)=\"updateTracker()\" *ngIf=\"isEditMode\">\n                      Update Tracker\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 p-0 ml-auto\">\n      <div class=\"container\">\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faUser\"></fa-icon>\n            Profile\n          </h5>\n        </div>\n        <hr class=\"socket\" />\n\n        <div class=\"card rounded mt-1 mt-sm-5\">\n          <div class=\"card-body\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-5 col-lg-4 mx-auto text-center mb-2\">\n                <img src=\"/assets/avatar.png\" alt=\"profile pics\" class=\"avatar\" />\n              </div>\n              <div class=\"col-12 col-md-7 col-lg-8 mx-auto mb-2\">\n                <div class=\"card rounded bg-light\">\n                  <div class=\"card-body\">\n                    <form #userForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-custom\" name=\"lastName\"\n                          placeholder=\"Last Name\" [(ngModel)]=\"userProfile.lastName\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-custom\" name=\"firstName\"\n                          placeholder=\"First Name\" [(ngModel)]=\"userProfile.firstName\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control form-control-custom\" name=\"email\"\n                          placeholder=\"Email Address\" [(ngModel)]=\"userProfile.email\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"tel\" class=\"form-control form-control-custom\" name=\"mobile\"\n                          placeholder=\"Mobile No.\" [(ngModel)]=\"userProfile.mobile\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control form-control-custom\" name=\"password\"\n                          [(ngModel)]=\"userProfile.password\" placeholder=\"Reset Password\">\n                      </div>\n                      <div class=\"form-group text-center\">\n                        <button class=\"btn btn-success btn-rounded\" (click)=\"onUpdate()\">\n                          Update profile\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleVehicleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 p-0 ml-auto\">\n      <div class=\"container\">\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faCar\"></fa-icon>\n            Vehicles\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Vehicle\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search vehicle by engine no.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-md\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Engine No</th>\n                      <th>Capacity</th>\n                      <th>Fuel Type</th>\n                      <th>Status</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let vehicle of vehicles; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{vehicle.engineNo}}</td>\n                      <td>{{vehicle.capacity}}</td>\n                      <td>{{vehicle.Fuel.type}}</td>\n                      <td>{{vehicle.isFunctional ? \"active\" : \"faulty\"}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <a [routerLink]=\"'/breakdownhistories/' + vehicle.engineNo\" class=\"dropdown-item\">\n                              <fa-icon [icon]=\"faHistory\" class=\"mr-2\"></fa-icon>\n                              Breakdown History\n                            </a>\n                            <a [routerLink]=\"'/vehicletracker/' + vehicle.engineNo\" class=\"dropdown-item\">\n                              <fa-icon [icon]=\"faListAlt\" class=\"mr-2\"></fa-icon>\n                              Tracker Record\n                            </a>\n                            <label class=\"dropdown-item\" (click)=\"onEdit(vehicle)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit vehicle details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(vehicle)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete vehicle details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Vehicle\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Vehicle\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #newVehicleForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"engineNo\" class=\"form-control form-control-custom\" placeholder=\"Engine No.\"\n                      [(ngModel)]=\"newVehicle.engineNo\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"number\" name=\"capacity\" class=\"form-control form-control-custom\" placeholder=\"Capacity\"\n                      [(ngModel)]=\"newVehicle.capacity\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <select name=\"fuelId\" class=\"form-control form-control-custom\" [(ngModel)]=\"newVehicle.fuelId\"\n                      required>\n                      <option [value]=\"null\">Fuel Type</option>\n                      <option *ngFor=\"let fuel of fuelTypes\" [value]=\"fuel.id\">\n                        {{fuel.type}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!newVehicleForm.form.valid\"\n                      (click)=\"saveVehicle()\" *ngIf=\"isNewItemMode\">\n                      Save Vehicle\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!newVehicleForm.form.valid\"\n                      (click)=\"updateVehicle()\" *ngIf=\"isEditMode\">\n                      Update Vehicle\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vehicle/vehicle.component */
    "./src/app/vehicle/vehicle.component.ts");
    /* harmony import */


    var _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver/driver.component */
    "./src/app/driver/driver.component.ts");
    /* harmony import */


    var _route_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./route/route.component */
    "./src/app/route/route.component.ts");
    /* harmony import */


    var _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./breakdownhistory/breakdownhistory.component */
    "./src/app/breakdownhistory/breakdownhistory.component.ts");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: "",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "dashboard",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: "vehicles",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["VehicleComponent"]
    }, {
      path: "drivers",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__["DriverComponent"]
    }, {
      path: "routes",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _route_route_component__WEBPACK_IMPORTED_MODULE_7__["RouteComponent"]
    }, {
      path: "breakdownhistories",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__["BreakdownhistoryComponent"]
    }, {
      path: "breakdownhistories/:engineNo",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__["BreakdownhistoryComponent"]
    }, {
      path: "vehicletracker",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__["TrackerComponent"]
    }, {
      path: "vehicletracker/:engineNo",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__["TrackerComponent"]
    }, {
      path: "profile",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]
    }, {
      path: "forgot/password",
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "Vehicle Logistics";
      this.appYear = new Date().getFullYear();
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _driver_driver_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./driver/driver.component */
    "./src/app/driver/driver.component.ts");
    /* harmony import */


    var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vehicle/vehicle.component */
    "./src/app/vehicle/vehicle.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./messagebox/messagebox.component */
    "./src/app/messagebox/messagebox.component.ts");
    /* harmony import */


    var _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./profile-popup/profile-popup.component */
    "./src/app/profile-popup/profile-popup.component.ts");
    /* harmony import */


    var _route_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./route/route.component */
    "./src/app/route/route.component.ts");
    /* harmony import */


    var _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./breakdownhistory/breakdownhistory.component */
    "./src/app/breakdownhistory/breakdownhistory.component.ts");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts"); // this function retrieves the token


    function tokenGetter() {
      return localStorage.getItem("access_token");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _driver_driver_component__WEBPACK_IMPORTED_MODULE_14__["DriverComponent"], _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["VehicleComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__["MessageboxComponent"], _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__["ProfilePopupComponent"], _route_route_component__WEBPACK_IMPORTED_MODULE_19__["RouteComponent"], _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_20__["BreakdownhistoryComponent"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_21__["TrackerComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["UserProfileComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        progressBar: true,
        timeOut: 5000,
        maxOpened: 1
      }), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ["localhost:4100"],
          disallowedRoutes: ["localhost:4100/api/auth/"]
        }
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]],
      entryComponents: [_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__["MessageboxComponent"], _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__["ProfilePopupComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/services/notification.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, notify) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.notify = notify;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage) {
            if (localStorage.getItem("access_token")) {
              return true;
            } else {
              this.notify.showWarning("You must login before you can view this page", "Warning");
              this.router.navigate(["/login"]);
              return false;
            }
          } else {
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/breakdownhistory/breakdownhistory.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/breakdownhistory/breakdownhistory.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBreakdownhistoryBreakdownhistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFrZG93bmhpc3RvcnkvYnJlYWtkb3duaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/breakdownhistory/breakdownhistory.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/breakdownhistory/breakdownhistory.component.ts ***!
    \****************************************************************/

  /*! exports provided: BreakdownhistoryComponent */

  /***/
  function srcAppBreakdownhistoryBreakdownhistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakdownhistoryComponent", function () {
      return BreakdownhistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");
    /* harmony import */


    var _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/breakdown-history */
    "./src/app/models/breakdown-history.ts");
    /* harmony import */


    var _services_breakdown_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/breakdown-history.service */
    "./src/app/services/breakdown-history.service.ts");
    /* harmony import */


    var _services_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/driver.service */
    "./src/app/services/driver.service.ts");
    /* harmony import */


    var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/messagebox.service */
    "./src/app/services/messagebox.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/vehicle.service */
    "./src/app/services/vehicle.service.ts");

    var BreakdownhistoryComponent = /*#__PURE__*/function () {
      function BreakdownhistoryComponent(breakdownHistoryService, notify, messageBox, driverService, vehicleService, route) {
        _classCallCheck(this, BreakdownhistoryComponent);

        this.breakdownHistoryService = breakdownHistoryService;
        this.notify = notify;
        this.messageBox = messageBox;
        this.driverService = driverService;
        this.vehicleService = vehicleService;
        this.route = route;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
        this.faHistory = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHistory"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisH"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
        this.breakdownHistories = [];
        this.hasMoreData = false;
        this.newBreakdownHistory = new _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__["BreakdownHistory"](null, null, null, null);
        this.drivers = [];
        this.vehicles = [];
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
      }

      _createClass(BreakdownhistoryComponent, [{
        key: "setViewMode",
        value: function setViewMode(mode) {
          this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
          this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
          this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;

          if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newBreakdownHistory = new _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__["BreakdownHistory"](null, null, null, null);
            this.breakdownDate = null;
            this.repairDate = null;
          }
        }
      }, {
        key: "onBackToMain",
        value: function onBackToMain() {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (this.isLoading) return;
          this.isLoading = true;
          this.breakdownHistoryService.getHistories(page, this.searchquery, this.engineNo).subscribe(function (response) {
            if (response.result) {
              _this.breakdownHistories = _this.breakdownHistories.concat(response.result);
              _this.hasMoreData = response.totalPages > response.currentPage;
              _this.currentPage = Number(response.currentPage);
            } else {
              // notify
              _this.notify.showWarning(response.message, "Loading Failed");
            }
          }, function (reason) {
            _this.notify.showError("we were unable to contact server", "Operation failed");
          }, function () {
            _this.isLoading = false;
          });
        }
      }, {
        key: "saveBreakdown",
        value: function saveBreakdown() {
          var _this2 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.setDates();
          this.breakdownHistoryService.saveHistory(this.newBreakdownHistory).subscribe(function (response) {
            _this2.isProcessing = false;

            if (response.success) {
              _this2.notify.showSuccess("Saved successfully", "success");

              _this2.breakdownHistories.push(response.result);

              _this2.newBreakdownHistory = new _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__["BreakdownHistory"](null, null, null, null);
            } else {
              _this2.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }, {
        key: "updateBreakdown",
        value: function updateBreakdown() {
          var _this3 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.setDates();
          this.breakdownHistoryService.updateHistory(this.newBreakdownHistory).subscribe(function (response) {
            if (response.success) {
              _this3.notify.showSuccess("breakdown history updated successfully", "success");
            } else {
              _this3.notify.showError(response.message, "Operation failed");
            }
          }, function (reason) {
            _this3.notify.showError("Unable to contact server.", "Operation failed");
          }, function () {
            _this3.isProcessing = false;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.breakdownHistories = [];
          this.loadData();
        }
      }, {
        key: "onEdit",
        value: function onEdit(breakdownHistory) {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
          this.newBreakdownHistory = breakdownHistory;
          this.newBreakdownHistory.vehicleId = Number(breakdownHistory.vehicleId);
          var d = new Date(breakdownHistory.breakdownDate);
          this.breakdownDate = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
          };

          if (breakdownHistory.repairDate) {
            d = new Date(breakdownHistory.repairDate);
            this.repairDate = {
              year: d.getFullYear(),
              month: d.getMonth() + 1,
              day: d.getDate()
            };
          } else {
            this.repairDate = null;
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(breakdownHistory) {
          var _this4 = this;

          var modalInstance = this.messageBox.showWarning("Are you sure you want to delete this breakdown history?", "Delete Warning");
          modalInstance.result.then(function (response) {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
              var tid = _this4.notify.showProcessing("Deleting history");

              _this4.breakdownHistoryService.deleteHistory(breakdownHistory).subscribe(function (response) {
                if (response.success) {
                  var index = _this4.breakdownHistories.findIndex(function (r) {
                    return r.id === breakdownHistory.id;
                  });

                  _this4.breakdownHistories.splice(index, 1);

                  _this4.notify.showSuccess("breakdown history deleted successfully.", "Success");
                } else {
                  _this4.notify.showWarning(response.message, "Operation failed");
                }
              }, function (reason) {
                _this4.notify.showError("we were unable to contact server.", "Operation failed");
              }, function () {
                _this4.notify.hideProcessing(tid);
              });
            }
          })["catch"](function (reason) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.engineNo = this.route.snapshot.params["engineNo"];
          this.loadData();
          this.driverService.getDrivers(null, "", false).subscribe(function (response) {
            if (response.success) {
              _this5.drivers = response.result;
              console.log(response);
            }
          });
          this.vehicleService.getVehicles(null, "", false).subscribe(function (response) {
            if (response.success) {
              _this5.vehicles = response.result;
            }
          });
        }
      }, {
        key: "setDates",
        value: function setDates() {
          if (this.breakdownDate) {
            this.newBreakdownHistory.breakdownDate = "".concat(this.breakdownDate.year, "-").concat(this.breakdownDate.month, "-").concat(this.breakdownDate.day);
          }

          if (this.repairDate) {
            this.newBreakdownHistory.repairDate = "".concat(this.repairDate.year, "-").concat(this.repairDate.month, "-").concat(this.repairDate.day);
          }
        }
      }]);

      return BreakdownhistoryComponent;
    }();

    BreakdownhistoryComponent.ctorParameters = function () {
      return [{
        type: _services_breakdown_history_service__WEBPACK_IMPORTED_MODULE_6__["BreakdownHistoryService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]
      }, {
        type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_8__["MessageboxService"]
      }, {
        type: _services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"]
      }, {
        type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_10__["VehicleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BreakdownhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-breakdownhistory",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breakdownhistory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breakdownhistory.component.css */
      "./src/app/breakdownhistory/breakdownhistory.component.css"))["default"]]
    })], BreakdownhistoryComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/dashboard.service */
    "./src/app/services/dashboard.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboard, authService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboard = dashboard;
        this.authService = authService;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"];
        this.faCar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCar"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.faRoute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRoute"];
        this.faHistory = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.faTh = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTh"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPowerOff"];
        this.summary = {
          totalDrivers: 0,
          totalRoutes: 0,
          totalTrackers: 0,
          totalVehicles: 0
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dashboard.getSummary().subscribe(function (response) {
            if (response.success) {
              _this6.summary = response.result;
              console.log(response);
            }
          });
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.authService.logout();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/driver/driver.component.css":
  /*!*********************************************!*\
    !*** ./src/app/driver/driver.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriverDriverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9kcml2ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/driver/driver.component.ts":
  /*!********************************************!*\
    !*** ./src/app/driver/driver.component.ts ***!
    \********************************************/

  /*! exports provided: DriverComponent */

  /***/
  function srcAppDriverDriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverComponent", function () {
      return DriverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");
    /* harmony import */


    var _models_driver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/driver */
    "./src/app/models/driver.ts");
    /* harmony import */


    var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/driver.service */
    "./src/app/services/driver.service.ts");
    /* harmony import */


    var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/messagebox.service */
    "./src/app/services/messagebox.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_profile_popup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/profile-popup.service */
    "./src/app/services/profile-popup.service.ts");

    var DriverComponent = /*#__PURE__*/function () {
      function DriverComponent(driverService, notify, messageBox, profilePopup) {
        _classCallCheck(this, DriverComponent);

        this.driverService = driverService;
        this.notify = notify;
        this.messageBox = messageBox;
        this.profilePopup = profilePopup;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSpinner"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.drivers = [];
        this.hasMoreData = false;
        this.newDriver = new _models_driver__WEBPACK_IMPORTED_MODULE_4__["Driver"](null, null, null, null, null, null);
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
      }

      _createClass(DriverComponent, [{
        key: "setViewMode",
        value: function setViewMode(mode) {
          this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView;
          this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView;
          this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].NewItemView;
        }
      }, {
        key: "onBackToMain",
        value: function onBackToMain() {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this7 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (this.isLoading) return;
          this.isLoading = true;
          this.driverService.getDrivers(page, this.searchquery).subscribe(function (response) {
            if (response.result) {
              _this7.drivers = _this7.drivers.concat(response.result);
              _this7.hasMoreData = response.totalPages > response.currentPage;
              _this7.currentPage = Number(response.currentPage);
            } else {
              // notify
              _this7.notify.showWarning(response.message, "Loading Failed");
            }
          }, function (reason) {
            _this7.notify.showError("we were unable to contact server", "Operation failed");
          }, function () {
            _this7.isLoading = false;
          });
        }
      }, {
        key: "saveDriver",
        value: function saveDriver() {
          var _this8 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.driverService.saveDriver(this.newDriver).subscribe(function (response) {
            _this8.isProcessing = false;

            if (response.success) {
              _this8.drivers.push(response.result);

              _this8.newDriver = new _models_driver__WEBPACK_IMPORTED_MODULE_4__["Driver"](null, null, null, null, null, null);
            } else {
              _this8.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }, {
        key: "updateDriver",
        value: function updateDriver() {
          var _this9 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.driverService.updateDriver(this.newDriver).subscribe(function (response) {
            if (response.success) {
              _this9.notify.showSuccess("driver updated successfully", "success");
            } else {
              _this9.notify.showError(response.message, "Operation failed");
            }
          }, function (reason) {
            _this9.notify.showError("Unable to contact server.", "Operation failed");
          }, function () {
            _this9.isProcessing = false;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.drivers = [];
          this.loadData();
        }
      }, {
        key: "onEdit",
        value: function onEdit(driver) {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView);
          this.newDriver = driver;
        }
      }, {
        key: "onDelete",
        value: function onDelete(driver) {
          var _this10 = this;

          var modalInstance = this.messageBox.showWarning("Are you sure you want to delete ".concat(driver.firstName, " ").concat(driver.lastName, "?"), "Delete Warning");
          modalInstance.result.then(function (response) {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["MessageboxResponse"].OK) {
              var tid = _this10.notify.showProcessing("Deleting vehicle");

              _this10.driverService.deleteDriver(driver).subscribe(function (response) {
                if (response.success) {
                  var index = _this10.drivers.findIndex(function (d) {
                    return d.id === driver.id;
                  });

                  _this10.drivers.splice(index, 1);

                  _this10.notify.showSuccess("driver deleted successfully.", "Success");
                } else {
                  _this10.notify.showWarning(response.message, "Operation failed");
                }
              }, function (reason) {
                _this10.notify.showError("we were unable to contact server.", "Operation failed");
              }, function () {
                _this10.notify.hideProcessing(tid);
              });
            }
          })["catch"](function (reason) {});
        }
      }, {
        key: "onViewProfile",
        value: function onViewProfile(driver) {
          var modalInstance = this.profilePopup.show(driver);
          modalInstance.result.then(function () {})["catch"](function () {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }]);

      return DriverComponent;
    }();

    DriverComponent.ctorParameters = function () {
      return [{
        type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"]
      }, {
        type: _services_profile_popup_service__WEBPACK_IMPORTED_MODULE_8__["ProfilePopupService"]
      }];
    };

    DriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-driver",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./driver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./driver.component.css */
      "./src/app/driver/driver.component.css"))["default"]]
    })], DriverComponent);
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(userService, notify, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.userService = userService;
        this.notify = notify;
        this.router = router;
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleRight"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleLeft"];
        this.resetPassword = {
          password: "",
          confirmPassword: ""
        };
        this.confirmEmail = {
          email: ""
        };
        this.isValidEmail = false;
        this.isProcessing = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirmEmail",
        value: function onConfirmEmail() {
          var _this11 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.userService.getUser(this.confirmEmail.email).subscribe(function (response) {
            _this11.isProcessing = false;

            if (response.success) {
              _this11.isValidEmail = true;
              _this11.user = response.result;
            } else {
              _this11.notify.showError(response.message, "Not Found");
            }
          }, function (reason) {
            _this11.notify.showError("We encountered a problem while contacting server", "Operation failed");
          });
        }
      }, {
        key: "onResetPassword",
        value: function onResetPassword() {
          var _this12 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.user.password = this.resetPassword.password;
          this.userService.updateUser(this.user).subscribe(function (response) {
            if (response.success) {
              _this12.router.navigate(["/login"]);
            } else {
              _this12.notify.showWarning(response.message, "Operation failed");
            }
          }, function (reason) {
            console.log(reason);

            _this12.notify.showError("We encountered a problem while contacting server", "Operation failed");
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forgot-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/forgot-password/forgot-password.component.css"))["default"]]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.loginModel = {
          email: "",
          password: "",
          model: "User"
        };
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLock"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
        this.isProcessing = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this13 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.authService.login("/", this.loginModel, function () {
            _this13.isProcessing = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/messagebox/messagebox.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/messagebox/messagebox.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageboxMessageboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2Vib3gvbWVzc2FnZWJveC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messagebox/messagebox.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/messagebox/messagebox.component.ts ***!
    \****************************************************/

  /*! exports provided: MessageboxComponent */

  /***/
  function srcAppMessageboxMessageboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageboxComponent", function () {
      return MessageboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");

    var MessageboxComponent = /*#__PURE__*/function () {
      function MessageboxComponent(modalInstance) {
        _classCallCheck(this, MessageboxComponent);

        this.modalInstance = modalInstance;
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
      }

      _createClass(MessageboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ok",
        value: function ok() {
          this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].CANCEL);
        }
      }, {
        key: "close",
        value: function close() {
          this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].CLOSE);
        }
      }]);

      return MessageboxComponent;
    }();

    MessageboxComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }];
    };

    MessageboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-messagebox",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messagebox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messagebox.component.css */
      "./src/app/messagebox/messagebox.component.css"))["default"]]
    })], MessageboxComponent);
    /***/
  },

  /***/
  "./src/app/models/app-enums.ts":
  /*!*************************************!*\
    !*** ./src/app/models/app-enums.ts ***!
    \*************************************/

  /*! exports provided: ViewModes, MessageboxResponse, MessageboxType */

  /***/
  function srcAppModelsAppEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewModes", function () {
      return ViewModes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageboxResponse", function () {
      return MessageboxResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageboxType", function () {
      return MessageboxType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ViewModes;

    (function (ViewModes) {
      ViewModes[ViewModes["MainView"] = 0] = "MainView";
      ViewModes[ViewModes["EditView"] = 1] = "EditView";
      ViewModes[ViewModes["NewItemView"] = 2] = "NewItemView";
    })(ViewModes || (ViewModes = {}));

    var MessageboxResponse;

    (function (MessageboxResponse) {
      MessageboxResponse[MessageboxResponse["CANCEL"] = 0] = "CANCEL";
      MessageboxResponse[MessageboxResponse["OK"] = 1] = "OK";
      MessageboxResponse[MessageboxResponse["CLOSE"] = 2] = "CLOSE";
    })(MessageboxResponse || (MessageboxResponse = {}));

    var MessageboxType;

    (function (MessageboxType) {
      MessageboxType[MessageboxType["WARNING"] = 0] = "WARNING";
      MessageboxType[MessageboxType["INFO"] = 1] = "INFO";
      MessageboxType[MessageboxType["SUCCESS"] = 2] = "SUCCESS";
    })(MessageboxType || (MessageboxType = {}));
    /***/

  },

  /***/
  "./src/app/models/breakdown-history.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/breakdown-history.ts ***!
    \*********************************************/

  /*! exports provided: BreakdownHistory */

  /***/
  function srcAppModelsBreakdownHistoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakdownHistory", function () {
      return BreakdownHistory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BreakdownHistory = function BreakdownHistory(vehicleId, driverId, description, breakdownDate, repairDate, id) {
      _classCallCheck(this, BreakdownHistory);

      this.vehicleId = vehicleId;
      this.driverId = driverId;
      this.description = description;
      this.breakdownDate = breakdownDate;
      this.repairDate = repairDate;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/driver.ts":
  /*!**********************************!*\
    !*** ./src/app/models/driver.ts ***!
    \**********************************/

  /*! exports provided: Driver */

  /***/
  function srcAppModelsDriverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Driver", function () {
      return Driver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Driver = function Driver(lastName, firstName, email, maritalStatus, mobile, imageUrl, id) {
      _classCallCheck(this, Driver);

      this.lastName = lastName;
      this.firstName = firstName;
      this.email = email;
      this.maritalStatus = maritalStatus;
      this.mobile = mobile;
      this.imageUrl = imageUrl;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/route.ts":
  /*!*********************************!*\
    !*** ./src/app/models/route.ts ***!
    \*********************************/

  /*! exports provided: Route */

  /***/
  function srcAppModelsRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Route", function () {
      return Route;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Route = function Route(departure, destination, scheduledAt, id) {
      _classCallCheck(this, Route);

      this.departure = departure;
      this.destination = destination;
      this.scheduledAt = scheduledAt;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/tracker.ts":
  /*!***********************************!*\
    !*** ./src/app/models/tracker.ts ***!
    \***********************************/

  /*! exports provided: Tracker */

  /***/
  function srcAppModelsTrackerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tracker", function () {
      return Tracker;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tracker = function Tracker(routeId, vehicleId, driverId, Route, Vehicle, Driver, id) {
      _classCallCheck(this, Tracker);

      this.routeId = routeId;
      this.vehicleId = vehicleId;
      this.driverId = driverId;
      this.Route = Route;
      this.Vehicle = Vehicle;
      this.Driver = Driver;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(lastName, firstName, email, maritalStatus, mobile, imageUrl, password, id) {
      _classCallCheck(this, User);

      this.lastName = lastName;
      this.firstName = firstName;
      this.email = email;
      this.maritalStatus = maritalStatus;
      this.mobile = mobile;
      this.imageUrl = imageUrl;
      this.password = password;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/vehicle.ts":
  /*!***********************************!*\
    !*** ./src/app/models/vehicle.ts ***!
    \***********************************/

  /*! exports provided: Vehicle */

  /***/
  function srcAppModelsVehicleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vehicle", function () {
      return Vehicle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Vehicle = function Vehicle(engineNo, capacity, fuelId, isFunctional, id) {
      _classCallCheck(this, Vehicle);

      this.engineNo = engineNo;
      this.capacity = capacity;
      this.fuelId = fuelId;
      this.isFunctional = isFunctional;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/profile-popup/profile-popup.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/profile-popup/profile-popup.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilePopupProfilePopupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcG9wdXAvcHJvZmlsZS1wb3B1cC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile-popup/profile-popup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile-popup/profile-popup.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProfilePopupComponent */

  /***/
  function srcAppProfilePopupProfilePopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePopupComponent", function () {
      return ProfilePopupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ProfilePopupComponent = /*#__PURE__*/function () {
      function ProfilePopupComponent(modalInstance) {
        _classCallCheck(this, ProfilePopupComponent);

        this.modalInstance = modalInstance;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faIdCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faIdCard"];
      }

      _createClass(ProfilePopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalInstance.close(0);
        }
      }]);

      return ProfilePopupComponent;
    }();

    ProfilePopupComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }];
    };

    ProfilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile-popup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-popup.component.css */
      "./src/app/profile-popup/profile-popup.component.css"))["default"]]
    })], ProfilePopupComponent);
    /***/
  },

  /***/
  "./src/app/route/route.component.css":
  /*!*******************************************!*\
    !*** ./src/app/route/route.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppRouteRouteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/route/route.component.ts":
  /*!******************************************!*\
    !*** ./src/app/route/route.component.ts ***!
    \******************************************/

  /*! exports provided: RouteComponent */

  /***/
  function srcAppRouteRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteComponent", function () {
      return RouteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");
    /* harmony import */


    var _models_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/route */
    "./src/app/models/route.ts");
    /* harmony import */


    var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/messagebox.service */
    "./src/app/services/messagebox.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_route_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/route.service */
    "./src/app/services/route.service.ts");

    var RouteComponent = /*#__PURE__*/function () {
      function RouteComponent(routeService, notify, messageBox) {
        _classCallCheck(this, RouteComponent);

        this.routeService = routeService;
        this.notify = notify;
        this.messageBox = messageBox;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faRoute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRoute"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSpinner"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.routes = [];
        this.hasMoreData = false;
        this.newRoute = new _models_route__WEBPACK_IMPORTED_MODULE_5__["Route"](null, null, null);
        this.time = {
          hour: 10,
          minute: 0
        };
        this.scheduleChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.time);
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
      }

      _createClass(RouteComponent, [{
        key: "setViewMode",
        value: function setViewMode(mode) {
          this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
          this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
          this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;

          if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newRoute = new _models_route__WEBPACK_IMPORTED_MODULE_5__["Route"](null, null, null);
            this.setTime();
          }
        }
      }, {
        key: "onBackToMain",
        value: function onBackToMain() {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this14 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (this.isLoading) return;
          this.isLoading = true;
          this.routeService.getRoutes(page, this.searchquery).subscribe(function (response) {
            if (response.result) {
              _this14.routes = _this14.routes.concat(response.result);
              _this14.hasMoreData = response.totalPages > response.currentPage;
              _this14.currentPage = Number(response.currentPage);
            } else {
              // notify
              _this14.notify.showWarning(response.message, "Loading Failed");
            }
          }, function (reason) {
            _this14.notify.showError("we were unable to contact server", "Operation failed");
          }, function () {
            _this14.isLoading = false;
          });
        }
      }, {
        key: "saveRoute",
        value: function saveRoute() {
          var _this15 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.setSchedule();
          this.routeService.saveRoute(this.newRoute).subscribe(function (response) {
            _this15.isProcessing = false;

            if (response.success) {
              _this15.routes.push(response.result);

              _this15.newRoute = new _models_route__WEBPACK_IMPORTED_MODULE_5__["Route"](null, null, null);
            } else {
              _this15.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }, {
        key: "updateRoute",
        value: function updateRoute() {
          var _this16 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.setSchedule();
          this.routeService.updateRoute(this.newRoute).subscribe(function (response) {
            if (response.success) {
              _this16.notify.showSuccess("route updated successfully", "success");
            } else {
              _this16.notify.showError(response.message, "Operation failed");
            }
          }, function (reason) {
            _this16.notify.showError("Unable to contact server.", "Operation failed");
          }, function () {
            _this16.isProcessing = false;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.routes = [];
          this.loadData();
        }
      }, {
        key: "onEdit",
        value: function onEdit(route) {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
          this.newRoute = route;
          this.setTime(route.scheduledAt);
        }
      }, {
        key: "onDelete",
        value: function onDelete(route) {
          var _this17 = this;

          var modalInstance = this.messageBox.showWarning("Are you sure you want to delete this route?", "Delete Warning");
          modalInstance.result.then(function (response) {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
              var tid = _this17.notify.showProcessing("Deleting route");

              _this17.routeService.deleteRoute(route).subscribe(function (response) {
                if (response.success) {
                  var index = _this17.routes.findIndex(function (r) {
                    return r.id === route.id;
                  });

                  _this17.routes.splice(index, 1);

                  _this17.notify.showSuccess("route deleted successfully.", "Success");
                } else {
                  _this17.notify.showWarning(response.message, "Operation failed");
                }
              }, function (reason) {
                _this17.notify.showError("we were unable to contact server.", "Operation failed");
              }, function () {
                _this17.notify.hideProcessing(tid);
              });
            }
          })["catch"](function (reason) {});
        }
      }, {
        key: "setTime",
        value: function setTime() {
          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

          if (time) {
            var fullTime = time.split(" ");
            var hour = Number(fullTime[0].split(":")[0]);
            var minute = Number(fullTime[0].split(":")[1]);
            var meridan = fullTime[1].toUpperCase();

            if (meridan === "PM" && hour > 12) {
              hour = Number(hour) - 12;
            }

            this.time = {
              hour: hour,
              minute: minute
            };
          } else {
            this.time = {
              hour: 10,
              minute: 0
            };
          }
        }
      }, {
        key: "getMeridan",
        value: function getMeridan() {
          if (this.time.hour >= 12) return "PM";else return "AM";
        }
      }, {
        key: "setSchedule",
        value: function setSchedule() {
          this.newRoute.scheduledAt = "".concat(this.time.hour, ":").concat(this.time.minute).concat(this.time.minute < 10 ? 0 : "", " ").concat(this.getMeridan());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
          this.setTime();
        }
      }]);

      return RouteComponent;
    }();

    RouteComponent.ctorParameters = function () {
      return [{
        type: _services_route_service__WEBPACK_IMPORTED_MODULE_8__["RouteService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"]
      }];
    };

    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-route",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./route.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./route.component.css */
      "./src/app/route/route.component.css"))["default"]]
    })], RouteComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(coreService, router, notify, jwtService) {
        _classCallCheck(this, AuthService);

        this.coreService = coreService;
        this.router = router;
        this.notify = notify;
        this.jwtService = jwtService;
        this.userStatusChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]("");
        this.authApiUrl = "api/auth/login/";
      }

      _createClass(AuthService, [{
        key: "setUserStatus",
        value: function setUserStatus(userStatus) {
          this.userStatus = userStatus;
          this.userStatusChanges.next(userStatus);
        }
      }, {
        key: "login",
        value: function login(redirectUrl, formData, onComplete) {
          var _this18 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json"); // send a post request

          this.coreService.postData(formData, this.authApiUrl, headers).subscribe(function (response) {
            if (response.success) {
              localStorage.setItem("access_token", response.result);

              _this18.setUserStatus(response.result);

              _this18.router.navigate([redirectUrl]);
            } else {
              _this18.notify.showWarning(response.message, "Operation failed");
            }
          }, function (reason) {
            _this18.notify.showError("Wrong email and password combination", "Operation failed");

            onComplete();
          }, function () {
            onComplete();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          // just remove the access token and redirect
          localStorage.removeItem("access_token");
          this.setUserStatus(null);
          this.router.navigate(["/login"]);
        }
      }, {
        key: "getUserType",
        value: function getUserType() {
          var decoded = this.jwtService.decodeToken(this.userStatus);

          if (decoded) {
            return decoded["model"];
          }

          return null;
        }
      }, {
        key: "getStatusOnRefresh",
        value: function getStatusOnRefresh() {
          if (localStorage.getItem("access_token")) {
            var token = localStorage.getItem("access_token");
            var decoded = this.jwtService.decodeToken(token);

            if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
              this.logout();
            }

            this.setUserStatus(localStorage.getItem("access_token"));
          }
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.coreService.getData("api/auth/user?authorization=Bearer ".concat(localStorage.getItem("access_token")));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/breakdown-history.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/breakdown-history.service.ts ***!
    \*******************************************************/

  /*! exports provided: BreakdownHistoryService */

  /***/
  function srcAppServicesBreakdownHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakdownHistoryService", function () {
      return BreakdownHistoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var BreakdownHistoryService = /*#__PURE__*/function () {
      function BreakdownHistoryService(coreService) {
        _classCallCheck(this, BreakdownHistoryService);

        this.coreService = coreService;
        this.apiUrl = "api/breakdownhistory/";
      }

      _createClass(BreakdownHistoryService, [{
        key: "getHistories",
        value: function getHistories() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var engineNo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery, "&engineno=").concat(engineNo));
        }
      }, {
        key: "saveHistory",
        value: function saveHistory(breakdownHistory) {
          return this.coreService.postData(breakdownHistory, this.apiUrl);
        }
      }, {
        key: "updateHistory",
        value: function updateHistory(breakdownHistory) {
          return this.coreService.putData(breakdownHistory, this.apiUrl);
        }
      }, {
        key: "deleteHistory",
        value: function deleteHistory(breakdownHistory) {
          return this.coreService.deleteData(breakdownHistory.id, this.apiUrl);
        }
      }]);

      return BreakdownHistoryService;
    }();

    BreakdownHistoryService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    BreakdownHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], BreakdownHistoryService);
    /***/
  },

  /***/
  "./src/app/services/core.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/core.service.ts ***!
    \******************************************/

  /*! exports provided: CoreService */

  /***/
  function srcAppServicesCoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreService", function () {
      return CoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoreService = /*#__PURE__*/function () {
      function CoreService(http) {
        _classCallCheck(this, CoreService);

        this.http = http;
        this.host = "";
      }

      _createClass(CoreService, [{
        key: "getData",
        value: function getData(apiURL, headers) {
          return this.http.get("".concat(this.host).concat(apiURL), {
            headers: headers
          });
        }
      }, {
        key: "postData",
        value: function postData(data, apiURL, headers) {
          return this.http.post("".concat(this.host).concat(apiURL), data, {
            headers: headers
          });
        }
      }, {
        key: "putData",
        value: function putData(data, apiURL) {
          return this.http.put("".concat(this.host).concat(apiURL), data);
        }
      }, {
        key: "deleteData",
        value: function deleteData(id, apiURL) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            }),
            body: {
              id: id
            }
          };
          return this.http["delete"]("".concat(this.host).concat(apiURL), httpOptions);
        }
      }]);

      return CoreService;
    }();

    CoreService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], CoreService);
    /***/
  },

  /***/
  "./src/app/services/dashboard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/dashboard.service.ts ***!
    \***********************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(coreService) {
        _classCallCheck(this, DashboardService);

        this.coreService = coreService;
        this.apiUrl = "api/users/dashboard";
      }

      _createClass(DashboardService, [{
        key: "getSummary",
        value: function getSummary() {
          return this.coreService.getData("".concat(this.apiUrl));
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/services/driver.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/driver.service.ts ***!
    \********************************************/

  /*! exports provided: DriverService */

  /***/
  function srcAppServicesDriverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverService", function () {
      return DriverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var DriverService = /*#__PURE__*/function () {
      function DriverService(coreService) {
        _classCallCheck(this, DriverService);

        this.coreService = coreService;
        this.apiUrl = "api/drivers/";
      }

      _createClass(DriverService, [{
        key: "getDrivers",
        value: function getDrivers() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var paginate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery, "&paginate=").concat(paginate));
        }
      }, {
        key: "saveDriver",
        value: function saveDriver(driver) {
          return this.coreService.postData(driver, this.apiUrl);
        }
      }, {
        key: "updateDriver",
        value: function updateDriver(driver) {
          return this.coreService.putData(driver, this.apiUrl);
        }
      }, {
        key: "deleteDriver",
        value: function deleteDriver(driver) {
          return this.coreService.deleteData(driver.id, this.apiUrl);
        }
      }]);

      return DriverService;
    }();

    DriverService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    DriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], DriverService);
    /***/
  },

  /***/
  "./src/app/services/fuel-type.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/fuel-type.service.ts ***!
    \***********************************************/

  /*! exports provided: FuelTypeService */

  /***/
  function srcAppServicesFuelTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FuelTypeService", function () {
      return FuelTypeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var FuelTypeService = /*#__PURE__*/function () {
      function FuelTypeService(coreService) {
        _classCallCheck(this, FuelTypeService);

        this.coreService = coreService;
        this.apiUrl = "api/fuel/";
      }

      _createClass(FuelTypeService, [{
        key: "getFuelTypes",
        value: function getFuelTypes() {
          return this.coreService.getData(this.apiUrl);
        }
      }]);

      return FuelTypeService;
    }();

    FuelTypeService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    FuelTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], FuelTypeService);
    /***/
  },

  /***/
  "./src/app/services/messagebox.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/messagebox.service.ts ***!
    \************************************************/

  /*! exports provided: MessageboxService */

  /***/
  function srcAppServicesMessageboxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageboxService", function () {
      return MessageboxService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../messagebox/messagebox.component */
    "./src/app/messagebox/messagebox.component.ts");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");

    var MessageboxService = /*#__PURE__*/function () {
      function MessageboxService(modal) {
        _classCallCheck(this, MessageboxService);

        this.modal = modal;
      }

      _createClass(MessageboxService, [{
        key: "createModal",
        value: function createModal(message, title, type) {
          var modalInstance = this.modal.open(_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_3__["MessageboxComponent"], {
            size: "md"
          });
          modalInstance.componentInstance.settings = {
            message: message,
            title: title,
            type: _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].WARNING
          };
          return modalInstance;
        }
      }, {
        key: "showWarning",
        value: function showWarning(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Warning";
          return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].WARNING);
        }
      }, {
        key: "showSuccess",
        value: function showSuccess(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Success";
          return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].SUCCESS);
        }
      }, {
        key: "showInfo",
        value: function showInfo(message) {
          var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Information";
          return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].INFO);
        }
      }]);

      return MessageboxService;
    }();

    MessageboxService.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    MessageboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MessageboxService);
    /***/
  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
        this.activeProcess = [];
      }

      _createClass(NotificationService, [{
        key: "showSuccess",
        value: function showSuccess(message, title) {
          this.toastr.success(message, title);
        }
      }, {
        key: "showError",
        value: function showError(message, title) {
          this.toastr.error(message, title);
        }
      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          this.toastr.info(message, title);
        }
      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          this.toastr.warning(message, title);
        }
      }, {
        key: "showProcessing",
        value: function showProcessing(message) {
          var active = this.toastr.info(message + "...", "", {
            timeOut: 0,
            progressAnimation: "increasing"
          });
          return active.toastId;
        }
      }, {
        key: "hideProcessing",
        value: function hideProcessing(id) {
          this.toastr.remove(id);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/profile-popup.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/profile-popup.service.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePopupService */

  /***/
  function srcAppServicesProfilePopupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePopupService", function () {
      return ProfilePopupService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profile-popup/profile-popup.component */
    "./src/app/profile-popup/profile-popup.component.ts");

    var ProfilePopupService = /*#__PURE__*/function () {
      function ProfilePopupService(modal) {
        _classCallCheck(this, ProfilePopupService);

        this.modal = modal;
      }

      _createClass(ProfilePopupService, [{
        key: "show",
        value: function show(user) {
          var modalRef = this.modal.open(_profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePopupComponent"], {
            size: "md"
          });
          modalRef.componentInstance.user = user;
          return modalRef;
        }
      }]);

      return ProfilePopupService;
    }();

    ProfilePopupService.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ProfilePopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProfilePopupService);
    /***/
  },

  /***/
  "./src/app/services/route.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/route.service.ts ***!
    \*******************************************/

  /*! exports provided: RouteService */

  /***/
  function srcAppServicesRouteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteService", function () {
      return RouteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var RouteService = /*#__PURE__*/function () {
      function RouteService(coreService) {
        _classCallCheck(this, RouteService);

        this.coreService = coreService;
        this.apiUrl = "api/routes/";
      }

      _createClass(RouteService, [{
        key: "getRoutes",
        value: function getRoutes() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var paginate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery, "&paginate=").concat(paginate));
        }
      }, {
        key: "saveRoute",
        value: function saveRoute(route) {
          return this.coreService.postData(route, this.apiUrl);
        }
      }, {
        key: "updateRoute",
        value: function updateRoute(route) {
          return this.coreService.putData(route, this.apiUrl);
        }
      }, {
        key: "deleteRoute",
        value: function deleteRoute(route) {
          return this.coreService.deleteData(route.id, this.apiUrl);
        }
      }]);

      return RouteService;
    }();

    RouteService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], RouteService);
    /***/
  },

  /***/
  "./src/app/services/tracker.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/tracker.service.ts ***!
    \*********************************************/

  /*! exports provided: TrackerService */

  /***/
  function srcAppServicesTrackerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerService", function () {
      return TrackerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var TrackerService = /*#__PURE__*/function () {
      function TrackerService(coreService) {
        _classCallCheck(this, TrackerService);

        this.coreService = coreService;
        this.apiUrl = "api/trackers/";
      }

      _createClass(TrackerService, [{
        key: "getTrackers",
        value: function getTrackers() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var engineNo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery, "&engineno=").concat(engineNo));
        }
      }, {
        key: "saveTracker",
        value: function saveTracker(tracker) {
          return this.coreService.postData(tracker, this.apiUrl);
        }
      }, {
        key: "updateTracker",
        value: function updateTracker(tracker) {
          return this.coreService.putData(tracker, this.apiUrl);
        }
      }, {
        key: "deleteTracker",
        value: function deleteTracker(tracker) {
          return this.coreService.deleteData(tracker.id, this.apiUrl);
        }
      }]);

      return TrackerService;
    }();

    TrackerService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    TrackerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TrackerService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(coreService) {
        _classCallCheck(this, UserService);

        this.coreService = coreService;
        this.apiUrl = "api/users/";
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery));
        }
      }, {
        key: "getUser",
        value: function getUser(email) {
          return this.coreService.getData("api/user?email=".concat(email));
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          return this.coreService.postData(user, this.apiUrl);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.coreService.putData(user, this.apiUrl);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          return this.coreService.deleteData(user.id, this.apiUrl);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/app/services/vehicle.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/vehicle.service.ts ***!
    \*********************************************/

  /*! exports provided: VehicleService */

  /***/
  function srcAppServicesVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var VehicleService = /*#__PURE__*/function () {
      function VehicleService(coreService) {
        _classCallCheck(this, VehicleService);

        this.coreService = coreService;
        this.apiUrl = "api/vehicles/";
      }

      _createClass(VehicleService, [{
        key: "getVehicles",
        value: function getVehicles() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var searchquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          var paginate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.coreService.getData("".concat(this.apiUrl, "?page=").concat(page, "&searchquery=").concat(searchquery, "&paginate=").concat(paginate));
        }
      }, {
        key: "saveVehicle",
        value: function saveVehicle(vehicle) {
          return this.coreService.postData(vehicle, this.apiUrl);
        }
      }, {
        key: "updateVehicle",
        value: function updateVehicle(vehicle) {
          return this.coreService.putData(vehicle, this.apiUrl);
        }
      }, {
        key: "deleteVehicle",
        value: function deleteVehicle(vehicle) {
          return this.coreService.deleteData(vehicle.id, this.apiUrl);
        }
      }]);

      return VehicleService;
    }();

    VehicleService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], VehicleService);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(authService) {
        _classCallCheck(this, SidebarComponent);

        this.authService = authService;
        this.faTh = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTh"];
        this.faCarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCarAlt"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"];
        this.faRoute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRoute"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPowerOff"];
        this.faHistory = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.authService.logout();
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sidebar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/tracker/tracker.component.css":
  /*!***********************************************!*\
    !*** ./src/app/tracker/tracker.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTrackerTrackerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrZXIvdHJhY2tlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tracker/tracker.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tracker/tracker.component.ts ***!
    \**********************************************/

  /*! exports provided: TrackerComponent */

  /***/
  function srcAppTrackerTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerComponent", function () {
      return TrackerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");
    /* harmony import */


    var _models_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/tracker */
    "./src/app/models/tracker.ts");
    /* harmony import */


    var _services_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/driver.service */
    "./src/app/services/driver.service.ts");
    /* harmony import */


    var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/messagebox.service */
    "./src/app/services/messagebox.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_route_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/route.service */
    "./src/app/services/route.service.ts");
    /* harmony import */


    var _services_tracker_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/tracker.service */
    "./src/app/services/tracker.service.ts");
    /* harmony import */


    var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/vehicle.service */
    "./src/app/services/vehicle.service.ts");

    var TrackerComponent = /*#__PURE__*/function () {
      function TrackerComponent(trackerService, notify, messageBox, driverService, vehicleService, routeService, route) {
        _classCallCheck(this, TrackerComponent);

        this.trackerService = trackerService;
        this.notify = notify;
        this.messageBox = messageBox;
        this.driverService = driverService;
        this.vehicleService = vehicleService;
        this.routeService = routeService;
        this.route = route;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faListAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisH"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
        this.trackers = [];
        this.hasMoreData = false;
        this.newTracker = new _models_tracker__WEBPACK_IMPORTED_MODULE_5__["Tracker"](null, null, null, null);
        this.drivers = [];
        this.vehicles = [];
        this.routes = [];
        this.engineNo = "";
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
      }

      _createClass(TrackerComponent, [{
        key: "setViewMode",
        value: function setViewMode(mode) {
          this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
          this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
          this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;

          if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newTracker = new _models_tracker__WEBPACK_IMPORTED_MODULE_5__["Tracker"](null, null, null, null);
          }
        }
      }, {
        key: "onBackToMain",
        value: function onBackToMain() {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this19 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (this.isLoading) return;
          this.isLoading = true;
          this.trackerService.getTrackers(page, this.searchquery, this.engineNo).subscribe(function (response) {
            if (response.result) {
              _this19.trackers = _this19.trackers.concat(response.result);
              _this19.hasMoreData = response.totalPages > response.currentPage;
              _this19.currentPage = Number(response.currentPage);
            } else {
              // notify
              _this19.notify.showWarning(response.message, "Loading Failed");
            }
          }, function (reason) {
            _this19.notify.showError("we were unable to contact server", "Operation failed");
          }, function () {
            _this19.isLoading = false;
          });
        }
      }, {
        key: "saveTracker",
        value: function saveTracker() {
          var _this20 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.trackerService.saveTracker(this.newTracker).subscribe(function (response) {
            _this20.isProcessing = false;

            if (response.success) {
              _this20.notify.showSuccess("Saved successfully", "success");

              _this20.trackers.push(response.result);

              _this20.newTracker = new _models_tracker__WEBPACK_IMPORTED_MODULE_5__["Tracker"](null, null, null, null);
            } else {
              _this20.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }, {
        key: "updateTracker",
        value: function updateTracker() {
          var _this21 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.trackerService.updateTracker(this.newTracker).subscribe(function (response) {
            if (response.success) {
              _this21.notify.showSuccess("updated successfully", "success");
            } else {
              _this21.notify.showError(response.message, "Operation failed");
            }
          }, function (reason) {
            _this21.notify.showError("Unable to contact server.", "Operation failed");
          }, function () {
            _this21.isProcessing = false;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.trackers = [];
          this.loadData();
        }
      }, {
        key: "onEdit",
        value: function onEdit(tracker) {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
          this.newTracker = tracker;
        }
      }, {
        key: "onDelete",
        value: function onDelete(tracker) {
          var _this22 = this;

          var modalInstance = this.messageBox.showWarning("Are you sure you want to delete this tracker record?", "Delete Warning");
          modalInstance.result.then(function (response) {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
              var tid = _this22.notify.showProcessing("Deleting history");

              _this22.trackerService.deleteTracker(tracker).subscribe(function (response) {
                if (response.success) {
                  var index = _this22.trackers.findIndex(function (r) {
                    return r.id === tracker.id;
                  });

                  _this22.trackers.splice(index, 1);

                  _this22.notify.showSuccess("deleted successfully.", "Success");
                } else {
                  _this22.notify.showWarning(response.message, "Operation failed");
                }
              }, function (reason) {
                _this22.notify.showError("we were unable to contact server.", "Operation failed");
              }, function () {
                _this22.notify.hideProcessing(tid);
              });
            }
          })["catch"](function (reason) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.engineNo = this.route.snapshot.params["engineNo"];
          console.log(this.engineNo);
          this.loadData();
          this.driverService.getDrivers(null, "", false).subscribe(function (response) {
            if (response.success) {
              _this23.drivers = response.result; // console.log(response);
            }
          });
          this.vehicleService.getVehicles(null, "", false).subscribe(function (response) {
            if (response.success) {
              _this23.vehicles = response.result;
            }
          });
          this.routeService.getRoutes(null, "", false).subscribe(function (response) {
            if (response.success) {
              _this23.routes = response.result;
            }
          });
        }
      }]);

      return TrackerComponent;
    }();

    TrackerComponent.ctorParameters = function () {
      return [{
        type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_10__["TrackerService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
      }, {
        type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_7__["MessageboxService"]
      }, {
        type: _services_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"]
      }, {
        type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__["VehicleService"]
      }, {
        type: _services_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    TrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tracker",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tracker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tracker.component.css */
      "./src/app/tracker/tracker.component.css"))["default"]]
    })], TrackerComponent);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(userService, authService, notify) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.authService = authService;
        this.notify = notify;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.userProfile = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](null, null, null, null, null, null);
        this.isProcessing = false;
      }

      _createClass(UserProfileComponent, [{
        key: "onUpdate",
        value: function onUpdate() {
          var _this24 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          var tid = this.notify.showProcessing("Updating profile");
          this.userService.updateUser(this.userProfile).subscribe(function (response) {
            _this24.userProfile.password = undefined;

            if (response) {
              _this24.notify.showSuccess("Profile updated successfully.", "Success");
            } else {
              _this24.notify.showWarning(response.message, "Operation failed");
            }
          }, function (reason) {
            console.log(reason);

            _this24.notify.showError("we were unable to contact server", "Operation failed");
          }, function () {
            _this24.notify.hideProcessing(tid);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.authService.getCurrentUser().subscribe(function (response) {
            console.log(response);

            if (response.success) {
              _this25.userProfile = response.result;
              _this25.userProfile.password = undefined;
            }
          }, function (reason) {
            console.log(reason);
          });
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-user-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/user-profile/user-profile.component.css"))["default"]]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/vehicle/vehicle.component.css":
  /*!***********************************************!*\
    !*** ./src/app/vehicle/vehicle.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleVehicleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vehicle/vehicle.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/vehicle/vehicle.component.ts ***!
    \**********************************************/

  /*! exports provided: VehicleComponent */

  /***/
  function srcAppVehicleVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleComponent", function () {
      return VehicleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _models_app_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/app-enums */
    "./src/app/models/app-enums.ts");
    /* harmony import */


    var _models_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/vehicle */
    "./src/app/models/vehicle.ts");
    /* harmony import */


    var _services_fuel_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/fuel-type.service */
    "./src/app/services/fuel-type.service.ts");
    /* harmony import */


    var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/messagebox.service */
    "./src/app/services/messagebox.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/vehicle.service */
    "./src/app/services/vehicle.service.ts");

    var VehicleComponent = /*#__PURE__*/function () {
      function VehicleComponent(vehicleService, fuelTypeService, notify, messageBox) {
        _classCallCheck(this, VehicleComponent);

        this.vehicleService = vehicleService;
        this.fuelTypeService = fuelTypeService;
        this.notify = notify;
        this.messageBox = messageBox;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faCar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCar"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSpinner"];
        this.faHistory = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.vehicles = [];
        this.hasMoreData = false;
        this.fuelTypes = [];
        this.newVehicle = {
          engineNo: "",
          capacity: null,
          fuelId: null
        };
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
      }

      _createClass(VehicleComponent, [{
        key: "setViewMode",
        value: function setViewMode(mode) {
          this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView;
          this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView;
          this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].NewItemView;
        }
      }, {
        key: "onBackToMain",
        value: function onBackToMain() {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this26 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          if (this.isLoading) return;
          this.isLoading = true;
          this.vehicleService.getVehicles(page, this.searchquery).subscribe(function (response) {
            if (response.result) {
              _this26.vehicles = _this26.vehicles.concat(response.result);
              _this26.hasMoreData = response.totalPages > response.currentPage;
              _this26.currentPage = Number(response.currentPage);
            } else {// notify
            }
          }, function (reason) {
            _this26.notify.showError("We were unable to contact server.", "Loading failed.");
          }, function () {
            _this26.isLoading = false;
          });
        }
      }, {
        key: "saveVehicle",
        value: function saveVehicle() {
          var _this27 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.vehicleService.saveVehicle(this.newVehicle).subscribe(function (response) {
            _this27.isProcessing = false;

            if (response.success) {
              _this27.vehicles.push(response.result);

              _this27.newVehicle = new _models_vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]("", null, null);
            } else {
              _this27.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }, {
        key: "updateVehicle",
        value: function updateVehicle() {
          var _this28 = this;

          if (this.isProcessing) return;
          this.isProcessing = true;
          this.vehicleService.updateVehicle(this.newVehicle).subscribe(function (response) {
            if (response.success) {
              _this28.notify.showSuccess("vehicle updated successfully", "success");
            } else {
              _this28.notify.showError(response.message, "Operation failed");
            }
          }, function (reason) {
            _this28.notify.showError("Unable to contact server.", "Operation failed");
          }, function () {
            _this28.isProcessing = false;
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.vehicles = [];
          this.loadData();
        }
      }, {
        key: "onEdit",
        value: function onEdit(vehicle) {
          this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView);
          this.newVehicle = vehicle;
        }
      }, {
        key: "onDelete",
        value: function onDelete(vehicle) {
          var _this29 = this;

          var modalInstance = this.messageBox.showWarning("Are you sure you want to delete this vehicle?", "Delete Warning");
          modalInstance.result.then(function (response) {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["MessageboxResponse"].OK) {
              var tid = _this29.notify.showProcessing("Deleting vehicle");

              _this29.vehicleService.deleteVehicle(vehicle).subscribe(function (response) {
                _this29.notify.hideProcessing(tid);

                if (response.success) {
                  var index = _this29.vehicles.findIndex(function (v) {
                    return v.id === vehicle.id;
                  });

                  _this29.vehicles.splice(index, 1);

                  _this29.notify.showSuccess("vehicle deleted successfully.", "Success");
                } else {
                  _this29.notify.showWarning(response.message, "Operation failed");
                }
              }, function (reason) {
                _this29.notify.showError("we were unable to contact server.", "Operation failed");
              }, function () {});
            }
          })["catch"](function (reason) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.loadData();
          this.fuelTypeService.getFuelTypes().subscribe(function (response) {
            if (response.success) {
              _this30.fuelTypes = response.result;
            } else {
              _this30.notify.showError(response.message, "Operation failed");
            }
          });
        }
      }]);

      return VehicleComponent;
    }();

    VehicleComponent.ctorParameters = function () {
      return [{
        type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__["VehicleService"]
      }, {
        type: _services_fuel_type_service__WEBPACK_IMPORTED_MODULE_5__["FuelTypeService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"]
      }];
    };

    VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-vehicle",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle.component.css */
      "./src/app/vehicle/vehicle.component.css"))["default"]]
    })], VehicleComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! C:\Users\Jude-JohnB\Documents\MyOffice\My Portfolio\vehicle-logisitics\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map