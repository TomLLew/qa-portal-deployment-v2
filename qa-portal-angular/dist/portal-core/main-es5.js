(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../app-init.ts":
/*!********************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/app-init.ts ***!
  \********************************************************************************************/
/*! exports provided: initializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializer", function() { return initializer; });
// TODO - values to be sourced from environment-{env}.ts files
function initializer(keycloak) {
    var options = {
        config: {
            url: 'http://52.56.56.200:8080/auth',
            realm: 'qa-portal',
            clientId: 'qa-portal-ui'
        },
        initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
        },
        enableBearerInterceptor: true,
        bearerExcludedUrls: ['/assets', '/clients/public']
    };
    return function () { return keycloak.init(options); };
}


/***/ }),

/***/ "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../node_modules/moment/locale/af.js",
	"./af.js": "../../node_modules/moment/locale/af.js",
	"./ar": "../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../node_modules/moment/locale/ar.js",
	"./az": "../../node_modules/moment/locale/az.js",
	"./az.js": "../../node_modules/moment/locale/az.js",
	"./be": "../../node_modules/moment/locale/be.js",
	"./be.js": "../../node_modules/moment/locale/be.js",
	"./bg": "../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../node_modules/moment/locale/bg.js",
	"./bm": "../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../node_modules/moment/locale/bm.js",
	"./bn": "../../node_modules/moment/locale/bn.js",
	"./bn.js": "../../node_modules/moment/locale/bn.js",
	"./bo": "../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../node_modules/moment/locale/bo.js",
	"./br": "../../node_modules/moment/locale/br.js",
	"./br.js": "../../node_modules/moment/locale/br.js",
	"./bs": "../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../node_modules/moment/locale/bs.js",
	"./ca": "../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../node_modules/moment/locale/ca.js",
	"./cs": "../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../node_modules/moment/locale/cs.js",
	"./cv": "../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../node_modules/moment/locale/cv.js",
	"./cy": "../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../node_modules/moment/locale/cy.js",
	"./da": "../../node_modules/moment/locale/da.js",
	"./da.js": "../../node_modules/moment/locale/da.js",
	"./de": "../../node_modules/moment/locale/de.js",
	"./de-at": "../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../node_modules/moment/locale/de.js",
	"./dv": "../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../node_modules/moment/locale/dv.js",
	"./el": "../../node_modules/moment/locale/el.js",
	"./el.js": "../../node_modules/moment/locale/el.js",
	"./en-SG": "../../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../../node_modules/moment/locale/en-SG.js",
	"./en-au": "../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../node_modules/moment/locale/en-il.js",
	"./en-nz": "../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
	"./eo": "../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../node_modules/moment/locale/eo.js",
	"./es": "../../node_modules/moment/locale/es.js",
	"./es-do": "../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../node_modules/moment/locale/es-do.js",
	"./es-us": "../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../node_modules/moment/locale/es.js",
	"./et": "../../node_modules/moment/locale/et.js",
	"./et.js": "../../node_modules/moment/locale/et.js",
	"./eu": "../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../node_modules/moment/locale/eu.js",
	"./fa": "../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../node_modules/moment/locale/fa.js",
	"./fi": "../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../node_modules/moment/locale/fi.js",
	"./fo": "../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../node_modules/moment/locale/fo.js",
	"./fr": "../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../node_modules/moment/locale/fr.js",
	"./fy": "../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../node_modules/moment/locale/fy.js",
	"./ga": "../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../node_modules/moment/locale/ga.js",
	"./gd": "../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../node_modules/moment/locale/gd.js",
	"./gl": "../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../node_modules/moment/locale/gl.js",
	"./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../node_modules/moment/locale/gu.js",
	"./he": "../../node_modules/moment/locale/he.js",
	"./he.js": "../../node_modules/moment/locale/he.js",
	"./hi": "../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../node_modules/moment/locale/hi.js",
	"./hr": "../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../node_modules/moment/locale/hr.js",
	"./hu": "../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
	"./id": "../../node_modules/moment/locale/id.js",
	"./id.js": "../../node_modules/moment/locale/id.js",
	"./is": "../../node_modules/moment/locale/is.js",
	"./is.js": "../../node_modules/moment/locale/is.js",
	"./it": "../../node_modules/moment/locale/it.js",
	"./it-ch": "../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../node_modules/moment/locale/it.js",
	"./ja": "../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../node_modules/moment/locale/ja.js",
	"./jv": "../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../node_modules/moment/locale/jv.js",
	"./ka": "../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../node_modules/moment/locale/ka.js",
	"./kk": "../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../node_modules/moment/locale/kk.js",
	"./km": "../../node_modules/moment/locale/km.js",
	"./km.js": "../../node_modules/moment/locale/km.js",
	"./kn": "../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../node_modules/moment/locale/kn.js",
	"./ko": "../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../node_modules/moment/locale/ko.js",
	"./ku": "../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../node_modules/moment/locale/ku.js",
	"./ky": "../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../node_modules/moment/locale/ky.js",
	"./lb": "../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../node_modules/moment/locale/lb.js",
	"./lo": "../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../node_modules/moment/locale/lo.js",
	"./lt": "../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../node_modules/moment/locale/lt.js",
	"./lv": "../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../node_modules/moment/locale/lv.js",
	"./me": "../../node_modules/moment/locale/me.js",
	"./me.js": "../../node_modules/moment/locale/me.js",
	"./mi": "../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../node_modules/moment/locale/mi.js",
	"./mk": "../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../node_modules/moment/locale/mk.js",
	"./ml": "../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../node_modules/moment/locale/ml.js",
	"./mn": "../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../node_modules/moment/locale/mn.js",
	"./mr": "../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../node_modules/moment/locale/mr.js",
	"./ms": "../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../node_modules/moment/locale/ms.js",
	"./mt": "../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../node_modules/moment/locale/mt.js",
	"./my": "../../node_modules/moment/locale/my.js",
	"./my.js": "../../node_modules/moment/locale/my.js",
	"./nb": "../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../node_modules/moment/locale/nb.js",
	"./ne": "../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../node_modules/moment/locale/ne.js",
	"./nl": "../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../node_modules/moment/locale/nl.js",
	"./nn": "../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../node_modules/moment/locale/nn.js",
	"./pa-in": "../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../node_modules/moment/locale/pl.js",
	"./pt": "../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../node_modules/moment/locale/pt.js",
	"./ro": "../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../node_modules/moment/locale/ro.js",
	"./ru": "../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../node_modules/moment/locale/ru.js",
	"./sd": "../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../node_modules/moment/locale/sd.js",
	"./se": "../../node_modules/moment/locale/se.js",
	"./se.js": "../../node_modules/moment/locale/se.js",
	"./si": "../../node_modules/moment/locale/si.js",
	"./si.js": "../../node_modules/moment/locale/si.js",
	"./sk": "../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../node_modules/moment/locale/sk.js",
	"./sl": "../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../node_modules/moment/locale/sl.js",
	"./sq": "../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../node_modules/moment/locale/sq.js",
	"./sr": "../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../node_modules/moment/locale/sr.js",
	"./ss": "../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../node_modules/moment/locale/ss.js",
	"./sv": "../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../node_modules/moment/locale/sv.js",
	"./sw": "../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../node_modules/moment/locale/sw.js",
	"./ta": "../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../node_modules/moment/locale/ta.js",
	"./te": "../../node_modules/moment/locale/te.js",
	"./te.js": "../../node_modules/moment/locale/te.js",
	"./tet": "../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../node_modules/moment/locale/tet.js",
	"./tg": "../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../node_modules/moment/locale/tg.js",
	"./th": "../../node_modules/moment/locale/th.js",
	"./th.js": "../../node_modules/moment/locale/th.js",
	"./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../node_modules/moment/locale/tlh.js",
	"./tr": "../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../node_modules/moment/locale/tr.js",
	"./tzl": "../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../node_modules/moment/locale/uk.js",
	"./ur": "../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../node_modules/moment/locale/ur.js",
	"./uz": "../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../node_modules/moment/locale/uz.js",
	"./vi": "../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-common/src/app/data-table/data-table.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-common/src/app/data-table/data-table.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"qa-table-card\">\n  <mat-progress-bar mode=\"indeterminate\" color=\"accent\" [style.display]=\"isLoading ? null : 'none'\">\n  </mat-progress-bar>\n  <mat-card-content>\n    <table #table mat-table [dataSource]=\"dataSource\" class=\"qa-table w-100\" [class.loading]=\"isLoading\">\n      <!-- BULK ACTIONS HEADER -->\n      <ng-container matColumnDef=\"bulkActions\">\n        <th mat-header-cell *matHeaderCellDef colspan=\"100%\">\n          <ng-content select=\"[bulk-action]\"></ng-content>\n        </th>\n      </ng-container>\n\n\n      <!-- SELECT CHECKBOXES -->\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox [checked]=\"allRowsSelected\" [indeterminate]=\"!allRowsSelected && atLeastOneRowSelected\"\n            (change)=\"onSelectAllCheckboxChange($event)\"></mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let rowData; let i = index\">\n          <mat-checkbox [checked]=\"rowSelection[i]\" (click)=\"onRowCheckboxClicked($event, i);\"></mat-checkbox>\n        </td>\n      </ng-container>\n\n\n      <tr mat-header-row class=\"header-row\"\n        *matHeaderRowDef=\"atLeastOneRowSelected && actionsEnabled ? ['select', 'bulkActions'] : actualDisplayedColumns\"\n        [class.bulk-actions-row]=\"atLeastOneRowSelected && actionsEnabled\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: actualDisplayedColumns; let i = index\"\n        (click)=\"onRowClicked(i, row, $event)\" class=\"selectable\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-common/src/app/list/list.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-common/src/app/list/list.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cdkDropList class=\"qa-list w-100\" *ngIf=\"listDataSource && listDataSource.length > 0\" (cdkDropListDropped)=\"drop($event)\" [cdkDropListDisabled]=\"!dragDrop\"\n  [cdkDropListData]=\"listDataSource\">\n  <div class=\"qa-list-item-box\" [class.expanded]=\"item == expandedElement ? 'expanded' : 'collapsed'\"\n    *ngFor=\"let item of listDataSource; i as index\" cdkDrag [cdkDragData]=\"item\">\n    <div class=\"title-container\" (click)=\"onListItemClicked(item)\">\n      <ng-container *ngTemplateOutlet=\"title?.template || null; context: {item: item, index: i }\"></ng-container>\n    </div>\n    <div class=\"expansion-panel-container w-100\" style=\"position: relative; overflow: hidden;\"\n      [@detailExpand]=\"item == expandedElement ? 'expanded' : 'collapsed'\">\n      <div class=\"expansion-panel-content\">\n        <ng-container *ngTemplateOutlet=\"expander?.template || null; context: {item: item, index: i }\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-common/src/app/rated-question/rated-question.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-common/src/app/rated-question/rated-question.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group class=\"qa-radio-btn-group\">\n  <div class=\"qa-radio-btn-grp-label\">\n    {{questionText}}\n  </div>\n  <div class=\"qa-radio-btn-layout\">\n    <mat-radio-button #matRadioButton color=\"primary\" class=\"qa-radio-btn\" labelPosition=\"before\" *ngFor=\"let entry of options\"\n                      value=\"{{entry}}\" [disabled]=\"isDisabled\" [checked]=\"matchedValue(entry)\" (change)=\"setModel(matRadioButton.value)\">\n      {{entry}}\n    </mat-radio-button>\n  </div>\n</mat-radio-group>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-common/src/app/search-bar/search-bar.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-common/src/app/search-bar/search-bar.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\" [class.expanded]=\"filterOpen\">\n  <mat-card class=\"search-box\">\n    <button mat-icon-button (click)=\"announceSearch()\" matTooltip=\"Search\"\n      aria-label=\"Search CVs\">\n      <mat-icon>\n        search\n      </mat-icon>\n    </button>\n\n    <input [(ngModel)]=\"value\" class=\"search-input\" [placeholder]=\"placeholder\"\n      (keydown.enter)=\"announceSearch()\" autofocus>\n    <button mat-icon-button (click)=\"filterOpen = !filterOpen\" matTooltip=\"Filters\" *ngIf=\"hasFilterPanel\"\n      aria-label=\"Toggle the filter panel\">\n      <mat-icon>\n        {{filterOpen ? 'keyboard_arrow_up' : 'filter_list'}}</mat-icon>\n    </button>\n  </mat-card>\n  <mat-card class=\"filter-panel\">\n    <div class=\"filter-panel-content\">\n      <div class=\"filter-body\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"filter-actions\">\n        <button mat-button (click)=\"announceFilterReset();\">Reset</button>\n        <button mat-flat-button color=\"primary\" (click)=\"announceFilterApply()\">Apply</button>\n      </div>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-common/src/app/spinner-overlay/spinner-overlay.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-common/src/app/spinner-overlay/spinner-overlay.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"overlay-container\" [class.show]=\"show\" [class.fade-bg]=\"fadeBg\">\n    <mat-spinner class=\"m-auto\"></mat-spinner>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/app.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-portal\">\n  <app-portal-header></app-portal-header>\n  <app-portal-side-menu></app-portal-side-menu>\n  <app-portal-help></app-portal-help>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/header-link/header-link.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/header-link/header-link.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [routerLink]=\"portalApplicationProjects.portalApplication.baseUrl\" routerLinkActive=\"link-active\">\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-application-home/portal-application-home.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-application-home/portal-application-home.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100\" style=\"display: flex;\">\n  <div class=\"my-auto w-100\">\n    <header>\n      <h1 class=\"mat-display-3 text-center\" style=\"margin:0;\">{{(appService.currentApplication$ | async)?.portalApplication?.name}}</h1>\n      <p class=\"mat-caption text-center\">{{(appService.currentApplication$ | async)?.portalApplication?.description}}</p>\n    </header>\n    <mat-divider></mat-divider>\n    <section role=\"grid\" name=\"portal-applications\" class=\"portal-apps\" [attr.num-of-apps]=\"(appService.currentApplication$ | async)?.portalProjects?.length || 0\">\n      <div class=\"app-card-container\" *ngFor=\"let app of (appService.currentApplication$ | async)?.portalProjects\">\n        <mat-card class=\"application-card\">\n          <mat-card-title style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1.1\">\n            {{app.name}}\n          </mat-card-title>\n          <mat-card-content data-simplebar style=\"height: 200px; margin: 0 -16px -16px;\">\n            <mat-list>\n              <ng-template ngFor let-item [ngForOf]=\"app?.projectPages\">\n                <mat-list-item *ngIf=\"item?.displayOnMenu\" [routerLink]=\"item.url\" [matTooltip]=\"QaHelpService.tooltipMaker(item.name)\">\n                    <mat-icon matListIcon [svgIcon]=\"item.icon\">{{item.icon || 'bookmark'}}</mat-icon>\n                  <h4 matLine>\n                    {{item.name}}\n                  </h4>\n                </mat-list-item>\n              </ng-template>\n            </mat-list>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </section>\n    <mat-divider></mat-divider>\n    <section name=\"portal-actions\" style=\"display: flex; flex-direction: column\">\n      <p class=\"text-center mat-body-strong\">These links can also be found in the side menu.</p>\n      <button mat-stroked-button color=\"primary\" class=\"mx-auto\" (click)=\"sideMenuService.setOpenState(true)\"\n        [disabled]=\"sideMenuService.sideMenuOpen\">Open side menu</button>\n    </section>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-footer/portal-footer.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-footer/portal-footer.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portal-footer\">\n Portal Footer\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-header/portal-header.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-header/portal-header.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row class=\"mat-elevation-z2\">\n    <!-- LEFT ALIGN-->\n    <div class=\"content-left\">\n      <a class=\"logo\" [routerLink]=\"['/']\" matRipple>\n        <mat-icon svgIcon=\"qa-logo\"></mat-icon>\n      </a>\n      <div class=\"header-links\">\n          <app-header-link [matTooltip]=\"QaHelpService.tooltipMaker(portalApp?.portalApplication?.name)\" *ngFor=\"let portalApp of (appService.portalApplications$ | async)\" [portalApplicationProjects]=\"portalApp\">\n              {{portalApp?.portalApplication?.name || 'Unknown Department'}}\n            </app-header-link>\n        </div>\n      </div>\n\n    <!-- RIGHT ALIGN -->\n    <div class=\"content-right\">\n\n      <!-- TODO: MOVE THIS! -->\n      <!-- <span class=\"portal-buttons\" *ngFor=\"let deptApps of portalApplications\">\n        <button mat-flat-button [mat-menu-trigger-for]=\"sub_menu\">\n          {{deptApps.department.name}}\n        </button>\n        <mat-menu #sub_menu=\"matMenu\">\n          <ng-container *ngFor=\"let appl of deptApps.applications\">\n            <a routerLink=\"{{appl.url}}\" mat-menu-item> {{appl.name}} </a>\n          </ng-container>\n        </mat-menu>\n      </span> -->\n      <!-- TODO END -->\n\n      <button isIconButton=\"true\" matTooltip=\"Account Menu\" class=\"user-button\" mat-flat-button color=\"primary\"\n        [mat-menu-trigger-for]=\"acct_menu\">\n        {{displayName}}\n        <mat-icon>\n          perm_identity\n        </mat-icon>\n      </button>\n      <mat-menu #acct_menu=\"matMenu\">\n        <button (click)=\"logout()\" mat-menu-item>\n          Logout\n        </button>\n      </mat-menu>\n\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-help/portal-help-content/portal-help-content.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-help/portal-help-content/portal-help-content.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{message}}</p>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-help/portal-help.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-help/portal-help.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-bar\" *ngIf=\"userRole\">\n  <mat-expansion-panel [expanded]=\"panelOpenState\" class=\"mat-elevation-z2\">\n  <mat-expansion-panel-header>\n      <mat-panel-title>Help</mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-portal-help-content></app-portal-help-content>\n  </mat-expansion-panel>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-home/portal-home.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-home/portal-home.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100\" style=\"display: flex;\">\n  <div class=\"my-auto w-100\">\n    <header>\n      <h1 class=\"mat-display-3 text-center\" style=\"margin:0;\">Welcome to QA Portal</h1>\n      <p class=\"mat-caption text-center\">The Academy feedback and management system\n      </p>\n    </header>\n    <mat-divider></mat-divider>\n    <div class=\"row\">\n      <div class=\"col\"></div>\n      <div *ngFor=\"let portalApp of (appService.portalApplications$ | async); index as i\"\n        [ngClass]=\"'bg-img-' + (i + 1)\" class=\"block-item col\">\n        <div class=\"col\" style=\"align-self: center;\">\n          <h1 class=\"block-title\">{{portalApp?.portalApplication?.name || 'Unknown Department'}}</h1>\n          <mat-divider></mat-divider>\n          <div class=\"sub-block-container row\">\n            <div *ngFor=\"let app of portalApp.portalProjects\" class=\"sub-block-item col\">\n              <h2 class=\"sub-block-title\">{{app.name}}</h2>\n              <!-- <p class=\"sub-block-text\">make text field in model for appService. portalApllications .portalProjects, after this is done change input value of this textbox to {{app.text}}</p> -->\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n          <br>\n          <button mat-flat-button class=\"block-button\" routerLink=\"{{portalApp.portalApplication.baseUrl}}\">Continue</button>\n        </div>\n\n      </div>\n      <div class=\"col\"></div>\n    </div>\n    <mat-divider></mat-divider>\n    <section name=\"portal-actions\" style=\"display: flex; flex-direction: column\">\n      <p class=\"text-center mat-body-strong\">These links can also be found in the side menu.</p>\n      <button mat-stroked-button color=\"primary\" class=\"mx-auto\" (click)=\"sideMenuService.setOpenState(true)\"\n        [disabled]=\"sideMenuService.sideMenuOpen\">Open side menu</button>\n    </section>\n  </div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu-panel\" style=\"width: 300px; overflow-x: hidden;\">\n  <div class=\"section\" *ngIf=\"!(appService.currentApplication$ | async)?.portalProjects\">\n    <div class=\"section-title light\">\n      No menu items found\n    </div>\n  </div>\n\n  <div class=\"section\" *ngFor=\"let portalProject of (appService.currentApplication$ | async)?.portalProjects\">\n    <div class=\"section-title\">\n      {{ portalProject.name }}\n    </div>\n\n    <div class=\"section-body\">\n      <div *ngFor=\"let projectPage of portalProject.projectPages\">\n        <div *ngIf=\"projectPage.displayOnMenu\">\n          <button mat-button [routerLink]=\"projectPage.url\"\n                  routerLinkActive=\"mat-accent\"\n                  [routerLinkActiveOptions]=\"{exact: false}\" class=\"menu-item\"\n                  [matTooltip]=\"!sideMenuService.sideMenuOpen ? projectPage.name : ''\"\n                  matTooltipPosition=\"after\"\n                  matTooltipClass=\"menu-item-tooltip\"\n                  >\n\n            <div class=\"menu-item-content\" [matTooltip]=\"sideMenuService.sideMenuOpen ? QaHelpService.tooltipMaker(projectPage.name) : ''\">\n              <div class=\"menu-item-icon\">\n                <mat-icon [svgIcon]=\"projectPage.icon\">{{projectPage.icon || 'bookmark'}}</mat-icon>\n              </div>\n              <div style=\"width: 100%; text-overflow:ellipsis; overflow: hidden; text-align: left; margin: auto 0;\">\n            <span>\n              {{projectPage.name}}\n            </span>\n              </div>\n            </div>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/portal-side-menu/portal-side-menu.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!./src/app/portal-side-menu/portal-side-menu.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"portal-drawer-container\" [class.expanded]=\"sideMenuService.sideMenuOpen\" autosize>\n  <mat-drawer #drawer class=\"portal-drawer mat-elevation-z2\" mode=\"side\" [opened]=\"true\"\n    [@sidenavAnimationIsExpanded]=\"sideMenuService.sideMenuOpen\" (@sidenavAnimationIsExpanded.start)=\"start()\"\n    (@sidenavAnimationIsExpanded.done)=\"done()\">\n  <div class=\"side-menu-content-wrapper\">\n    <div data-simplebar class=\"side-menu-body\">\n      <app-portal-side-menu-content></app-portal-side-menu-content>\n    </div>\n    <div class=\"side-menu-fixed-bottom\">\n      <button mat-button (click)=\"sideMenuService.toggleOpen()\" class=\"menu-item drawer-toggle\">\n        <div class=\"menu-item-content\">\n          <div class=\"menu-item-icon\">\n            <mat-icon>chevron_right</mat-icon>\n          </div>\n          <div style=\"width: 100%; text-overflow:ellipsis; overflow: hidden; text-align: left; margin: auto 0;\">\n            <span>\n              Collapse sidebar\n            </span>\n          </div>\n        </div>\n      </button>\n    </div>\n  </div>\n\n\n  </mat-drawer>\n  <mat-drawer-content>\n    <main>\n      <div style=\"margin: 15px 100px; width: 100%;\">\n        <router-outlet></router-outlet>\n      </div>\n    </main>\n  </mat-drawer-content>\n</mat-drawer-container>"

