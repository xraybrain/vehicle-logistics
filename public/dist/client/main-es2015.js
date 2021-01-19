(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"text-muted\">\n  <p class=\"text-center text-md-right text-lg-center\">\n    <cite>ABC</cite> Transport company vehicle logistics, all &copy; reserved. since {{appYear}}\n  </p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faHistory\"></fa-icon>\n            Breakdown Histories\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Breakdown History\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search by engineNo.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Driver Name</th>\n                      <th>Vehicle Engine No.</th>\n                      <th>Description</th>\n                      <th>Breakdown Date</th>\n                      <th>Repair Date</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let history of breakdownHistories; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{history.Driver.firstName}} {{history.Driver.lastName}}</td>\n                      <td>{{history.Vehicle.engineNo}}</td>\n                      <td>{{history.description}}</td>\n                      <td>{{history.breakdownDate | date}}</td>\n                      <td>{{history.repairDate | date}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(history)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit breakdown details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(history)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete breakdown details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Routes\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Breakdown\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Breakdown\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #breakdownForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <textarea name=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"Breakdown Description\"\n                      [(ngModel)]=\"newBreakdownHistory.description\" required></textarea>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"driverId\"\n                      [(ngModel)]=\"newBreakdownHistory.driverId\" required>\n                      <option [value]=\"null\">Select Driver</option>\n                      <option [value]=\"driver.id\" *ngFor=\"let driver of drivers\">\n                        {{driver.firstName}} {{driver.lastName}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"vehicleId\"\n                      [(ngModel)]=\"newBreakdownHistory.vehicleId\" required>\n                      <option [value]=\"null\">Select Vehicle</option>\n                      <option [value]=\"vehicle.id\" *ngFor=\"let vehicle of vehicles\">\n                        {{vehicle.engineNo}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"form-control-custom form-control d-flex align-items-center\">\n                      <input type=\"text\" name=\"breakdownDate\" class=\"w-100\" placeholder=\"Breakdown Date\"\n                        [(ngModel)]=\"breakdownDate\" ngbDatepicker #d=\"ngbDatepicker\" required readonly\n                        aria-readonly=\"true\" />\n                      <label (click)=\"d.toggle()\" class=\"mb-0 text-info\">\n                        <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                      </label>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group\" *ngIf=\"isEditMode\">\n                    <div class=\"form-control-custom form-control d-flex align-items-center\">\n                      <input type=\"text\" name=\"repairDate\" class=\"w-100\" placeholder=\"Repair Date\"\n                        [(ngModel)]=\"repairDate\" ngbDatepicker #d1=\"ngbDatepicker\" readonly aria-readonly=\"true\" />\n                      <label (click)=\"d1.toggle()\" class=\"mb-0 text-info\">\n                        <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!breakdownForm.form.valid\"\n                      (click)=\"saveBreakdown()\" *ngIf=\"isNewItemMode\">\n                      Save Breakdown\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!breakdownForm.form.valid\"\n                      (click)=\"updateBreakdown()\" *ngIf=\"isEditMode\">\n                      Update Breakdown\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"d-flex justify-content-between mt-2\">\n    <h4 class=\"text-muted\">\n      <fa-icon [icon]=\"faTh\"></fa-icon>\n      Dashboard\n    </h4>\n\n    <button class=\"btn btn-sm btn-danger\" (click)=\"onLogOut()\">\n      <fa-icon [icon]=\"faPowerOff\"></fa-icon>\n      Logout\n    </button>\n  </div>\n  <hr class=\"socket\" />\n\n  <div class=\"row\">\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faCar\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Vehicles\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalVehicles}}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faUsers\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Drivers\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalDrivers}}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faRoute\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Routes\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalRoutes}}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-4 col-lg-3 mb-2 mx-auto\">\n      <div class=\"card border-warning\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-center mb-1 pb-0\">\n            <fa-icon [icon]=\"faListAlt\" class=\"fa-2x\"></fa-icon>\n          </p>\n          <span class=\"font-weight-bold\">\n            Tracker\n          </span>\n          <p class=\"text-center mb-1 pb-0\">\n            {{summary.totalTrackers}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-8 mx-auto mt-5 p-0\">\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/profile\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faUser\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Profile</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/vehicletracker\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faListAlt\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Vehicle Tracker</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/vehicles/\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faCar\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Vehicles</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/drivers\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faUsers\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Drivers</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/routes\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faRoute\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Travel Routes</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <div class=\"col-6 col-md-4 mx-auto mb-2\">\n        <a routerLink=\"/breakdownhistories\" class=\"nav-link-custom\">\n          <div class=\"card bg-white\">\n            <div class=\"card-body text-center p-1 p-sm-3\">\n              <fa-icon [icon]=\"faHistory\" class=\"fa-4x\"></fa-icon>\n              <h5 class=\"text-center\">Breakdown History</h5>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faUsers\"></fa-icon>\n            Drivers\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Driver\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\"\n                        placeholder=\"Search driver by last name, first name or email.\" [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Last Name</th>\n                      <th>First Name</th>\n                      <th>Email</th>\n                      <th>Marital Status</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let driver of drivers; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{driver.lastName}}</td>\n                      <td>{{driver.firstName}}</td>\n                      <td>{{driver.email}}</td>\n                      <td>{{driver.maritalStatus}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onViewProfile(driver)\">\n                              <fa-icon [icon]=\"faUser\" class=\"mr-2\"></fa-icon>\n                              View driver profile\n                            </label>\n                            <label class=\"dropdown-item\" (click)=\"onEdit(driver)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit driver details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(driver)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete driver details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Driver\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Driver\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #driverForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"lastName\" class=\"form-control form-control-custom\" placeholder=\"Last Name\"\n                      [(ngModel)]=\"newDriver.lastName\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"firstName\" class=\"form-control form-control-custom\"\n                      placeholder=\"First Name\" [(ngModel)]=\"newDriver.firstName\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" class=\"form-control form-control-custom\"\n                      placeholder=\"Email Address\" [(ngModel)]=\"newDriver.email\" required email />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"tel\" name=\"mobile\" class=\"form-control form-control-custom\" placeholder=\"Mobile No.\"\n                      [(ngModel)]=\"newDriver.mobile\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <select name=\"maritalStatus\" class=\"form-control form-control-custom\"\n                      [(ngModel)]=\"newDriver.maritalStatus\" required>\n                      <option [value]=\"null\">Marital Status</option>\n                      <option value=\"single\">\n                        Single\n                      </option>\n                      <option value=\"married\">\n                        Married\n                      </option>\n                      <option value=\"divorced\">\n                        Divorced\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!driverForm.form.valid\"\n                      (click)=\"saveDriver()\" *ngIf=\"isNewItemMode\">\n                      Save Driver\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!driverForm.form.valid\"\n                      (click)=\"updateDriver()\" *ngIf=\"isEditMode\">\n                      Update Driver\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto my-5\">\n  <a routerLink=\"/login\" class=\"btn btn-warning btn-sm mb-2 btn-rounded\">\n    <fa-icon [icon]=\"faArrowCircleLeft\"></fa-icon>\n    Login\n  </a>\n  <div class=\"card shadow\">\n    <div class=\"card-body\">\n      <div class=\"text-center\">\n        <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n\n        <h5 class=\"mt-3 text-muted\">\n          Reset Forgotten Password\n        </h5>\n      </div>\n\n\n      <form #confirmEmailForm=\"ngForm\" *ngIf=\"!isValidEmail\">\n        <div class=\"form-group mt-3\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" autocomplete=\"off\" #email=\"ngModel\"\n              [(ngModel)]=\"confirmEmail.email\" email required />\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onConfirmEmail()\"\n            [disabled]=\"!confirmEmailForm.form.valid\">\n            Continue\n            <fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\n          </button>\n        </div>\n      </form>\n\n      <form #resetPasswordForm=\"ngForm\" *ngIf=\"isValidEmail\">\n        <div class=\"form-group\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" autocomplete=\"off\"\n              [(ngModel)]=\"resetPassword.password\" required />\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" #password=\"ngModel\"\n              autocomplete=\"off\" [(ngModel)]=\"resetPassword.confirmPassword\" required />\n          </div>\n          <span class=\"text-danger mt-1\" *ngIf=\"resetPassword.confirmPassword !== resetPassword.password\">\n            <small>Password does not match</small>\n          </span>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onResetPassword()\"\n            [disabled]=\"!resetPasswordForm.form.valid\">\n            Reset Password\n          </button>\n        </div>\n      </form>\n\n      <div *ngIf=\"isProcessing\" class=\"text-center\">\n        <span>\n          <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n          Processing request\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto my-5\">\n  <form #loginForm=\"ngForm\">\n    <div class=\"card shadow\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n        </div>\n\n        <div class=\"my-2\" *ngIf=\"isProcessing\">\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" style=\"width:100%\">\n              authenticating...\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group mt-3\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <span class=\"mr-2 text-muted\">\n              <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n            </span>\n            <input type=\"email\" placeholder=\"Email\" name=\"email\" id=\"email\" autocomplete=\"off\" #email=\"ngModel\"\n              [(ngModel)]=\"loginModel.email\" email required />\n          </div>\n\n        </div>\n        <div class=\"form-group\">\n          <div class=\"d-flex form-control form-control-custom\">\n            <span class=\"mr-2 text-muted\">\n              <fa-icon [icon]=\"faLock\"></fa-icon>\n            </span>\n            <input type=\"password\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" autocomplete=\"off\"\n              [(ngModel)]=\"loginModel.password\" required />\n          </div>\n\n        </div>\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-rounded btn-outline-success\" (click)=\"onLogin()\" [disabled]=\"!loginForm.form.valid\">\n            Login\n            <fa-icon [icon]=\"faSignInAlt\"></fa-icon>\n          </button>\n        </div>\n        <div class=\"form-group text-center\">\n          <a routerLink=\"/forgot/password\">\n            <small>\n              Forgot your password?\n            </small>\n          </a>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h5 class=\"modal-title\">\n    {{settings.title}}\n  </h5>\n</div>\n<div class=\"modal-body text-center\">\n  <p class=\"text-center\" *ngIf=\"settings.type == 0\">\n    <fa-icon [icon]=\"faExclamationTriangle\" class=\"fa-2x text-warning\"></fa-icon>\n  </p>\n\n  <p class=\"text-center\" *ngIf=\"settings.type == 1\">\n    <fa-icon [icon]=\"faCheckCircle\" class=\"fa-2x text-success\"></fa-icon>\n  </p>\n\n  <p class=\"text-center\" *ngIf=\"settings.type == 2\">\n    <fa-icon [icon]=\"faInfoCircle\" class=\"fa-2x text-info\"></fa-icon>\n  </p>\n\n  {{settings.message}}\n</div>\n<div class=\"modal-footer\">\n  <div *ngIf=\"settings.type == 0\">\n    <button class=\"btn btn-sm btn-danger mr-2\" (click)=\"cancel()\">\n      Cancel\n    </button>\n    <button class=\"btn btn-sm btn-success\" (click)=\"ok()\">\n      Continue\n    </button>\n  </div>\n  <div *ngIf=\"settings.type == 1\">\n    <button class=\"btn btn-sm btn-success\" (click)=\"ok()\">\n      Ok\n    </button>\n  </div>\n  <div *ngIf=\"settings.type == 2\">\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"close()\">\n      Close\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header border-0\">\n  <h5 class=\"modal-title\">\n    <fa-icon [icon]=\"faIdCard\" class=\"text-info\"></fa-icon>\n    <span class=\"text-secondary\">\n      Profile\n    </span>\n  </h5>\n  <a href=\"javascript: void(0)\" class=\"close\" (click)=\"close()\">\n    <fa-icon [icon]=\"faTimes\"></fa-icon>\n  </a>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-5 mb-2\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"assets/avatar.png\" alt=\"user profile picture\">\n      </div>\n    </div>\n    <div class=\"col-md-7 mb-2\">\n      <div class=\"card bg-light\">\n        <div class=\"card-body\">\n          <p class=\"mb-1\">\n            <b>Name:</b>\n            <span class=\"text-capitalize\">\n              {{user.firstName}} {{user.lastName}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Email:</b>\n            <span>\n              {{user.email}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Mobile:</b>\n            <span>\n              {{user.mobile}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n          <p class=\"mb-1\">\n            <b>Marital Status:</b>\n            <span class=\"text-capitalize\">\n              {{user.maritalStatus}}\n            </span>\n          </p>\n          <hr class=\"socket mt-0\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faRoute\"></fa-icon>\n            Travel Routes\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Route\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search route by departure or destination.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-md\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Departed From</th>\n                      <th>Destination</th>\n                      <th>Scheduled At</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let route of routes; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{route.departure}}</td>\n                      <td>{{route.destination}}</td>\n                      <td>{{route.scheduledAt}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(route)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit route details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(route)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete route details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Routes\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Route\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Route\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #routeForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"departure\" class=\"form-control form-control-custom\" placeholder=\"Departure\"\n                      [(ngModel)]=\"newRoute.departure\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"destination\" class=\"form-control form-control-custom\"\n                      placeholder=\"Destination\" [(ngModel)]=\"newRoute.destination\" required />\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <label for=\"schedule\">\n                      Travel Schedule\n                    </label>\n                    <input type=\"text\" id=\"schedule\" name=\"scheduledAt\" class=\"form-control form-control-custom\"\n                      placeholder=\"Schedule\" [value]=\"time.hour + ':' + time.minute + ' ' + getMeridan()\" required\n                      readonly aria-readonly />\n                    <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"true\" name=\"time\"></ngb-timepicker>\n                  </div>\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!routeForm.form.valid\" (click)=\"saveRoute()\"\n                      *ngIf=\"isNewItemMode\">\n                      Save Route\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!routeForm.form.valid\"\n                      (click)=\"updateRoute()\" *ngIf=\"isEditMode\">\n                      Update Route\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-light\">\n  <button class=\"navbar-toggler ml-auto\" data-toggle=\"collapse\" data-target=\"#topMenu\">\n    <span class=\"line-1\"></span>\n    <span class=\"line-2\"></span>\n    <span class=\"line-3\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"topMenu\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4 col-lg-3 col-xl-2 p-0 bg-dark fixed-top sidebar\">\n          <div class=\"text-right\">\n            <button class=\"navbar-toggler mt-1 mr-1 text-light\" data-toggle=\"collapse\" data-target=\"#topMenu\">\n              <fa-icon [icon]=\"faTimes\"></fa-icon>\n            </button>\n          </div>\n          <div class=\"my-2 text-center\">\n            <img src=\"/assets/logo.png\" alt=\"abc logo\" class=\"logo\">\n            <p class=\"text-light mt-1\">Vehicle Logisitics</p>\n          </div>\n          <ul class=\"navbar-nav flex-column\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/dashboard\" class=\"nav-link\">\n                <fa-icon [icon]=\"faTh\" class=\"text-warning mr-2\"></fa-icon>\n                Dashboard\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/profile\" class=\"nav-link\">\n                <fa-icon [icon]=\"faUser\" class=\"text-warning mr-2\"></fa-icon>\n                Profile\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/vehicletracker\" class=\"nav-link\">\n                <fa-icon [icon]=\"faListAlt\" class=\"text-warning mr-2\"></fa-icon>\n                Tracker\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/breakdownhistories\" class=\"nav-link\">\n                <fa-icon [icon]=\"faHistory\" class=\"text-warning mr-2\"></fa-icon>\n                Breakdown History\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/vehicles/\" class=\"nav-link\">\n                <fa-icon [icon]=\"faCarAlt\" class=\"text-warning mr-2\"></fa-icon>\n                Vehicle\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/drivers\" class=\"nav-link\">\n                <fa-icon [icon]=\"faUsers\" class=\"text-warning mr-2\"></fa-icon>\n                Driver\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"/routes\" class=\"nav-link\">\n                <fa-icon [icon]=\"faRoute\" class=\"text-warning mr-2\"></fa-icon>\n                Route\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript: void(0)\" class=\"nav-link\" (click)=\"onLogOut()\">\n                <fa-icon [icon]=\"faPowerOff\" class=\"text-danger mr-2\"></fa-icon>\n                logout\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 ml-auto\">\n      <div>\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faListAlt\"></fa-icon>\n            Vehicle Tracker\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            Track Vehicle\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search by driver name\" [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-lg\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Driver Name</th>\n                      <th>Vehicle Engine No.</th>\n                      <th>Departs From</th>\n                      <th>Destination</th>\n                      <th>Scheduled At</th>\n                      <th>Date</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let tracker of trackers; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{tracker.Driver.firstName}} {{tracker.Driver.lastName}}</td>\n                      <td>{{tracker.Vehicle.engineNo}}</td>\n                      <td>{{tracker.Route.departure}}</td>\n                      <td>{{tracker.Route.destination}}</td>\n                      <td>{{tracker.Route.scheduledAt}}</td>\n                      <td>{{tracker.createdAt | date}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <label class=\"dropdown-item\" (click)=\"onEdit(tracker)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit tracker details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(tracker)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete tracker details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"isLoading\" class=\"text-center\">\n                  <span>\n                    <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                    Loading Vehicle Tracker\n                  </span>\n                </div>\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  New Tracker Record\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Tracker Record\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #trackerForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"driverId\" [(ngModel)]=\"newTracker.driverId\"\n                      required>\n                      <option [value]=\"null\">Select Driver</option>\n                      <option [value]=\"driver.id\" *ngFor=\"let driver of drivers\">\n                        {{driver.firstName}} {{driver.lastName}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"vehicleId\" [(ngModel)]=\"newTracker.vehicleId\"\n                      required>\n                      <option [value]=\"null\">Select Vehicle</option>\n                      <option [value]=\"vehicle.id\" *ngFor=\"let vehicle of vehicles\">\n                        {{vehicle.engineNo}}\n                      </option>\n                    </select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-custom\" name=\"routeId\" [(ngModel)]=\"newTracker.routeId\"\n                      required>\n                      <option [value]=\"null\">Select Travel Route</option>\n                      <option [value]=\"route.id\" *ngFor=\"let route of routes\">\n                        {{route.departure}} -> {{route.destination}} ({{route.scheduledAt}})\n                      </option>\n                    </select>\n                  </div>\n\n\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!trackerForm.form.valid\"\n                      (click)=\"saveTracker()\" *ngIf=\"isNewItemMode\">\n                      Save Tracker\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!trackerForm.form.valid\"\n                      (click)=\"updateTracker()\" *ngIf=\"isEditMode\">\n                      Update Tracker\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 p-0 ml-auto\">\n      <div class=\"container\">\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faUser\"></fa-icon>\n            Profile\n          </h5>\n        </div>\n        <hr class=\"socket\" />\n\n        <div class=\"card rounded mt-1 mt-sm-5\">\n          <div class=\"card-body\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-12 col-md-5 col-lg-4 mx-auto text-center mb-2\">\n                <img src=\"/assets/avatar.png\" alt=\"profile pics\" class=\"avatar\" />\n              </div>\n              <div class=\"col-12 col-md-7 col-lg-8 mx-auto mb-2\">\n                <div class=\"card rounded bg-light\">\n                  <div class=\"card-body\">\n                    <form #userForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-custom\" name=\"lastName\"\n                          placeholder=\"Last Name\" [(ngModel)]=\"userProfile.lastName\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-custom\" name=\"firstName\"\n                          placeholder=\"First Name\" [(ngModel)]=\"userProfile.firstName\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control form-control-custom\" name=\"email\"\n                          placeholder=\"Email Address\" [(ngModel)]=\"userProfile.email\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"tel\" class=\"form-control form-control-custom\" name=\"mobile\"\n                          placeholder=\"Mobile No.\" [(ngModel)]=\"userProfile.mobile\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control form-control-custom\" name=\"password\"\n                          [(ngModel)]=\"userProfile.password\" placeholder=\"Reset Password\">\n                      </div>\n                      <div class=\"form-group text-center\">\n                        <button class=\"btn btn-success btn-rounded\" (click)=\"onUpdate()\">\n                          Update profile\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidebar></app-sidebar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 col-lg-9 col-xl-10 p-0 ml-auto\">\n      <div class=\"container\">\n        <div class=\"d-flex justify-content-between mb-0\">\n          <h5 class=\"mr-1 mb-0 text-muted font-style-italic\">\n            <fa-icon [icon]=\"faCar\"></fa-icon>\n            Vehicles\n          </h5>\n\n          <button class=\"btn btn-warning\" (click)=\"setViewMode(2)\">\n            New Vehicle\n          </button>\n        </div>\n        <hr class=\"socket mt-1\" />\n\n        <div class=\"row flex-wrap-reverse\">\n          <div class=\"col-12 mb-2\" [ngClass]=\"{'col-md-7 col-lg-8 col-xl-9': !isMainMode}\">\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <div>\n                  <form class=\"w-100\">\n                    <div class=\"form-control form-control-custom d-flex\">\n                      <input type=\"search\" name=\"searchquery\" placeholder=\"Search vehicle by engine no.\"\n                        [(ngModel)]=\"searchquery\" />\n                      <button class=\"btn my-0 py-0\" (click)=\"onSearch()\">\n                        <fa-icon [icon]=\"faSearch\"></fa-icon>\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card-body scrollable\">\n                <table class=\"table table-striped table-hover table-md\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Engine No</th>\n                      <th>Capacity</th>\n                      <th>Fuel Type</th>\n                      <th>Status</th>\n                      <th>\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let vehicle of vehicles; index as i;\">\n                      <td>{{i+1}}</td>\n                      <td>{{vehicle.engineNo}}</td>\n                      <td>{{vehicle.capacity}}</td>\n                      <td>{{vehicle.Fuel.type}}</td>\n                      <td>{{vehicle.isFunctional ? \"active\" : \"faulty\"}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"dropdown\">\n                          <button class=\"btn btn-sm btn-info\" data-toggle=\"dropdown\">\n                            <div class=\"d-flex align-items-center\">\n                              <span>more</span>\n                              <fa-icon [icon]=\"faEllipsisH\" class=\"ml-1\"></fa-icon>\n                            </div>\n                          </button>\n                          <div class=\"dropdown-menu\">\n                            <a [routerLink]=\"'/breakdownhistories/' + vehicle.engineNo\" class=\"dropdown-item\">\n                              <fa-icon [icon]=\"faHistory\" class=\"mr-2\"></fa-icon>\n                              Breakdown History\n                            </a>\n                            <a [routerLink]=\"'/vehicletracker/' + vehicle.engineNo\" class=\"dropdown-item\">\n                              <fa-icon [icon]=\"faListAlt\" class=\"mr-2\"></fa-icon>\n                              Tracker Record\n                            </a>\n                            <label class=\"dropdown-item\" (click)=\"onEdit(vehicle)\">\n                              <fa-icon [icon]=\"faEdit\" class=\"mr-2\"></fa-icon>\n                              Edit vehicle details\n                            </label>\n                            <label href=\"#\" class=\"dropdown-item\" (click)=\"onDelete(vehicle)\">\n                              <fa-icon [icon]=\"faTrash\" class=\"mr-2\"></fa-icon>\n                              Delete vehicle details\n                            </label>\n                          </div>\n                        </div>\n\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <button *ngIf=\"hasMoreData\" class=\"btn btn-sm btn-outline-info\" (click)=loadData(currentPage+1)>\n                  Load More...\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-5 col-lg-4 col-xl-3 mb-2\" *ngIf=\"isNewItemMode || isEditMode\">\n            <div class=\"text-right\" (click)=\"onBackToMain()\">\n              <button class=\"btn\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>\n              </button>\n            </div>\n            <!-- New Item Form -->\n            <div class=\"card\">\n              <div class=\"card-header bg-white\">\n                <h5 class=\"text-muted\" *ngIf=\"isNewItemMode\">\n                  Add New Vehicle\n                </h5>\n                <h5 class=\"text-muted\" *ngIf=\"isEditMode\">\n                  Edit Vehicle\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <form #newVehicleForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" name=\"engineNo\" class=\"form-control form-control-custom\" placeholder=\"Engine No.\"\n                      [(ngModel)]=\"newVehicle.engineNo\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"number\" name=\"capacity\" class=\"form-control form-control-custom\" placeholder=\"Capacity\"\n                      [(ngModel)]=\"newVehicle.capacity\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <select name=\"fuelId\" class=\"form-control form-control-custom\" [(ngModel)]=\"newVehicle.fuelId\"\n                      required>\n                      <option [value]=\"null\">Fuel Type</option>\n                      <option *ngFor=\"let fuel of fuelTypes\" [value]=\"fuel.id\">\n                        {{fuel.type}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!newVehicleForm.form.valid\"\n                      (click)=\"saveVehicle()\" *ngIf=\"isNewItemMode\">\n                      Save Vehicle\n                    </button>\n\n                    <button class=\"btn btn-success btn-rounded\" [disabled]=\"!newVehicleForm.form.valid\"\n                      (click)=\"updateVehicle()\" *ngIf=\"isEditMode\">\n                      Update Vehicle\n                    </button>\n\n                    <div class=\" text-center mt-2\" *ngIf=\"isProcessing\">\n                      <span>\n                        <fa-icon [icon]=\"faSpinner\" [spin]=\"true\"></fa-icon>\n                        processing request\n                      </span>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- New Item Form -->\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver/driver.component */ "./src/app/driver/driver.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breakdownhistory/breakdownhistory.component */ "./src/app/breakdownhistory/breakdownhistory.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/tracker/tracker.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");













const routes = [
    { path: "", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: "dashboard",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: "vehicles",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["VehicleComponent"],
    },
    {
        path: "drivers",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _driver_driver_component__WEBPACK_IMPORTED_MODULE_6__["DriverComponent"],
    },
    {
        path: "routes",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _route_route_component__WEBPACK_IMPORTED_MODULE_7__["RouteComponent"],
    },
    {
        path: "breakdownhistories",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__["BreakdownhistoryComponent"],
    },
    {
        path: "breakdownhistories/:engineNo",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_8__["BreakdownhistoryComponent"],
    },
    {
        path: "vehicletracker",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__["TrackerComponent"],
    },
    {
        path: "vehicletracker/:engineNo",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_9__["TrackerComponent"],
    },
    {
        path: "profile",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
    },
    {
        path: "forgot/password",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Vehicle Logistics";
        this.appYear = new Date().getFullYear();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _driver_driver_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./driver/driver.component */ "./src/app/driver/driver.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messagebox/messagebox.component */ "./src/app/messagebox/messagebox.component.ts");
/* harmony import */ var _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile-popup/profile-popup.component */ "./src/app/profile-popup/profile-popup.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./breakdownhistory/breakdownhistory.component */ "./src/app/breakdownhistory/breakdownhistory.component.ts");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tracker/tracker.component */ "./src/app/tracker/tracker.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
























// this function retrieves the token
function tokenGetter() {
    return localStorage.getItem("access_token");
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _driver_driver_component__WEBPACK_IMPORTED_MODULE_14__["DriverComponent"],
            _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["VehicleComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
            _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__["MessageboxComponent"],
            _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__["ProfilePopupComponent"],
            _route_route_component__WEBPACK_IMPORTED_MODULE_19__["RouteComponent"],
            _breakdownhistory_breakdownhistory_component__WEBPACK_IMPORTED_MODULE_20__["BreakdownhistoryComponent"],
            _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_21__["TrackerComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["UserProfileComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_23__["ForgotPasswordComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                progressBar: true,
                timeOut: 5000,
                maxOpened: 1,
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhost:4100"],
                    disallowedRoutes: ["localhost:4100/api/auth/"],
                },
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ],
        entryComponents: [_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_17__["MessageboxComponent"], _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_18__["ProfilePopupComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, notify) {
        this.router = router;
        this.notify = notify;
    }
    canActivate(next, state) {
        if (localStorage) {
            if (localStorage.getItem("access_token")) {
                return true;
            }
            else {
                this.notify.showWarning("You must login before you can view this page", "Warning");
                this.router.navigate(["/login"]);
                return false;
            }
        }
        else {
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/breakdownhistory/breakdownhistory.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/breakdownhistory/breakdownhistory.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFrZG93bmhpc3RvcnkvYnJlYWtkb3duaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/breakdownhistory/breakdownhistory.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/breakdownhistory/breakdownhistory.component.ts ***!
  \****************************************************************/
/*! exports provided: BreakdownhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownhistoryComponent", function() { return BreakdownhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");
/* harmony import */ var _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/breakdown-history */ "./src/app/models/breakdown-history.ts");
/* harmony import */ var _services_breakdown_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/breakdown-history.service */ "./src/app/services/breakdown-history.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/messagebox.service */ "./src/app/services/messagebox.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/vehicle.service */ "./src/app/services/vehicle.service.ts");











let BreakdownhistoryComponent = class BreakdownhistoryComponent {
    constructor(breakdownHistoryService, notify, messageBox, driverService, vehicleService, route) {
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
    setViewMode(mode) {
        this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
        this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
        this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;
        if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newBreakdownHistory = new _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__["BreakdownHistory"](null, null, null, null);
            this.breakdownDate = null;
            this.repairDate = null;
        }
    }
    onBackToMain() {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
    }
    loadData(page = 1) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.breakdownHistoryService
            .getHistories(page, this.searchquery, this.engineNo)
            .subscribe((response) => {
            if (response.result) {
                this.breakdownHistories = this.breakdownHistories.concat(response.result);
                this.hasMoreData = response.totalPages > response.currentPage;
                this.currentPage = Number(response.currentPage);
            }
            else {
                // notify
                this.notify.showWarning(response.message, "Loading Failed");
            }
        }, (reason) => {
            this.notify.showError("we were unable to contact server", "Operation failed");
        }, () => {
            this.isLoading = false;
        });
    }
    saveBreakdown() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.setDates();
        this.breakdownHistoryService
            .saveHistory(this.newBreakdownHistory)
            .subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.notify.showSuccess("Saved successfully", "success");
                this.breakdownHistories.push(response.result);
                this.newBreakdownHistory = new _models_breakdown_history__WEBPACK_IMPORTED_MODULE_5__["BreakdownHistory"](null, null, null, null);
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
    updateBreakdown() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.setDates();
        this.breakdownHistoryService
            .updateHistory(this.newBreakdownHistory)
            .subscribe((response) => {
            if (response.success) {
                this.notify.showSuccess("breakdown history updated successfully", "success");
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Unable to contact server.", "Operation failed");
        }, () => {
            this.isProcessing = false;
        });
    }
    onSearch() {
        this.breakdownHistories = [];
        this.loadData();
    }
    onEdit(breakdownHistory) {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
        this.newBreakdownHistory = breakdownHistory;
        this.newBreakdownHistory.vehicleId = Number(breakdownHistory.vehicleId);
        let d = new Date(breakdownHistory.breakdownDate);
        this.breakdownDate = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate(),
        };
        if (breakdownHistory.repairDate) {
            d = new Date(breakdownHistory.repairDate);
            this.repairDate = {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate(),
            };
        }
        else {
            this.repairDate = null;
        }
    }
    onDelete(breakdownHistory) {
        let modalInstance = this.messageBox.showWarning(`Are you sure you want to delete this breakdown history?`, "Delete Warning");
        modalInstance.result
            .then((response) => {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
                let tid = this.notify.showProcessing("Deleting history");
                this.breakdownHistoryService
                    .deleteHistory(breakdownHistory)
                    .subscribe((response) => {
                    if (response.success) {
                        let index = this.breakdownHistories.findIndex((r) => r.id === breakdownHistory.id);
                        this.breakdownHistories.splice(index, 1);
                        this.notify.showSuccess("breakdown history deleted successfully.", "Success");
                    }
                    else {
                        this.notify.showWarning(response.message, "Operation failed");
                    }
                }, (reason) => {
                    this.notify.showError("we were unable to contact server.", "Operation failed");
                }, () => {
                    this.notify.hideProcessing(tid);
                });
            }
        })
            .catch((reason) => { });
    }
    ngOnInit() {
        this.engineNo = this.route.snapshot.params["engineNo"];
        this.loadData();
        this.driverService.getDrivers(null, "", false).subscribe((response) => {
            if (response.success) {
                this.drivers = response.result;
                console.log(response);
            }
        });
        this.vehicleService.getVehicles(null, "", false).subscribe((response) => {
            if (response.success) {
                this.vehicles = response.result;
            }
        });
    }
    setDates() {
        if (this.breakdownDate) {
            this.newBreakdownHistory.breakdownDate = `${this.breakdownDate.year}-${this.breakdownDate.month}-${this.breakdownDate.day}`;
        }
        if (this.repairDate) {
            this.newBreakdownHistory.repairDate = `${this.repairDate.year}-${this.repairDate.month}-${this.repairDate.day}`;
        }
    }
};
BreakdownhistoryComponent.ctorParameters = () => [
    { type: _services_breakdown_history_service__WEBPACK_IMPORTED_MODULE_6__["BreakdownHistoryService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_8__["MessageboxService"] },
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_10__["VehicleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BreakdownhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-breakdownhistory",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breakdownhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/breakdownhistory/breakdownhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breakdownhistory.component.css */ "./src/app/breakdownhistory/breakdownhistory.component.css")).default]
    })
], BreakdownhistoryComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(dashboard, authService) {
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
            totalVehicles: 0,
        };
    }
    ngOnInit() {
        this.dashboard.getSummary().subscribe((response) => {
            if (response.success) {
                this.summary = response.result;
                console.log(response);
            }
        });
    }
    onLogOut() {
        this.authService.logout();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/driver/driver.component.css":
/*!*********************************************!*\
  !*** ./src/app/driver/driver.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9kcml2ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/driver/driver.component.ts":
/*!********************************************!*\
  !*** ./src/app/driver/driver.component.ts ***!
  \********************************************/
/*! exports provided: DriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverComponent", function() { return DriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");
/* harmony import */ var _models_driver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/driver */ "./src/app/models/driver.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/messagebox.service */ "./src/app/services/messagebox.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_profile_popup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/profile-popup.service */ "./src/app/services/profile-popup.service.ts");









