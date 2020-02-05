(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qa-error-app-src-app-qa-error-module"],{

/***/ "../../node_modules/raw-loader/index.js!../qa-error-app/src/app/app.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment-v2/qa-portal-angular/node_modules/raw-loader!../qa-error-app/src/app/app.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"qa-app-title\" style=\"background-color: lightcoral !important;\">\n  QA Portal System Error\n</div>\n -->\n\n    <h1 class=\"mat-display-3 text-center\" style=\"margin: 1rem\">QA Portal Error</h1>\n    <mat-divider style=\"margin: 1rem;\"></mat-divider>\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-error-app/src/app/qa-error-page/qa-error-page.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment-v2/qa-portal-angular/node_modules/raw-loader!../qa-error-app/src/app/qa-error-page/qa-error-page.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!!error\" class=\"mat-body-strong text-center\">\n  {{ error }}\n</div>\n\n<div *ngIf=\"!error\" class=\"mat-body-strong text-center\">\n  There is a problem with the service. Please retry. If the problem persists contact your system administrator\n</div>\n"

/***/ }),

/***/ "../qa-error-app/src/app/app.component.css":
/*!*************************************************!*\
  !*** ../qa-error-app/src/app/app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1lcnJvci1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../qa-error-app/src/app/app.component.ts":
/*!************************************************!*\
  !*** ../qa-error-app/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'qa-error-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!../qa-error-app/src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "../qa-error-app/src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../qa-error-app/src/app/qa-error-page/qa-error-page.component.css":
/*!*************************************************************************!*\
  !*** ../qa-error-app/src/app/qa-error-page/qa-error-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qa-error-container {\n  display: flex;\n  justify-content: center;\n  background-color: lightcoral;\n  color: white;\n  margin-top: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWVycm9yLWFwcC9zcmMvYXBwL3FhLWVycm9yLXBhZ2UvcWEtZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9xYS1lcnJvci1hcHAvc3JjL2FwcC9xYS1lcnJvci1wYWdlL3FhLWVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xYS1lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../qa-error-app/src/app/qa-error-page/qa-error-page.component.ts":
/*!************************************************************************!*\
  !*** ../qa-error-app/src/app/qa-error-page/qa-error-page.component.ts ***!
  \************************************************************************/
/*! exports provided: QaErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaErrorPageComponent", function() { return QaErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");



const ERROR_MSG_PARM = 'errorMsg';
let QaErrorPageComponent = class QaErrorPageComponent {
    constructor(route) {
        this.route = route;
        this.error = this.route.snapshot.queryParams[ERROR_MSG_PARM];
    }
};
QaErrorPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
QaErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qa-error-page',
        template: __webpack_require__(/*! raw-loader!./qa-error-page.component.html */ "../../node_modules/raw-loader/index.js!../qa-error-app/src/app/qa-error-page/qa-error-page.component.html"),
        styles: [__webpack_require__(/*! ./qa-error-page.component.css */ "../qa-error-app/src/app/qa-error-page/qa-error-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], QaErrorPageComponent);



/***/ }),

/***/ "../qa-error-app/src/app/qa-error-routing.module.ts":
/*!**********************************************************!*\
  !*** ../qa-error-app/src/app/qa-error-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: QaErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaErrorRoutingModule", function() { return QaErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _qa_error_page_qa_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qa-error-page/qa-error-page.component */ "../qa-error-app/src/app/qa-error-page/qa-error-page.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "../qa-error-app/src/app/app.component.ts");





const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        children: [
            {
                path: '',
                component: _qa_error_page_qa_error_page_component__WEBPACK_IMPORTED_MODULE_3__["QaErrorPageComponent"]
            }
        ]
    },
    {
        path: '404',
        redirectTo: '/error?errorMsg=Page not found. Please try again.'
    }
];
let QaErrorRoutingModule = class QaErrorRoutingModule {
};
QaErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QaErrorRoutingModule);



/***/ }),

/***/ "../qa-error-app/src/app/qa-error.module.ts":
/*!**************************************************!*\
  !*** ../qa-error-app/src/app/qa-error.module.ts ***!
  \**************************************************/
/*! exports provided: QaErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaErrorModule", function() { return QaErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _qa_error_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qa-error-routing.module */ "../qa-error-app/src/app/qa-error-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "../qa-error-app/src/app/app.component.ts");
/* harmony import */ var _qa_error_page_qa_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qa-error-page/qa-error-page.component */ "../qa-error-app/src/app/qa-error-page/qa-error-page.component.ts");
/* harmony import */ var projects_qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");






let QaErrorModule = class QaErrorModule {
};
QaErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _qa_error_page_qa_error_page_component__WEBPACK_IMPORTED_MODULE_4__["QaErrorPageComponent"]
        ],
        imports: [
            projects_qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_5__["QaCommonModule"],
            _qa_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["QaErrorRoutingModule"]
        ],
        providers: []
    })
], QaErrorModule);



/***/ })

}]);
//# sourceMappingURL=qa-error-app-src-app-qa-error-module-es2015.js.map