/***/ }),

/***/ "../qa-common/src/app/_common/models/icons.model.ts":
/*!**********************************************************!*\
  !*** ../qa-common/src/app/_common/models/icons.model.ts ***!
  \**********************************************************/
/*! exports provided: CustomIconModel, customIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIconModel", function() { return CustomIconModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customIcons", function() { return customIcons; });
var CustomIconModel = /** @class */ (function () {
    function CustomIconModel() {
    }
    return CustomIconModel;
}());

;
var customIcons = [
    { label: 'QA Logo', name: 'qa-logo', path: 'assets/qa.svg' },
    { label: 'Manage Apps', name: 'qa-manage-apps', path: 'assets/icons/qa_manage_apps_48px.svg' },
    { label: 'Manage Cohorts', name: 'qa-manage-cohorts', path: 'assets/icons/qa_manage_cohorts_48px.svg' },
    { label: 'Manage Courses', name: 'qa-manage-courses', path: 'assets/icons/qa_manage_courses_48px.svg' },
    { label: 'Manage Users', name: 'qa-manage-users', path: 'assets/icons/qa_manage_users_48px.svg' },
    { label: 'Manage Roles', name: 'qa-manage-roles', path: 'assets/icons/qa_manage_roles_48px.svg' },
    { label: 'Manage Technology', name: 'qa-manage-technology', path: 'assets/icons/qa_manage_technology_48px.svg' },
    { label: 'Manage Form', name: 'qa-manage-form', path: 'assets/icons/qa_manage_form_48px.svg' },
    { label: 'Manage Question', name: 'qa-manage-question', path: 'assets/icons/qa_manage_question_48px.svg' },
    { label: 'Manage Question Category', name: 'qa-manage-question-category', path: 'assets/icons/qa_manage_question_category_48px.svg' },
    { label: 'Role', name: 'qa-role', path: 'assets/icons/qa_roles_48px.svg' },
    { label: 'Course', name: 'qa-course', path: 'assets/icons/qa_course_48px.svg' },
    { label: 'Cohort', name: 'qa-cohort', path: 'assets/icons/qa_cohort_48px.svg' },
    { label: 'Technology', name: 'qa-technology', path: 'assets/icons/qa_technology_48px.svg' },
    { label: 'Form', name: 'qa-form', path: 'assets/icons/qa_form_48px.svg' },
    { label: 'Question', name: 'qa-question', path: 'assets/icons/qa_question_48px.svg' },
    { label: 'Question Category', name: 'qa-question-category', path: 'assets/icons/qa_question_category_48px.svg' },
    { label: 'Application Page', name: 'qa-app-page', path: 'assets/icons/qa_app_page_48px.svg' },
    { label: 'Application Project', name: 'qa-app-project', path: 'assets/icons/qa_app_project_48px.svg' },
    { label: 'Location', name: 'qa-location', path: 'assets/icons/qa_location_48px.svg' }
];