let DriverComponent = class DriverComponent {
    constructor(driverService, notify, messageBox, profilePopup) {
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
    setViewMode(mode) {
        this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView;
        this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView;
        this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].NewItemView;
    }
    onBackToMain() {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
    }
    loadData(page = 1) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.driverService.getDrivers(page, this.searchquery).subscribe((response) => {
            if (response.result) {
                this.drivers = this.drivers.concat(response.result);
                this.hasMoreData = response.totalPages > response.currentPage;
                this.currentPage = Number(response.currentPage);
            }
            else {
                // notify
                this.notify.showWarning(response.message, "Loading Failed");
            }
        }, (reason) => {
            this.notify.showError("we were unable to contact server", "Operation failed");
        }, () => {
            this.isLoading = false;
        });
    }
    saveDriver() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.driverService.saveDriver(this.newDriver).subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.drivers.push(response.result);
                this.newDriver = new _models_driver__WEBPACK_IMPORTED_MODULE_4__["Driver"](null, null, null, null, null, null);
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
    updateDriver() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.driverService.updateDriver(this.newDriver).subscribe((response) => {
            if (response.success) {
                this.notify.showSuccess("driver updated successfully", "success");
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Unable to contact server.", "Operation failed");
        }, () => {
            this.isProcessing = false;
        });
    }
    onSearch() {
        this.drivers = [];
        this.loadData();
    }
    onEdit(driver) {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView);
        this.newDriver = driver;
    }
    onDelete(driver) {
        let modalInstance = this.messageBox.showWarning(`Are you sure you want to delete ${driver.firstName} ${driver.lastName}?`, "Delete Warning");
        modalInstance.result
            .then((response) => {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["MessageboxResponse"].OK) {
                let tid = this.notify.showProcessing("Deleting vehicle");
                this.driverService.deleteDriver(driver).subscribe((response) => {
                    if (response.success) {
                        let index = this.drivers.findIndex((d) => d.id === driver.id);
                        this.drivers.splice(index, 1);
                        this.notify.showSuccess("driver deleted successfully.", "Success");
                    }
                    else {
                        this.notify.showWarning(response.message, "Operation failed");
                    }
                }, (reason) => {
                    this.notify.showError("we were unable to contact server.", "Operation failed");
                }, () => {
                    this.notify.hideProcessing(tid);
                });
            }
        })
            .catch((reason) => { });
    }
    onViewProfile(driver) {
        let modalInstance = this.profilePopup.show(driver);
        modalInstance.result.then(() => { }).catch(() => { });
    }
    ngOnInit() {
        this.loadData();
    }
};
DriverComponent.ctorParameters = () => [
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"] },
    { type: _services_profile_popup_service__WEBPACK_IMPORTED_MODULE_8__["ProfilePopupService"] }
];
DriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-driver",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/driver.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver.component.css */ "./src/app/driver/driver.component.css")).default]
    })
], DriverComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(userService, notify, router) {
        this.userService = userService;
        this.notify = notify;
        this.router = router;
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleRight"];
        this.faSpinner = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowCircleLeft"];
        this.resetPassword = {
            password: "",
            confirmPassword: "",
        };
        this.confirmEmail = { email: "" };
        this.isValidEmail = false;
        this.isProcessing = false;
    }
    ngOnInit() { }
    onConfirmEmail() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.userService.getUser(this.confirmEmail.email).subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.isValidEmail = true;
                this.user = response.result;
            }
            else {
                this.notify.showError(response.message, "Not Found");
            }
        }, (reason) => {
            this.notify.showError("We encountered a problem while contacting server", "Operation failed");
        });
    }
    onResetPassword() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.user.password = this.resetPassword.password;
        this.userService.updateUser(this.user).subscribe((response) => {
            if (response.success) {
                this.router.navigate(["/login"]);
            }
            else {
                this.notify.showWarning(response.message, "Operation failed");
            }
        }, (reason) => {
            console.log(reason);
            this.notify.showError("We encountered a problem while contacting server", "Operation failed");
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forgot-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginModel = { email: "", password: "", model: "User" };
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLock"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
        this.isProcessing = false;
    }
    ngOnInit() { }
    onLogin() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.authService.login("/", this.loginModel, () => {
            this.isProcessing = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/messagebox/messagebox.component.css":
/*!*****************************************************!*\
  !*** ./src/app/messagebox/messagebox.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2Vib3gvbWVzc2FnZWJveC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/messagebox/messagebox.component.ts":
/*!****************************************************!*\
  !*** ./src/app/messagebox/messagebox.component.ts ***!
  \****************************************************/
/*! exports provided: MessageboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageboxComponent", function() { return MessageboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");





let MessageboxComponent = class MessageboxComponent {
    constructor(modalInstance) {
        this.modalInstance = modalInstance;
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
    }
    ngOnInit() { }
    ok() {
        this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK);
    }
    cancel() {
        this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].CANCEL);
    }
    close() {
        this.modalInstance.close(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].CLOSE);
    }
};
MessageboxComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
MessageboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-messagebox",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messagebox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messagebox/messagebox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messagebox.component.css */ "./src/app/messagebox/messagebox.component.css")).default]
    })
], MessageboxComponent);