/***/ }),

/***/ "../qa-common/src/app/data-table/data-table.component.ts":
/*!***************************************************************!*\
  !*** ../qa-common/src/app/data-table/data-table.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




/**
 * A common interactive table for displaying and interacting with data.
 * This component is build on MatTable with additional QA-Portal features added.
 *
 * @example
 * // example.component.html
 * // Adding data table to your component template
 * <app-data-table [displayedColumns]="columns" [dataSource]="tableDataSource">
 *    <ng-container matColumnDef="nameColumn">
 *        <th mat-header-cell *matHeaderCellDef>Name</th>
 *        <td mat-cell *matCellDef="let row">{{row}}</td>
 *    </ng-container>
 * </app-data-table>
 *
 * // example.component.ts
 * // Providing a dataSource. This is a standard MatTableDataSource object as provided by Angular Material.
 * public tableDataSource = new MatTableDataSource<string>(['Ian', 'Scott']);
 * // Set which columns to display with an array of column names.
 * public columns = ['nameColumn'];
 *
 * @export
 * @template DataType Type of data being provied via 'dataSource'
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(cdRef) {
        this.cdRef = cdRef;
        /** Which columns to display. */
        this.displayedColumns = [];
        this.isLoading = false;
        this.clickRowWillCheckBox = false;
        /** Should the actions bar be displayed when an item is selected? */
        this.actionsEnabled = true;
        // Events
        this.rowSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Internal props
        this.rowSelection = [];
        this.actualDisplayedColumns = [];
        this.allRowsSelected = false;
        this.atLeastOneRowSelected = false;
        this.lastSelectionIndex = null;
    }
    DataTableComponent.prototype.ngAfterContentInit = function () {
        var e_1, _a;
        this.cdRef.detectChanges();
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var col = _c.value;
                this.matTable.addColumnDef(col);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.actualDisplayedColumns = this.displayedColumns;
    };
    DataTableComponent.prototype.onRowClicked = function (index, data, event) {
        if (this.clickRowWillCheckBox && event instanceof MouseEvent) {
            this.onRowCheckboxClicked(event, index);
        }
        else {
            this.rowClick.emit({ index: index, data: data, event: event });
        }
    };
    // ROW SELECTION
    DataTableComponent.prototype.updateRowSelectedState = function () {
        this.allRowsSelected = this.rowSelection.length === this.dataSource.data.length &&
            (this.rowSelection.every(function (x) { return x; }) || false);
        this.atLeastOneRowSelected = this.rowSelection.some(function (x) { return x; });
        this.rowSelectionChange.emit(this.rowSelection);
    };
    DataTableComponent.prototype.onSelectAllCheckboxChange = function (_a) {
        var checked = _a.checked;
        this.rowSelection = checked ? Array(this.dataSource.data.length).fill(true) : [];
        this.updateRowSelectedState();
    };
    DataTableComponent.prototype.deselectAllRows = function () {
        this.rowSelection = [];
        this.updateRowSelectedState();
    };
    DataTableComponent.prototype.onRowCheckboxClicked = function (event, index) {
        var e_2, _a;
        event.preventDefault(); // Stop default checkbox behaviour
        event.stopPropagation(); // Stop the row from clicking when using a checkbox
        if (event.shiftKey && this.lastSelectionIndex !== null) { // SHIFT click
            if (!event.ctrlKey) {
                this.rowSelection = []; // Not holding CTRL too? Clear existing selection.
            }
            this.rowSelection[index] = true; // Set clicked row to true.
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](lodash__WEBPACK_IMPORTED_MODULE_3__["range"](this.lastSelectionIndex, index)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var i = _c.value;
                    this.rowSelection[i] = true; // Select all rows from last to current row.
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else { // Normal click
            this.rowSelection[index] = this.rowSelection[index] === undefined ? true : !this.rowSelection[index];
            this.lastSelectionIndex = index;
        }
        this.updateRowSelectedState();
    };
    // MISC. UTIL FUNCTIONS
    DataTableComponent.prototype.getSelectedRowsData = function () {
        var _this = this;
        var rowData = this.rowSelection.map(function (row, index) { return row === true ? _this.dataSource.data[index] : undefined; });
        for (var index in rowData) {
            if (!rowData[index]) {
                delete rowData[index];
            }
        }
        return rowData;
    };
    DataTableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], DataTableComponent.prototype, "matTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"])
    ], DataTableComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableComponent.prototype, "displayedColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "isLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "clickRowWillCheckBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "actionsEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "rowSelectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "rowClick", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! raw-loader!./data-table.component.html */ "../../node_modules/raw-loader/index.js!../qa-common/src/app/data-table/data-table.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "../qa-common/src/app/list/directives/expander.directive.ts":
/*!******************************************************************!*\
  !*** ../qa-common/src/app/list/directives/expander.directive.ts ***!
  \******************************************************************/
/*! exports provided: ExpanderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderDirective", function() { return ExpanderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExpanderDirective = /** @class */ (function () {
    function ExpanderDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ExpanderDirective.prototype.ngOnInit = function () {
        this.viewContainer.createEmbeddedView(this.template, this.context);
    };
    ExpanderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    ExpanderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appListExpander]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ExpanderDirective);
    return ExpanderDirective;
}());



/***/ }),

/***/ "../qa-common/src/app/list/directives/title.directive.ts":
/*!***************************************************************!*\
  !*** ../qa-common/src/app/list/directives/title.directive.ts ***!
  \***************************************************************/
/*! exports provided: TitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleDirective", function() { return TitleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TitleDirective = /** @class */ (function () {
    function TitleDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    TitleDirective.prototype.ngOnInit = function () {
        this.viewContainer.createEmbeddedView(this.template, this.context);
    };
    TitleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    TitleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appListTitle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], TitleDirective);
    return TitleDirective;
}());



/***/ }),

/***/ "../qa-common/src/app/list/list.component.ts":
/*!***************************************************!*\
  !*** ../qa-common/src/app/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _directives_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/title.directive */ "../qa-common/src/app/list/directives/title.directive.ts");
/* harmony import */ var _directives_expander_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/expander.directive */ "../qa-common/src/app/list/directives/expander.directive.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.listDataSource = [];
        this.listDataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragDrop = false;
        this.expandedElement = null;
    }
    /**
     * Handle drop events from the drag drop list items
     * @param event Drag drop event
     */
    ListComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.listDataSource, event.previousIndex, event.currentIndex);
        this.announceDataSourceChange();
    };
    /**
     * Handles list item click events. Updates expanded element.
     * @param item The item that's been clicked
     */
    ListComponent.prototype.onListItemClicked = function (item) {
        if (this.expander) {
            this.expandedElement = this.expandedElement === item ? null : item;
        }
    };
    /**
     * Emits the list data source when changed
     */
    ListComponent.prototype.announceDataSourceChange = function () {
        this.listDataSourceChange.emit(this.listDataSource);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListComponent.prototype, "listDataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "listDataSourceChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "dragDrop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_directives_title_directive__WEBPACK_IMPORTED_MODULE_4__["TitleDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives_title_directive__WEBPACK_IMPORTED_MODULE_4__["TitleDirective"])
    ], ListComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_directives_expander_directive__WEBPACK_IMPORTED_MODULE_5__["ExpanderDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives_expander_directive__WEBPACK_IMPORTED_MODULE_5__["ExpanderDirective"])
    ], ListComponent.prototype, "expander", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/index.js!../qa-common/src/app/list/list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../qa-common/src/app/qa-common.module.ts":
/*!************************************************!*\
  !*** ../qa-common/src/app/qa-common.module.ts ***!
  \************************************************/
/*! exports provided: QaCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaCommonModule", function() { return QaCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rated_question_rated_question_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rated-question/rated-question.component */ "../qa-common/src/app/rated-question/rated-question.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "../qa-common/src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _search_bar_backdrop_search_bar_backdrop_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./search-bar-backdrop/search-bar-backdrop.component */ "../qa-common/src/app/search-bar-backdrop/search-bar-backdrop.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./spinner-overlay/spinner-overlay.component */ "../qa-common/src/app/spinner-overlay/spinner-overlay.component.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material-moment-adapter */ "../../node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./list/list.component */ "../qa-common/src/app/list/list.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _list_directives_expander_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./list/directives/expander.directive */ "../qa-common/src/app/list/directives/expander.directive.ts");
/* harmony import */ var _list_directives_title_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./list/directives/title.directive */ "../qa-common/src/app/list/directives/title.directive.ts");
/* harmony import */ var _common_models_icons_model__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_common/models/icons.model */ "../qa-common/src/app/_common/models/icons.model.ts");














































var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_40__["MatMomentDateModule"]
];
var QaCommonModule = /** @class */ (function () {
    function QaCommonModule(matIconRegistry, domSanitizer) {
        var e_1, _a;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        try {
            for (var customIcons_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_common_models_icons_model__WEBPACK_IMPORTED_MODULE_45__["customIcons"]), customIcons_1_1 = customIcons_1.next(); !customIcons_1_1.done; customIcons_1_1 = customIcons_1.next()) {
                var icon = customIcons_1_1.value;
                this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (customIcons_1_1 && !customIcons_1_1.done && (_a = customIcons_1.return)) _a.call(customIcons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    QaCommonModule.ctorParameters = function () { return [
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__["DomSanitizer"] }
    ]; };
    QaCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_30__["NgModule"])({
            declarations: [
                _rated_question_rated_question_component__WEBPACK_IMPORTED_MODULE_31__["RatedQuestionComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_35__["SearchBarComponent"],
                _search_bar_backdrop_search_bar_backdrop_component__WEBPACK_IMPORTED_MODULE_36__["SearchBarBackdropComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_38__["DataTableComponent"],
                _spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_39__["SpinnerOverlayComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_41__["ListComponent"],
                _list_directives_expander_directive__WEBPACK_IMPORTED_MODULE_43__["ExpanderDirective"],
                _list_directives_title_directive__WEBPACK_IMPORTED_MODULE_44__["TitleDirective"]
            ],
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _angular_common__WEBPACK_IMPORTED_MODULE_37__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]
            ], materialModules, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right',
                    closeButton: true,
                    timeOut: 7000
                }),
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_42__["DragDropModule"]
            ]),
            providers: [],
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _angular_common__WEBPACK_IMPORTED_MODULE_37__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]
            ], materialModules, [
                _rated_question_rated_question_component__WEBPACK_IMPORTED_MODULE_31__["RatedQuestionComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_35__["SearchBarComponent"],
                _search_bar_backdrop_search_bar_backdrop_component__WEBPACK_IMPORTED_MODULE_36__["SearchBarBackdropComponent"],
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_38__["DataTableComponent"],
                _spinner_overlay_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_39__["SpinnerOverlayComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_41__["ListComponent"],
                _list_directives_title_directive__WEBPACK_IMPORTED_MODULE_44__["TitleDirective"],
                _list_directives_expander_directive__WEBPACK_IMPORTED_MODULE_43__["ExpanderDirective"]
            ])
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__["DomSanitizer"]])
    ], QaCommonModule);
    return QaCommonModule;
}());



/***/ }),

/***/ "../qa-common/src/app/rated-question/rated-question.component.css":
/*!************************************************************************!*\
  !*** ../qa-common/src/app/rated-question/rated-question.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qa-radio-btn-grp {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n}\n\n.qa-radio-btn-grp-label {\n  background-color: lightgrey;\n  color: black;\n  margin-bottom: 10px;\n}\n\n.qa-radio-btn-layout {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n\n.qa-radio-btn {\n  margin-right: 25px;\n  border-width: 1px;\n  border-color: black;\n  color: #004050;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWNvbW1vbi9zcmMvYXBwL3JhdGVkLXF1ZXN0aW9uL3JhdGVkLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCIiwiZmlsZSI6InByb2plY3RzL3FhLWNvbW1vbi9zcmMvYXBwL3JhdGVkLXF1ZXN0aW9uL3JhdGVkLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucWEtcmFkaW8tYnRuLWdycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5xYS1yYWRpby1idG4tZ3JwLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5xYS1yYWRpby1idG4tbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5xYS1yYWRpby1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBjb2xvcjogIzAwNDA1MDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../qa-common/src/app/rated-question/rated-question.component.ts":
/*!***********************************************************************!*\
  !*** ../qa-common/src/app/rated-question/rated-question.component.ts ***!
  \***********************************************************************/
/*! exports provided: RatedQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatedQuestionComponent", function() { return RatedQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var RatedQuestionComponent = /** @class */ (function () {
    function RatedQuestionComponent() {
        this.isDisabled = false;
    }
    RatedQuestionComponent.prototype.ngOnInit = function () {
    };
    RatedQuestionComponent.prototype.setModel = function (selection) {
        this.selectedRating.response = selection;
    };
    RatedQuestionComponent.prototype.matchedValue = function (entry) {
        return !!this.selectedRating.response && (entry === JSON.stringify(this.selectedRating.response).trim());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RatedQuestionComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RatedQuestionComponent.prototype, "questionText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatedQuestionComponent.prototype, "selectedRating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatedQuestionComponent.prototype, "isDisabled", void 0);
    RatedQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rated-question',
            template: __webpack_require__(/*! raw-loader!./rated-question.component.html */ "../../node_modules/raw-loader/index.js!../qa-common/src/app/rated-question/rated-question.component.html"),
            styles: [__webpack_require__(/*! ./rated-question.component.css */ "../qa-common/src/app/rated-question/rated-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatedQuestionComponent);
    return RatedQuestionComponent;
}());



/***/ }),

/***/ "../qa-common/src/app/search-bar-backdrop/search-bar-backdrop.component.ts":
/*!*********************************************************************************!*\
  !*** ../qa-common/src/app/search-bar-backdrop/search-bar-backdrop.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchBarBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarBackdropComponent", function() { return SearchBarBackdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SearchBarBackdropComponent = /** @class */ (function () {
    function SearchBarBackdropComponent() {
        this.show = false;
        this.onBackdropClick = function () { };
    }
    SearchBarBackdropComponent.prototype._handleClick = function () {
        this.show = false;
        this.onBackdropClick();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SearchBarBackdropComponent.prototype, "_handleClick", null);
    SearchBarBackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar-backdrop',
            template: "\n    <div class=\"search-bar-backdrop\" [class.visible]=\"show\"></div>\n  "
        })
    ], SearchBarBackdropComponent);
    return SearchBarBackdropComponent;
}());



/***/ }),

/***/ "../qa-common/src/app/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ../qa-common/src/app/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_bar_backdrop_search_bar_backdrop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-bar-backdrop/search-bar-backdrop.component */ "../qa-common/src/app/search-bar-backdrop/search-bar-backdrop.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");




var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(overlay) {
        this.overlay = overlay;
        /** Should the filter panel be accessable? Defaults to true. */
        this.hasFilterPanel = true;
        /** Search input field placeholder text. */
        this.placeholder = 'Search';
        /** Internal value for the search input. use value get/set. */
        // tslint:disable-next-line: variable-name
        this._value = '';
        /**
         * Event triggered whener the search input value changes.
         * @emits string Current value fo the search input.
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered whenever a search is triggered by the user.
         * @emits string Current value of the search input.
         */
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered whenever the open state of the filter panel changes.
         * @emits boolean Current open state of the filter panel.
         */
        this.filterOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered whenever the filter apply button is clicked.
         * @emits string Current value of the search input.
         */
        this.filterApply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered whenever the filter reset button is clicked.
         * @emits string Current value of the search input.
         */
        this.filterReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Internal value for filterOpen. Use filterOpen! */
        // tslint:disable-next-line: variable-name
        this._filterOpen = false;
    }
    Object.defineProperty(SearchBarComponent.prototype, "value", {
        /** Current value of the search input. */
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.valueChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBarComponent.prototype, "filterOpen", {
        /** Open state of the filter panel. */
        get: function () {
            return this._filterOpen;
        },
        set: function (open) {
            this._filterOpen = open;
            if (this.backdropRef) {
                this.backdropRef.show = open;
            }
            this.filterOpenChange.emit(open);
        },
        enumerable: true,
        configurable: true
    });
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.backdropRef) {
            this.backdropRef.onBackdropClick = function () { return _this.filterOpen = false; };
        }
    };
    SearchBarComponent.prototype.announceSearch = function () {
        this.filterOpen = false;
        this.search.emit(this.value);
    };
    SearchBarComponent.prototype.announceFilterApply = function () {
        this.filterOpen = false;
        this.filterApply.emit(this.value);
    };
    SearchBarComponent.prototype.announceFilterReset = function () {
        this.filterReset.emit(this.value);
    };
    SearchBarComponent.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _search_bar_backdrop_search_bar_backdrop_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarBackdropComponent"])
    ], SearchBarComponent.prototype, "backdropRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "hasFilterPanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SearchBarComponent.prototype, "value", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "filterOpenChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "filterApply", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "filterReset", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! raw-loader!./search-bar.component.html */ "../../node_modules/raw-loader/index.js!../qa-common/src/app/search-bar/search-bar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "../qa-common/src/app/spinner-overlay/spinner-overlay.component.scss":
/*!***************************************************************************!*\
  !*** ../qa-common/src/app/spinner-overlay/spinner-overlay.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-container {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  transition: all 0.2s ease-in-out;\n  opacity: 0;\n}\n.overlay-container.fade-bg {\n  background-color: rgba(200, 200, 200, 0.333);\n}\n.overlay-container.show {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9xYS1jb21tb24vc3JjL2FwcC9zcGlubmVyLW92ZXJsYXkvc3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvcWEtY29tbW9uL3NyYy9hcHAvc3Bpbm5lci1vdmVybGF5L3NwaW5uZXItb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBRUEsZ0NBQUE7RUFHQSxVQUFBO0FDSEo7QURNSTtFQUNJLDRDQUFBO0FDSlI7QURPSTtFQUNJLFVBQUE7QUNMUiIsImZpbGUiOiJwcm9qZWN0cy9xYS1jb21tb24vc3JjL2FwcC9zcGlubmVyLW92ZXJsYXkvc3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ub3ZlcmxheS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAvLyBIaWRkZW5cbiAgICBvcGFjaXR5OiAwO1xuXG5cbiAgICAmLmZhZGUtYmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMzMzKTtcbiAgICB9XG4gICAgXG4gICAgJi5zaG93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iLCIub3ZlcmxheS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwO1xufVxuLm92ZXJsYXktY29udGFpbmVyLmZhZGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMzMzKTtcbn1cbi5vdmVybGF5LWNvbnRhaW5lci5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "../qa-common/src/app/spinner-overlay/spinner-overlay.component.ts":
/*!*************************************************************************!*\
  !*** ../qa-common/src/app/spinner-overlay/spinner-overlay.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpinnerOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerOverlayComponent", function() { return SpinnerOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SpinnerOverlayComponent = /** @class */ (function () {
    function SpinnerOverlayComponent() {
        this.show = false;
        this.fadeBg = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerOverlayComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerOverlayComponent.prototype, "fadeBg", void 0);
    SpinnerOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner-overlay',
            template: __webpack_require__(/*! raw-loader!./spinner-overlay.component.html */ "../../node_modules/raw-loader/index.js!../qa-common/src/app/spinner-overlay/spinner-overlay.component.html"),
            styles: [__webpack_require__(/*! ./spinner-overlay.component.scss */ "../qa-common/src/app/spinner-overlay/spinner-overlay.component.scss")]
        })
    ], SpinnerOverlayComponent);
    return SpinnerOverlayComponent;
}());



/***/ }),

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