/***/ }),

/***/ "./src/app/models/app-enums.ts":
/*!*************************************!*\
  !*** ./src/app/models/app-enums.ts ***!
  \*************************************/
/*! exports provided: ViewModes, MessageboxResponse, MessageboxType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModes", function() { return ViewModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageboxResponse", function() { return MessageboxResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageboxType", function() { return MessageboxType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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


/***/ }),

/***/ "./src/app/models/breakdown-history.ts":
/*!*********************************************!*\
  !*** ./src/app/models/breakdown-history.ts ***!
  \*********************************************/
/*! exports provided: BreakdownHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownHistory", function() { return BreakdownHistory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BreakdownHistory {
    constructor(vehicleId, driverId, description, breakdownDate, repairDate, id) {
        this.vehicleId = vehicleId;
        this.driverId = driverId;
        this.description = description;
        this.breakdownDate = breakdownDate;
        this.repairDate = repairDate;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/models/driver.ts":
/*!**********************************!*\
  !*** ./src/app/models/driver.ts ***!
  \**********************************/
/*! exports provided: Driver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return Driver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Driver {
    constructor(lastName, firstName, email, maritalStatus, mobile, imageUrl, id) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.maritalStatus = maritalStatus;
        this.mobile = mobile;
        this.imageUrl = imageUrl;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/models/route.ts":
/*!*********************************!*\
  !*** ./src/app/models/route.ts ***!
  \*********************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Route {
    constructor(departure, destination, scheduledAt, id) {
        this.departure = departure;
        this.destination = destination;
        this.scheduledAt = scheduledAt;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/models/tracker.ts":
/*!***********************************!*\
  !*** ./src/app/models/tracker.ts ***!
  \***********************************/