/***/ "./src/app/_common/guards/app-auth-guard.ts":
/*!**************************************************!*\
  !*** ./src/app/_common/guards/app-auth-guard.ts ***!
  \**************************************************/
/*! exports provided: AppAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthGuard", function() { return AppAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-angular */ "../../node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");





var AppAuthGuard = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppAuthGuard, _super);
    function AppAuthGuard(router, keycloakAngular, toasterService) {
        var _this = _super.call(this, router, keycloakAngular) || this;
        _this.router = router;
        _this.keycloakAngular = keycloakAngular;
        _this.toasterService = toasterService;
        return _this;
    }
    AppAuthGuard.prototype.isAccessAllowed = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var e_1, _a;
            if (!_this.authenticated) {
                _this.keycloakAngular.login();
                return;
            }
            var requiredRoles = route.data.roles;
            if (!requiredRoles || requiredRoles.length === 0) {
                return resolve(true);
            }
            else {
                if (!_this.roles || _this.roles.length === 0) {
                    resolve(false);
                }
                var granted = false;
                try {
                    for (var requiredRoles_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](requiredRoles), requiredRoles_1_1 = requiredRoles_1.next(); !requiredRoles_1_1.done; requiredRoles_1_1 = requiredRoles_1.next()) {
                        var requiredRole = requiredRoles_1_1.value;
                        if (_this.roles.indexOf(requiredRole) > -1) {
                            granted = true;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (requiredRoles_1_1 && !requiredRoles_1_1.done && (_a = requiredRoles_1.return)) _a.call(requiredRoles_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (granted === false) {
                    _this.router.navigate(['/qa/portal/home']);
                    _this.toasterService.showError('Returned to home page. User does not have permission to access requested page');
                }
                resolve(granted);
            }
        });
    };
    AppAuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"] },
        { type: _services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_4__["QaToastrService"] }
    ]; };
    AppAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"],
            _services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_4__["QaToastrService"]])
    ], AppAuthGuard);
    return AppAuthGuard;
}(keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakAuthGuard"]));



/***/ }),

/***/ "./src/app/_common/models/portal-application-projects.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_common/models/portal-application-projects.model.ts ***!
  \*********************************************************************/
/*! exports provided: PortalApplicationProjectsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalApplicationProjectsModel", function() { return PortalApplicationProjectsModel; });
var PortalApplicationProjectsModel = /** @class */ (function () {
    function PortalApplicationProjectsModel() {
        this.portalProjects = [];
    }
    return PortalApplicationProjectsModel;
}());



/***/ }),

/***/ "./src/app/_common/services/application.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_common/services/application.service.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _qa_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qa-http.service */ "./src/app/_common/services/qa-http.service.ts");






/**
 * ApplicationService provides top-level application services.
 *
 * @export
 */
var ApplicationService = /** @class */ (function () {
    function ApplicationService(qaHttp, router) {
        this.qaHttp = qaHttp;
        this.router = router;
        /** All portal applications available to the current user. */
        this.portalApplications$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** The current portal application that the user is currently using. */
        this.currentApplication$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    /**
     * To be called ONCE when the QA Portal application has loaded.
     * This function kicks off various top-level subscriptions to control the state of the application.
     */
    ApplicationService.prototype.onApplicationLoaded = function () {
        var _this = this;
        this.getAllPortalApplications().subscribe(function (apps) { return _this.portalApplications$.next(apps); });
        // Combine emissions from portalApps and router events. We need to react whenever either one changes.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.portalApplications$, this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })) // Filter out the events we don't care about
        ).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), apps = _b[0], routerEvent = _b[1];
            _this.currentApplication$.next(_this.getCurrentApplicationByRoute(apps, routerEvent));
        });
    };
    /** Filters apps and finds which app the user is currently in by comparing the route to each baseUrl. */
    ApplicationService.prototype.getCurrentApplicationByRoute = function (apps, event) {
        return apps.find(function (app) { return event.urlAfterRedirects.startsWith(app.portalApplication.baseUrl); });
    };
    /** Fetches all available portal applications for the current user. */
    ApplicationService.prototype.getAllPortalApplications = function () {
        return this.qaHttp.get({ ref: 'PORTAL_APPLICATIONS_API' });
    };
    ApplicationService.ctorParameters = function () { return [
        { type: _qa_http_service__WEBPACK_IMPORTED_MODULE_5__["QaHttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_qa_http_service__WEBPACK_IMPORTED_MODULE_5__["QaHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/_common/services/qa-error-handler.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/_common/services/qa-error-handler.service.ts ***!
  \**************************************************************/
/*! exports provided: QaErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaErrorHandlerService", function() { return QaErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "../../node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _qa_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");







var QaErrorHandlerService = /** @class */ (function () {
    function QaErrorHandlerService(router, toastrService, dialog) {
        this.router = router;
        this.toastrService = toastrService;
        this.dialog = dialog;
    }
    QaErrorHandlerService.prototype.handleError = function (error) {
        var _this = this;
        this.processError(error).subscribe(function (done) {
            // Nothing to do as error is severe and we've redirected to the severe error page
        }, function (msg) {
            _this.toastrService.showError(msg);
        });
    };
    QaErrorHandlerService.prototype.showError = function (error) {
        this.toastrService.showError(error);
    };
    QaErrorHandlerService.prototype.processError = function (error) {
        console.error('ERROR HANDLER PROCESSED ERROR:', error);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Display in an error toast.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            if (error.status === http_status_codes__WEBPACK_IMPORTED_MODULE_3__["INTERNAL_SERVER_ERROR"]) {
                // Navigate to severe error page and pass the error message to be displayed
                this.router.navigate(['error'], { queryParams: { errorMsg: error.error } });
                this.dialog.closeAll(); // Close all open dialogs
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('');
            }
            else {
                // Display in an error toast.
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
            }
        }
    };
    QaErrorHandlerService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _qa_toastr_service__WEBPACK_IMPORTED_MODULE_5__["QaToastrService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    QaErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _qa_toastr_service__WEBPACK_IMPORTED_MODULE_5__["QaToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], QaErrorHandlerService);
    return QaErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/_common/services/qa-help.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_common/services/qa-help.service.ts ***!
  \*****************************************************/
/*! exports provided: QaHelpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaHelpService", function() { return QaHelpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");





var QaHelpService = /** @class */ (function () {
    function QaHelpService(router, http) {
        this.router = router;
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("Welcome to QA Portal! \n\n Kindly click any of the buttons displayed to navigate the portal");
        this.currentMessage = this.messageSource.asObservable();
    }
    QaHelpService.prototype.getUserType = function (roleBool) {
        if (roleBool == true) {
            this.userType = "USER";
        }
        else {
            this.userType = "ADMIN";
        }
        return this.userType;
    };
    QaHelpService.prototype.accessFile = function () {
        return this.http.get('../assets/Textfiles/homeHelp.json', { responseType: 'json' });
    };
    QaHelpService.prototype.accessToolTipFile = function () {
        return this.http.get('../assets/Textfiles/toolTips.json', { responseType: 'json' });
    };
    QaHelpService.prototype.changeMessage = function (data, tag) {
        var _this = this;
        data.subscribe(function (data) { return _this.messageSource.next((data.filter(function (help) { return help.Tag == tag || help.Tag + String(tag).match(/[0-9]+/) == tag; }))[0].Help.split("\n").join("\n")); });
    };
    ;
    QaHelpService.prototype.tooltipMaker = function (data) {
        if (data == "Training") {
            return "Training at the academy";
        }
        else if (data == "Home") {
            return "Home Page";
        }
        else if (data == "Trainee Evaluation History") {
            return "View and edit your current evaluations of your courses at the academy, providing feedback to your trainer to help them improve in the future.";
        }
        else if (data == "Trainee Current CV") {
            return "Update and view your current CV which should include everything learnt at the academy.";
        }
        else if (data == "Trainee Reflections") {
            return "For viewing the history of your reflections at the academy";
        }
        else if (data == "Current Trainee Reflection") {
            return "A form to reflect over your progress at the academy at the current date";
        }
        else {
            return "";
        }
    };
    QaHelpService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    QaHelpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], QaHelpService);
    return QaHelpService;
}());



/***/ }),

/***/ "./src/app/_common/services/qa-http.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_common/services/qa-http.service.ts ***!
  \*****************************************************/
/*! exports provided: QaHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaHttpService", function() { return QaHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/endpoints */ "./src/environments/endpoints.ts");




var QaHttpService = /** @class */ (function () {
    function QaHttpService(httpClient) {
        this.httpClient = httpClient;
        /** Default set of Http request options. This is typically merged with incoming options which can override it. */
        this.DEFAULT_HTTP_OPTIONS = {
            headers: { 'Content-Type': 'application/json' }
        };
    }
    /**
     * Constructs a formatted URL from a base URL in configuration (determined by url.ref) and params.
     *
     * @param url Argument can be raw string URL or URL definition object.
     *    If string is provided it is simply returned.
     *    If an object is provided the function will attempt to create a URL using the supplied ref and params.
     */
    QaHttpService.prototype.buildUrl = function (url) {
        if (typeof url === 'object') {
            var constructedUrl = _environments_endpoints__WEBPACK_IMPORTED_MODULE_3__["endpoints"][url.ref] || '/ERROR_NO_URL_FOUND';
            for (var key in url.params) {
                if (key !== undefined) {
                    constructedUrl = constructedUrl.replace(":" + key, url.params[key]);
                }
            }
            return constructedUrl;
        }
        return url;
    };
    QaHttpService.prototype.get = function (url, options) {
        return this.httpClient.get(this.buildUrl(url), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.DEFAULT_HTTP_OPTIONS, options));
    };
    QaHttpService.prototype.post = function (url, body, options) {
        return this.httpClient.post(this.buildUrl(url), body, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.DEFAULT_HTTP_OPTIONS, options));
    };
    QaHttpService.prototype.put = function (url, body, options) {
        return this.httpClient.put(this.buildUrl(url), body, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.DEFAULT_HTTP_OPTIONS, options));
    };
    QaHttpService.prototype.patch = function (url, body, options) {
        return this.httpClient.patch(this.buildUrl(url), body, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.DEFAULT_HTTP_OPTIONS, options));
    };
    QaHttpService.prototype.delete = function (url, options) {
        return this.httpClient.delete(this.buildUrl(url), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.DEFAULT_HTTP_OPTIONS, options));
    };
    QaHttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QaHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QaHttpService);
    return QaHttpService;
}());



/***/ }),

/***/ "./src/app/_common/services/qa-toastr.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_common/services/qa-toastr.service.ts ***!
  \*******************************************************/
/*! exports provided: QaToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaToastrService", function() { return QaToastrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "../../node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var QaToastrService = /** @class */ (function () {
    function QaToastrService(toastr) {
        this.toastr = toastr;
    }
    QaToastrService.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success');
    };
    QaToastrService.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Error');
    };
    QaToastrService.prototype.showInfo = function (msg) {
        this.toastr.info(msg, 'Information');
    };
    QaToastrService.prototype.showWarning = function (msg) {
        this.toastr.warning(msg, 'Warning');
    };
    QaToastrService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }
    ]; };
    QaToastrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], QaToastrService);
    return QaToastrService;
}());



/***/ }),

/***/ "./src/app/_common/services/side-menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_common/services/side-menu.service.ts ***!
  \*******************************************************/
/*! exports provided: SideMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuService", function() { return SideMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * Service to control and persist side menu specific functionality.
 *
 * @export
 */
var SideMenuService = /** @class */ (function () {
    function SideMenuService() {
        /* Side menu open state. Use toggleOpen / setOpenState to persist the state across sessions. */
        this.sideMenuOpen = false;
        var persistedOpenString = localStorage.getItem('sideMenuOpen');
        this.sideMenuOpen = persistedOpenString !== undefined ? (persistedOpenString === 'true') : this.sideMenuOpen;
    }
    /**
     * Toggles the side menu open state.
     * @returns returns the new state of the side menu
     */
    SideMenuService.prototype.toggleOpen = function () {
        return this.setOpenState(!this.sideMenuOpen);
    };
    /**
     * Sets the side menu open state.
     * @returns returns the new state of the side menuP
     */
    SideMenuService.prototype.setOpenState = function (open) {
        this.sideMenuOpen = open;
        localStorage.setItem('sideMenuOpen', this.sideMenuOpen.toString());
        return this.sideMenuOpen;
    };
    SideMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideMenuService);
    return SideMenuService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_common/guards/app-auth-guard */ "./src/app/_common/guards/app-auth-guard.ts");
/* harmony import */ var _portal_application_home_portal_application_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-application-home/portal-application-home.component */ "./src/app/portal-application-home/portal-application-home.component.ts");
/* harmony import */ var _portal_home_portal_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-home/portal-home.component */ "./src/app/portal-home/portal-home.component.ts");






var routes = [
    {
        path: 'qa/portal/:dep',
        pathMatch: 'full',
        component: _portal_application_home_portal_application_home_component__WEBPACK_IMPORTED_MODULE_4__["PortalApplicationHomeComponent"]
    },
    // Add routes for new application here
    {
        path: 'qa/portal/training/feedback',
        loadChildren: function () { return Promise.all(/*! import() | course-feedback-src-app-qa-feedback-module */[__webpack_require__.e("common"), __webpack_require__.e("course-feedback-src-app-qa-feedback-module")]).then(__webpack_require__.bind(null, /*! ../../../course-feedback/src/app/qa-feedback.module */ "../course-feedback/src/app/qa-feedback.module.ts")).then(function (mod) { return mod.QaFeedbackModule; }); }
    },
    {
        path: 'qa/portal/training/self-reflection',
        loadChildren: function () { return Promise.all(/*! import() | self-reflection-src-app-qa-self-reflection-module */[__webpack_require__.e("default~qa-admin-src-app-qa-admin-module~self-reflection-src-app-qa-self-reflection-module"), __webpack_require__.e("self-reflection-src-app-qa-self-reflection-module")]).then(__webpack_require__.bind(null, /*! ../../../self-reflection/src/app/qa-self-reflection.module */ "../self-reflection/src/app/qa-self-reflection.module.ts")).then(function (mod) { return mod.QaSelfReflectionModule; }); }
    },
    {
        path: 'qa/portal/training/cv',
        loadChildren: function () { return __webpack_require__.e(/*! import() | qa-cv-src-app-qa-cv-module */ "qa-cv-src-app-qa-cv-module").then(__webpack_require__.bind(null, /*! ../../../qa-cv/src/app/qa-cv.module */ "../qa-cv/src/app/qa-cv.module.ts")).then(function (mod) { return mod.QaCvModule; }); }
    },
    {
        path: 'qa/portal/admin',
        loadChildren: function () { return Promise.all(/*! import() | qa-admin-src-app-qa-admin-module */[__webpack_require__.e("default~qa-admin-src-app-qa-admin-module~self-reflection-src-app-qa-self-reflection-module"), __webpack_require__.e("common"), __webpack_require__.e("qa-admin-src-app-qa-admin-module")]).then(__webpack_require__.bind(null, /*! ../../../qa-admin/src/app/qa-admin.module */ "../qa-admin/src/app/qa-admin.module.ts")).then(function (mod) { return mod.QaAdminModule; }); }
    },
    {
        path: 'error',
        loadChildren: function () { return __webpack_require__.e(/*! import() | qa-error-app-src-app-qa-error-module */ "qa-error-app-src-app-qa-error-module").then(__webpack_require__.bind(null, /*! ../../../qa-error-app/src/app/qa-error.module */ "../qa-error-app/src/app/qa-error.module.ts")).then(function (mod) { return mod.QaErrorModule; }); }
    },
    {
        path: '',
        pathMatch: 'full',
        component: _portal_home_portal_home_component__WEBPACK_IMPORTED_MODULE_5__["PortalHomeComponent"]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            providers: [_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AppAuthGuard"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-portal {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n}\n\napp-portal-side-menu {\n  flex: 15 1 auto;\n}\n\napp-portal-footer {\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  color: #0060B9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3BvcnRhbC1jb3JlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDSEYiLCJmaWxlIjoicHJvamVjdHMvcG9ydGFsLWNvcmUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wb3J0YWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xufVxuXG5hcHAtcG9ydGFsLWhlYWRlciB7XG5cbn1cblxuYXBwLXBvcnRhbC1zaWRlLW1lbnUge1xuICBmbGV4OiAxNSAxIGF1dG87XG59XG5cbmFwcC1wb3J0YWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBjb2xvcjogIzAwNjBCOTtcbn1cbiIsIi5tYWluLXBvcnRhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG59XG5cbmFwcC1wb3J0YWwtc2lkZS1tZW51IHtcbiAgZmxleDogMTUgMSBhdXRvO1xufVxuXG5hcHAtcG9ydGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY29sb3I6ICMwMDYwQjk7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_common/services/application.service */ "./src/app/_common/services/application.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(appServ) {
        appServ.onApplicationLoaded();
    }
    AppComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-header/portal-header.component */ "./src/app/portal-header/portal-header.component.ts");
/* harmony import */ var _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");
/* harmony import */ var _portal_side_menu_portal_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portal-side-menu/portal-side-menu.component */ "./src/app/portal-side-menu/portal-side-menu.component.ts");
/* harmony import */ var _portal_side_menu_portal_side_menu_content_portal_side_menu_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portal-side-menu/portal-side-menu-content/portal-side-menu-content.component */ "./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.ts");
/* harmony import */ var _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portal-footer/portal-footer.component */ "./src/app/portal-footer/portal-footer.component.ts");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! keycloak-angular */ "../../node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../app-init */ "../../app-init.ts");
/* harmony import */ var _common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");
/* harmony import */ var _header_link_header_link_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header-link/header-link.component */ "./src/app/header-link/header-link.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _portal_application_home_portal_application_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portal-application-home/portal-application-home.component */ "./src/app/portal-application-home/portal-application-home.component.ts");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_common/services/application.service */ "./src/app/_common/services/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _portal_home_portal_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portal-home/portal-home.component */ "./src/app/portal-home/portal-home.component.ts");
/* harmony import */ var _portal_help_portal_help_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portal-help/portal-help.component */ "./src/app/portal-help/portal-help.component.ts");
/* harmony import */ var _portal_help_portal_help_content_portal_help_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portal-help/portal-help-content/portal-help-content.component */ "./src/app/portal-help/portal-help-content/portal-help-content.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _portal_header_portal_header_component__WEBPACK_IMPORTED_MODULE_5__["PortalHeaderComponent"],
                _portal_side_menu_portal_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["PortalSideMenuComponent"],
                _portal_side_menu_portal_side_menu_content_portal_side_menu_content_component__WEBPACK_IMPORTED_MODULE_8__["PortalSideMenuContentComponent"],
                _portal_footer_portal_footer_component__WEBPACK_IMPORTED_MODULE_9__["PortalFooterComponent"],
                _header_link_header_link_component__WEBPACK_IMPORTED_MODULE_14__["HeaderLinkComponent"],
                _portal_application_home_portal_application_home_component__WEBPACK_IMPORTED_MODULE_16__["PortalApplicationHomeComponent"],
                _portal_home_portal_home_component__WEBPACK_IMPORTED_MODULE_20__["PortalHomeComponent"],
                _portal_help_portal_help_component__WEBPACK_IMPORTED_MODULE_21__["PortalHelpComponent"],
                _portal_help_portal_help_content_portal_help_content_component__WEBPACK_IMPORTED_MODULE_22__["PortalHelpContentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_6__["QaCommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                keycloak_angular__WEBPACK_IMPORTED_MODULE_10__["KeycloakAngularModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
            ],
            providers: [
                _common_services_application_service__WEBPACK_IMPORTED_MODULE_17__["ApplicationService"],
                _common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["QaErrorHandlerService"],
                _common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_13__["QaToastrService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: _app_init__WEBPACK_IMPORTED_MODULE_12__["initializer"],
                    multi: true,
                    deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_10__["KeycloakService"]]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"],
                    useValue: 'en-GB'
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header-link/header-link.component.ts":
/*!******************************************************!*\
  !*** ./src/app/header-link/header-link.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLinkComponent", function() { return HeaderLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_portal_application_projects_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/models/portal-application-projects.model */ "./src/app/_common/models/portal-application-projects.model.ts");



var HeaderLinkComponent = /** @class */ (function () {
    function HeaderLinkComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_portal_application_projects_model__WEBPACK_IMPORTED_MODULE_2__["PortalApplicationProjectsModel"])
    ], HeaderLinkComponent.prototype, "portalApplicationProjects", void 0);
    HeaderLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-link',
            template: __webpack_require__(/*! raw-loader!./header-link.component.html */ "../../node_modules/raw-loader/index.js!./src/app/header-link/header-link.component.html")
        })
    ], HeaderLinkComponent);
    return HeaderLinkComponent;
}());



/***/ }),

/***/ "./src/app/portal-application-home/portal-application-home.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/portal-application-home/portal-application-home.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortalApplicationHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalApplicationHomeComponent", function() { return PortalApplicationHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/side-menu.service */ "./src/app/_common/services/side-menu.service.ts");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/application.service */ "./src/app/_common/services/application.service.ts");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");





var PortalApplicationHomeComponent = /** @class */ (function () {
    function PortalApplicationHomeComponent(sideMenuService, appService, QaHelpService) {
        this.sideMenuService = sideMenuService;
        this.appService = appService;
        this.QaHelpService = QaHelpService;
    }
    PortalApplicationHomeComponent.ctorParameters = function () { return [
        { type: _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] },
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"] }
    ]; };
    PortalApplicationHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-application-home',
            template: __webpack_require__(/*! raw-loader!./portal-application-home.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-application-home/portal-application-home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"]])
    ], PortalApplicationHomeComponent);
    return PortalApplicationHomeComponent;
}());



/***/ }),

/***/ "./src/app/portal-footer/portal-footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/portal-footer/portal-footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portal-footer {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL3BvcnRhbC1mb290ZXIvcG9ydGFsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3BvcnRhbC1jb3JlL3NyYy9hcHAvcG9ydGFsLWZvb3Rlci9wb3J0YWwtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL3BvcnRhbC1mb290ZXIvcG9ydGFsLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0YWwtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLnBvcnRhbC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/portal-footer/portal-footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/portal-footer/portal-footer.component.ts ***!
  \**********************************************************/
/*! exports provided: PortalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalFooterComponent", function() { return PortalFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PortalFooterComponent = /** @class */ (function () {
    function PortalFooterComponent() {
    }
    PortalFooterComponent.prototype.ngOnInit = function () {
    };
    PortalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-footer',
            template: __webpack_require__(/*! raw-loader!./portal-footer.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-footer/portal-footer.component.html"),
            styles: [__webpack_require__(/*! ./portal-footer.component.scss */ "./src/app/portal-footer/portal-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortalFooterComponent);
    return PortalFooterComponent;
}());



/***/ }),