/*! exports provided: Tracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracker", function() { return Tracker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Tracker {
    constructor(routeId, vehicleId, driverId, Route, Vehicle, Driver, id) {
        this.routeId = routeId;
        this.vehicleId = vehicleId;
        this.driverId = driverId;
        this.Route = Route;
        this.Vehicle = Vehicle;
        this.Driver = Driver;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(lastName, firstName, email, maritalStatus, mobile, imageUrl, password, id) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.maritalStatus = maritalStatus;
        this.mobile = mobile;
        this.imageUrl = imageUrl;
        this.password = password;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/models/vehicle.ts":
/*!***********************************!*\
  !*** ./src/app/models/vehicle.ts ***!
  \***********************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vehicle {
    constructor(engineNo, capacity, fuelId, isFunctional, id) {
        this.engineNo = engineNo;
        this.capacity = capacity;
        this.fuelId = fuelId;
        this.isFunctional = isFunctional;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/profile-popup/profile-popup.component.css":
/*!***********************************************************!*\
  !*** ./src/app/profile-popup/profile-popup.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcG9wdXAvcHJvZmlsZS1wb3B1cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile-popup/profile-popup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile-popup/profile-popup.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfilePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePopupComponent", function() { return ProfilePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let ProfilePopupComponent = class ProfilePopupComponent {
    constructor(modalInstance) {
        this.modalInstance = modalInstance;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faIdCard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faIdCard"];
    }
    ngOnInit() { }
    close() {
        this.modalInstance.close(0);
    }
};
ProfilePopupComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
ProfilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile-popup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popup/profile-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-popup.component.css */ "./src/app/profile-popup/profile-popup.component.css")).default]
    })
], ProfilePopupComponent);