/***/ "./src/app/portal-header/portal-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/portal-header/portal-header.component.ts ***!
  \**********************************************************/
/*! exports provided: PortalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHeaderComponent", function() { return PortalHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "../../node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/services/application.service */ "./src/app/_common/services/application.service.ts");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");






var PortalHeaderComponent = /** @class */ (function () {
    function PortalHeaderComponent(appService, keycloak, QaHelpService) {
        this.appService = appService;
        this.keycloak = keycloak;
        this.QaHelpService = QaHelpService;
        this.displayName = '';
    }
    PortalHeaderComponent.prototype.ngOnInit = function () {
        this.displayName = this.keycloak.getUsername().toLocaleUpperCase();
    };
    PortalHeaderComponent.prototype.logout = function () {
        this.keycloak.logout(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/qa/portal/home');
    };
    PortalHeaderComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] },
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_5__["QaHelpService"] }
    ]; };
    PortalHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-header',
            template: __webpack_require__(/*! raw-loader!./portal-header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-header/portal-header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"],
            _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_5__["QaHelpService"]])
    ], PortalHeaderComponent);
    return PortalHeaderComponent;
}());



/***/ }),

/***/ "./src/app/portal-help/portal-help-content/portal-help-content.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/portal-help/portal-help-content/portal-help-content.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL3BvcnRhbC1oZWxwL3BvcnRhbC1oZWxwLWNvbnRlbnQvcG9ydGFsLWhlbHAtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/portal-help/portal-help-content/portal-help-content.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/portal-help/portal-help-content/portal-help-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PortalHelpContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHelpContentComponent", function() { return PortalHelpContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");




var PortalHelpContentComponent = /** @class */ (function () {
    function PortalHelpContentComponent(helpService, router) {
        var _this = this;
        this.helpService = helpService;
        this.router = router;
        this.file = this.helpService.accessFile();
        this.helpService.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.helpService.changeMessage(_this.file, _this.router.url);
            }
        });
    }
    PortalHelpContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helpService.currentMessage.subscribe(function (message) { return _this.message = message; });
        var file = this.helpService.accessFile();
        this.helpService.changeMessage(this.file, this.router.url);
    };
    PortalHelpContentComponent.ctorParameters = function () { return [
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__["QaHelpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PortalHelpContentComponent.prototype, "currentUrl", void 0);
    PortalHelpContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-help-content',
            template: __webpack_require__(/*! raw-loader!./portal-help-content.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-help/portal-help-content/portal-help-content.component.html"),
            styles: [__webpack_require__(/*! ./portal-help-content.component.css */ "./src/app/portal-help/portal-help-content/portal-help-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__["QaHelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PortalHelpContentComponent);
    return PortalHelpContentComponent;
}());



/***/ }),

/***/ "./src/app/portal-help/portal-help.component.css":
/*!*******************************************************!*\
  !*** ./src/app/portal-help/portal-help.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".help-bar mat-expansion-panel{\n    overflow: hidden;\n    background-color: #eeeeee;\n    position: fixed;\n    bottom: 0%; \n    right: 0%;\n    z-index: 20;\n    opacity: 1;\n    width: 20%;\n    white-space: pre-line;\n  }\n\n  .help-bar mat-expansion-panel-header {\n    margin-top: 0px !important;\n  }\n\n  .help-bar mat-panel-title {\n    float: left;\n    display: block;\n    color: #004050;\n    text-align: center;\n    text-decoration: none;\n    padding: 0% 20%;\n    padding-bottom: 5%;\n  }\n\n  .main {\n    margin-bottom: 10%; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BvcnRhbC1jb3JlL3NyYy9hcHAvcG9ydGFsLWhlbHAvcG9ydGFsLWhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InByb2plY3RzL3BvcnRhbC1jb3JlL3NyYy9hcHAvcG9ydGFsLWhlbHAvcG9ydGFsLWhlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWJhciBtYXQtZXhwYW5zaW9uLXBhbmVse1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwJTsgXG4gICAgcmlnaHQ6IDAlO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIH1cblxuICAuaGVscC1iYXIgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlbHAtYmFyIG1hdC1wYW5lbC10aXRsZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDQwNTA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwJSAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTsgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/portal-help/portal-help.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal-help/portal-help.component.ts ***!
  \******************************************************/
/*! exports provided: PortalHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHelpComponent", function() { return PortalHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "../../node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");





var PortalHelpComponent = /** @class */ (function () {
    function PortalHelpComponent(keycloak, helpService, router) {
        var _this = this;
        this.keycloak = keycloak;
        this.helpService = helpService;
        this.router = router;
        this.panelOpenState = false;
        this.helptext = "Test";
        this.currentUrl = window.location.href;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.userRole = _this.keycloak.isUserInRole("training-user");
            }
            ;
        });
    }
    ;
    PortalHelpComponent.ctorParameters = function () { return [
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] },
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__["QaHelpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PortalHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-help',
            template: __webpack_require__(/*! raw-loader!./portal-help.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-help/portal-help.component.html"),
            styles: [__webpack_require__(/*! ./portal-help.component.css */ "./src/app/portal-help/portal-help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"], _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_3__["QaHelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PortalHelpComponent);
    return PortalHelpComponent;
}());

;


/***/ }),

/***/ "./src/app/portal-home/portal-home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/portal-home/portal-home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.col-no-fit {\n  display: flex;\n  flex-direction: column;\n}\n\n.col-3 {\n  display: flex;\n  flex-direction: column;\n  width: 33.333333%;\n}\n\n.block-container {\n  width: 100%;\n  align-items: center;\n}\n\n.block-item {\n  color: white;\n  text-shadow: 1px 2px 3px black;\n  margin: 20px;\n  padding: 20px;\n  text-align: center;\n  align-self: center;\n  align-content: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  max-width: 800px;\n}\n\n.block-title {\n  color: white !important;\n  font-size: calc(20px + .8vw);\n}\n\n.sub-block-item {\n  align-self: center;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  border-radius: 3px;\n  padding: 10px;\n  height: calc(60px + 2vw);\n}\n\n.sub-block-title {\n  font-size: calc(6px + .8vw);\n  vertical-align: middle;\n  margin: auto;\n}\n\n.sub-block-text {\n  max-width: 100px;\n  text-align: center;\n}\n\n.block-button {\n  width: calc(90px + .6vw);\n  align-self: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-size: calc(8px + .5vw);\n}\n\n.bg-img-1 {\n  background-image: url(\"/assets/images/QA-bg-img1.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n\n.bg-img-2 {\n  background-image: url(\"/assets/images/QA-bg-img2.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n\n.bg-img-3 {\n  background-image: url(\"/assets/images/QA-bg-img3.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n\n.bg-img-4 {\n  background-image: url(\"/assets/images/QA-bg-img4.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL3BvcnRhbC1ob21lL3BvcnRhbC1ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvcG9ydGFsLWNvcmUvc3JjL2FwcC9wb3J0YWwtaG9tZS9wb3J0YWwtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0RUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEU0k7RUFDSSxzREFSSTtFQVNKLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ05SOztBREVJO0VBQ0ksc0RBUkk7RUFTSixzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNDUjs7QURMSTtFQUNJLHNEQVJJO0VBU0osc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDUVI7O0FEWkk7RUFDSSxzREFSSTtFQVNKLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ2VSIiwiZmlsZSI6InByb2plY3RzL3BvcnRhbC1jb3JlL3NyYy9hcHAvcG9ydGFsLWhvbWUvcG9ydGFsLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLW5vLWZpdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2wtM3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMzLjMzMzMzMyU7XG59XG5cbi5ibG9jay1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJsb2NrLWl0ZW17XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDNweCBibGFjaztcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwKTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4uYmxvY2stdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuOHZ3KTtcbn1cblxuLnN1Yi1ibG9jay1pdGVte1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDYwcHggKyAydncpO1xufVxuXG4uc3ViLWJsb2NrLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAuOHZ3KTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnN1Yi1ibG9jay10ZXh0e1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxvY2stYnV0dG9ue1xuICAgIHdpZHRoOiBjYWxjKDkwcHggKyAuNnZ3KTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICBmb250LXNpemU6IGNhbGMoOHB4ICsgLjV2dyk7XG59XG5cbiRiZy1pbWdzOiAgIHVybChcIi9hc3NldHMvaW1hZ2VzL1FBLWJnLWltZzEuanBnXCIpLFxuICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvUUEtYmctaW1nMi5qcGdcIiksXG4gICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ltYWdlcy9RQS1iZy1pbWczLmpwZ1wiKSxcbiAgICAgICAgICAgIHVybChcIi9hc3NldHMvaW1hZ2VzL1FBLWJnLWltZzQuanBnXCIpO1xuXG5AZWFjaCAkdXJsIGluICRiZy1pbWdzIHtcbiAgICAkaTogaW5kZXgoJGxpc3Q6ICRiZy1pbWdzLCAkdmFsdWU6ICR1cmwpO1xuICAgIC5iZy1pbWctI3skaX0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkdXJsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0OyAgICBcbiAgICB9XG59IiwiLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLW5vLWZpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2wtMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMy4zMzMzMzMlO1xufVxuXG4uYmxvY2stY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ibG9jay1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAzcHggYmxhY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4uYmxvY2stdGl0bGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuOHZ3KTtcbn1cblxuLnN1Yi1ibG9jay1pdGVtIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IGNhbGMoNjBweCArIDJ2dyk7XG59XG5cbi5zdWItYmxvY2stdGl0bGUge1xuICBmb250LXNpemU6IGNhbGMoNnB4ICsgLjh2dyk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN1Yi1ibG9jay10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxvY2stYnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoOTBweCArIC42dncpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAuNXZ3KTtcbn1cblxuLmJnLWltZy0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvUUEtYmctaW1nMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG59XG5cbi5iZy1pbWctMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL1FBLWJnLWltZzIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xufVxuXG4uYmctaW1nLTMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9RQS1iZy1pbWczLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcbn1cblxuLmJnLWltZy00IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvUUEtYmctaW1nNC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/portal-home/portal-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal-home/portal-home.component.ts ***!
  \******************************************************/
/*! exports provided: PortalHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHomeComponent", function() { return PortalHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/application.service */ "./src/app/_common/services/application.service.ts");
/* harmony import */ var _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/side-menu.service */ "./src/app/_common/services/side-menu.service.ts");




var PortalHomeComponent = /** @class */ (function () {
    function PortalHomeComponent(sideMenuService, appService) {
        this.sideMenuService = sideMenuService;
        this.appService = appService;
    }
    PortalHomeComponent.ctorParameters = function () { return [
        { type: _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
    ]; };
    PortalHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-home',
            template: __webpack_require__(/*! raw-loader!./portal-home.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-home/portal-home.component.html"),
            styles: [__webpack_require__(/*! ./portal-home.component.scss */ "./src/app/portal-home/portal-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], PortalHomeComponent);
    return PortalHomeComponent;
}());



/***/ }),