/***/ }),

/***/ "./src/app/route/route.component.css":
/*!*******************************************!*\
  !*** ./src/app/route/route.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/route/route.component.ts":
/*!******************************************!*\
  !*** ./src/app/route/route.component.ts ***!
  \******************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");
/* harmony import */ var _models_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/route */ "./src/app/models/route.ts");
/* harmony import */ var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/messagebox.service */ "./src/app/services/messagebox.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");









let RouteComponent = class RouteComponent {
    constructor(routeService, notify, messageBox) {
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
            minute: 0,
        };
        this.scheduleChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.time);
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
    }
    setViewMode(mode) {
        this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
        this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
        this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;
        if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newRoute = new _models_route__WEBPACK_IMPORTED_MODULE_5__["Route"](null, null, null);
            this.setTime();
        }
    }
    onBackToMain() {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
    }
    loadData(page = 1) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.routeService.getRoutes(page, this.searchquery).subscribe((response) => {
            if (response.result) {
                this.routes = this.routes.concat(response.result);
                this.hasMoreData = response.totalPages > response.currentPage;
                this.currentPage = Number(response.currentPage);
            }
            else {
                // notify
                this.notify.showWarning(response.message, "Loading Failed");
            }
        }, (reason) => {
            this.notify.showError("we were unable to contact server", "Operation failed");
        }, () => {
            this.isLoading = false;
        });
    }
    saveRoute() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.setSchedule();
        this.routeService.saveRoute(this.newRoute).subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.routes.push(response.result);
                this.newRoute = new _models_route__WEBPACK_IMPORTED_MODULE_5__["Route"](null, null, null);
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
    updateRoute() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.setSchedule();
        this.routeService.updateRoute(this.newRoute).subscribe((response) => {
            if (response.success) {
                this.notify.showSuccess("route updated successfully", "success");
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Unable to contact server.", "Operation failed");
        }, () => {
            this.isProcessing = false;
        });
    }
    onSearch() {
        this.routes = [];
        this.loadData();
    }
    onEdit(route) {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
        this.newRoute = route;
        this.setTime(route.scheduledAt);
    }
    onDelete(route) {
        let modalInstance = this.messageBox.showWarning(`Are you sure you want to delete this route?`, "Delete Warning");
        modalInstance.result
            .then((response) => {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
                let tid = this.notify.showProcessing("Deleting route");
                this.routeService.deleteRoute(route).subscribe((response) => {
                    if (response.success) {
                        let index = this.routes.findIndex((r) => r.id === route.id);
                        this.routes.splice(index, 1);
                        this.notify.showSuccess("route deleted successfully.", "Success");
                    }
                    else {
                        this.notify.showWarning(response.message, "Operation failed");
                    }
                }, (reason) => {
                    this.notify.showError("we were unable to contact server.", "Operation failed");
                }, () => {
                    this.notify.hideProcessing(tid);
                });
            }
        })
            .catch((reason) => { });
    }
    setTime(time = "") {
        if (time) {
            let fullTime = time.split(" ");
            let hour = Number(fullTime[0].split(":")[0]);
            let minute = Number(fullTime[0].split(":")[1]);
            let meridan = fullTime[1].toUpperCase();
            if (meridan === "PM" && hour > 12) {
                hour = Number(hour) - 12;
            }
            this.time = {
                hour,
                minute,
            };
        }
        else {
            this.time = {
                hour: 10,
                minute: 0,
            };
        }
    }
    getMeridan() {
        if (this.time.hour >= 12)
            return "PM";
        else
            return "AM";
    }
    setSchedule() {
        this.newRoute.scheduledAt = `${this.time.hour}:${this.time.minute}${this.time.minute < 10 ? 0 : ""} ${this.getMeridan()}`;
    }
    ngOnInit() {
        this.loadData();
        this.setTime();
    }
};
RouteComponent.ctorParameters = () => [
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_8__["RouteService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"] }
];
RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-route",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route/route.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route.component.css */ "./src/app/route/route.component.css")).default]
    })
], RouteComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let AuthService = class AuthService {
    constructor(coreService, router, notify, jwtService) {
        this.coreService = coreService;
        this.router = router;
        this.notify = notify;
        this.jwtService = jwtService;
        this.userStatusChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]("");
        this.authApiUrl = "api/auth/login/";
    }
    setUserStatus(userStatus) {
        this.userStatus = userStatus;
        this.userStatusChanges.next(userStatus);
    }
    login(redirectUrl, formData, onComplete) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
        // send a post request
        this.coreService
            .postData(formData, this.authApiUrl, headers)
            .subscribe((response) => {
            if (response.success) {
                localStorage.setItem("access_token", response.result);
                this.setUserStatus(response.result);
                this.router.navigate([redirectUrl]);
            }
            else {
                this.notify.showWarning(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Wrong email and password combination", "Operation failed");
            onComplete();
        }, () => {
            onComplete();
        });
    }
    logout() {
        // just remove the access token and redirect
        localStorage.removeItem("access_token");
        this.setUserStatus(null);
        this.router.navigate(["/login"]);
    }
    getUserType() {
        let decoded = this.jwtService.decodeToken(this.userStatus);
        if (decoded) {
            return decoded["model"];
        }
        return null;
    }
    getStatusOnRefresh() {
        if (localStorage.getItem("access_token")) {
            let token = localStorage.getItem("access_token");
            let decoded = this.jwtService.decodeToken(token);
            if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
                this.logout();
            }
            this.setUserStatus(localStorage.getItem("access_token"));
        }
    }
    getCurrentUser() {
        return this.coreService.getData(`api/auth/user?authorization=Bearer ${localStorage.getItem("access_token")}`);
    }
};
AuthService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/breakdown-history.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/breakdown-history.service.ts ***!
  \*******************************************************/