/***/ "./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .side-menu-panel {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n}\n\n.side-menu-title {\n  margin-left: 10px;\n  width: 280px;\n  height:60px;\n  line-height: 60px;\n  text-align: left;\n  color: #0060B9;\n  background-color: lightgrey;\n}\n\n.side-menu-item {\n  margin-left: 10px;\n  margin-bottom: 5px;\n}\n\n.menu-item-text {\n  color: #0060B9;\n  font-size: 19px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9wb3J0YWwtY29yZS9zcmMvYXBwL3BvcnRhbC1zaWRlLW1lbnUvcG9ydGFsLXNpZGUtbWVudS1jb250ZW50L3BvcnRhbC1zaWRlLW1lbnUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEiLCJmaWxlIjoicHJvamVjdHMvcG9ydGFsLWNvcmUvc3JjL2FwcC9wb3J0YWwtc2lkZS1tZW51L3BvcnRhbC1zaWRlLW1lbnUtY29udGVudC9wb3J0YWwtc2lkZS1tZW51LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuc2lkZS1tZW51LXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zaWRlLW1lbnUtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6NjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDA2MEI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5zaWRlLW1lbnUtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tZW51LWl0ZW0tdGV4dCB7XG4gIGNvbG9yOiAjMDA2MEI5O1xuICBmb250LXNpemU6IDE5cHg7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PortalSideMenuContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSideMenuContentComponent", function() { return PortalSideMenuContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/services/side-menu.service */ "./src/app/_common/services/side-menu.service.ts");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/application.service */ "./src/app/_common/services/application.service.ts");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");





var PortalSideMenuContentComponent = /** @class */ (function () {
    function PortalSideMenuContentComponent(appService, sideMenuService, QaHelpService) {
        this.appService = appService;
        this.sideMenuService = sideMenuService;
        this.QaHelpService = QaHelpService;
        this.openedDrawerEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PortalSideMenuContentComponent.prototype.toggleDrawer = function () {
        this.opened = !this.opened;
        this.openedDrawerEmmiter.emit(this.opened);
    };
    PortalSideMenuContentComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] },
        { type: _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PortalSideMenuContentComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortalSideMenuContentComponent.prototype, "openedDrawerEmmiter", void 0);
    PortalSideMenuContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-side-menu-content',
            template: __webpack_require__(/*! raw-loader!./portal-side-menu-content.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.html"),
            styles: [__webpack_require__(/*! ./portal-side-menu-content.component.scss */ "./src/app/portal-side-menu/portal-side-menu-content/portal-side-menu-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
            _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"]])
    ], PortalSideMenuContentComponent);
    return PortalSideMenuContentComponent;
}());



/***/ }),

/***/ "./src/app/portal-side-menu/portal-side-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portal-side-menu/portal-side-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: PortalSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSideMenuComponent", function() { return PortalSideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/side-menu.service */ "./src/app/_common/services/side-menu.service.ts");
/* harmony import */ var _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/services/qa-help.service */ "./src/app/_common/services/qa-help.service.ts");





var PortalSideMenuComponent = /** @class */ (function () {
    function PortalSideMenuComponent(sideMenuService, helpService) {
        this.sideMenuService = sideMenuService;
        this.helpService = helpService;
        this.animating = false;
    }
    PortalSideMenuComponent.prototype.start = function () {
        this.animating = true;
        this.tick();
    };
    PortalSideMenuComponent.prototype.done = function () {
        this.animating = false;
    };
    PortalSideMenuComponent.prototype.tick = function () {
        var _this = this;
        if (this.animating) {
            requestAnimationFrame(function () { return _this.tick(); });
        }
    };
    PortalSideMenuComponent.ctorParameters = function () { return [
        { type: _common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] },
        { type: _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"] }
    ]; };
    PortalSideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal-side-menu',
            template: __webpack_require__(/*! raw-loader!./portal-side-menu.component.html */ "../../node_modules/raw-loader/index.js!./src/app/portal-side-menu/portal-side-menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('sidenavAnimationIsExpanded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '300px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '56px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-in-out'))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"], _common_services_qa_help_service__WEBPACK_IMPORTED_MODULE_4__["QaHelpService"]])
    ], PortalSideMenuComponent);
    return PortalSideMenuComponent;
}());



/***/ }),

/***/ "./src/environments/endpoints.ts":
/*!***************************************!*\
  !*** ./src/environments/endpoints.ts ***!
  \***************************************/
/*! exports provided: endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
var endpoints = {
    SELF_REFLECTION_QUESTION_API: 'self-reflection-api/question',
    GET_ALL_SELF_REFLECTIONS_API: 'self-reflection-api/reflections',
    UPDATE_SELF_REFLECTION_API: 'self-reflection-api/reflection',
    SAVE_REFLECTION_FORM: 'self-reflection-api/reflection',
    CREATE_SELF_REFLECTION_API: 'self-reflection-api/reflection/',
    GET_SELF_REFLECTION_API: 'self-reflection-api/reflection',
    CREATE_SELF_REFLECTION_QUESTIONS_API: 'self-reflection-api/reflection-question',
    GET_ALL_RATED_QUESTIONS_API: 'self-reflection-api/reflection-question/questions',
    GET_SELF_REFLECTION_API_BY_ID: 'self-reflection-api/reflection/:id',
    GET_SELF_REFLECTIONS_FOR_TRAINEE_API: 'self-reflection-api/reflection/trainee',
    GET_SELF_REFLECTION_TRAINEE_BY_ID: 'self-reflection-api/reflection/trainee/:traineeId',
    GET_SELF_REFLECTIONS_BY_STATUS_API: 'self-reflection-api/reflection/trainee/status',
    USER_API_TRAINEES_FOR_REVIEW: 'self-reflection-api/reflection/cohort/trainees/review/',
    GET_USER_API_TRAINEES_FOR_REVIEW: 'self-reflection-api/reflection/cohort/trainees/review/:cohortId',
    GET_SELF_REFLECTION_SUMMARY: '/self-reflection-api/reflection/summary',
    USER_API: 'cohort-api/user',
    GET_TRAINEE: 'cohort-api/user/trainee/',
    GET_TRAINEE_COHORT: '/cohort-api/user/trainee/cohort',
    GET_SKILLS_FOR_TRAINEE: 'cohort-api/user/trainee/skills',
    GET_USER_API_COHORTS: 'cohort-api/user/trainer/cohorts',
    GET_COHORTS: 'cohort-api/cohorts',
    GET_COHORT_BY_ID: 'cohort-api/cohort/:id',
    USER_API_TRAINEES: 'cohort-api/cohort/trainees/',
    GET_USER_API_TRAINEES: 'cohort-api/cohort/trainees/:id',
    GET_ALL_COURSES: 'cohort-api/courses',
    GET_COURSE_BY_ID: '/cohort-api/course/:id',
    GET_TRAINERS_AVAILABLE_FOR_COHORT: 'cohort-api/manage/users/trainers',
    CREATE_COHORT: 'cohort-api/manage/cohort',
    SAVE_COHORT: 'cohort-api/manage/cohort',
    SAVE_COURSE: 'cohort-api/manage/course',
    CREATE_COURSE: 'cohort-api/manage/course',
    SAVE_LOCATION: '/cohort-api/manage/location',
    CREATE_LOCATION: '/cohort-api/manage/location',
    GET_AVAILABLE_TRAINEES_BY_COHORT_ID: '/cohort-api/manage/users/available-trainees/cohort/:id',
    GET_ALL_USERS: 'cohort-api/manage/users',
    UPDATE_USERS: 'cohort-api/manage/users',
    DELETE_USERS: 'cohort-api/manage/users/delete',
    CREATE_USER: 'cohort-api/manage/user',
    UPDATE_USER: 'cohort-api/manage/user',
    GET_USER_BY_USERNAME: 'cohort-api/manage/user/:username',
    SAVE_TECHNOLOGY_CATEGORY: 'cohort-api/manage/technology/category',
    CREATE_TECHNOLOGY_CATEGORY: 'cohort-api/manage/technology/category',
    GET_ALL_TECHNOLOGY_CATEGORIES: 'cohort-api/technology/categories',
    GET_ALL_TECHNOLOGY_CATEGORY_BY_ID: 'cohort-api/technology/category/:id',
    GET_ALL_LOCATIONS: '/cohort-api/locations',
    GET_LOCATION_BY_ID: '/cohort-api/location/:id',
    GET_ALL_FEEDBACK_API: 'course-feedback-api/question-feedback',
    GET_CV_FOR_ID: 'cv-api/cv/:id',
    GET_CURRENT_CV: 'cv-api/cv/trainee/current',
    GENERATE_CV: 'cv-api/cv/generated',
    SAVE_CV_DATA: 'cv-api/cv',
    GET_FORM_TYPE: 'form-api/form/:formType/categories',
    GET_ALL_FORMS: '/form-api/forms',
    GET_FORM_BY_ID: '/form-api/form/:id',
    GET_FORM_TYPE_QUESTIONS: 'form-api/form/:formType/questions',
    CREATE_FORM: '/form-api/manage/form',
    SAVE_FORM: '/form-api/manage/form',
    SEND_EVAL_RESPONSE: 'feedback-api/feedback',
    CREATE_FEEDBACK_FORM: 'feedback-api/feedback',
    UPDATE_FEEDBACK_FORM: 'feedback-api/feedback',
    GET_EVALUATION_FORM_FOR_ID: 'feedback-api/evaluation/:courseId',
    CREATE_EVALUATION_FORM: 'feedback-api/evaluation',
    UPDATE_EVALUATION_FORM: 'feedback-api/evaluation',
    GET_TRAINER_EVALUATION_SUMMARY: 'feedback-api/evaluation/course/:courseId',
    GET_COHORT_COURSES_FOR_TRAINER: '/feedback-api/evaluation/trainer',
    GET_TRAINEE_EVALUATION_SUMMARY: 'feedback-api/evaluation/trainee/summary',
    GET_EVALUATION_FORMS_FOR_TRAINEE: 'feedback-api/evaluation/trainee',
    GET_EVALUATION_FOR_TRAINEE_AND_COURSE: 'feedback-api/evaluation/trainee/course/:cohortCourseId',
    GET_EVALUATION_FORMS_FOR_COHORT_COURSE: 'feedback-api/evaluation/course/:cohortCourseId',
    GET_FEEDBACK_HISTORY_FOR_TRAINER: 'feedback-api/feedback/trainer',
    GET_FEEDBACK_FOR_COURSE: 'feedback-api/feedback/course/:courseId',
    GET_FEEDBACK_FOR_ID: 'feedback-api/feedback/:id',
    PORTAL_APPLICATIONS_API: 'portal-application-api/portal/applications',
    GET_ALL_APPLICATIONS: '/portal-application-api/manage/portal/applications',
    CREATE_APPLICATION: '/portal-application-api/manage/portal/application',
    GET_APPLICATION_BY_ID: '/portal-application-api/manage/portal/application/:id',
    SAVE_APPLICATION: '/portal-application-api/manage/portal/application',
    GET_ALL_PORTAL_PROJECTS: '/portal-application-api/portal/projects',
    CREATE_PORTAL_PROJECT: '/portal-application-api/manage/portal/project',
    GET_PORTAL_PROJECT_BY_ID: '/portal-application-api/portal/project/:id',
    SAVE_PORTAL_PROJECT: '/portal-application-api/manage/portal/project',
    GET_ALL_ROLES: '/portal-application-api/manage/roles',
    GET_ALL_ROLE_NAMES: '/portal-application-api/manage/roles/names',
    GET_ROLE_BY_ID: '/portal-application-api/role/:id',
    SAVE_ROLE: '/portal-application-api/manage/role',
    CREATE_ROLE: '/portal-application-api/manage/role',
    CV_SEARCH: 'cv-api/cv/search',
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    host: 'http://localhost:4200/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/projects/portal-core/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map