/*! exports provided: BreakdownHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownHistoryService", function() { return BreakdownHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let BreakdownHistoryService = class BreakdownHistoryService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/breakdownhistory/";
    }
    getHistories(page = 1, searchquery = "", engineNo = "") {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}&engineno=${engineNo}`);
    }
    saveHistory(breakdownHistory) {
        return this.coreService.postData(breakdownHistory, this.apiUrl);
    }
    updateHistory(breakdownHistory) {
        return this.coreService.putData(breakdownHistory, this.apiUrl);
    }
    deleteHistory(breakdownHistory) {
        return this.coreService.deleteData(breakdownHistory.id, this.apiUrl);
    }
};
BreakdownHistoryService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
BreakdownHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], BreakdownHistoryService);



/***/ }),

/***/ "./src/app/services/core.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CoreService = class CoreService {
    constructor(http) {
        this.http = http;
        this.host = "";
    }
    getData(apiURL, headers) {
        return this.http.get(`${this.host}${apiURL}`, { headers });
    }
    postData(data, apiURL, headers) {
        return this.http.post(`${this.host}${apiURL}`, data, { headers });
    }
    putData(data, apiURL) {
        return this.http.put(`${this.host}${apiURL}`, data);
    }
    deleteData(id, apiURL) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
            body: { id },
        };
        return this.http.delete(`${this.host}${apiURL}`, httpOptions);
    }
};
CoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], CoreService);



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let DashboardService = class DashboardService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/users/dashboard";
    }
    getSummary() {
        return this.coreService.getData(`${this.apiUrl}`);
    }
};
DashboardService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DashboardService);



/***/ }),

/***/ "./src/app/services/driver.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/driver.service.ts ***!
  \********************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let DriverService = class DriverService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/drivers/";
    }
    getDrivers(page = 1, searchquery = "", paginate = true) {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}&paginate=${paginate}`);
    }
    saveDriver(driver) {
        return this.coreService.postData(driver, this.apiUrl);
    }
    updateDriver(driver) {
        return this.coreService.putData(driver, this.apiUrl);
    }
    deleteDriver(driver) {
        return this.coreService.deleteData(driver.id, this.apiUrl);
    }
};
DriverService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
DriverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DriverService);



/***/ }),

/***/ "./src/app/services/fuel-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/fuel-type.service.ts ***!
  \***********************************************/
/*! exports provided: FuelTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypeService", function() { return FuelTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let FuelTypeService = class FuelTypeService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/fuel/";
    }
    getFuelTypes() {
        return this.coreService.getData(this.apiUrl);
    }
};
FuelTypeService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
FuelTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], FuelTypeService);



/***/ }),

/***/ "./src/app/services/messagebox.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/messagebox.service.ts ***!
  \************************************************/
/*! exports provided: MessageboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageboxService", function() { return MessageboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messagebox/messagebox.component */ "./src/app/messagebox/messagebox.component.ts");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");





let MessageboxService = class MessageboxService {
    constructor(modal) {
        this.modal = modal;
    }
    createModal(message, title, type) {
        let modalInstance = this.modal.open(_messagebox_messagebox_component__WEBPACK_IMPORTED_MODULE_3__["MessageboxComponent"], { size: "md" });
        modalInstance.componentInstance.settings = {
            message,
            title,
            type: _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].WARNING,
        };
        return modalInstance;
    }
    showWarning(message, title = "Warning") {
        return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].WARNING);
    }
    showSuccess(message, title = "Success") {
        return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].SUCCESS);
    }
    showInfo(message, title = "Information") {
        return this.createModal(message, title, _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxType"].INFO);
    }
};
MessageboxService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
MessageboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], MessageboxService);



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let NotificationService = class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
        this.activeProcess = [];
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
    showProcessing(message) {
        let active = this.toastr.info(message + "...", "", {
            timeOut: 0,
            progressAnimation: "increasing",
        });
        return active.toastId;
    }
    hideProcessing(id) {
        this.toastr.remove(id);
    }
};
NotificationService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], NotificationService);



/***/ }),

/***/ "./src/app/services/profile-popup.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/profile-popup.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilePopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePopupService", function() { return ProfilePopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-popup/profile-popup.component */ "./src/app/profile-popup/profile-popup.component.ts");




let ProfilePopupService = class ProfilePopupService {
    constructor(modal) {
        this.modal = modal;
    }
    show(user) {
        let modalRef = this.modal.open(_profile_popup_profile_popup_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePopupComponent"], { size: "md" });
        modalRef.componentInstance.user = user;
        return modalRef;
    }
};
ProfilePopupService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ProfilePopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ProfilePopupService);



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let RouteService = class RouteService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/routes/";
    }
    getRoutes(page = 1, searchquery = "", paginate = true) {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}&paginate=${paginate}`);
    }
    saveRoute(route) {
        return this.coreService.postData(route, this.apiUrl);
    }
    updateRoute(route) {
        return this.coreService.putData(route, this.apiUrl);
    }
    deleteRoute(route) {
        return this.coreService.deleteData(route.id, this.apiUrl);
    }
};
RouteService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], RouteService);



/***/ }),

/***/ "./src/app/services/tracker.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tracker.service.ts ***!
  \*********************************************/
/*! exports provided: TrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerService", function() { return TrackerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let TrackerService = class TrackerService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/trackers/";
    }
    getTrackers(page = 1, searchquery = "", engineNo = "") {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}&engineno=${engineNo}`);
    }
    saveTracker(tracker) {
        return this.coreService.postData(tracker, this.apiUrl);
    }
    updateTracker(tracker) {
        return this.coreService.putData(tracker, this.apiUrl);
    }
    deleteTracker(tracker) {
        return this.coreService.deleteData(tracker.id, this.apiUrl);
    }
};
TrackerService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
TrackerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], TrackerService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let UserService = class UserService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/users/";
    }
    getUsers(page = 1, searchquery = "") {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}`);
    }
    getUser(email) {
        return this.coreService.getData(`api/user?email=${email}`);
    }
    saveUser(user) {
        return this.coreService.postData(user, this.apiUrl);
    }
    updateUser(user) {
        return this.coreService.putData(user, this.apiUrl);
    }
    deleteUser(user) {
        return this.coreService.deleteData(user.id, this.apiUrl);
    }
};
UserService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserService);



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.service */ "./src/app/services/core.service.ts");



let VehicleService = class VehicleService {
    constructor(coreService) {
        this.coreService = coreService;
        this.apiUrl = "api/vehicles/";
    }
    getVehicles(page = 1, searchquery = "", paginate = true) {
        return this.coreService.getData(`${this.apiUrl}?page=${page}&searchquery=${searchquery}&paginate=${paginate}`);
    }
    saveVehicle(vehicle) {
        return this.coreService.postData(vehicle, this.apiUrl);
    }
    updateVehicle(vehicle) {
        return this.coreService.putData(vehicle, this.apiUrl);
    }
    deleteVehicle(vehicle) {
        return this.coreService.deleteData(vehicle.id, this.apiUrl);
    }
};
VehicleService.ctorParameters = () => [
    { type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], VehicleService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let SidebarComponent = class SidebarComponent {
    constructor(authService) {
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
    ngOnInit() { }
    onLogOut() {
        this.authService.logout();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sidebar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/tracker/tracker.component.css":
/*!***********************************************!*\
  !*** ./src/app/tracker/tracker.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrZXIvdHJhY2tlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tracker/tracker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tracker/tracker.component.ts ***!
  \**********************************************/
/*! exports provided: TrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerComponent", function() { return TrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");
/* harmony import */ var _models_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/tracker */ "./src/app/models/tracker.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/messagebox.service */ "./src/app/services/messagebox.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_tracker_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/tracker.service */ "./src/app/services/tracker.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/vehicle.service */ "./src/app/services/vehicle.service.ts");












let TrackerComponent = class TrackerComponent {
    constructor(trackerService, notify, messageBox, driverService, vehicleService, routeService, route) {
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
    setViewMode(mode) {
        this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView;
        this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView;
        this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView;
        if (mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].NewItemView) {
            this.newTracker = new _models_tracker__WEBPACK_IMPORTED_MODULE_5__["Tracker"](null, null, null, null);
        }
    }
    onBackToMain() {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].MainView);
    }
    loadData(page = 1) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.trackerService
            .getTrackers(page, this.searchquery, this.engineNo)
            .subscribe((response) => {
            if (response.result) {
                this.trackers = this.trackers.concat(response.result);
                this.hasMoreData = response.totalPages > response.currentPage;
                this.currentPage = Number(response.currentPage);
            }
            else {
                // notify
                this.notify.showWarning(response.message, "Loading Failed");
            }
        }, (reason) => {
            this.notify.showError("we were unable to contact server", "Operation failed");
        }, () => {
            this.isLoading = false;
        });
    }
    saveTracker() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.trackerService.saveTracker(this.newTracker).subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.notify.showSuccess("Saved successfully", "success");
                this.trackers.push(response.result);
                this.newTracker = new _models_tracker__WEBPACK_IMPORTED_MODULE_5__["Tracker"](null, null, null, null);
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
    updateTracker() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.trackerService.updateTracker(this.newTracker).subscribe((response) => {
            if (response.success) {
                this.notify.showSuccess("updated successfully", "success");
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Unable to contact server.", "Operation failed");
        }, () => {
            this.isProcessing = false;
        });
    }
    onSearch() {
        this.trackers = [];
        this.loadData();
    }
    onEdit(tracker) {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_4__["ViewModes"].EditView);
        this.newTracker = tracker;
    }
    onDelete(tracker) {
        let modalInstance = this.messageBox.showWarning(`Are you sure you want to delete this tracker record?`, "Delete Warning");
        modalInstance.result
            .then((response) => {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_4__["MessageboxResponse"].OK) {
                let tid = this.notify.showProcessing("Deleting history");
                this.trackerService.deleteTracker(tracker).subscribe((response) => {
                    if (response.success) {
                        let index = this.trackers.findIndex((r) => r.id === tracker.id);
                        this.trackers.splice(index, 1);
                        this.notify.showSuccess("deleted successfully.", "Success");
                    }
                    else {
                        this.notify.showWarning(response.message, "Operation failed");
                    }
                }, (reason) => {
                    this.notify.showError("we were unable to contact server.", "Operation failed");
                }, () => {
                    this.notify.hideProcessing(tid);
                });
            }
        })
            .catch((reason) => { });
    }
    ngOnInit() {
        this.engineNo = this.route.snapshot.params["engineNo"];
        console.log(this.engineNo);
        this.loadData();
        this.driverService.getDrivers(null, "", false).subscribe((response) => {
            if (response.success) {
                this.drivers = response.result;
                // console.log(response);
            }
        });
        this.vehicleService.getVehicles(null, "", false).subscribe((response) => {
            if (response.success) {
                this.vehicles = response.result;
            }
        });
        this.routeService.getRoutes(null, "", false).subscribe((response) => {
            if (response.success) {
                this.routes = response.result;
            }
        });
    }
};
TrackerComponent.ctorParameters = () => [
    { type: _services_tracker_service__WEBPACK_IMPORTED_MODULE_10__["TrackerService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_7__["MessageboxService"] },
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_6__["DriverService"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_11__["VehicleService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_9__["RouteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tracker",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tracker/tracker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tracker.component.css */ "./src/app/tracker/tracker.component.css")).default]
    })
], TrackerComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







let UserProfileComponent = class UserProfileComponent {
    constructor(userService, authService, notify) {
        this.userService = userService;
        this.authService = authService;
        this.notify = notify;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.userProfile = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](null, null, null, null, null, null);
        this.isProcessing = false;
    }
    onUpdate() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        let tid = this.notify.showProcessing("Updating profile");
        this.userService.updateUser(this.userProfile).subscribe((response) => {
            this.userProfile.password = undefined;
            if (response) {
                this.notify.showSuccess("Profile updated successfully.", "Success");
            }
            else {
                this.notify.showWarning(response.message, "Operation failed");
            }
        }, (reason) => {
            console.log(reason);
            this.notify.showError("we were unable to contact server", "Operation failed");
        }, () => {
            this.notify.hideProcessing(tid);
        });
    }
    ngOnInit() {
        this.authService.getCurrentUser().subscribe((response) => {
            console.log(response);
            if (response.success) {
                this.userProfile = response.result;
                this.userProfile.password = undefined;
            }
        }, (reason) => {
            console.log(reason);
        });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/vehicle/vehicle.component.css":
/*!***********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_app_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/app-enums */ "./src/app/models/app-enums.ts");
/* harmony import */ var _models_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/vehicle */ "./src/app/models/vehicle.ts");
/* harmony import */ var _services_fuel_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/fuel-type.service */ "./src/app/services/fuel-type.service.ts");
/* harmony import */ var _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/messagebox.service */ "./src/app/services/messagebox.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/vehicle.service */ "./src/app/services/vehicle.service.ts");









let VehicleComponent = class VehicleComponent {
    constructor(vehicleService, fuelTypeService, notify, messageBox) {
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
            fuelId: null,
        };
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
    }
    setViewMode(mode) {
        this.isEditMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView;
        this.isMainMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView;
        this.isNewItemMode = mode === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].NewItemView;
    }
    onBackToMain() {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].MainView);
    }
    loadData(page = 1) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.vehicleService.getVehicles(page, this.searchquery).subscribe((response) => {
            if (response.result) {
                this.vehicles = this.vehicles.concat(response.result);
                this.hasMoreData = response.totalPages > response.currentPage;
                this.currentPage = Number(response.currentPage);
            }
            else {
                // notify
            }
        }, (reason) => {
            this.notify.showError("We were unable to contact server.", "Loading failed.");
        }, () => {
            this.isLoading = false;
        });
    }
    saveVehicle() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.vehicleService.saveVehicle(this.newVehicle).subscribe((response) => {
            this.isProcessing = false;
            if (response.success) {
                this.vehicles.push(response.result);
                this.newVehicle = new _models_vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]("", null, null);
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
    updateVehicle() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        this.vehicleService.updateVehicle(this.newVehicle).subscribe((response) => {
            if (response.success) {
                this.notify.showSuccess("vehicle updated successfully", "success");
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        }, (reason) => {
            this.notify.showError("Unable to contact server.", "Operation failed");
        }, () => {
            this.isProcessing = false;
        });
    }
    onSearch() {
        this.vehicles = [];
        this.loadData();
    }
    onEdit(vehicle) {
        this.setViewMode(_models_app_enums__WEBPACK_IMPORTED_MODULE_3__["ViewModes"].EditView);
        this.newVehicle = vehicle;
    }
    onDelete(vehicle) {
        let modalInstance = this.messageBox.showWarning("Are you sure you want to delete this vehicle?", "Delete Warning");
        modalInstance.result
            .then((response) => {
            if (response === _models_app_enums__WEBPACK_IMPORTED_MODULE_3__["MessageboxResponse"].OK) {
                let tid = this.notify.showProcessing("Deleting vehicle");
                this.vehicleService.deleteVehicle(vehicle).subscribe((response) => {
                    this.notify.hideProcessing(tid);
                    if (response.success) {
                        let index = this.vehicles.findIndex((v) => v.id === vehicle.id);
                        this.vehicles.splice(index, 1);
                        this.notify.showSuccess("vehicle deleted successfully.", "Success");
                    }
                    else {
                        this.notify.showWarning(response.message, "Operation failed");
                    }
                }, (reason) => {
                    this.notify.showError("we were unable to contact server.", "Operation failed");
                }, () => { });
            }
        })
            .catch((reason) => { });
    }
    ngOnInit() {
        this.loadData();
        this.fuelTypeService.getFuelTypes().subscribe((response) => {
            if (response.success) {
                this.fuelTypes = response.result;
            }
            else {
                this.notify.showError(response.message, "Operation failed");
            }
        });
    }
};
VehicleComponent.ctorParameters = () => [
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_8__["VehicleService"] },
    { type: _services_fuel_type_service__WEBPACK_IMPORTED_MODULE_5__["FuelTypeService"] },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: _services_messagebox_service__WEBPACK_IMPORTED_MODULE_6__["MessageboxService"] }
];
VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vehicle",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle.component.css */ "./src/app/vehicle/vehicle.component.css")).default]
    })
], VehicleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jude-JohnB\Documents\MyOffice\My Portfolio\vehicle-logisitics\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map