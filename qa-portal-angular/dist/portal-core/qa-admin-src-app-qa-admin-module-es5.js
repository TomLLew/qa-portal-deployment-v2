(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qa-admin-src-app-qa-admin-module"],{

/***/ "../../node_modules/angular-calendar/date-adapters/date-fns/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var date_fns_1 = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ "../../node_modules/calendar-utils/date-adapters/date-fns/index.js");
var addWeeks = __webpack_require__(/*! date-fns/add_weeks/index */ "../../node_modules/date-fns/add_weeks/index.js");
var addMonths = __webpack_require__(/*! date-fns/add_months/index */ "../../node_modules/date-fns/add_months/index.js");
var subDays = __webpack_require__(/*! date-fns/sub_days/index */ "../../node_modules/date-fns/sub_days/index.js");
var subWeeks = __webpack_require__(/*! date-fns/sub_weeks/index */ "../../node_modules/date-fns/sub_weeks/index.js");
var subMonths = __webpack_require__(/*! date-fns/sub_months/index */ "../../node_modules/date-fns/sub_months/index.js");
var getISOWeek = __webpack_require__(/*! date-fns/get_iso_week/index */ "../../node_modules/date-fns/get_iso_week/index.js");
var setDate = __webpack_require__(/*! date-fns/set_date/index */ "../../node_modules/date-fns/set_date/index.js");
var setMonth = __webpack_require__(/*! date-fns/set_month/index */ "../../node_modules/date-fns/set_month/index.js");
var setYear = __webpack_require__(/*! date-fns/set_year/index */ "../../node_modules/date-fns/set_year/index.js");
var getDate = __webpack_require__(/*! date-fns/get_date/index */ "../../node_modules/date-fns/get_date/index.js");
var getYear = __webpack_require__(/*! date-fns/get_year/index */ "../../node_modules/date-fns/get_year/index.js");
function adapterFactory() {
    return tslib_1.__assign({}, date_fns_1.adapterFactory(), { addWeeks: addWeeks,
        addMonths: addMonths,
        subDays: subDays,
        subWeeks: subWeeks,
        subMonths: subMonths,
        getISOWeek: getISOWeek,
        setDate: setDate,
        setMonth: setMonth,
        setYear: setYear,
        getDate: getDate,
        getYear: getYear });
}
exports.adapterFactory = adapterFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/angular-calendar/fesm5/angular-calendar.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/angular-calendar/fesm5/angular-calendar.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: DAYS_OF_WEEK, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return CalendarEventTimesChangedEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return CalendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return getWeekViewPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CalendarOpenDayEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CalendarEventActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CalendarEventTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CalendarTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CalendarPreviousViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CalendarNextViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CalendarTodayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return CalendarEventTitlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CalendarMonthCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CalendarMonthViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CalendarWeekViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CalendarWeekViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return CalendarWeekViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CalendarDayViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! positioning */ "../../node_modules/positioning/dist/entry.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! calendar-utils */ "../../node_modules/calendar-utils/calendar-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return calendar_utils__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"]; });

/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-draggable-droppable */ "../../node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-resizable-element */ "../../node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByActionId = (/**
         * @param {?} index
         * @param {?} action
         * @return {?}
         */
        function (index, action) {
            return action.id ? action.id : action;
        });
    }
    CalendarEventActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event })\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventActionsComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarEventActionsComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventTitleComponent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarEventTitleComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-tooltip-window',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarTooltipWindowComponent.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarTooltipWindowComponent;
}());
if (false) {}
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        // tslint:disable-line no-input-rename
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        // tslint:disable-line no-input-rename
        this.delay = null; // tslint:disable-line no-input-rename
        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
        delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.show();
        }));
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @private
     * @return {?}
     */
    CalendarTooltipDirective.prototype.show = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                _this.positionTooltip();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CalendarTooltipDirective.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    };
    /**
     * @private
     * @param {?=} previousPositions
     * @return {?}
     */
    CalendarTooltipDirective.prototype.positionTooltip = /**
     * @private
     * @param {?=} previousPositions
     * @return {?}
     */
    function (previousPositions) {
        if (previousPositions === void 0) { previousPositions = []; }
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(previousPositions, [
                    this.tooltipRef.instance.placement
                ]));
            }
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] }
    ];
    /** @nocollapse */
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    CalendarTooltipDirective.propDecorators = {
        contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mwlCalendarTooltip',] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTemplate',] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEvent',] }],
        appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] }],
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipDelay',] }],
        onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        onMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return CalendarTooltipDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
DateAdapter = /** @class */ (function () {
    function DateAdapter() {
    }
    return DateAdapter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarView = {
    Month: 'month',
    Week: 'week',
    Day: 'day',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var validateEvents = (/**
 * @param {?} events
 * @return {?}
 */
function (events) {
    /** @type {?} */
    var warn = (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(['angular-calendar'], args));
    });
    return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(events, warn);
});
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
function isInside(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right) &&
        Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
/**
 * @param {?} amount
 * @param {?} precision
 * @return {?}
 */
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
/** @type {?} */
var trackByEventId = (/**
 * @param {?} index
 * @param {?} event
 * @return {?}
 */
function (index, event) {
    return event.id ? event.id : event;
});
/** @type {?} */
var trackByWeekDayHeaderDate = (/**
 * @param {?} index
 * @param {?} day
 * @return {?}
 */
function (index, day) {
    return day.date.toISOString();
});
/** @type {?} */
var trackByHourSegment = (/**
 * @param {?} index
 * @param {?} segment
 * @return {?}
 */
function (index, segment) { return segment.date.toISOString(); });
/** @type {?} */
var trackByHour = (/**
 * @param {?} index
 * @param {?} hour
 * @return {?}
 */
function (index, hour) {
    return hour.segments[0].date.toISOString();
});
/** @type {?} */
var trackByDayOrWeekEvent = (/**
 * @param {?} index
 * @param {?} weekEvent
 * @return {?}
 */
function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); });
/** @type {?} */
var MINUTES_IN_HOUR = 60;
/**
 * @param {?} movedY
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @param {?} eventSnapSize
 * @return {?}
 */
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    /** @type {?} */
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    /** @type {?} */
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
/**
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @return {?}
 */
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return ((MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * hourSegmentHeight);
}
/**
 * @param {?} dateAdapter
 * @param {?} event
 * @param {?} minimumMinutes
 * @return {?}
 */
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
/**
 * @param {?} dateAdapter
 * @param {?} date
 * @param {?} days
 * @param {?} excluded
 * @return {?}
 */
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    /** @type {?} */
    var daysCounter = 0;
    /** @type {?} */
    var daysToAdd = 0;
    /** @type {?} */
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    /** @type {?} */
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
/**
 * @param {?} newStart
 * @param {?} newEnd
 * @param {?} period
 * @return {?}
 */
function isDraggedWithinPeriod(newStart, newEnd, period) {
    /** @type {?} */
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
/**
 * @param {?} dropEvent
 * @param {?} date
 * @param {?} allDay
 * @param {?} calendarId
 * @return {?}
 */
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
/**
 * @param {?} dateAdapter
 * @param {?} viewDate
 * @param {?} weekStartsOn
 * @param {?=} excluded
 * @param {?=} daysInWeek
 * @return {?}
 */
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    /** @type {?} */
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    /** @type {?} */
    var endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
        viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
    }
    if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        /** @type {?} */
        var viewEnd = endOfWeek;
        while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
            viewEnd > viewStart) {
            viewEnd = dateAdapter.subDays(viewEnd, 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinThreshold(_a) {
    var x = _a.x, y = _a.y;
    /** @type {?} */
    var DRAG_THRESHOLD = 1;
    return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarPreviousViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    CalendarPreviousViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] }
    ];
    /** @nocollapse */
    CalendarPreviousViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarPreviousViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarPreviousViewDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarNextViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    };
    CalendarNextViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] }
    ];
    /** @nocollapse */
    CalendarNextViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarNextViewDirective.propDecorators = {
        view: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarNextViewDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarTodayDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    };
    CalendarTodayDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] }
    ];
    /** @nocollapse */
    CalendarTodayDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarTodayDirective.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return CalendarTodayDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'd', locale);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'LLLL y', locale);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'MMM d', locale);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
    };
    CalendarAngularDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarAngularDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarAngularDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    CalendarDatePipe.prototype.transform = /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @param {?=} weekStartsOn
     * @param {?=} excludeDays
     * @param {?=} daysInWeek
     * @return {?}
     */
    function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        if (typeof this.dateFormatter[method] === 'undefined') {
            /** @type {?} */
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((/**
             * @param {?} iMethod
             * @return {?}
             */
            function (iMethod) { return iMethod !== 'constructor'; }));
            throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
        }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
        });
    };
    CalendarDatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'calendarDate'
                },] }
    ];
    /** @nocollapse */
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
    ]; };
    return CalendarDatePipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var  /**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.month = /**
     * The month view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.week = /**
     * The week view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.day = /**
     * The day view event title.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @param {?} title
     * @return {?}
     */
    function (event, title) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitlePipe.prototype.transform = /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    };
    CalendarEventTitlePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] }
    ];
    /** @nocollapse */
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter }
    ]; };
    return CalendarEventTitlePipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.stopPropagation();
                _this.click.emit(event);
            }));
        }
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @private
     * @return {?}
     */
    ClickDirective.prototype.listen = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.renderer.listen(_this.elm.nativeElement, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                observer.next(event);
            }));
        }));
    };
    ClickDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] }
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    ClickDirective.propDecorators = {
        clickListenerDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['mwlClick',] }]
    };
    return ClickDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getMonthView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getMonthView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekViewHeader = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekViewHeader"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getDayView"])(this.dateAdapter, args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayViewHourGrid = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getDayViewHourGrid"])(this.dateAdapter, args);
    };
    CalendarUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarUtils.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarUtils;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMM D');
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : ''));
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MOMENT,] }] },
        { type: DateAdapter }
    ]; };
    return CalendarMomentDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        /** @type {?} */
        var format = (/**
         * @param {?} dateToFormat
         * @param {?} showYear
         * @return {?}
         */
        function (dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
        });
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewHour = /**
     * The time formatting down the left hand side of the week view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    CalendarNativeDateFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    CalendarNativeDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return CalendarNativeDateFormatter;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The parameter type passed to the date formatter methods.
 * @record
 */
function DateFormatterParams() { }
if (false) {}
/**
 * If using a completely custom date formatter then it should implement this interface.
 * @record
 */
function CalendarDateFormatterInterface() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CalendarEventTimesChangedEventType = {
    Drag: 'drag',
    Drop: 'drop',
    Resize: 'resize',
};
/**
 * The output `$event` type when an event is resized or dragged and dropped.
 * @record
 * @template MetaType
 */
function CalendarEventTimesChangedEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarModuleConfig() { }
if (false) {}
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarCommonModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarCommonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    entryComponents: [CalendarTooltipWindowComponent]
                },] }
    ];
    return CalendarCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarMonthViewBeforeRenderEvent() { }
if (false) {}
/**
 * @record
 * @template EventMetaType, DayMetaType
 */
function CalendarMonthViewEventTimesChangedEvent() { }
if (false) {}
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this = this;
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.trackByRowOffset = (/**
         * @param {?} index
         * @param {?} offset
         * @return {?}
         */
        function (index, offset) {
            return _this.view.days
                .slice(offset, _this.view.totalDaysVisibleInWeek)
                .map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return day.date.toISOString(); }))
                .join('-');
        });
        /**
         * @hidden
         */
        this.trackByDate = (/**
         * @param {?} index
         * @param {?} day
         * @return {?}
         */
        function (index, day) { return day.date.toISOString(); });
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        /** @type {?} */
        var refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    function (event, isHighlighted) {
        this.view.days.forEach((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        }));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} droppedOn
     * @param {?} event
     * @param {?=} draggedFrom
     * @return {?}
     */
    function (droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            /** @type {?} */
            var year = this.dateAdapter.getYear(droppedOn.date);
            /** @type {?} */
            var month = this.dateAdapter.getMonth(droppedOn.date);
            /** @type {?} */
            var date = this.dateAdapter.getDate(droppedOn.date);
            /** @type {?} */
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            /** @type {?} */
            var newEnd = void 0;
            if (event.end) {
                /** @type {?} */
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
            });
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshHeader = /**
     * @protected
     * @return {?}
     */
    function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshBody = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            /** @type {?} */
            var activeDay_1 = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                return _this.dateAdapter.isSameDay(day.date, activeDay_1);
            }));
            /** @type {?} */
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n        >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeDayIsOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDayEventsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dayClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"columnHeaderClicked.emit(day.day)\"\n          [ngClass]=\"day.cssClass\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarMonthViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columnHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthViewHeaderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
    CalendarMonthCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n          day.badgeTotal\n        }}</span>\n        <span class=\"cal-day-number\">{{\n          day.date | calendarDate: 'monthViewDayNumber':locale\n        }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[class.cal-event-highlight]': '!!day.backgroundColor'
                    }
                }] }
    ];
    CalendarMonthCellComponent.propDecorators = {
        day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        highlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        unhighlightDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarMonthCellComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-in'))
]);
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({ event: event })\"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                    animations: [collapseAnimation]
                }] }
    ];
    CalendarOpenDayEventsComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarOpenDayEventsComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
                    declarations: [
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ],
                    exports: [
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ]
                },] }
    ];
    return CalendarMonthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
        if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
            });
            return ((isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
        }
    };
    return CalendarDragHelper;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarResizeHelper.prototype.validateResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WeekViewAllDayEventResize() { }
if (false) {}
/**
 * @record
 */
function CalendarWeekViewBeforeRenderEvent() { }
if (false) {}
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = (/**
         * @param {?} index
         * @param {?} column
         * @return {?}
         */
        function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        });
        /**
         * @hidden
         */
        this.trackById = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        function (index, row) { return row.id; });
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHeader = changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek ||
            changes.weekStartsOn;
        /** @type {?} */
        var refreshBody = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @protected
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeStarted = /**
     * @protected
     * @param {?} eventsContainer
     * @param {?=} minWidth
     * @return {?}
     */
    function (eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        });
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizing = /**
     * @hidden
     * @param {?} timeEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (timeEvent, resizeEvent) {
        var _this = this;
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        /** @type {?} */
        var adjustedEvents = new Map();
        /** @type {?} */
        var tempEvents = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(this.events);
        this.timeEventResizes.forEach((/**
         * @param {?} lastResizeEvent
         * @param {?} event
         * @return {?}
         */
        function (lastResizeEvent, event) {
            /** @type {?} */
            var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
            /** @type {?} */
            var adjustedEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            /** @type {?} */
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        }));
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.timeEventResizeEnded = /**
     * @hidden
     * @param {?} timeEvent
     * @return {?}
     */
    function (timeEvent) {
        this.view = this.getWeekView(this.events);
        /** @type {?} */
        var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            /** @type {?} */
            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeStarted = /**
     * @hidden
     * @param {?} allDayEventsContainer
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizing = /**
     * @hidden
     * @param {?} allDayEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    function (allDayEvent, resizeEvent, dayWidth) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeEnded = /**
     * @hidden
     * @param {?} allDayEvent
     * @return {?}
     */
    function (allDayEvent) {
        /** @type {?} */
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
            /** @type {?} */
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            /** @type {?} */
            var daysDiff = void 0;
            if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
            }
            else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
            }
            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            /** @type {?} */
            var newStart = allDayEvent.event.start;
            /** @type {?} */
            var newEnd = allDayEvent.event.end || allDayEvent.event.start;
            if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            }
            else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }
            this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: allDayEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragEnter = /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.eventDragEnterByType[type]++;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragLeave = /**
     * @hidden
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.eventDragEnterByType[type]--;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragStarted = /**
     * @hidden
     * @param {?} eventsContainer
     * @param {?} event
     * @param {?=} dayEvent
     * @return {?}
     */
    function (eventsContainer, event, dayEvent) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, transform = _a.transform;
            return _this.allDayEventResizes.size === 0 &&
                _this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents,
                    dragAlreadyMoved: _this.dragAlreadyMoved,
                    transform: transform
                });
        });
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                /** @type {?} */
                var linkedEvent = column.events.find((/**
                 * @param {?} columnEvent
                 * @return {?}
                 */
                function (columnEvent) {
                    return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                }));
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragMove = /**
     * @hidden
     * @param {?} dayEvent
     * @param {?} dragEvent
     * @return {?}
     */
    function (dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            /** @type {?} */
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            /** @type {?} */
            var originalEvent_1 = dayEvent.event;
            /** @type {?} */
            var adjustedEvent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, originalEvent_1, newEventTimes);
            /** @type {?} */
            var tempEvents = this.events.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event === originalEvent_1) {
                    return adjustedEvent_1;
                }
                return event;
            }));
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent_1, originalEvent_1]]));
        }
        this.dragAlreadyMoved = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.allDayEventDragMove = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.dragAlreadyMoved = true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragEnded = /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?=} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        if (useY === void 0) { useY = false; }
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
        if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
            });
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshHeader = /**
     * @protected
     * @return {?}
     */
    function () {
        this.days = this.utils.getWeekViewHeader(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshBody = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.getWeekView(this.events);
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ header: this.days }, this.view));
        }
    };
    /**
     * @protected
     * @param {?} events
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getWeekView = /**
     * @protected
     * @param {?} events
     * @return {?}
     */
    function (events) {
        return this.utils.getWeekView(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    /**
     * @protected
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDragMovedEventTimes = /**
     * @protected
     * @param {?} weekEvent
     * @param {?} dragEndEvent
     * @param {?} dayWidth
     * @param {?} useY
     * @return {?}
     */
    function (weekEvent, dragEndEvent, dayWidth, useY) {
        /** @type {?} */
        var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        /** @type {?} */
        var minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        /** @type {?} */
        var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        /** @type {?} */
        var end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return { start: start, end: end };
    };
    /**
     * @protected
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.restoreOriginalEvents = /**
     * @protected
     * @param {?} tempEvents
     * @param {?} adjustedEvents
     * @return {?}
     */
    function (tempEvents, adjustedEvents) {
        /** @type {?} */
        var previousView = this.view;
        this.view = this.getWeekView(tempEvents);
        /** @type {?} */
        var adjustedEventsArray = tempEvents.filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return adjustedEvents.has(event);
        }));
        this.view.hourColumns.forEach((/**
         * @param {?} column
         * @param {?} columnIndex
         * @return {?}
         */
        function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach((/**
             * @param {?} hour
             * @param {?} hourIndex
             * @return {?}
             */
            function (hour, hourIndex) {
                hour.segments.forEach((/**
                 * @param {?} segment
                 * @param {?} segmentIndex
                 * @return {?}
                 */
                function (segment, segmentIndex) {
                    column.hours[hourIndex].segments[segmentIndex].cssClass =
                        segment.cssClass;
                }));
            }));
            adjustedEventsArray.forEach((/**
             * @param {?} adjustedEvent
             * @return {?}
             */
            function (adjustedEvent) {
                /** @type {?} */
                var originalEvent = adjustedEvents.get(adjustedEvent);
                /** @type {?} */
                var existingColumnEvent = column.events.find((/**
                 * @param {?} columnEvent
                 * @return {?}
                 */
                function (columnEvent) { return columnEvent.event === adjustedEvent; }));
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            }));
        }));
        adjustedEvents.clear();
    };
    /**
     * @protected
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getTimeEventResizedDates = /**
     * @protected
     * @param {?} calendarEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (calendarEvent, resizeEvent) {
        /** @type {?} */
        var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        /** @type {?} */
        var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        var end = calendarEvent.end, eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(calendarEvent, ["end"]);
        /** @type {?} */
        var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            /** @type {?} */
            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            /** @type {?} */
            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (typeof resizeEvent.edges.top !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.top)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved((/** @type {?} */ (resizeEvent.edges.bottom)), this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    };
    CalendarWeekViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByDayOrWeekEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: allDayEvent.event })\"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <div\n              *ngFor=\"\n                let timeEvent of column.events;\n                trackBy: trackByDayOrWeekEvent\n              \"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"\n                timeEvent.event.draggable && timeEventResizes.size === 0\n              \"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{\n                left: dayColumnWidth,\n                right: dayColumnWidth,\n                top: eventSnapSize || hourSegmentHeight,\n                bottom: eventSnapSize || hourSegmentHeight\n              }\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"\n                timeEventResizeStarted(dayColumns, timeEvent, $event)\n              \"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"\n                snapDraggedEvents\n                  ? { x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight }\n                  : {}\n              \"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n            >\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.beforeStart &&\n                  !timeEvent.startsBeforeDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\"\n              ></div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [tooltipDelay]=\"tooltipDelay\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                [column]=\"column\"\n                (eventClicked)=\"eventClicked.emit({ event: timeEvent.event })\"\n              >\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.afterEnd &&\n                  !timeEvent.endsAfterDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\"\n              ></div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excludeDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekStartsOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        precision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        weekendDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        allDayEventsLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        daysInWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHeaderComponent.propDecorators = {
        days: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayHeaderClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventDropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewHeaderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle: 'weekTooltip':weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewEventComponent.propDecorators = {
        weekEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarWeekViewEventComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
    function CalendarWeekViewHourSegmentComponent() {
    }
    CalendarWeekViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.displayDate | calendarDate: 'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarWeekViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isTimeLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarWeekViewHourSegmentComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarWeekViewHourSegmentComponent
                    ]
                },] }
    ];
    return CalendarWeekModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CalendarDayViewBeforeRenderEvent() { }
if (false) {}
/**
 * @hidden
 * @record
 */
function DayViewEventResize() { }
if (false) {}
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe((/**
             * @return {?}
             */
            function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var refreshHourGrid = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments;
        /** @type {?} */
        var refreshView = changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth ||
            changes.hourSegments;
        if (refreshHourGrid) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshView) {
            this.refreshView();
        }
        if (refreshHourGrid || refreshView) {
            this.emitBeforeViewRender();
        }
    };
    /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDropped = /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @return {?}
     */
    function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeStarted = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayEventsContainer
     * @return {?}
     */
    function (event, resizeEvent, dayEventsContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        /** @type {?} */
        var resizeHelper = new CalendarResizeHelper(dayEventsContainer);
        this.validateResize = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        });
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizing = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    function (event, resizeEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(event);
        if (typeof resizeEvent.edges.top !== 'undefined') {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    /**
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeEnded = /**
     * @param {?} dayEvent
     * @return {?}
     */
    function (dayEvent) {
        /** @type {?} */
        var currentResize = this.currentResizes.get(dayEvent);
        /** @type {?} */
        var resizingBeforeStart = currentResize.edge === 'top';
        /** @type {?} */
        var pixelsMoved;
        if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        /** @type {?} */
        var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
        /** @type {?} */
        var newStart = dayEvent.event.start;
        /** @type {?} */
        var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));
        if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
        }
        else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.currentResizes.delete(dayEvent);
    };
    /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragStarted = /**
     * @param {?} event
     * @param {?} dayEventsContainer
     * @param {?} dayEvent
     * @return {?}
     */
    function (event, dayEventsContainer, dayEvent) {
        var _this = this;
        /** @type {?} */
        var dragHelper = new CalendarDragHelper(dayEventsContainer, event);
        this.validateDrag = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, transform = _a.transform;
            return _this.currentResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents,
                    dragAlreadyMoved: _this.dragAlreadyMoved,
                    transform: transform
                });
        });
        this.eventDragEnter = 0;
        this.dragAlreadyMoved = false;
        this.currentDrag = {
            dayEvent: dayEvent,
            originalTop: dayEvent.top,
            originalLeft: dayEvent.left
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} coords
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragMove = /**
     * @hidden
     * @param {?} coords
     * @return {?}
     */
    function (coords) {
        this.dragAlreadyMoved = true;
        if (this.snapDraggedEvents) {
            this.currentDrag.dayEvent.top = this.currentDrag.originalTop + coords.y;
            this.currentDrag.dayEvent.left = this.currentDrag.originalLeft + coords.x;
        }
    };
    /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragEnded = /**
     * @param {?} dayEvent
     * @param {?} dragEndEvent
     * @return {?}
     */
    function (dayEvent, dragEndEvent) {
        this.currentDrag.dayEvent.top = this.currentDrag.originalTop;
        this.currentDrag.dayEvent.left = this.currentDrag.originalLeft;
        this.currentDrag = null;
        if (this.eventDragEnter > 0) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */
            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);
            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
                minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
                newStart = this.view.period.start;
            }
            /** @type {?} */
            var newEnd = void 0;
            if (dayEvent.event.end) {
                newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }
            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: dayEvent.event,
                    type: CalendarEventTimesChangedEventType.Drag,
                    allDay: false
                });
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshHourGrid = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshView = /**
     * @protected
     * @return {?}
     */
    function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshAll = /**
     * @protected
     * @return {?}
     */
    function () {
        this.refreshHourGrid();
        this.refreshView();
        this.emitBeforeViewRender();
    };
    /**
     * @protected
     * @return {?}
     */
    CalendarDayViewComponent.prototype.emitBeforeViewRender = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours,
                    allDayEvents: this.view.allDayEvents
                },
                period: this.view.period
            });
        }
    };
    CalendarDayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\"\n      >\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy: trackByEventId\"\n          [ngClass]=\"event.cssClass\"\n          [dayEvent]=\"{ event: event }\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({ event: event })\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, calendarId: calendarId }\"\n          [dragAxis]=\"{\n            x: !snapDraggedEvents && event.draggable,\n            y: !snapDraggedEvents && event.draggable\n          }\"\n        >\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy: trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{\n              top: eventSnapSize || hourSegmentHeight,\n              bottom: eventSnapSize || hourSegmentHeight\n            }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: dayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x:\n                !snapDraggedEvents &&\n                dayEvent.event.draggable &&\n                currentResizes.size === 0,\n              y: dayEvent.event.draggable && currentResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"\n              snapDraggedEvents ? { y: eventSnapSize || hourSegmentHeight } : {}\n            \"\n            [validateDrag]=\"validateDrag\"\n            [ghostDragEnabled]=\"!snapDraggedEvents\"\n            (dragStart)=\"dragStarted(event, dayEventsContainer, dayEvent)\"\n            (dragging)=\"dragMove($event)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.beforeStart &&\n                !dayEvent.startsBeforeDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\"\n            ></div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: dayEvent.event })\"\n            >\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\"\n            ></div>\n          </div>\n        </div>\n        <div\n          class=\"cal-hour\"\n          *ngFor=\"let hour of hours; trackBy: trackByHour\"\n          [style.minWidth.px]=\"view?.width + 70\"\n        >\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n            [clickListenerDisabled]=\"hourSegmentClicked.observers.length === 0\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\"\n          >\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
        { type: DateAdapter }
    ]; };
    CalendarDayViewComponent.propDecorators = {
        viewDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayStartMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndHour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dayEndMinute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventSnapSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hourSegmentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        snapDraggedEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hourSegmentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        eventTimesChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        beforeViewRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarDayViewComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\">\n          {{ segment.displayDate | calendarDate: 'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewHourSegmentComponent.propDecorators = {
        segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        segmentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CalendarDayViewHourSegmentComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: dayEvent.event.color?.secondary,\n          borderColor: dayEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          dayEvent.event.title | calendarEventTitle: 'dayTooltip':dayEvent.event\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarDayViewEventComponent.propDecorators = {
        dayEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAppendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventActionsTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CalendarDayViewEventComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                        CalendarDayViewComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ]
                },] }
    ];
    return CalendarDayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    CalendarModule.forRoot = /**
     * @param {?} dateAdapter
     * @param {?=} config
     * @return {?}
     */
    function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ],
                    exports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ]
                },] }
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-calendar.js.map


/***/ }),

/***/ "../../node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function() { return DragAndDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DraggableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DraggableScrollContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DroppableDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-autoscroller */ "../../node_modules/dom-autoscroller/dist/bundle.js");
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    DraggableHelper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
    return DraggableHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
 * <div style="overflow: scroll" mwlDraggableScrollContainer>
 * <div mwlDraggable>Drag me!</div>
 * </div>
 * ```
 */
var DraggableScrollContainerDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableScrollContainerDirective(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         */
        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         */
        this.longPressConfig = { duration: 300, delta: 30 };
        this.cancelledScroll = false;
    }
    /**
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.renderer.listen(_this.elementRef.nativeElement, 'touchmove', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (_this.cancelledScroll && event.cancelable) {
                    event.preventDefault();
                }
            }));
        }));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.disableScroll = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.cancelledScroll = true;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.enableScroll = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.cancelledScroll = false;
        this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    DraggableScrollContainerDirective.prototype.hasScrollbar = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth >
            0;
        /** @type {?} */
        var containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight >
            0;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    };
    DraggableScrollContainerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[mwlDraggableScrollContainer]'
                },] }
    ];
    /** @nocollapse */
    DraggableScrollContainerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
    ]; };
    DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        longPressConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return DraggableScrollContainerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */
        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */
        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */
        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeLongPress = { timerBegin: 0, timerEnd: 0 };
    }
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkEventListeners();
        /** @type {?} */
        var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @return {?}
         */
        function () { return _this.canDrag(); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((/**
         * @param {?} pointerDownEvent
         * @return {?}
         */
        function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
            }
            /** @type {?} */
            var startScrollPosition = _this.getScrollPosition();
            /** @type {?} */
            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var scrollContainer = _this.scrollContainer
                    ? _this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return _this.renderer.listen(scrollContainer, 'scroll', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    return observer.next(e);
                }));
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @return {?}
             */
            function () { return _this.getScrollPosition(); })));
            /** @type {?} */
            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */
            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.dragPointerDown.next({ x: 0, y: 0 });
            }));
            /** @type {?} */
            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            /** @type {?} */
            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
                _this.pointerMove$,
                scrollContainerScroll$
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), pointerMoveEvent = _b[0], scroll = _b[1];
                return {
                    currentDrag$: currentDrag$,
                    transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY,
                    scrollLeft: scroll.left,
                    scrollTop: scroll.top
                };
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} moveData
             * @return {?}
             */
            function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} moveData
             * @return {?}
             */
            function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} moveData
             * @return {?}
             */
            function (moveData) {
                /** @type {?} */
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var x = _a.x, y = _a.y, transformX = _a.transformX, transformY = _a.transformY;
                return !_this.validateDrag ||
                    _this.validateDrag({
                        x: x,
                        y: y,
                        transform: { x: transformX, y: transformY }
                    });
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            /** @type {?} */
            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            /** @type {?} */
            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            dragStarted$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, x = _a.x, y = _a.y;
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragStart.next({ cancelDrag$: cancelDrag$ });
                }));
                _this.scroller = dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([
                    _this.scrollContainer
                        ? _this.scrollContainer.elementRef.nativeElement
                        : _this.document.defaultView
                ], {
                    margin: 20,
                    autoScroll: /**
                     * @return {?}
                     */
                    function () {
                        return true;
                    }
                });
                _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
                if (_this.ghostDragEnabled) {
                    /** @type {?} */
                    var rect = _this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    var clone_1 = (/** @type {?} */ (_this.element.nativeElement.cloneNode(true)));
                    if (!_this.showOriginalElementWhileDragging) {
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (_this.ghostElementAppendTo) {
                        _this.ghostElementAppendTo.appendChild(clone_1);
                    }
                    else {
                        (/** @type {?} */ (_this.element.nativeElement.parentNode)).insertBefore(clone_1, _this.element.nativeElement.nextSibling);
                    }
                    _this.ghostElement = clone_1;
                    document.body.style.cursor = _this.dragCursor;
                    _this.setElementStyles(clone_1, {
                        position: 'fixed',
                        top: rect.top + "px",
                        left: rect.left + "px",
                        width: rect.width + "px",
                        height: rect.height + "px",
                        cursor: _this.dragCursor,
                        margin: '0',
                        willChange: 'transform',
                        pointerEvents: 'none'
                    });
                    if (_this.ghostElementTemplate) {
                        /** @type {?} */
                        var viewRef_1 = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);
                        clone_1.innerHTML = '';
                        viewRef_1.rootNodes
                            .filter((/**
                         * @param {?} node
                         * @return {?}
                         */
                        function (node) { return node instanceof Node; }))
                            .forEach((/**
                         * @param {?} node
                         * @return {?}
                         */
                        function (node) {
                            clone_1.appendChild(node);
                        }));
                        dragEnded$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.vcr.remove(_this.vcr.indexOf(viewRef_1));
                        }));
                    }
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.ghostElementCreated.emit({
                            clientX: clientX - x,
                            clientY: clientY - y,
                            element: clone_1
                        });
                    }));
                    dragEnded$.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        (/** @type {?} */ (clone_1.parentElement)).removeChild(clone_1);
                        _this.ghostElement = null;
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
                    }));
                }
                _this.draggableHelper.currentDrag.next(currentDrag$);
            }));
            dragEnded$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((/**
             * @param {?} dragEndData
             * @return {?}
             */
            function (dragEndData) {
                /** @type {?} */
                var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} calledCount
                 * @return {?}
                 */
                function (calledCount) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, dragEndData, { dragCancelled: calledCount > 0 })); })));
                cancelDrag$.complete();
                return dragEndData$;
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var x = _a.x, y = _a.y, dragCancelled = _a.dragCancelled;
                _this.scroller.destroy();
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragEnd.next({ x: x, y: y, dragCancelled: dragCancelled });
                }));
                _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                currentDrag$.complete();
            }));
            /** @type {?} */
            var selectionStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                return _this.renderer.listen('document', 'selectstart', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    return observer.next(e);
                }));
            }));
            // hack to prevent text getting selected in safari while dragging
            selectionStart$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$)))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.preventDefault();
            }));
            return pointerMove;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return [, value]; }))), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pairwise"])()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            return next;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"]))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, currentDrag$ = _a.currentDrag$, clientX = _a.clientX, clientY = _a.clientY, transformX = _a.transformX, transformY = _a.transformY;
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.dragging.next({ x: x, y: y });
            }));
            if (_this.ghostElement) {
                /** @type {?} */
                var transform = "translate3d(" + transformX + "px, " + transformY + "px, 0px)";
                _this.setElementStyles(_this.ghostElement, {
                    transform: transform,
                    '-webkit-transform': transform,
                    '-ms-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                });
            }
            currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.dragAxis) {
            this.checkEventListeners();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.checkEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var canDrag = this.canDrag();
        /** @type {?} */
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onMouseDown(event);
                }));
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onMouseUp(event);
                }));
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchStart(event);
                }));
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchEnd(event);
                }));
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchEnd(event);
                }));
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', (/**
                 * @return {?}
                 */
                function () {
                    _this.onMouseEnter();
                }));
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', (/**
                 * @return {?}
                 */
                function () {
                    _this.onMouseLeave();
                }));
            }));
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseDown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', (/**
             * @param {?} mouseMoveEvent
             * @return {?}
             */
            function (mouseMoveEvent) {
                _this.pointerMove$.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                });
            }));
        }
        this.pointerDown$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseUp = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp$.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchStart = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.scrollContainer) {
            try {
                event.preventDefault();
            }
            catch (e) { }
        }
        /** @type {?} */
        var hasContainerScrollbar;
        /** @type {?} */
        var startScrollPosition;
        /** @type {?} */
        var isDragActivated;
        if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.scrollContainer.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', (/**
             * @param {?} touchMoveEvent
             * @return {?}
             */
            function (touchMoveEvent) {
                if (_this.scrollContainer &&
                    _this.scrollContainer.activeLongPressDrag &&
                    !isDragActivated &&
                    hasContainerScrollbar) {
                    isDragActivated = _this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }
                if (!_this.scrollContainer ||
                    !_this.scrollContainer.activeLongPressDrag ||
                    !hasContainerScrollbar ||
                    isDragActivated) {
                    _this.pointerMove$.next({
                        event: touchMoveEvent,
                        clientX: touchMoveEvent.targetTouches[0].clientX,
                        clientY: touchMoveEvent.targetTouches[0].clientY
                    });
                }
            }));
        }
        this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchEnd = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
                this.scrollContainer.enableScroll();
            }
        }
        this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
        });
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.onMouseEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.setCursor(this.dragCursor);
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.onMouseLeave = /**
     * @private
     * @return {?}
     */
    function () {
        this.setCursor('');
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.canDrag = /**
     * @private
     * @return {?}
     */
    function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCursor = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
        }
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.unsubscribeEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            ((/** @type {?} */ (_this))).eventListenerSubscriptions[type]();
            delete ((/** @type {?} */ (_this))).eventListenerSubscriptions[type];
        }));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    DraggableDirective.prototype.setElementStyles = /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    function (element, styles) {
        var _this = this;
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.renderer.setStyle(element, key, styles[key]);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.getScrollPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scrollContainer) {
            return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
        }
        else {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            };
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    DraggableDirective.prototype.shouldBeginDrag = /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    function (event, touchMoveEvent, startScrollPosition) {
        /** @type {?} */
        var moveScrollPosition = this.getScrollPosition();
        /** @type {?} */
        var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
        };
        /** @type {?} */
        var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        /** @type {?} */
        var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        /** @type {?} */
        var deltaTotal = deltaX + deltaY;
        if (deltaTotal > this.scrollContainer.longPressConfig.delta ||
            deltaScroll.top > 0 ||
            deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
        }
        this.timeLongPress.timerEnd = Date.now();
        /** @type {?} */
        var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= this.scrollContainer.longPressConfig.duration) {
            this.scrollContainer.disableScroll();
            return true;
        }
        return false;
    };
    DraggableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[mwlDraggable]'
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: DraggableHelper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
        { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    DraggableDirective.propDecorators = {
        dropData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ghostDragEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        showOriginalElementWhileDragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        validateDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ghostElementAppendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ghostElementTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragPointerDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        ghostElementCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return DraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        function (drag$) {
            _this.renderer.addClass(_this.element.nativeElement, _this.dragActiveClass);
            /** @type {?} */
            var droppableElement = {
                updateCache: true
            };
            /** @type {?} */
            var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
                ? _this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            function () {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            var currentDragDropData;
            /** @type {?} */
            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = _this.element.nativeElement.getBoundingClientRect();
                    if (_this.scrollContainer) {
                        droppableElement.scrollContainerRect = _this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.scrollContainerRect))));
                }
                else {
                    return isWithinElement;
                }
            })));
            /** @type {?} */
            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
            /** @type {?} */
            var dragOverActive;
            overlapsChanged$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = true;
                _this.renderer.addClass(_this.element.nativeElement, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                }));
            }));
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                }));
            }));
            overlapsChanged$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__read"])(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                return didOverlap && !overlapsNow;
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = false;
                _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                function () {
                    deregisterScrollListener();
                    _this.renderer.removeClass(_this.element.nativeElement, _this.dragActiveClass);
                    if (dragOverActive) {
                        _this.renderer.removeClass(_this.element.nativeElement, _this.dragOverClass);
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        }));
                    }
                })
            });
        }));
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    };
    DroppableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[mwlDroppable]'
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: DraggableHelper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: DraggableScrollContainerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
    ]; };
    DroppableDirective.propDecorators = {
        dragOverClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return DroppableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        DraggableDirective,
                        DroppableDirective,
                        DraggableScrollContainerDirective
                    ],
                    exports: [
                        DraggableDirective,
                        DroppableDirective,
                        DraggableScrollContainerDirective
                    ]
                },] }
    ];
    return DragAndDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-draggable-droppable.js.map

/***/ }),

/***/ "../../node_modules/angular-resizable-element/fesm5/angular-resizable-element.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/angular-resizable-element/fesm5/angular-resizable-element.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function() { return ResizeHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableModule", function() { return ResizableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    /** @type {?} */
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    var translateX = 0;
    /** @type {?} */
    var translateY = 0;
    /** @type {?} */
    var style = element.nativeElement.style;
    /** @type {?} */
    var transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    var transform = transformProperties
        .map(function (property) { return style[property]; })
        .find(function (value) { return !!value; });
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    /** @type {?} */
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/** @type {?} */
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    /** @type {?} */
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
var RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
var ResizableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function ResizableDirective(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
        /** @type {?} */
        var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
            var event = _a.event;
            if (currentResize) {
                event.preventDefault();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        /** @type {?} */
        var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
        /** @type {?} */
        var currentResize;
        /** @type {?} */
        var removeGhostElement = function () {
            if (currentResize && currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        var getResizeCursors = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
        };
        this.resizeEdges$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return (_this.resizeEdges &&
                Object.keys(_this.resizeEdges).some(function (edge) { return !!_this.resizeEdges[edge]; }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(MOUSE_MOVE_THROTTLE_MS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            /** @type {?} */
            var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            /** @type {?} */
            var resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            }
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        var mousedrag = mousedown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            var getSnapGrid = function () {
                /** @type {?} */
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return ((/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (coords) { return [, coords]; })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])())))))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                var snapGrid = getSnapGrid();
                /** @type {?} */
                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), newCoords = _b[1];
                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mouseup$, mousedown$)));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!currentResize; }));
        mousedrag
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return (_this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return _this.validateResize
                ? _this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        mousedown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return (edges ||
                getResizeEdges({
                    clientX: clientX,
                    clientY: clientY,
                    elm: _this.elm,
                    allowedEdges: _this.resizeEdges,
                    cursorPrecision: _this.resizeCursorPrecision
                }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            var resizeCursors = getResizeCursors();
            /** @type {?} */
            var cursor = getResizeCursor(currentResize.edges, resizeCursors);
            _this.renderer.setStyle(document.body, 'cursor', cursor);
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, true);
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges: edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.renderer.setStyle(document.body, 'cursor', '');
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: (/** @type {?} */ (currentResize)).currentRect
                        }),
                        rectangle: (/** @type {?} */ (currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ResizableDirective.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        // browser check for angular universal, because it doesn't know what document is
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    };
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    ResizableDirective.prototype.setElementClass = /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    ResizableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[mwlResizable]'
                },] }
    ];
    /** @nocollapse */
    ResizableDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
    ]; };
    ResizableDirective.propDecorators = {
        validateResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        enableGhostResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        resizeSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        resizeCursors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        resizeCursorPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ghostElementPositioning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        allowNegativeResizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        resizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        resizeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return ResizableDirective;
}());
var PointerEventListeners = /** @class */ (function () {
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseDown;
            /** @type {?} */
            var unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseMove;
            /** @type {?} */
            var unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseUp;
            /** @type {?} */
            var unsubscribeTouchEnd;
            /** @type {?} */
            var unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    PointerEventListeners.getInstance = 
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
var ResizeHandleDirective = /** @class */ (function () {
    function ResizeHandleDirective(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                    _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                    _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            _this.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (clientX, clientY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @private
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            ((/** @type {?} */ (_this))).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    ResizeHandleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[mwlResizeHandle]'
                },] }
    ];
    /** @nocollapse */
    ResizeHandleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: ResizableDirective }
    ]; };
    ResizeHandleDirective.propDecorators = {
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] }],
        onMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['touchend', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['touchcancel', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] }]
    };
    return ResizeHandleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResizableModule = /** @class */ (function () {
    function ResizableModule() {
    }
    ResizableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [ResizableDirective, ResizeHandleDirective],
                    exports: [ResizableDirective, ResizeHandleDirective]
                },] }
    ];
    return ResizableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-resizable-element.js.map

/***/ }),

/***/ "../../node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix = ['webkit', 'moz', 'ms', 'o'];

var requestAnimationFrame = exports.requestAnimationFrame = function () {

  for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
    window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    (function () {
      var lastTime = 0;

      window.requestAnimationFrame = function (callback) {
        var now = new Date().getTime();
        var ttc = Math.max(0, 16 - now - lastTime);
        var timer = window.setTimeout(function () {
          return callback(now + ttc);
        }, ttc);

        lastTime = now + ttc;

        return timer;
      };
    })();
  }

  return window.requestAnimationFrame.bind(window);
}();

var cancelAnimationFrame = exports.cancelAnimationFrame = function () {

  for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
    window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (timer) {
      window.clearTimeout(timer);
    };
  }

  return window.cancelAnimationFrame.bind(window);
}();


/***/ }),

/***/ "../../node_modules/array-from/index.js":
/*!*****************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/array-from/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (typeof Array.from === 'function' ?
  Array.from :
  __webpack_require__(/*! ./polyfill */ "../../node_modules/array-from/polyfill.js")
);


/***/ }),

/***/ "../../node_modules/array-from/polyfill.js":
/*!********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/array-from/polyfill.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
module.exports = (function() {
  var isCallable = function(fn) {
    return typeof fn === 'function';
  };
  var toInteger = function (value) {
    var number = Number(value);
    if (isNaN(number)) { return 0; }
    if (number === 0 || !isFinite(number)) { return number; }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  };
  var maxSafeInteger = Math.pow(2, 53) - 1;
  var toLength = function (value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  };
  var iteratorProp = function(value) {
    if(value != null) {
      if(['string','number','boolean','symbol'].indexOf(typeof value) > -1){
        return Symbol.iterator;
      } else if (
        (typeof Symbol !== 'undefined') &&
        ('iterator' in Symbol) &&
        (Symbol.iterator in value)
      ) {
        return Symbol.iterator;
      }
      // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
      else if ('@@iterator' in value) {
        return '@@iterator';
      }
    }
  };
  var getMethod = function(O, P) {
    // Assert: IsPropertyKey(P) is true.
    if (O != null && P != null) {
      // Let func be GetV(O, P).
      var func = O[P];
      // ReturnIfAbrupt(func).
      // If func is either undefined or null, return undefined.
      if(func == null) {
        return void 0;
      }
      // If IsCallable(func) is false, throw a TypeError exception.
      if (!isCallable(func)) {
        throw new TypeError(func + ' is not a function');
      }
      return func;
    }
  };
  var iteratorStep = function(iterator) {
    // Let result be IteratorNext(iterator).
    // ReturnIfAbrupt(result).
    var result = iterator.next();
    // Let done be IteratorComplete(result).
    // ReturnIfAbrupt(done).
    var done = Boolean(result.done);
    // If done is true, return false.
    if(done) {
      return false;
    }
    // Return result.
    return result;
  };

  // The length property of the from method is 1.
  return function from(items /*, mapFn, thisArg */ ) {
    'use strict';

    // 1. Let C be the this value.
    var C = this;

    // 2. If mapfn is undefined, let mapping be false.
    var mapFn = arguments.length > 1 ? arguments[1] : void 0;

    var T;
    if (typeof mapFn !== 'undefined') {
      // 3. else
      //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
      if (!isCallable(mapFn)) {
        throw new TypeError(
          'Array.from: when provided, the second argument must be a function'
        );
      }

      //   b. If thisArg was supplied, let T be thisArg; else let T
      //      be undefined.
      if (arguments.length > 2) {
        T = arguments[2];
      }
      //   c. Let mapping be true (implied by mapFn)
    }

    var A, k;

    // 4. Let usingIterator be GetMethod(items, @@iterator).
    // 5. ReturnIfAbrupt(usingIterator).
    var usingIterator = getMethod(items, iteratorProp(items));

    // 6. If usingIterator is not undefined, then
    if (usingIterator !== void 0) {
      // a. If IsConstructor(C) is true, then
      //   i. Let A be the result of calling the [[Construct]]
      //      internal method of C with an empty argument list.
      // b. Else,
      //   i. Let A be the result of the abstract operation ArrayCreate
      //      with argument 0.
      // c. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C()) : [];

      // d. Let iterator be GetIterator(items, usingIterator).
      var iterator = usingIterator.call(items);

      // e. ReturnIfAbrupt(iterator).
      if (iterator == null) {
        throw new TypeError(
          'Array.from requires an array-like or iterable object'
        );
      }

      // f. Let k be 0.
      k = 0;

      // g. Repeat
      var next, nextValue;
      while (true) {
        // i. Let Pk be ToString(k).
        // ii. Let next be IteratorStep(iterator).
        // iii. ReturnIfAbrupt(next).
        next = iteratorStep(iterator);

        // iv. If next is false, then
        if (!next) {

          // 1. Let setStatus be Set(A, "length", k, true).
          // 2. ReturnIfAbrupt(setStatus).
          A.length = k;

          // 3. Return A.
          return A;
        }
        // v. Let nextValue be IteratorValue(next).
        // vi. ReturnIfAbrupt(nextValue)
        nextValue = next.value;

        // vii. If mapping is true, then
        //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
        //   2. If mappedValue is an abrupt completion, return
        //      IteratorClose(iterator, mappedValue).
        //   3. Let mappedValue be mappedValue.[[value]].
        // viii. Else, let mappedValue be nextValue.
        // ix.  Let defineStatus be the result of
        //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
        // x. [TODO] If defineStatus is an abrupt completion, return
        //    IteratorClose(iterator, defineStatus).
        if (mapFn) {
          A[k] = mapFn.call(T, nextValue, k);
        }
        else {
          A[k] = nextValue;
        }
        // xi. Increase k by 1.
        k++;
      }
      // 7. Assert: items is not an Iterable so assume it is
      //    an array-like object.
    } else {

      // 8. Let arrayLike be ToObject(items).
      var arrayLike = Object(items);

      // 9. ReturnIfAbrupt(items).
      if (items == null) {
        throw new TypeError(
          'Array.from requires an array-like object - not null or undefined'
        );
      }

      // 10. Let len be ToLength(Get(arrayLike, "length")).
      // 11. ReturnIfAbrupt(len).
      var len = toLength(arrayLike.length);

      // 12. If IsConstructor(C) is true, then
      //     a. Let A be Construct(C, «len»).
      // 13. Else
      //     a. Let A be ArrayCreate(len).
      // 14. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 15. Let k be 0.
      k = 0;
      // 16. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = arrayLike[k];
        if (mapFn) {
          A[k] = mapFn.call(T, kValue, k);
        }
        else {
          A[k] = kValue;
        }
        k++;
      }
      // 17. Let setStatus be Set(A, "length", len, true).
      // 18. ReturnIfAbrupt(setStatus).
      A.length = len;
      // 19. Return A.
    }
    return A;
  };
})();


/***/ }),

/***/ "../../node_modules/calendar-utils/calendar-utils.js":
/*!******************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/calendar-utils/calendar-utils.js ***!
  \******************************************************************************************************************************/
/*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return DAYS_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function() { return SECONDS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function() { return getWeekViewEventOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function() { return getEventsInPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function() { return getWeekViewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function() { return getDifferenceInDaysWithExclusions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekView", function() { return getWeekView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthView", function() { return getMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayView", function() { return getDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function() { return getDayViewHourGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function() { return EventValidationErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvents", function() { return validateEvents; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
function getExcludedSeconds(dateAdapter, _a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var addSeconds = dateAdapter.addSeconds, getDay = dateAdapter.getDay, addDays = dateAdapter.addDays;
    var endDate = addSeconds(startDate, seconds - 1);
    var dayStart = getDay(startDate);
    var dayEnd = getDay(endDate);
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = getDay(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds(dateAdapter, {
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate
            });
        }
        current = addDays(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(dateAdapter, _a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    var differenceInSeconds = dateAdapter.differenceInSeconds, endOfDay = dateAdapter.endOfDay, startOfDay = dateAdapter.startOfDay;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(dateAdapter, _a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b, totalDaysInView = _a.totalDaysInView;
    var max = dateAdapter.max, differenceInSeconds = dateAdapter.differenceInSeconds, addDays = dateAdapter.addDays, endOfDay = dateAdapter.endOfDay, differenceInDays = dateAdapter.differenceInDays;
    var span = SECONDS_IN_DAY;
    var begin = max(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = differenceInSeconds(event.end, begin);
                break;
            default:
                span =
                    differenceInDays(addDays(endOfDay(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view
    var secondsInView = totalDaysInView * SECONDS_IN_DAY;
    if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
    }
    span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(dateAdapter, _a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    var differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, differenceInSeconds = dateAdapter.differenceInSeconds;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                differenceInDays(startOfDay(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
    });
    return Math.abs(offset / SECONDS_IN_DAY);
}
function isEventIsPeriod(dateAdapter, _a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var isSameSecond = dateAdapter.isSameSecond;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (isSameSecond(eventStart, periodStart) ||
        isSameSecond(eventStart, periodEnd)) {
        return true;
    }
    if (isSameSecond(eventEnd, periodStart) ||
        isSameSecond(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(dateAdapter, _a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, { event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(dateAdapter, _a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var startOfDay = dateAdapter.startOfDay, isSameDay = dateAdapter.isSameDay, getDay = dateAdapter.getDay;
    var today = startOfDay(new Date());
    var day = getDay(date);
    return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
    };
}
function getWeekViewHeader(dateAdapter, _a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays, _c = _a.viewStart, viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _c, _d = _a.viewEnd, viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
    var addDays = dateAdapter.addDays, getDay = dateAdapter.getDay;
    var days = [];
    var date = viewStart;
    while (date < viewEnd) {
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            days.push(getWeekDay(dateAdapter, { date: date, weekendDays: weekendDays }));
        }
        date = addDays(date, 1);
    }
    return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
    var date1 = _a.date1, date2 = _a.date2, excluded = _a.excluded;
    var date = date1;
    var diff = 0;
    while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
        }
        date = dateAdapter.addDays(date, 1);
    }
    return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
    var events = _a.events, excluded = _a.excluded, precision = _a.precision, absolutePositionedEvents = _a.absolutePositionedEvents, viewStart = _a.viewStart, viewEnd = _a.viewEnd, eventsInPeriod = _a.eventsInPeriod;
    var differenceInSeconds = dateAdapter.differenceInSeconds, differenceInDays = dateAdapter.differenceInDays;
    var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
    });
    var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
    var eventsMapped = eventsInPeriod
        .filter(function (event) { return event.allDay; })
        .map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < viewStart,
        endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var allDayEventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= totalDaysInView &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            var weekEvents = [event].concat(otherRowEvents);
            var id = weekEvents
                .filter(function (weekEvent) { return weekEvent.event.id; })
                .map(function (weekEvent) { return weekEvent.event.id; })
                .join('-');
            allDayEventRows.push(__assign({ row: weekEvents }, (id ? { id: id } : {})));
        }
    });
    return allDayEventRows;
}
function getWeekViewHourGrid(dateAdapter, _a) {
    var events = _a.events, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekStartsOn = _a.weekStartsOn, excluded = _a.excluded, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, viewStart = _a.viewStart, viewEnd = _a.viewEnd;
    var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
    });
    var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    var setHours = dateAdapter.setHours, setMinutes = dateAdapter.setMinutes, getHours = dateAdapter.getHours, getMinutes = dateAdapter.getMinutes;
    return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
                var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
                return __assign({}, segment, { date: date });
            });
            return __assign({}, hour, { segments: segments });
        });
        function getColumnCount(allEvents, prevOverlappingEvents) {
            var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) { return iEvent.left + 1; }));
            var nextOverlappingEvents = allEvents
                .filter(function (iEvent) { return iEvent.left >= columnCount; })
                .filter(function (iEvent) {
                return (getOverLappingDayViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0);
            });
            if (nextOverlappingEvents.length > 0) {
                return getColumnCount(allEvents, nextOverlappingEvents);
            }
            else {
                return columnCount;
            }
        }
        var mappedEvents = dayView.events.map(function (event) {
            var columnCount = getColumnCount(dayView.events, getOverLappingDayViewEvents(dayView.events, event.top, event.top + event.height));
            var width = 100 / columnCount;
            return __assign({}, event, { left: event.left * width, width: width });
        });
        return {
            hours: hours,
            date: day.date,
            events: mappedEvents.map(function (event) {
                var overLappingEvents = getOverLappingDayViewEvents(mappedEvents.filter(function (otherEvent) { return otherEvent.left > event.left; }), event.top, event.top + event.height);
                if (overLappingEvents.length > 0) {
                    return __assign({}, event, { width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) { return otherEvent.left; })) - event.left });
                }
                return event;
            })
        };
    });
}
function getWeekView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, weekendDays = _a.weekendDays, segmentHeight = _a.segmentHeight, _f = _a.viewStart, viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _f, _g = _a.viewEnd, viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn }) : _g;
    if (!events) {
        events = [];
    }
    var startOfDay = dateAdapter.startOfDay, endOfDay = dateAdapter.endOfDay;
    viewStart = startOfDay(viewStart);
    viewEnd = endOfDay(viewEnd);
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
    });
    var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
    });
    return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
            events: events,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd,
            eventsInPeriod: eventsInPeriod
        }),
        period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd
        })
    };
}
function getMonthView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var startOfWeek = dateAdapter.startOfWeek, endOfWeek = dateAdapter.endOfWeek, differenceInDays = dateAdapter.differenceInDays, startOfDay = dateAdapter.startOfDay, addHours = dateAdapter.addHours, endOfDay = dateAdapter.endOfDay, isSameMonth = dateAdapter.isSameMonth, getDay = dateAdapter.getDay, getMonth = dateAdapter.getMonth;
    var start = startOfWeek(viewStart, { weekStartsOn: weekStartsOn });
    var end = endOfWeek(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_2 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                /* istanbul ignore next */
                date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return getDay(date) === e; })) {
            var day = getWeekDay(dateAdapter, {
                date: date,
                weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod(dateAdapter, {
                events: eventsInMonth,
                periodStart: startOfDay(date),
                periodEnd: endOfDay(date)
            });
            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return getMonth(day.date) === getMonth(viewDate); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth
        }
    };
}
function getOverLappingDayViewEvents(events, top, bottom) {
    return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;
        if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
        }
        else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
        }
        else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
        }
        return false;
    });
}
function getDayView(dateAdapter, _a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, differenceInMinutes = dateAdapter.differenceInMinutes;
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingDayViewEvents(previousDayEvents, top, bottom);
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
    });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
        }
    };
}
function sanitiseHours(hours) {
    return Math.max(Math.min(23, hours), 0);
}
function sanitiseMinutes(minutes) {
    return Math.max(Math.min(59, minutes), 0);
}
function getDayViewHourGrid(dateAdapter, _a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var setMinutes = dateAdapter.setMinutes, setHours = dateAdapter.setHours, startOfDay = dateAdapter.startOfDay, startOfMinute = dateAdapter.startOfMinute, endOfDay = dateAdapter.endOfDay, addMinutes = dateAdapter.addMinutes, addHours = dateAdapter.addHours, addDays = dateAdapter.addDays;
    var hours = [];
    var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
    var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = startOfDay(viewDate);
    var endOfViewDay = endOfDay(viewDate);
    var dateAdjustment = function (d) { return d; };
    // this means that we change from or to DST on this day and that's going to cause problems so we bump the date
    if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);
        dateAdjustment = function (d) { return addDays(d, -1); };
    }
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: dateAdjustment(date),
                    displayDate: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!(event.start instanceof Date)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!(event.end instanceof Date)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "../../node_modules/calendar-utils/date-adapters/date-fns/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addDays = __webpack_require__(/*! date-fns/add_days/index */ "../../node_modules/date-fns/add_days/index.js");
var addHours = __webpack_require__(/*! date-fns/add_hours/index */ "../../node_modules/date-fns/add_hours/index.js");
var addMinutes = __webpack_require__(/*! date-fns/add_minutes/index */ "../../node_modules/date-fns/add_minutes/index.js");
var addSeconds = __webpack_require__(/*! date-fns/add_seconds/index */ "../../node_modules/date-fns/add_seconds/index.js");
var differenceInDays = __webpack_require__(/*! date-fns/difference_in_days/index */ "../../node_modules/date-fns/difference_in_days/index.js");
var differenceInMinutes = __webpack_require__(/*! date-fns/difference_in_minutes/index */ "../../node_modules/date-fns/difference_in_minutes/index.js");
var differenceInSeconds = __webpack_require__(/*! date-fns/difference_in_seconds/index */ "../../node_modules/date-fns/difference_in_seconds/index.js");
var endOfDay = __webpack_require__(/*! date-fns/end_of_day/index */ "../../node_modules/date-fns/end_of_day/index.js");
var endOfMonth = __webpack_require__(/*! date-fns/end_of_month/index */ "../../node_modules/date-fns/end_of_month/index.js");
var endOfWeek = __webpack_require__(/*! date-fns/end_of_week/index */ "../../node_modules/date-fns/end_of_week/index.js");
var getDay = __webpack_require__(/*! date-fns/get_day/index */ "../../node_modules/date-fns/get_day/index.js");
var getMonth = __webpack_require__(/*! date-fns/get_month/index */ "../../node_modules/date-fns/get_month/index.js");
var isSameDay = __webpack_require__(/*! date-fns/is_same_day/index */ "../../node_modules/date-fns/is_same_day/index.js");
var isSameMonth = __webpack_require__(/*! date-fns/is_same_month/index */ "../../node_modules/date-fns/is_same_month/index.js");
var isSameSecond = __webpack_require__(/*! date-fns/is_same_second/index */ "../../node_modules/date-fns/is_same_second/index.js");
var max = __webpack_require__(/*! date-fns/max/index */ "../../node_modules/date-fns/max/index.js");
var setHours = __webpack_require__(/*! date-fns/set_hours/index */ "../../node_modules/date-fns/set_hours/index.js");
var setMinutes = __webpack_require__(/*! date-fns/set_minutes/index */ "../../node_modules/date-fns/set_minutes/index.js");
var startOfDay = __webpack_require__(/*! date-fns/start_of_day/index */ "../../node_modules/date-fns/start_of_day/index.js");
var startOfMinute = __webpack_require__(/*! date-fns/start_of_minute/index */ "../../node_modules/date-fns/start_of_minute/index.js");
var startOfMonth = __webpack_require__(/*! date-fns/start_of_month/index */ "../../node_modules/date-fns/start_of_month/index.js");
var startOfWeek = __webpack_require__(/*! date-fns/start_of_week/index */ "../../node_modules/date-fns/start_of_week/index.js");
var getHours = __webpack_require__(/*! date-fns/get_hours/index */ "../../node_modules/date-fns/get_hours/index.js");
var getMinutes = __webpack_require__(/*! date-fns/get_minutes/index */ "../../node_modules/date-fns/get_minutes/index.js");
function adapterFactory() {
    return {
        addDays: addDays,
        addHours: addHours,
        addMinutes: addMinutes,
        addSeconds: addSeconds,
        differenceInDays: differenceInDays,
        differenceInMinutes: differenceInMinutes,
        differenceInSeconds: differenceInSeconds,
        endOfDay: endOfDay,
        endOfMonth: endOfMonth,
        endOfWeek: endOfWeek,
        getDay: getDay,
        getMonth: getMonth,
        isSameDay: isSameDay,
        isSameMonth: isSameMonth,
        isSameSecond: isSameSecond,
        max: max,
        setHours: setHours,
        setMinutes: setMinutes,
        startOfDay: startOfDay,
        startOfMinute: startOfMinute,
        startOfMonth: startOfMonth,
        startOfWeek: startOfWeek,
        getHours: getHours,
        getMinutes: getMinutes
    };
}
exports.adapterFactory = adapterFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/create-point-cb/dist/bundle.js":
/*!****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/create-point-cb/dist/bundle.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var typeFunc = __webpack_require__(/*! type-func */ "../../node_modules/type-func/dist/bundle.js");

function createPointCB(object, options) {

    // A persistent object (as opposed to returned object) is used to save memory
    // This is good to prevent layout thrashing, or for games, and such

    // NOTE
    // This uses IE fixes which should be OK to remove some day. :)
    // Some speed will be gained by removal of these.

    // pointCB should be saved in a variable on return
    // This allows the usage of element.removeEventListener

    options = options || {};

    var allowUpdate = typeFunc.boolean(options.allowUpdate, true);

    /*if(typeof options.allowUpdate === 'function'){
        allowUpdate = options.allowUpdate;
    }else{
        allowUpdate = function(){return true;};
    }*/

    return function pointCB(event) {

        event = event || window.event; // IE-ism
        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
            return;
        }

        // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644

        if (event.targetTouches) {
            object.x = event.targetTouches[0].clientX;
            object.y = event.targetTouches[0].clientY;
            object.pageX = event.targetTouches[0].pageX;
            object.pageY = event.targetTouches[0].pageY;
            object.screenX = event.targetTouches[0].screenX;
            object.screenY = event.targetTouches[0].screenY;
        } else {

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            // NOTE Hopefully this can be removed soon.

            if (event.pageX === null && event.clientX !== null) {
                var eventDoc = event.target && event.target.ownerDocument || document;
                var doc = eventDoc.documentElement;
                var body = eventDoc.body;

                object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            } else {
                object.pageX = event.pageX;
                object.pageY = event.pageY;
            }

            // pageX, and pageY change with page scroll
            // so we're not going to use those for x, and y.
            // NOTE Most browsers also alias clientX/Y with x/y
            // so that's something to consider down the road.

            object.x = event.clientX;
            object.y = event.clientY;

            object.screenX = event.screenX;
            object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
    };

    //NOTE Remember accessibility, Aria roles, and labels.
}

/*
git remote add origin https://github.com/hollowdoor/create_point_cb.git
git push -u origin master
*/

module.exports = createPointCB;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var MILLISECONDS_IN_MINUTE = 60000

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
module.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime())
  var baseTimezoneOffset = date.getTimezoneOffset()
  date.setSeconds(0, 0)
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}


/***/ }),

/***/ "../../node_modules/date-fns/add_days/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_days/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "../../node_modules/date-fns/add_hours/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_hours/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "../../node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "../../node_modules/date-fns/add_milliseconds/index.js":
/*!********************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_milliseconds/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "../../node_modules/date-fns/add_minutes/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_minutes/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "../../node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "../../node_modules/date-fns/add_months/index.js":
/*!**************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_months/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "../../node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "../../node_modules/date-fns/add_seconds/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_seconds/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "../../node_modules/date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "../../node_modules/date-fns/add_weeks/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/add_weeks/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "../../node_modules/date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "../../node_modules/date-fns/compare_asc/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/compare_asc/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "../../node_modules/date-fns/difference_in_calendar_days/index.js":
/*!*******************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "../../node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "../../node_modules/date-fns/difference_in_days/index.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/difference_in_days/index.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "../../node_modules/date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "../../node_modules/date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "../../node_modules/date-fns/difference_in_milliseconds/index.js":
/*!******************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/difference_in_milliseconds/index.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "../../node_modules/date-fns/difference_in_minutes/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/difference_in_minutes/index.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "../../node_modules/date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "../../node_modules/date-fns/difference_in_seconds/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/difference_in_seconds/index.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "../../node_modules/date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "../../node_modules/date-fns/end_of_day/index.js":
/*!**************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/end_of_day/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "../../node_modules/date-fns/end_of_month/index.js":
/*!****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/end_of_month/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "../../node_modules/date-fns/end_of_week/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/end_of_week/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "../../node_modules/date-fns/get_date/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_date/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "../../node_modules/date-fns/get_day/index.js":
/*!***********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_day/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "../../node_modules/date-fns/get_days_in_month/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_days_in_month/index.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "../../node_modules/date-fns/get_hours/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_hours/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ "../../node_modules/date-fns/get_iso_week/index.js":
/*!****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_iso_week/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "../../node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "../../node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "../../node_modules/date-fns/get_iso_year/index.js":
/*!****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_iso_year/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "../../node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "../../node_modules/date-fns/get_minutes/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_minutes/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ "../../node_modules/date-fns/get_month/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_month/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "../../node_modules/date-fns/get_year/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/get_year/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "../../node_modules/date-fns/is_date/index.js":
/*!***********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/is_date/index.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "../../node_modules/date-fns/is_same_day/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/is_same_day/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "../../node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "../../node_modules/date-fns/is_same_month/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/is_same_month/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "../../node_modules/date-fns/is_same_second/index.js":
/*!******************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/is_same_second/index.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__(/*! ../start_of_second/index.js */ "../../node_modules/date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "../../node_modules/date-fns/max/index.js":
/*!*******************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/max/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "../../node_modules/date-fns/parse/index.js":
/*!*********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/parse/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTimezoneOffsetInMilliseconds = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js")
var isDate = __webpack_require__(/*! ../is_date/index.js */ "../../node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE
    } else {
      var fullTime = timestamp + time
      var fullTimeDate = new Date(fullTime)

      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)

      // Adjust time when it's coming from DST
      var fullTimeDateNextDay = new Date(fullTime)
      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
      var offsetDiff =
        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
        getTimezoneOffsetInMilliseconds(fullTimeDate)
      if (offsetDiff > 0) {
        offset += offsetDiff
      }
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "../../node_modules/date-fns/set_date/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/set_date/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "../../node_modules/date-fns/set_hours/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/set_hours/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "../../node_modules/date-fns/set_minutes/index.js":
/*!***************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/set_minutes/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "../../node_modules/date-fns/set_month/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/set_month/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "../../node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "../../node_modules/date-fns/set_year/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/set_year/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "../../node_modules/date-fns/start_of_day/index.js":
/*!****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_day/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "../../node_modules/date-fns/start_of_iso_week/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_iso_week/index.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "../../node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "../../node_modules/date-fns/start_of_iso_year/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_iso_year/index.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "../../node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "../../node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "../../node_modules/date-fns/start_of_minute/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_minute/index.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "../../node_modules/date-fns/start_of_month/index.js":
/*!******************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_month/index.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "../../node_modules/date-fns/start_of_second/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_second/index.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "../../node_modules/date-fns/start_of_week/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/start_of_week/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "../../node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "../../node_modules/date-fns/sub_days/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/sub_days/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "../../node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "../../node_modules/date-fns/sub_months/index.js":
/*!**************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/sub_months/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(/*! ../add_months/index.js */ "../../node_modules/date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "../../node_modules/date-fns/sub_weeks/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/date-fns/sub_weeks/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ "../../node_modules/date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "../../node_modules/dom-autoscroller/dist/bundle.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/dom-autoscroller/dist/bundle.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typeFunc = __webpack_require__(/*! type-func */ "../../node_modules/type-func/dist/bundle.js");
var animationFramePolyfill = __webpack_require__(/*! animation-frame-polyfill */ "../../node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js");
var domSet = __webpack_require__(/*! dom-set */ "../../node_modules/dom-set/dist/bundle.js");
var domPlane = __webpack_require__(/*! dom-plane */ "../../node_modules/dom-plane/dist/bundle.js");
var mousemoveDispatcher = _interopDefault(__webpack_require__(/*! dom-mousemove-dispatcher */ "../../node_modules/dom-mousemove-dispatcher/dist/bundle.js"));

function AutoScroller(elements, options){
    if ( options === void 0 ) options = {};

    var self = this;
    var maxSpeed = 4, scrolling = false;

    this.margin = options.margin || -1;
    //this.scrolling = false;
    this.scrollWhenOutside = options.scrollWhenOutside || false;

    var point = {},
        pointCB = domPlane.createPointCB(point),
        dispatcher = mousemoveDispatcher(),
        down = false;

    window.addEventListener('mousemove', pointCB, false);
    window.addEventListener('touchmove', pointCB, false);

    if(!isNaN(options.maxSpeed)){
        maxSpeed = options.maxSpeed;
    }

    this.autoScroll = typeFunc.boolean(options.autoScroll);
    this.syncMove = typeFunc.boolean(options.syncMove, false);

    this.destroy = function(forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);

        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);

        window.removeEventListener('scroll', setScroll, true);
        elements = [];
        if(forceCleanAnimation){
          cleanAnimation();
        }
    };

    this.add = function(){
        var element = [], len = arguments.length;
        while ( len-- ) element[ len ] = arguments[ len ];

        domSet.addElements.apply(void 0, [ elements ].concat( element ));
        return this;
    };

    this.remove = function(){
        var element = [], len = arguments.length;
        while ( len-- ) element[ len ] = arguments[ len ];

        return domSet.removeElements.apply(void 0, [ elements ].concat( element ));
    };

    var hasWindow = null, windowAnimationFrame;

    if(Object.prototype.toString.call(elements) !== '[object Array]'){
        elements = [elements];
    }

    (function(temp){
        elements = [];
        temp.forEach(function(element){
            if(element === window){
                hasWindow = window;
            }else{
                self.add(element);
            }
        });
    }(elements));

    Object.defineProperties(this, {
        down: {
            get: function(){ return down; }
        },
        maxSpeed: {
            get: function(){ return maxSpeed; }
        },
        point: {
            get: function(){ return point; }
        },
        scrolling: {
            get: function(){ return scrolling; }
        }
    });

    var n = 0, current = null, animationFrame;

    window.addEventListener('mousedown', onDown, false);
    window.addEventListener('touchstart', onDown, false);
    window.addEventListener('mouseup', onUp, false);
    window.addEventListener('touchend', onUp, false);

    /*
    IE does not trigger mouseup event when scrolling.
    It is a known issue that Microsoft won't fix.
    https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
    IE supports pointer events instead
    */
    window.addEventListener('pointerup', onUp, false);

    window.addEventListener('mousemove', onMove, false);
    window.addEventListener('touchmove', onMove, false);

    window.addEventListener('mouseleave', onMouseOut, false);

    window.addEventListener('scroll', setScroll, true);

    function setScroll(e){

        for(var i=0; i<elements.length; i++){
            if(elements[i] === e.target){
                scrolling = true;
                break;
            }
        }

        if(scrolling){
            animationFramePolyfill.requestAnimationFrame(function (){ return scrolling = false; });
        }
    }

    function onDown(){
        down = true;
    }

    function onUp(){
        down = false;
        cleanAnimation();
    }
    function cleanAnimation(){
      animationFramePolyfill.cancelAnimationFrame(animationFrame);
      animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
    }
    function onMouseOut(){
        down = false;
    }

    function getTarget(target){
        if(!target){
            return null;
        }

        if(current === target){
            return target;
        }

        if(domSet.hasElement(elements, target)){
            return target;
        }

        while(target = target.parentNode){
            if(domSet.hasElement(elements, target)){
                return target;
            }
        }

        return null;
    }

    function getElementUnderPoint(){
        var underPoint = null;

        for(var i=0; i<elements.length; i++){
            if(inside(point, elements[i])){
                underPoint = elements[i];
            }
        }

        return underPoint;
    }


    function onMove(event){

        if(!self.autoScroll()) { return; }

        if(event['dispatched']){ return; }

        var target = event.target, body = document.body;

        if(current && !inside(point, current)){
            if(!self.scrollWhenOutside){
                current = null;
            }
        }

        if(target && target.parentNode === body){
            //The special condition to improve speed.
            target = getElementUnderPoint();
        }else{
            target = getTarget(target);

            if(!target){
                target = getElementUnderPoint();
            }
        }


        if(target && target !== current){
            current = target;
        }

        if(hasWindow){
            animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
            windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
        }


        if(!current){
            return;
        }

        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
    }

    function scrollWindow(){
        autoScroll(hasWindow);

        animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
        windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
    }

    function scrollTick(){

        if(!current){
            return;
        }

        autoScroll(current);

        animationFramePolyfill.cancelAnimationFrame(animationFrame);
        animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);

    }


    function autoScroll(el){
        var rect = domPlane.getClientRect(el), scrollx, scrolly;

        if(point.x < rect.left + self.margin){
            scrollx = Math.floor(
                Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed
            );
        }else if(point.x > rect.right - self.margin){
            scrollx = Math.ceil(
                Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed
            );
        }else{
            scrollx = 0;
        }

        if(point.y < rect.top + self.margin){
            scrolly = Math.floor(
                Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed
            );
        }else if(point.y > rect.bottom - self.margin){
            scrolly = Math.ceil(
                Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed
            );
        }else{
            scrolly = 0;
        }

        if(self.syncMove()){
            /*
            Notes about mousemove event dispatch.
            screen(X/Y) should need to be updated.
            Some other properties might need to be set.
            Keep the syncMove option default false until all inconsistencies are taken care of.
            */
            dispatcher.dispatch(el, {
                pageX: point.pageX + scrollx,
                pageY: point.pageY + scrolly,
                clientX: point.x + scrollx,
                clientY: point.y + scrolly
            });
        }

        setTimeout(function (){

            if(scrolly){
                scrollY(el, scrolly);
            }

            if(scrollx){
                scrollX(el, scrollx);
            }

        });
    }

    function scrollY(el, amount){
        if(el === window){
            window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        }else{
            el.scrollTop += amount;
        }
    }

    function scrollX(el, amount){
        if(el === window){
            window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        }else{
            el.scrollLeft += amount;
        }
    }

}

function AutoScrollerFactory(element, options){
    return new AutoScroller(element, options);
}

function inside(point, el, rect){
    if(!rect){
        return domPlane.pointInside(point, el);
    }else{
        return (point.y > rect.top && point.y < rect.bottom &&
                point.x > rect.left && point.x < rect.right);
    }
}

/*
git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
git push -u origin master
*/

module.exports = AutoScrollerFactory;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../../node_modules/dom-mousemove-dispatcher/dist/bundle.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectCreate = void 0;
if (typeof Object.create != 'function') {
  objectCreate = function (undefined) {
    var Temp = function Temp() {};
    return function (prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError('Argument must be an object, or null');
      }
      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;
      if (propertiesObject !== undefined) {
        Object.defineProperties(result, propertiesObject);
      }

      // to imitate the case of Object.create(null)
      if (prototype === null) {
        result.__proto__ = null;
      }
      return result;
    };
  }();
} else {
  objectCreate = Object.create;
}

var objectCreate$1 = objectCreate;

var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

function createDispatcher(element) {

    var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
    };

    if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
    }

    function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
    }

    var dispatch = function () {
        if (MouseEvent) {
            return function m1(element, initMove, data) {
                var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove));

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        } else if (typeof document.createEvent === 'function') {
            return function m2(element, initMove, data) {
                var settings = createMoveInit(defaultSettings, initMove);
                var evt = document.createEvent('MouseEvents');

                evt.initMouseEvent("mousemove", true, //can bubble
                true, //cancelable
                window, //view
                0, //detail
                settings.screenX, //0, //screenX
                settings.screenY, //0, //screenY
                settings.clientX, //80, //clientX
                settings.clientY, //20, //clientY
                settings.ctrlKey, //false, //ctrlKey
                settings.altKey, //false, //altKey
                settings.shiftKey, //false, //shiftKey
                settings.metaKey, //false, //metaKey
                settings.button, //0, //button
                settings.relatedTarget //null //relatedTarget
                );

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        } else if (typeof document.createEventObject === 'function') {
            return function m3(element, initMove, data) {
                var evt = document.createEventObject();
                var settings = createMoveInit(defaultSettings, initMove);
                for (var name in settings) {
                    evt[name] = settings[name];
                }

                //evt.dispatched = 'mousemove';
                setSpecial(evt, data);

                return element.dispatchEvent(evt);
            };
        }
    }();

    function destroy() {
        if (element) element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
    }

    return {
        destroy: destroy,
        dispatch: dispatch
    };
}

function createMoveInit(defaultSettings, initMove) {
    initMove = initMove || {};
    var settings = objectCreate$1(defaultSettings);
    for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }

    return settings;
}

function setSpecial(e, data) {
    console.log('data ', data);
    e.data = data || {};
    e.dispatched = 'mousemove';
}

/*
http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
*/

module.exports = createDispatcher;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../../node_modules/dom-plane/dist/bundle.js":
/*!**********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/dom-plane/dist/bundle.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var createPointCb = _interopDefault(__webpack_require__(/*! create-point-cb */ "../../node_modules/create-point-cb/dist/bundle.js"));

function createWindowRect() {
    var props = {
        top: { value: 0, enumerable: true },
        left: { value: 0, enumerable: true },
        right: { value: window.innerWidth, enumerable: true },
        bottom: { value: window.innerHeight, enumerable: true },
        width: { value: window.innerWidth, enumerable: true },
        height: { value: window.innerHeight, enumerable: true },
        x: { value: 0, enumerable: true },
        y: { value: 0, enumerable: true }
    };

    if (Object.create) {
        return Object.create({}, props);
    } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
    }
}

function getClientRect(el) {
    if (el === window) {
        return createWindowRect();
    } else {
        try {
            var rect = el.getBoundingClientRect();
            if (rect.x === undefined) {
                rect.x = rect.left;
                rect.y = rect.top;
            }
            return rect;
        } catch (e) {
            throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
    }
}

function pointInside(point, el) {
    var rect = getClientRect(el);
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}

exports.createPointCB = createPointCb;
exports.getClientRect = getClientRect;
exports.pointInside = pointInside;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../../node_modules/dom-set/dist/bundle.js":
/*!********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/dom-set/dist/bundle.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var arrayFrom = _interopDefault(__webpack_require__(/*! array-from */ "../../node_modules/array-from/index.js"));
var isArray = _interopDefault(__webpack_require__(/*! is-array */ "../../node_modules/is-array/index.js"));
var isElement = _interopDefault(__webpack_require__(/*! iselement */ "../../node_modules/iselement/module/index.js"));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */
var isElement$1 = function (input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
};

function select(selector){
    if(typeof selector === 'string'){
        try{
            return document.querySelector(selector);
        }catch(e){
            throw e;
        }
    }else if(isElement(selector)){
        return selector;
    }
}

function selectAll(selector){
    if(typeof selector === 'string'){
        return Array.prototype.slice.apply(
            document.querySelectorAll(selector)
        );
    }else if(isArray(selector)){
        return selector.map(select);
    }else if('length' in selector){
        return arrayFrom(selector).map(select);
    }
}

function indexOfElement(elements, element){
    element = resolveElement(element, true);
    if(!isElement$1(element)) { return -1; }
    for(var i=0; i<elements.length; i++){
        if(elements[i] === element){
            return i;
        }
    }
    return -1;
}

function hasElement(elements, element){
    return -1 !== indexOfElement(elements, element);
}

function domListOf(arr){

    if(!arr) { return []; }

    try{
        if(typeof arr === 'string'){
            return arrayFrom(document.querySelectorAll(arr));
        }else if(isArray(arr)){
            return arr.map(resolveElement);
        }else{
            if(typeof arr.length === 'undefined'){
                return [resolveElement(arr)];
            }

            return arrayFrom(arr, resolveElement);

        }
    }catch(e){
        throw new Error(e);
    }

}

function concatElementLists(){
    var lists = [], len = arguments.length;
    while ( len-- ) lists[ len ] = arguments[ len ];

    return lists.reduce(function (last, list){
        return list.length ? last : last.concat(domListOf(list));
    }, []);
}

function pushElements(elements, toAdd){

    for(var i=0; i<toAdd.length; i++){
        if(!hasElement(elements, toAdd[i]))
            { elements.push(toAdd[i]); }
    }

    return toAdd;
}

function addElements(elements){
    var toAdd = [], len = arguments.length - 1;
    while ( len-- > 0 ) toAdd[ len ] = arguments[ len + 1 ];

    toAdd = toAdd.map(resolveElement);
    return pushElements(elements, toAdd);
}

function removeElements(elements){
    var toRemove = [], len = arguments.length - 1;
    while ( len-- > 0 ) toRemove[ len ] = arguments[ len + 1 ];

    return toRemove.map(resolveElement).reduce(function (last, e){

        var index = indexOfElement(elements, e);

        if(index !== -1)
            { return last.concat(elements.splice(index, 1)); }
        return last;
    }, []);
}

function resolveElement(element, noThrow){
    if(typeof element === 'string'){
        try{
            return document.querySelector(element);
        }catch(e){
            throw e;
        }

    }

    if(!isElement$1(element) && !noThrow){
        throw new TypeError((element + " is not a DOM element."));
    }
    return element;
}

exports.indexOfElement = indexOfElement;
exports.hasElement = hasElement;
exports.domListOf = domListOf;
exports.concatElementLists = concatElementLists;
exports.addElements = addElements;
exports.removeElements = removeElements;
exports.resolveElement = resolveElement;
exports.select = select;
exports.selectAll = selectAll;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../../node_modules/is-array/index.js":
/*!***************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/is-array/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};


/***/ }),

/***/ "../../node_modules/iselement/module/index.js":
/*!***********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/iselement/module/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
});

/***/ }),

/***/ "../../node_modules/positioning/dist/entry.js":
/*!***********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/positioning/dist/entry.js ***!
  \***********************************************************************************************************************/
/*! exports provided: positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "../../node_modules/positioning/dist/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });


//# sourceMappingURL=entry.js.map

/***/ }),

/***/ "../../node_modules/positioning/dist/positioning.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/positioning/dist/positioning.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /*
      Return false if the element to position is outside the viewport
    */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var _a = placement.split('-'), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var marginTop = parseFloat(targetElStyles.marginTop);
        var marginBottom = parseFloat(targetElStyles.marginBottom);
        var marginLeft = parseFloat(targetElStyles.marginLeft);
        var marginRight = parseFloat(targetElStyles.marginRight);
        var topPosition = 0;
        var leftPosition = 0;
        switch (placementPrimary) {
            case 'top':
                topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                break;
            case 'bottom':
                topPosition = (hostElPosition.top + hostElPosition.height);
                break;
            case 'left':
                leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                break;
            case 'right':
                leftPosition = (hostElPosition.left + hostElPosition.width);
                break;
        }
        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                }
                else {
                    topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                }
                break;
        }
        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
        // Check if the targetElement is inside the viewport
        var targetElBCR = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight;
    };
    return Positioning;
}());

var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
    var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
    var allowedPlacements = [
        'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
        'right-top', 'right-bottom'
    ];
    var classList = targetElement.classList;
    var addClassesToTarget = function (targetPlacement) {
        var _a = targetPlacement.split('-'), primary = _a[0], secondary = _a[1];
        var classes = [];
        if (baseClass) {
            classes.push(baseClass + "-" + primary);
            if (secondary) {
                classes.push(baseClass + "-" + primary + "-" + secondary);
            }
            classes.forEach(function (classname) { classList.add(classname); });
        }
        return classes;
    };
    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach(function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); });
    }
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    // Required for transform:
    var style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';
    var testPlacement;
    var isInViewport = false;
    for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
        testPlacement = placementVals_1[_i];
        var addedClasses = addClassesToTarget(testPlacement);
        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }
        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach(function (classname) { classList.remove(classname); });
        }
    }
    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }
    return testPlacement;
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-detail/app-project-detail.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/app-project-detail/app-project-detail.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Project</h1>\n\n\n<mat-card class=\"mb-1\">\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"projectForm\">\n    <mat-card-content>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n      </mat-form-field>\n    </mat-card-content>\n  </form>\n</mat-card>\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Pages</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-list [listDataSource]=\"project?.projectPages\">\n      <div *appListTitle=\"let item = item\" style=\"display:flex\">\n        <div class=\"w-100\">\n          {{item?.name || 'Click to expand'}}\n        </div>\n        <button mat-icon-button color=\"warn\" (click)=\"onRemovePageClicked(item)\" style=\"margin: -10px 2px\"\n          matTooltip=\"Delete Page\" aria-label=\"Delete Page\">\n          <mat-icon>clear</mat-icon>\n        </button>\n      </div>\n      <div *appListExpander=\"let item = item\">\n        <div *ngIf=\"item\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Name</mat-label>\n            <input matInput [ngModel]=\"item.name\" (ngModelChange)=\"item.name = $event; projectForm.markAsDirty()\"\n              required>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Tooltip</mat-label>\n            <input matInput [ngModel]=\"item.tooltip\" (ngModelChange)=\"item.tooltip = $event; projectForm.markAsDirty()\"\n              required>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>URL</mat-label>\n            <input matInput [ngModel]=\"item.url\" (ngModelChange)=\"item.url = $event; projectForm.markAsDirty()\"\n              required>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Icon</mat-label>\n            <mat-select [ngModel]=\"item.icon\" (ngModelChange)=\"item.icon = $event; projectForm.markAsDirty()\">\n              <mat-select-trigger>\n                {{getIconByName(item.icon)?.label || 'Unknown'}}\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let icon of allIcons\" [value]=\"icon.name\" style=\"display:inline-block\"\n                [matTooltip]=\"icon.label\" [attr.aria-label]=\"icon.label\">\n                <mat-icon style=\"margin-right: 0;\" [svgIcon]=\"icon.name\"></mat-icon>\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Associated Roles</mat-label>\n            <mat-select [ngModel]=\"item.roles\" (ngModelChange)=\"item.roles = $event; projectForm.markAsDirty()\"\n              multiple>\n              <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n                {{role}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        </div>\n      </div>\n    </app-list>\n    <button mat-button class=\"w-100\" (click)=\"onNewPageClicked()\">\n      <mat-icon>add</mat-icon>New Page\n    </button>\n  </mat-card-content>\n</mat-card>\n\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveProjectClicked()\"\n  [disabled]=\"isLoading || projectForm.invalid || projectForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.html":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Page?</h1>\n<div mat-dialog-content>\n  <p>Are you sure?</p>\n</div>\n<div mat-dialog-actions class=\"action-buttons\">\n  <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>Cancel</button>\n  <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"true\" >Delete</button>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-management/app-project-management.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/app-project-management/app-project-management.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Projects\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddProjectButtonClicked()\"\n    title=\"Add a new project\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"projectsTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n  <!-- <button bulk-action mat-button color=\"primary\">Edit</button> -->\n\n  <ng-container matColumnDef=\"projectName\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let project\"> {{project.name}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"pages\">\n    <th mat-header-cell *matHeaderCellDef> Pages </th>\n    <td mat-cell *matCellDef=\"let project\"> {{project.projectPages?.length || 0}} </td>\n  </ng-container>\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Project</h1>\n<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Project Name</mat-label>\n      <input matInput formControlName=\"name\" required>\n    </mat-form-field>\n  </div>\n  \n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\">Cancel</button>\n    <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\"\n      [disabled]=\"isLoading || projectForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-detail/application-detail.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/application-detail/application-detail.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Application</h1>\n\n<mat-card class=\"mb-1\">\n    <mat-card-header>\n        <mat-card-title>Details</mat-card-title>\n    </mat-card-header>\n    <form [formGroup]=\"appForm\">\n        <mat-card-content>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Name</mat-label>\n                <input matInput formControlName=\"name\" required>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Description</mat-label>\n                <input matInput formControlName=\"description\" required>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100 mb-1\">\n                <mat-label>Base URL</mat-label>\n                <input matInput formControlName=\"baseUrl\" required>\n                <mat-hint>\n                    <mat-icon color=\"warn\">warning</mat-icon> Changing this will affect routing\n                </mat-hint>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Display Order</mat-label>\n                <input matInput formControlName=\"displayOrder\" type=\"number\" required>\n            </mat-form-field>\n        </mat-card-content>\n    </form>\n</mat-card>\n\n<mat-card class=\"mb-1\">\n    <mat-card-header>\n        <mat-card-title>Associated Projects</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <mat-action-list class=\"qa-action-list\">\n            <button mat-list-item *ngFor=\"let project of app?.portalProjects\" (click)=\"onProjectClicked(project)\">{{project.name}}</button>\n        </mat-action-list>\n    </mat-card-content>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveAppClicked()\"\n    [disabled]=\"isLoading || appForm.invalid || appForm.pristine\">Update</button>\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-management/application-management.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/application-management/application-management.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Applications\n    <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddAppButtonClicked()\"\n      title=\"Add a new application\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </h1>\n  \n  <!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n  \n  <app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"appsTableDataSource\"\n    [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n    <!-- <button bulk-action mat-button color=\"primary\">Edit</button> -->\n  \n    <ng-container matColumnDef=\"appName\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"baseUrl\">\n        <th mat-header-cell *matHeaderCellDef> Base URL </th>\n        <td mat-cell *matCellDef=\"let app\"> {{app.baseUrl}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"displayOrder\">\n          <th mat-header-cell *matHeaderCellDef> Order </th>\n          <td mat-cell *matCellDef=\"let app\"> {{app.displayOrder}} </td>\n        </ng-container>\n  </app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Application</h1>\n<form [formGroup]=\"appForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Description</mat-label>\n      <input matInput formControlName=\"description\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Display Order</mat-label>\n      <input matInput formControlName=\"displayOrder\" type=\"number\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Base URL</mat-label>\n        <input matInput formControlName=\"baseUrl\" required>\n      </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || appForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Course</h1>\n<mat-dialog-content>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Course</mat-label>\n    <mat-select [ngModel]=\"data.selectedCourse\" (ngModelChange)=\"data.selectedCourse = $event; data.selectedDuration = $event.duration || 5\">\n      <mat-option *ngFor=\"let course of data.availableCourses\" [value]=\"course\" required>\n        <strong>{{course.courseCode}}</strong> {{course.courseCode ? '-' : ''}} {{course.courseName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Trainer</mat-label>\n    <mat-select [(ngModel)]=\"data.selectedTrainer\">\n      <mat-option *ngFor=\"let trainer of data.availableTrainers\" [value]=\"trainer\" required>\n        <strong>{{trainer.user?.firstName}}\n          {{trainer.user?.lastName}}</strong> {{trainer.user?.firstName || trainer.user?.lastName ? '-' : ''}}\n        {{trainer.user?.userName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Location</mat-label>\n    <mat-select [(ngModel)]=\"data.selectedLocation\">\n      <mat-option *ngFor=\"let location of data.availableLocations\" [value]=\"location\" required>\n        <strong>{{location.name}}</strong> - {{location.address}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Duration</mat-label>\n    <input matInput type=\"number\" (ngModelChange)=\"data.selectedDuration = $event\" required\n      [ngModel]=\"data.selectedDuration\" [disabled]=\"!data.selectedCourse\">\n  </mat-form-field>\n</mat-dialog-content> \n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-flat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial\n    [disabled]=\"!(data.selectedCourse && data.selectedDuration && data.selectedTrainer)\">Add</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/cohort-detail.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/cohort-detail/cohort-detail.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Cohort</h1>\n\n<div *ngIf=\"!isLoading\">\n  <mat-card class=\"mb-1\">\n    <mat-card-header>\n      <mat-card-title>Details</mat-card-title>\n    </mat-card-header>\n    <form [formGroup]=\"cohortForm\">\n      <mat-card-content>\n\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Cohort Name</mat-label>\n          <input formControlName=\"name\" matInput readonly>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Start Date</mat-label>\n          <input matInput [matDatepicker]=\"startDatePicker\" formControlName=\"startDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #startDatePicker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Primary Trainer</mat-label>\n          <mat-select formControlName=\"trainerUserName\">\n            <mat-option *ngFor=\"let trainer of availableTrainers\" [value]=\"trainer.user.userName\" required>\n              <strong>{{trainer.user?.firstName}}\n                {{trainer.user?.lastName}}</strong> {{trainer.user?.firstName || trainer.user?.lastName ? '-' : ''}}\n              {{trainer.user?.userName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Trainees</mat-label>\n          <mat-select multiple formControlName=\"traineeNames\">\n            <mat-select-trigger>{{cohortForm.value.traineeNames?.join(', ')}}</mat-select-trigger>\n            <mat-option *ngFor=\"let trainee of availableTrainees\"\n                        [value]=\"trainee.user?.userName\" required>\n              <strong>{{trainee.user?.firstName}}\n                {{trainee.user?.lastName}}</strong> {{trainee.user?.firstName || trainee.user?.lastName ? '-' : ''}}\n              {{trainee.user?.userName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-card-content>\n    </form>\n  </mat-card>\n\n  <mat-card class=\"mb-1\">\n    <mat-card-header>\n      <mat-card-title>Course Planner - {{viewDate | date:'MMMM y'}}</mat-card-title>\n      <div style=\"margin-left:auto\">\n        <button mat-button mwlCalendarPreviousView view=\"month\" [(viewDate)]=\"viewDate\">\n          Previous\n        </button>\n        <button mat-button (click)=\"onCalendarStartClicked()\">\n          Start\n        </button>\n        <button mat-button mwlCalendarToday [(viewDate)]=\"viewDate\">\n          Today\n        </button>\n        <button mat-button mwlCalendarNextView view=\"month\" [(viewDate)]=\"viewDate\">\n          Next\n        </button>\n      </div>\n    </mat-card-header>\n    <mat-card-content>\n\n      <mwl-calendar-month-view class=\"course-planner-calendar\" [(viewDate)]=\"viewDate\" [events]=\"calendarEvents\"\n                               (eventTimesChanged)=\"eventTimesChanged($event)\" [refresh]=\"refreshCalendar\"\n                               (eventClicked)=\"eventClicked($event)\"\n                               (dayClicked)=\"dayClicked($event)\">\n      </mwl-calendar-month-view>\n    </mat-card-content>\n  </mat-card>\n\n<mat-card class=\"mb-1\">\n  <mat-card-header>\n    <mat-card-title>\n      Trainee Usernames\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p *ngFor=\"let trainee of cohort?.traineeNames\">{{trainee}}</p>\n  </mat-card-content>\n</mat-card>\n\n  <div>\n    <button mat-flat-button class=\"w-100\" color=\"accent\" (click)=\"onSaveCohortClicked()\">Update</button>\n  </div>\n</div>\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit Course</h1>\n<mat-dialog-content>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Trainer</mat-label>\n    <mat-select [(ngModel)]=\"selectedTrainer\" required>\n      <mat-option *ngFor=\"let trainer of data.availableTrainers\" [value]=\"trainer.user.userName\">\n        <strong>{{trainer.user?.firstName}}\n          {{trainer.user?.lastName}}</strong> {{trainer.user?.firstName || trainer.user?.lastName ? '-' : ''}}\n        {{trainer.user?.userName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Location</mat-label>\n    <mat-select [(ngModel)]=\"selectedLocation\">\n      <mat-option *ngFor=\"let location of data.availableLocations\" [value]=\"location.id\" required>\n        <strong>{{location.name}}</strong> - {{location.address}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"w-100\">\n    <mat-label>Duration</mat-label>\n    <input matInput type=\"number\" required\n      [(ngModel)]=\"selectedDuration\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"{remove: true}\" class=\"mr-auto\">Remove</button>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\" cdkFocusInitial\n    [disabled]=\"!(selectedDuration && selectedTrainer)\">Update</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-management/cohort-management.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/cohort-management/cohort-management.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Cohorts\n    <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddCohortButtonClicked()\" title=\"Add a new cohort\">\n        <mat-icon>add</mat-icon>\n    </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"cohortsTableDataSource\"\n    [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n    <!-- <button bulk-action mat-button color=\"primary\">Edit</button> -->\n\n    <ng-container matColumnDef=\"cohortName\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let cohort\"> {{cohort.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"trainer\">\n        <th mat-header-cell *matHeaderCellDef> Trainer </th>\n        <td mat-cell *matCellDef=\"let cohort\"> {{cohort.trainerUserName}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"start\">\n        <th mat-header-cell *matHeaderCellDef> Start Date </th>\n        <td mat-cell *matCellDef=\"let cohort\"> {{cohort.startDate}} </td>\n    </ng-container>\n</app-data-table>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Cohort</h1>\n<form [formGroup]=\"cohortForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Cohort Name</mat-label>\n      <input formControlName=\"name\" matInput required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Start Date</mat-label>\n      <input matInput [matDatepicker]=\"startDatePicker\" formControlName=\"startDate\" required>\n      <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n      <mat-datepicker #startDatePicker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Primary Trainer</mat-label>\n      <mat-select formControlName=\"trainerUserName\">\n        <mat-option *ngFor=\"let trainer of availableTrainers\" [value]=\"trainer.user.userName\" required>\n          <strong>{{trainer.user?.firstName}}\n            {{trainer.user?.lastName}}</strong> {{trainer.user?.firstName || trainer.user?.lastName ? '-' : ''}}\n          {{trainer.user?.userName}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button type=\"button\" [mat-dialog-close]=\"false\" [disabled]=\"isLoading\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || cohortForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-detail/course-detail.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/course-detail/course-detail.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Course</h1>\n\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"courseForm\">\n    <mat-card-content>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Course Code</mat-label>\n        <input matInput formControlName=\"courseCode\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Course Name</mat-label>\n        <input matInput formControlName=\"courseName\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Suggested Duration</mat-label>\n        <input matInput formControlName=\"duration\" type=\"number\" min=\"1\" step=\"1\" max=\"99\" pattern=\"\\d*\" required>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Technologies</mat-label>\n        <mat-select formControlName=\"courseTechnologies\" multiple>\n          <mat-optgroup *ngFor=\"let category of availableTechCategories\" [label]=\"category.categoryName\">\n            <mat-option *ngFor=\"let tech of category.technologies\" [value]=\"tech.id\">\n              {{tech.technologyName}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-select>\n      </mat-form-field>\n\n    </mat-card-content>\n  </form>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveCourseClicked()\" [disabled]=\"isLoading || courseForm.invalid || courseForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-management/course-management.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/course-management/course-management.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Courses\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddCourseButtonClicked()\"\n    title=\"Add a new course\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"coursesTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n  \n  <ng-container matColumnDef=\"courseName\">\n    <th mat-header-cell *matHeaderCellDef> Code </th>\n    <td mat-cell *matCellDef=\"let course\"> {{course.courseCode}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"courseCode\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let course\"> {{course.courseName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"duration\">\n    <th mat-header-cell *matHeaderCellDef> Suggested Duration </th>\n    <td mat-cell *matCellDef=\"let course\"> {{course.duration}} </td>\n  </ng-container>\n\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Course</h1>\n<form [formGroup]=\"courseForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Course Code</mat-label>\n      <input matInput formControlName=\"courseCode\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Course Name</mat-label>\n      <input matInput formControlName=\"courseName\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Suggested Duration</mat-label>\n      <input matInput formControlName=\"duration\" type=\"number\" min=\"1\" step=\"1\" max=\"99\" pattern=\"\\d*\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Technologies</mat-label>\n      <mat-select formControlName=\"courseTechnologies\" multiple>\n        <mat-optgroup *ngFor=\"let category of availableTechCategories\" [label]=\"category.categoryName\">\n          <mat-option *ngFor=\"let tech of category.technologies\" [value]=\"tech.id\">\n            {{tech.technologyName}}\n          </mat-option>\n        </mat-optgroup>\n      </mat-select>\n    </mat-form-field>\n\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || courseForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-detail/form-detail.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/form-detail/form-detail.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Form</h1>\n\n\n<mat-card class=\"mb-1\">\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"formForm\">\n    <mat-card-content>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"formName\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Description</mat-label>\n        <input matInput formControlName=\"description\">\n      </mat-form-field>\n    </mat-card-content>\n  </form>\n</mat-card>\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Categories</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <app-list [listDataSource]=\"form?.questionCategories\">\n      <div *appListTitle=\"let item = item\" class=\"form-category-title-wrapper\">\n        <div class=\"category-name\">\n          {{item?.categoryName || 'Click to expand'}}\n        </div>\n        <div class=\"question-count\">\n          {{item?.questions.length}} questions\n        </div>\n      </div>\n      <div *appListExpander=\"let item = item\">\n        <ng-container *ngIf=\"item\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Category Name</mat-label>\n            <input matInput [(ngModel)]=\"item.categoryName\" required>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Description</mat-label>\n            <input matInput [(ngModel)]=\"item.description\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Selection Type</mat-label>\n            <mat-select [(ngModel)]=\"item.selectionType\" required>\n              <mat-option *ngFor=\"let type of selectionTypes\" [value]=\"type.value\">\n                {{type.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-checkbox [(ngModel)]=\"item.hasComment\">Allow additional comments</mat-checkbox>\n\n          <h3 class=\"mt-1\">Questions</h3>\n          <app-list [listDataSource]=\"item?.questions\">\n            <div *appListTitle=\"let question = item\">{{question?.body || 'Click to expand'}}</div>\n            <div *appListExpander=\"let question = item\">\n              <ng-container *ngIf=\"question\">\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                  <mat-label>Question</mat-label>\n                  <input matInput [(ngModel)]=\"question.body\" required>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                  <mat-label>Comment Label</mat-label>\n                  <input matInput [(ngModel)]=\"question.commentLabel\">\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                  <mat-label>Options</mat-label>\n                  <mat-chip-list #chipList>\n                    <mat-chip *ngFor=\"let opt of question.selectionOptionsList\" color=\"primary\" [removable]=\"true\"\n                      (removed)=\"removeOption(opt, question)\" selected>\n                      {{opt}}\n                      <mat-icon matChipRemove>cancel</mat-icon>\n                    </mat-chip>\n                    <input placeholder=\"Add more...\" [matChipInputFor]=\"chipList\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n                      (matChipInputTokenEnd)=\"addOption($event, question)\">\n                  </mat-chip-list>\n                </mat-form-field>\n                <mat-checkbox [(ngModel)]=\"question.hasComment\">Allow additional comments</mat-checkbox>\n              </ng-container>\n            </div>\n          </app-list>\n          <button mat-button class=\"w-100 mt-1\" (click)=\"onAddQuestionClicked(item)\">\n            <mat-icon>add</mat-icon> Add Question\n          </button>\n        </ng-container>\n      </div>\n    </app-list>\n    <button mat-button class=\"w-100 mt-1\" (click)=\"onAddCategoryClicked()\">\n      <mat-icon>add</mat-icon> Add Category\n    </button>\n  </mat-card-content>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveFormClicked()\"\n  [disabled]=\"isLoading || formForm.invalid || formForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-management/form-management.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/form-management/form-management.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Forms\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddFormButtonClicked()\"\n    title=\"Add a new form\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"formsTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n  <!-- <button bulk-action mat-button color=\"primary\">Edit</button> -->\n\n  <ng-container matColumnDef=\"formName\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let form\"> {{form.formName}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"questionCategories\">\n    <th mat-header-cell *matHeaderCellDef> Categories </th>\n    <td mat-cell *matCellDef=\"let form\"> {{form.questionCategories?.length || 0}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"questions\">\n    <th mat-header-cell *matHeaderCellDef> Questions </th>\n    <td mat-cell *matCellDef=\"let form\"> {{getQuestionCount(form.questionCategories) || 0}} </td>\n  </ng-container>\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Form</h1>\n<form [formGroup]=\"formForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"formName\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Description</mat-label>\n        <input matInput formControlName=\"description\">\n      </mat-form-field>\n\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || formForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-detail/location-detail.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/location-detail/location-detail.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Location</h1>\n\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"locationForm\">\n    <mat-card-content>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"address\" required>\n      </mat-form-field>\n\n    </mat-card-content>\n  </form>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveLocationClicked()\"\n  [disabled]=\"isLoading || locationForm.invalid || locationForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-management/location-management.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/location-management/location-management.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Locations\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddLocationButtonClicked()\"\n    title=\"Add a new location\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"locationsTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let location\"> {{location.name}} </td>\n  </ng-container>\n\n\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.html":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Location</h1>\n<form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n   <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"address\" required>\n      </mat-form-field>\n\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || locationForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-detail/role-detail.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/role-detail/role-detail.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Role</h1>\n\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"roleForm\">\n    <mat-card-content>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" required>\n      </mat-form-field>\n\n       <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Application</mat-label>\n        <mat-select formControlName=\"portalApplication\">\n            <mat-option *ngFor=\"let app of availableApps\" [value]=\"app.id\">\n              {{app.name}}\n            </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    </mat-card-content>\n  </form>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveRoleClicked()\"\n  [disabled]=\"isLoading || roleForm.invalid || roleForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Role</h1>\n<form [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Name</mat-label>\n      <input matInput formControlName=\"name\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Application</mat-label>\n      <mat-select formControlName=\"portalApplication\">\n        <mat-option *ngFor=\"let app of availableApps\" [value]=\"app\">\n          {{app.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"isLoading || roleForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-management/role-management.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/role-management/role-management.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Roles\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddRoleButtonClicked()\"\n    title=\"Add a new role\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"rolesTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let role\"> {{role.name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"application\">\n    <th mat-header-cell *matHeaderCellDef>Application</th>\n    <td mat-cell *matCellDef=\"let role\"> {{role.portalApplication?.name}} </td>\n  </ng-container>\n\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-detail/technology-detail.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/technology-detail/technology-detail.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Category</h1>\n\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Details</mat-card-title>\n  </mat-card-header>\n  \n  <mat-card-content>\n    <form [formGroup]=\"technologyForm\">\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Category Name</mat-label>\n        <input matInput formControlName=\"categoryName\" readonly>\n      </mat-form-field>\n\n    </form>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Technologies</mat-label>\n        <mat-chip-list #chipList>\n          <mat-chip *ngFor=\"let tech of technologies; index as i\" color=\"primary\" [removable]=\"true\" (removed)=\"remove(tech)\"\n            selected>\n            {{tech.technologyName}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n          <input placeholder=\"Add more...\" [matChipInputFor]=\"chipList\" \n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"true\"\n            (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n      </mat-form-field>\n    </mat-card-content>\n</mat-card>\n\n<button mat-flat-button color=\"accent\" class=\"w-100 mt-1\" (click)=\"onSaveCategoryClicked()\"\n  [disabled]=\"isLoading || technologyForm.invalid || technologyForm.pristine\">Update</button>\n\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add New Category</h1>\n<form [formGroup]=\"catForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Category Name</mat-label>\n      <input matInput formControlName=\"categoryName\" required>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\" type=\"button\">Cancel</button>\n    <button mat-flat-button color=\"primary\" type=\"submit\"\n      [disabled]=\"isLoading || catForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-management/technology-management.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/technology-management/technology-management.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Technology Categories\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddCategoryButtonClicked()\"\n    title=\"Add a new category\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n<app-data-table #dataTable [displayedColumns]=\"displayedColumns\" [dataSource]=\"categoriesTableDataSource\"\n  [isLoading]=\"isLoading\" (rowClick)=\"onRowClicked($event)\">\n\n  <ng-container matColumnDef=\"categoryName\">\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.categoryName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"technologies\">\n    <th mat-header-cell *matHeaderCellDef> Technologies </th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.technologies?.length || 0}} </td>\n  </ng-container>\n\n\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-detail/user-detail.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-detail/user-detail.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  User\n</h1>\n\n<mat-card class=\"mb-1\">\n  <mat-card-content style=\"margin-bottom: 0;\">\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n      <div formGroupName=\"user\">\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Username</mat-label>\n          <input matInput formControlName=\"userName\" readonly>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>First Name</mat-label>\n          <input matInput formControlName=\"firstName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Last Name</mat-label>\n          <input matInput formControlName=\"lastName\" required>\n        </mat-form-field>\n      </div>\n      <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Roles</mat-label>\n        <mat-select formControlName=\"roleNames\" multiple>\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n            {{role}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n<button mat-flat-button color=\"primary\" (click)=\"onSubmit()\" class=\"w-100\"\n  [disabled]=\"isLoading || userForm.invalid\">Update</button>\n\n<app-spinner-overlay [show]=\"isLoading\" fadeBg=\"true\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add A User</h1>\n<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Username</mat-label>\n      <input matInput formControlName=\"userName\" required>\n      <mat-error>Must be a valid @qa.com or @academytrainee.com email address</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>First Name</mat-label>\n      <input matInput formControlName=\"firstName\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Last Name</mat-label>\n      <input matInput formControlName=\"lastName\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Role</mat-label>\n      <mat-select formControlName=\"role\" required>\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n          {{role}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions class=\"action-buttons\">\n    <button mat-button [mat-dialog-close]=\"false\" [disabled]=\"isLoading\">Cancel</button>\n    <button mat-flat-button color=\"primary\" (click)=\"onSubmit()\"\n      [disabled]=\"isLoading || userForm.invalid\">Create</button>\n  </div>\n</form>\n<app-spinner-overlay [show]=\"isLoading\"></app-spinner-overlay>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete {{numberOfUsers > 1 ? numberOfUsers + ' Users': 'User'}}?</h1>\n<div mat-dialog-content>\n  <p><strong> This action cannot be undone.</strong></p>\n  <p>Are you sure?</p>\n</div>\n<div mat-dialog-actions class=\"action-buttons\">\n  <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>Cancel</button>\n  <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"true\" [disabled]=\"!canDelete\">Delete</button>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add to Cohort</h1>\n<div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n        <mat-label>Cohort</mat-label>\n        <mat-select [(ngModel)]=\"cohortSelection\">\n          <mat-option *ngFor=\"let cohort of cohorts\" [value]=\"cohort\">\n            {{cohort}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    \n      <p>This will add the chosen role to all selected users.</p>\n</div>\n<div mat-dialog-actions class=\"action-buttons\">\n  <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>Cancel</button>\n  <button mat-flat-button color=\"primary\" [mat-dialog-close]=\"cohortSelection\" [disabled]=\"!cohortSelection\">Update</button>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.html":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.html ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Role</h1>\n<div mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\n      <mat-label>Role</mat-label>\n      <mat-select [(ngModel)]=\"roleSelection\">\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n          {{role}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  <p>This will add the chosen role to all selected users.</p>\n</div>\n<div mat-dialog-actions class=\"action-buttons\">\n  <button mat-button [mat-dialog-close]=\"false\" cdkFocusInitial>Cancel</button>\n  <button mat-flat-button color=\"primary\" [mat-dialog-close]=\"roleSelection\" [disabled]=\"!roleSelection\">Update</button>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/user-management.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-admin/src/app/user-management-console/user-management.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Users\n  <button mat-icon-button style=\"float: right\" color=\"primary\" (click)=\"onAddUserClicked()\" title=\"Add a New User\">\n    <mat-icon>add</mat-icon>\n  </button>\n</h1>\n\n<!-- <app-search-bar [hasFilterPanel]=\"false\" (search)=\"performSearch()\" [(value)]=\"searchInput\"></app-search-bar> -->\n\n\n<app-data-table #table [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\" [isLoading]=\"isLoading\"\n  (rowClick)=\"onRowClicked($event)\">\n  <!-- BULK ACTIONS -->\n  <button bulk-action mat-button color=\"warn\" (click)=\"onDeleteActionClicked()\">Delete</button>\n\n  <!-- COLUMNS -->\n  <ng-container matColumnDef=\"Username\">\n    <th mat-header-cell *matHeaderCellDef> Username </th>\n    <td mat-cell *matCellDef=\"let userDetails\"> {{userDetails.user.userName}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"Email\">\n    <th mat-header-cell *matHeaderCellDef> Email </th>\n    <td mat-cell *matCellDef=\"let userDetails\"> {{userDetails.user.email}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"First Name\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let userDetails\"> {{userDetails.user.firstName}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"Last Name\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let userDetails\"> {{userDetails.user.lastName}} </td>\n  </ng-container>\n</app-data-table>"

/***/ }),

/***/ "../../node_modules/type-func/dist/bundle.js":
/*!**********************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/type-func/dist/bundle.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function getDef(f, d) {
    if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
    }

    return f;
}
function boolean(func, def) {

    func = getDef(func, def);

    if (typeof func === 'function') {
        return function f() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return !!func.apply(this, args);
        };
    }

    return !!func ? function () {
        return true;
    } : function () {
        return false;
    };
}

function integer(func, def) {

    func = getDef(func, def);

    if (typeof func === 'function') {
        return function f() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var n = parseInt(func.apply(this, args), 10);
            return n != n ? 0 : n;
        };
    }

    func = parseInt(func, 10);

    return func != func ? function () {
        return 0;
    } : function () {
        return func;
    };
}

function string(func, def) {

    func = getDef(func, def);

    if (typeof func === 'function') {
        return function f() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return '' + func.apply(this, args);
        };
    }

    func = '' + func;

    return function () {
        return func;
    };
}

exports.boolean = boolean;
exports.integer = integer;
exports.string = string;
//# sourceMappingURL=bundle.js.map


/***/ }),

/***/ "../qa-admin/src/app/_common/services/application.service.ts":
/*!*******************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/application.service.ts ***!
  \*******************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var ApplicationService = /** @class */ (function () {
    function ApplicationService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    // Application
    ApplicationService.prototype.getAllApplications = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_APPLICATIONS' });
    };
    ApplicationService.prototype.addApplication = function (app) {
        return this.qaHttp.post({ ref: 'CREATE_APPLICATION' }, app);
    };
    ApplicationService.prototype.getApplicationById = function (id) {
        return this.qaHttp.get({ ref: 'GET_APPLICATION_BY_ID', params: { id: id.toString() } });
    };
    ApplicationService.prototype.saveApplication = function (app) {
        return this.qaHttp.put({ ref: 'SAVE_APPLICATION' }, app);
    };
    // Project
    ApplicationService.prototype.getAllProjects = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_PORTAL_PROJECTS' });
    };
    ApplicationService.prototype.addProject = function (project) {
        return this.qaHttp.post({ ref: 'CREATE_PORTAL_PROJECT' }, project);
    };
    ApplicationService.prototype.getProjectById = function (id) {
        return this.qaHttp.get({ ref: 'GET_PORTAL_PROJECT_BY_ID', params: { id: id.toString() } });
    };
    ApplicationService.prototype.saveProject = function (project) {
        return this.qaHttp.put({ ref: 'SAVE_PORTAL_PROJECT' }, project);
    };
    ApplicationService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/cohort.service.ts":
/*!**************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/cohort.service.ts ***!
  \**************************************************************/
/*! exports provided: CohortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CohortService", function() { return CohortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");




var CohortService = /** @class */ (function () {
    function CohortService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    CohortService.prototype.searchCohorts = function (search) {
        return this.qaHttp.get({ ref: 'GET_COHORTS' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    CohortService.prototype.getCohortById = function (id) {
        return this.qaHttp.get({ ref: 'GET_COHORT_BY_ID', params: { id: id.toString() } });
    };
    CohortService.prototype.getAvailableTrainersForCohort = function () {
        return this.qaHttp.get({ ref: 'GET_TRAINERS_AVAILABLE_FOR_COHORT' });
    };
    CohortService.prototype.saveCohort = function (cohort) {
        return this.qaHttp.put({ ref: 'SAVE_COHORT' }, cohort);
    };
    CohortService.prototype.addCohort = function (cohort) {
        return this.qaHttp.post({ ref: 'CREATE_COHORT' }, cohort);
    };
    CohortService.prototype.getAvailableTraineesByCohortId = function (id) {
        return this.qaHttp.get({ ref: 'GET_AVAILABLE_TRAINEES_BY_COHORT_ID', params: { id: id.toString() } });
    };
    CohortService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_3__["QaHttpService"] }
    ]; };
    CohortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_3__["QaHttpService"]])
    ], CohortService);
    return CohortService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/course.service.ts":
/*!**************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/course.service.ts ***!
  \**************************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! randomcolor */ "../../node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);




var CourseService = /** @class */ (function () {
    function CourseService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    CourseService.prototype.getAllCourses = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_COURSES' });
    };
    CourseService.prototype.getCourseById = function (id) {
        return this.qaHttp.get({ ref: 'GET_COURSE_BY_ID', params: { id: id.toString() } });
    };
    CourseService.prototype.saveCourse = function (course) {
        return this.qaHttp.put({ ref: 'SAVE_COURSE' }, course);
    };
    CourseService.prototype.getColorForCourse = function (course) {
        return {
            primary: Object(randomcolor__WEBPACK_IMPORTED_MODULE_3__["randomColor"])({ seed: course.id, hue: 'random', luminosity: 'random' }),
            secondary: Object(randomcolor__WEBPACK_IMPORTED_MODULE_3__["randomColor"])({ seed: course.id, hue: 'random', luminosity: 'random' }) + '77',
        };
    };
    CourseService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/form.service.ts":
/*!************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/form.service.ts ***!
  \************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var FormService = /** @class */ (function () {
    function FormService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    FormService.prototype.getAllForms = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_FORMS' });
    };
    FormService.prototype.addForm = function (form) {
        return this.qaHttp.post({ ref: 'CREATE_FORM' }, form);
    };
    FormService.prototype.getFormById = function (id) {
        return this.qaHttp.get({ ref: 'GET_FORM_BY_ID', params: { id: id.toString() } });
    };
    FormService.prototype.saveForm = function (form) {
        return this.qaHttp.put({ ref: 'SAVE_FORM' }, form);
    };
    FormService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/location.service.ts":
/*!****************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/location.service.ts ***!
  \****************************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var LocationService = /** @class */ (function () {
    function LocationService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    LocationService.prototype.getAllLocations = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_LOCATIONS' });
    };
    LocationService.prototype.getLocationById = function (id) {
        return this.qaHttp.get({ ref: 'GET_LOCATION_BY_ID', params: { id: id.toString() } });
    };
    LocationService.prototype.saveLocation = function (location) {
        return this.qaHttp.put({ ref: 'SAVE_LOCATION' }, location);
    };
    LocationService.prototype.addLocation = function (location) {
        return this.qaHttp.post({ ref: 'CREATE_LOCATION' }, location);
    };
    LocationService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/role.service.ts":
/*!************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/role.service.ts ***!
  \************************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var RoleService = /** @class */ (function () {
    function RoleService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    RoleService.prototype.getPortalRoleNames = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_ROLE_NAMES' });
    };
    RoleService.prototype.getPortalRoles = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_ROLES' });
    };
    RoleService.prototype.getRoleById = function (id) {
        return this.qaHttp.get({ ref: 'GET_ROLE_BY_ID', params: { id: id.toString() } });
    };
    RoleService.prototype.saveRole = function (role) {
        return this.qaHttp.put({ ref: 'SAVE_ROLE' }, role);
    };
    RoleService.prototype.addRole = function (role) {
        return this.qaHttp.post({ ref: 'CREATE_ROLE' }, role);
    };
    RoleService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/services/user.service.ts":
/*!************************************************************!*\
  !*** ../qa-admin/src/app/_common/services/user.service.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _portal_core_src_app_common_models_user_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/models/user-details.model */ "./src/app/_common/models/user-details.model.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");





var UserService = /** @class */ (function () {
    function UserService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    UserService.prototype.getAllUsers = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_USERS' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UserService.prototype.deleteUsers = function (users) {
        return this.qaHttp.put({ ref: 'DELETE_USERS' }, users).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UserService.prototype.addUser = function (user) {
        var userDetails = new _portal_core_src_app_common_models_user_details_model__WEBPACK_IMPORTED_MODULE_3__["UserDetailsModel"]();
        user.email = user.userName;
        userDetails.user = user;
        userDetails.roleNames = [user.role];
        return this.qaHttp.post({ ref: 'CREATE_USER' }, userDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UserService.prototype.updateUser = function (user) {
        return this.qaHttp.put({ ref: 'UPDATE_USER' }, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UserService.prototype.getUserByUsername = function (username) {
        return this.qaHttp.get({ ref: 'GET_USER_BY_USERNAME', params: { username: username.toString() } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UserService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../qa-admin/src/app/_common/technology.service.ts":
/*!*********************************************************!*\
  !*** ../qa-admin/src/app/_common/technology.service.ts ***!
  \*********************************************************/
/*! exports provided: TechnologyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyService", function() { return TechnologyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var TechnologyService = /** @class */ (function () {
    function TechnologyService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    TechnologyService.prototype.getAllCategories = function () {
        return this.qaHttp.get({ ref: 'GET_ALL_TECHNOLOGY_CATEGORIES' });
    };
    TechnologyService.prototype.getCategoryById = function (id) {
        return this.qaHttp.get({ ref: 'GET_ALL_TECHNOLOGY_CATEGORY_BY_ID', params: { id: id.toString() } });
    };
    TechnologyService.prototype.saveCategory = function (category) {
        return this.qaHttp.put({ ref: 'SAVE_TECHNOLOGY_CATEGORY' }, category);
    };
    TechnologyService.prototype.addCategory = function (category) {
        return this.qaHttp.post({ ref: 'CREATE_TECHNOLOGY_CATEGORY' }, category);
    };
    TechnologyService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    TechnologyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], TechnologyService);
    return TechnologyService;
}());



/***/ }),

/***/ "../qa-admin/src/app/app-project-detail/app-project-detail.component.ts":
/*!******************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-detail/app-project-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProjectDetailComponent", function() { return AppProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_qa_common_src_app_common_models_icons_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/qa-common/src/app/_common/models/icons.model */ "../qa-common/src/app/_common/models/icons.model.ts");
/* harmony import */ var projects_portal_core_src_app_common_models_project_page_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/portal-core/src/app/_common/models/project-page.model */ "./src/app/_common/models/project-page.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_page_confirm_dialog_delete_page_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete-page-confirm-dialog/delete-page-confirm-dialog.component */ "../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");














var AppProjectDetailComponent = /** @class */ (function () {
    function AppProjectDetailComponent(appService, roleService, aR, dialog, toastr, errorService) {
        this.appService = appService;
        this.roleService = roleService;
        this.aR = aR;
        this.dialog = dialog;
        this.toastr = toastr;
        this.errorService = errorService;
        this.isLoading = true;
        this.allIcons = projects_qa_common_src_app_common_models_icons_model__WEBPACK_IMPORTED_MODULE_7__["customIcons"];
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    AppProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var projectId = this.aR.snapshot.params.id;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.appService.getProjectById(projectId), this.roleService.getPortalRoleNames()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), project = _b[0], roles = _b[1];
            _this.project = project;
            _this.roles = roles;
            _this.projectForm.patchValue(_this.project);
        }, function (err) { return _this.errorService.handleError(err); });
    };
    AppProjectDetailComponent.prototype.getIconByName = function (name) {
        return this.allIcons.find(function (icon) { return icon.name === name; });
    };
    AppProjectDetailComponent.prototype.onSaveProjectClicked = function () {
        var _this = this;
        var project = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.project, this.projectForm.value);
        this.isLoading = true;
        this.appService.saveProject(project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function () {
            _this.projectForm.markAsPristine();
            _this.toastr.showSuccess('Project updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    AppProjectDetailComponent.prototype.onNewPageClicked = function () {
        this.project.projectPages.push(new projects_portal_core_src_app_common_models_project_page_model__WEBPACK_IMPORTED_MODULE_8__["ProjectPageModel"]());
        this.projectForm.markAsDirty();
    };
    AppProjectDetailComponent.prototype.onRemovePageClicked = function (page) {
        var _this = this;
        this.dialog.open(_delete_page_confirm_dialog_delete_page_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DeletePageConfirmDialogComponent"]).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (data) {
            if (data) {
                _this.project.projectPages = _this.project.projectPages.filter(function (p) { return p.id !== page.id; });
                _this.projectForm.markAsDirty();
            }
        });
    };
    AppProjectDetailComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] },
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_10__["RoleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_13__["QaToastrService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"] }
    ]; };
    AppProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-project-detail',
            template: __webpack_require__(/*! raw-loader!./app-project-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-detail/app-project-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _common_services_role_service__WEBPACK_IMPORTED_MODULE_10__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_13__["QaToastrService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"]])
    ], AppProjectDetailComponent);
    return AppProjectDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DeletePageConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePageConfirmDialogComponent", function() { return DeletePageConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DeletePageConfirmDialogComponent = /** @class */ (function () {
    function DeletePageConfirmDialogComponent() {
    }
    DeletePageConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    DeletePageConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-page-confirm-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-page-confirm-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeletePageConfirmDialogComponent);
    return DeletePageConfirmDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/app-project-management/app-project-management.component.css":
/*!***************************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-management/app-project-management.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2FwcC1wcm9qZWN0LW1hbmFnZW1lbnQvYXBwLXByb2plY3QtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../qa-admin/src/app/app-project-management/app-project-management.component.ts":
/*!**************************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-management/app-project-management.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AppProjectManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProjectManagementComponent", function() { return AppProjectManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var _new_project_dialog_new_project_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-project-dialog/new-project-dialog.component */ "../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.ts");








var AppProjectManagementComponent = /** @class */ (function () {
    function AppProjectManagementComponent(router, activatedRoute, appService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.projectsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['projectName', 'pages'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    AppProjectManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    AppProjectManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) { // Check if dataTable is defined. This isn't ready on first search (not that it matters)
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.appService.getAllProjects().subscribe(function (results) {
            _this.projectsTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    AppProjectManagementComponent.prototype.onAddProjectButtonClicked = function () {
        var _this = this;
        this.dialog.open(_new_project_dialog_new_project_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NewProjectDialogComponent"], {}).afterClosed().subscribe(function (data) {
            if (data) {
                _this.performSearch();
            }
        });
    };
    AppProjectManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'app-projects', event.data.id]);
    };
    AppProjectManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"])
    ], AppProjectManagementComponent.prototype, "dataTable", void 0);
    AppProjectManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-project-management',
            template: __webpack_require__(/*! raw-loader!./app-project-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-management/app-project-management.component.html"),
            styles: [__webpack_require__(/*! ./app-project-management.component.css */ "../qa-admin/src/app/app-project-management/app-project-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AppProjectManagementComponent);
    return AppProjectManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.css":
/*!******************************************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2FwcC1wcm9qZWN0LW1hbmFnZW1lbnQvbmV3LXByb2plY3QtZGlhbG9nL25ldy1wcm9qZWN0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NewProjectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectDialogComponent", function() { return NewProjectDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");







var NewProjectDialogComponent = /** @class */ (function () {
    function NewProjectDialogComponent(appService, dialogRef, errorService) {
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = false;
    }
    NewProjectDialogComponent.prototype.ngOnInit = function () {
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewProjectDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.appService.addProject(this.projectForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (project) { return _this.dialogRef.close(project); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewProjectDialogComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"] }
    ]; };
    NewProjectDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-project-dialog',
            template: __webpack_require__(/*! raw-loader!./new-project-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-project-dialog.component.css */ "../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"]])
    ], NewProjectDialogComponent);
    return NewProjectDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/application-detail/application-detail.component.ts":
/*!******************************************************************************!*\
  !*** ../qa-admin/src/app/application-detail/application-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ApplicationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailComponent", function() { return ApplicationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");








var ApplicationDetailComponent = /** @class */ (function () {
    function ApplicationDetailComponent(appService, errorService, aR, toastr, router) {
        this.appService = appService;
        this.errorService = errorService;
        this.aR = aR;
        this.toastr = toastr;
        this.router = router;
        this.isLoading = true;
        this.appForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            baseUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            displayOrder: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ApplicationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var appId = this.aR.snapshot.params.id;
        this.appService.getApplicationById(appId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (app) {
            _this.app = app;
            _this.appForm.patchValue(_this.app.portalApplication);
        }, function (err) { return _this.errorService.handleError(err); });
    };
    ApplicationDetailComponent.prototype.onSaveAppClicked = function () {
        var _this = this;
        var app = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.app.portalApplication, this.appForm.value);
        this.isLoading = true;
        this.appService.saveApplication(app)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.isLoading = false;
        })).subscribe(function () {
            _this.appForm.markAsPristine();
            _this.toastr.showSuccess('Application updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    ApplicationDetailComponent.prototype.onProjectClicked = function (_a) {
        var id = _a.id;
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'app-projects', id]);
    };
    ApplicationDetailComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__["QaToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ApplicationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-detail',
            template: __webpack_require__(/*! raw-loader!./application-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-detail/application-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__["QaToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ApplicationDetailComponent);
    return ApplicationDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/application-management/application-management.component.css":
/*!***************************************************************************************!*\
  !*** ../qa-admin/src/app/application-management/application-management.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2FwcGxpY2F0aW9uLW1hbmFnZW1lbnQvYXBwbGljYXRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../qa-admin/src/app/application-management/application-management.component.ts":
/*!**************************************************************************************!*\
  !*** ../qa-admin/src/app/application-management/application-management.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ApplicationManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManagementComponent", function() { return ApplicationManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var _new_app_dialog_new_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-app-dialog/new-app-dialog.component */ "../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var ApplicationManagementComponent = /** @class */ (function () {
    function ApplicationManagementComponent(router, activatedRoute, appService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.appsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['appName', 'baseUrl', 'displayOrder'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    ApplicationManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    ApplicationManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) { // Check if dataTable is defined. This isn't ready on first search (not that it matters)
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.appService.getAllApplications().subscribe(function (results) {
            _this.appsTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    ApplicationManagementComponent.prototype.onAddAppButtonClicked = function () {
        var _this = this;
        this.dialog.open(_new_app_dialog_new_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewAppDialogComponent"], {}).afterClosed().subscribe(function (data) {
            if (data) {
                _this.performSearch();
            }
        });
    };
    ApplicationManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'applications', event.data.id]);
    };
    ApplicationManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"])
    ], ApplicationManagementComponent.prototype, "dataTable", void 0);
    ApplicationManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-management',
            template: __webpack_require__(/*! raw-loader!./application-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-management/application-management.component.html"),
            styles: [__webpack_require__(/*! ./application-management.component.css */ "../qa-admin/src/app/application-management/application-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ApplicationManagementComponent);
    return ApplicationManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.css":
/*!**********************************************************************************************!*\
  !*** ../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2FwcGxpY2F0aW9uLW1hbmFnZW1lbnQvbmV3LWFwcC1kaWFsb2cvbmV3LWFwcC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewAppDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAppDialogComponent", function() { return NewAppDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var NewAppDialogComponent = /** @class */ (function () {
    function NewAppDialogComponent(appService, dialogRef, errorService) {
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = false;
        this.appForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            displayOrder: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            baseUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NewAppDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.appService.addApplication(this.appForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (app) { return _this.dialogRef.close(app); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewAppDialogComponent.ctorParameters = function () { return [
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewAppDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-app-dialog',
            template: __webpack_require__(/*! raw-loader!./new-app-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-app-dialog.component.css */ "../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewAppDialogComponent);
    return NewAppDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddCourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseDialogComponent", function() { return AddCourseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");



var AddCourseDialogComponent = /** @class */ (function () {
    function AddCourseDialogComponent(data) {
        this.data = data;
    }
    AddCourseDialogComponent.prototype.ngOnInit = function () {
    };
    AddCourseDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AddCourseDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-course-dialog',
            template: __webpack_require__(/*! raw-loader!./add-course-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AddCourseDialogComponent);
    return AddCourseDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/cohort-detail/cohort-detail.component.scss":
/*!**********************************************************************!*\
  !*** ../qa-admin/src/app/cohort-detail/cohort-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2NvaG9ydC1kZXRhaWwvY29ob3J0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../qa-admin/src/app/cohort-detail/cohort-detail.component.ts":
/*!********************************************************************!*\
  !*** ../qa-admin/src/app/cohort-detail/cohort-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: CohortDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CohortDetailComponent", function() { return CohortDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/cohort.service */ "../qa-admin/src/app/_common/services/cohort.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _common_services_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_common/services/course.service */ "../qa-admin/src/app/_common/services/course.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_course_dialog_add_course_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-course-dialog/add-course-dialog.component */ "../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_common/services/location.service */ "../qa-admin/src/app/_common/services/location.service.ts");
/* harmony import */ var _edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-course-dialog/edit-course-dialog.component */ "../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.ts");















var CohortDetailComponent = /** @class */ (function () {
    function CohortDetailComponent(cohortService, courseService, locationService, aR, dialog, toastr, errorService) {
        this.cohortService = cohortService;
        this.courseService = courseService;
        this.locationService = locationService;
        this.aR = aR;
        this.dialog = dialog;
        this.toastr = toastr;
        this.errorService = errorService;
        this.availableTrainers = [];
        this.availableCourses = [];
        this.availableLocations = [];
        this.availableTrainees = [];
        this.calendarEvents = [];
        this.viewDate = new Date();
        this.refreshCalendar = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoading = true;
        // this.availableEvents = this.availableCourses.map(course => this.courseToCalendarEvent(course));
        this.cohortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]().group({
            name: [''],
            startDate: [''],
            trainerUserName: [''],
            traineeNames: [[]]
        });
        this.cohortForm.disable();
    }
    CohortDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cohortId = this.aR.snapshot.params.id;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.cohortService.getCohortById(cohortId), this.courseService.getAllCourses(), this.cohortService.getAvailableTrainersForCohort(), this.locationService.getAllLocations(), this.cohortService.getAvailableTraineesByCohortId(cohortId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 5), cohort = _b[0], courses = _b[1], trainers = _b[2], locations = _b[3], trainees = _b[4];
            _this.cohort = cohort;
            _this.availableCourses = courses;
            _this.availableTrainers = trainers;
            _this.availableLocations = locations;
            _this.availableTrainees = trainees;
            _this.calendarEvents = _this.cohort.cohortCourses.map(function (c) { return _this.cohortCourseToCalendarEvent(c); });
            _this.viewDate = moment__WEBPACK_IMPORTED_MODULE_2__(cohort.startDate).toDate();
            _this.cohortForm.patchValue(cohort);
            _this.isLoading = false;
            _this.cohortForm.enable();
        }, function (err) { return _this.errorService.handleError(err); });
        this.cohortForm.valueChanges.subscribe(function (v) {
            _this.cohort = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.cohort, v);
        });
    };
    CohortDetailComponent.prototype.cohortCourseToCalendarEvent = function (course) {
        var startMom = moment__WEBPACK_IMPORTED_MODULE_2__(course.startDate).utc().add(moment__WEBPACK_IMPORTED_MODULE_2__(course.startDate).utcOffset(), 'm');
        return {
            start: startMom.toDate(),
            end: course.endDate ? moment__WEBPACK_IMPORTED_MODULE_2__(course.endDate).utc().add(moment__WEBPACK_IMPORTED_MODULE_2__(course.startDate).utcOffset(), 'm').toDate() : startMom.add(course.course.duration, 'days').toDate(),
            title: course.course.courseName,
            draggable: true,
            allDay: true,
            color: this.courseService.getColorForCourse(course.course),
            meta: course
        };
    };
    CohortDetailComponent.prototype.calendarEventToCohortCourse = function (calendarEvent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, calendarEvent.meta, { startDate: moment__WEBPACK_IMPORTED_MODULE_2__(calendarEvent.start).format('YYYY-MM-DD'), endDate: moment__WEBPACK_IMPORTED_MODULE_2__(calendarEvent.end).format('YYYY-MM-DD') });
    };
    CohortDetailComponent.prototype.buildCohortCourse = function (course, startDate, endDate, trainer, location) {
        return {
            course: course, startDate: startDate, endDate: endDate, trainer: trainer, location: location
        };
    };
    CohortDetailComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.refreshCalendar.next();
    };
    CohortDetailComponent.prototype.onCalendarStartClicked = function () {
        this.viewDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.cohort.startDate).toDate();
        this.refreshCalendar.next();
    };
    CohortDetailComponent.prototype.eventClicked = function (_a) {
        var _this = this;
        var event = _a.event, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["event"]);
        var dialog = this.dialog.open(_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EditCourseDialogComponent"], {
            data: {
                availableCourses: this.availableCourses,
                availableTrainers: this.availableTrainers,
                availableLocations: this.availableLocations,
                meta: event.meta
            }
        });
        dialog.afterClosed().subscribe(function (course) {
            if (course) {
                if (course.remove) {
                    _this.calendarEvents = _this.calendarEvents.filter(function (e) { return e.meta.id !== event.meta.id; });
                }
                else {
                    event.meta = course.meta;
                    event.start = event.meta.startDate;
                    event.end = event.meta.endDate;
                }
                _this.refreshCalendar.next();
            }
        });
    };
    CohortDetailComponent.prototype.dayClicked = function (_a) {
        var _this = this;
        var day = _a.day;
        var dialog = this.dialog.open(_add_course_dialog_add_course_dialog_component__WEBPACK_IMPORTED_MODULE_11__["AddCourseDialogComponent"], {
            data: {
                availableCourses: this.availableCourses,
                availableTrainers: this.availableTrainers,
                availableLocations: this.availableLocations
            }
        });
        dialog.beforeClosed().subscribe(function (data) {
            if (data) {
                _this.calendarEvents.push(_this.cohortCourseToCalendarEvent(_this.buildCohortCourse(data.selectedCourse, day.date, moment__WEBPACK_IMPORTED_MODULE_2__(day.date).add((data.selectedDuration || 1) - 1, 'days').toDate(), data.selectedTrainer, data.selectedLocation)));
                _this.refreshCalendar.next();
            }
        });
    };
    CohortDetailComponent.prototype.onSaveCohortClicked = function () {
        var _this = this;
        this.cohort = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.cohort, this.cohortForm.value, { cohortCourses: this.calendarEvents.map(function (e) { return _this.calendarEventToCohortCourse(e); }) });
        this.cohortService.saveCohort(this.cohort).subscribe(function (resp) {
            _this.toastr.showSuccess('Cohort updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    CohortDetailComponent.ctorParameters = function () { return [
        { type: _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"] },
        { type: _common_services_course_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"] },
        { type: _common_services_location_service__WEBPACK_IMPORTED_MODULE_13__["LocationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_12__["QaToastrService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["QaErrorHandlerService"] }
    ]; };
    CohortDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cohort-detail',
            template: __webpack_require__(/*! raw-loader!./cohort-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/cohort-detail.component.html"),
            styles: [__webpack_require__(/*! ./cohort-detail.component.scss */ "../qa-admin/src/app/cohort-detail/cohort-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"],
            _common_services_course_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"],
            _common_services_location_service__WEBPACK_IMPORTED_MODULE_13__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_12__["QaToastrService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["QaErrorHandlerService"]])
    ], CohortDetailComponent);
    return CohortDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseDialogComponent", function() { return EditCourseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var EditCourseDialogComponent = /** @class */ (function () {
    function EditCourseDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    EditCourseDialogComponent.prototype.ngOnInit = function () {
        this.selectedTrainer = this.data.meta.trainer ? this.data.meta.trainer.userName : null;
        this.selectedLocation = this.data.meta.location ? this.data.meta.location.id : null;
        this.selectedDuration = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.meta.endDate).diff(this.data.meta.startDate, 'days') + 1;
    };
    EditCourseDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data.meta.trainer = this.data.availableTrainers.find(function (t) { return t.user.userName === _this.selectedTrainer; }).user;
        this.data.meta.location = this.data.availableLocations.find(function (l) { return l.id === _this.selectedLocation; });
        this.data.meta.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.meta.startDate).add((this.selectedDuration || 1) - 1, 'days').toDate();
        this.dialogRef.close(this.data);
    };
    EditCourseDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    EditCourseDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-course-dialog',
            template: __webpack_require__(/*! raw-loader!./edit-course-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EditCourseDialogComponent);
    return EditCourseDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/cohort-management/cohort-management.component.ts":
/*!****************************************************************************!*\
  !*** ../qa-admin/src/app/cohort-management/cohort-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: CohortManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CohortManagementComponent", function() { return CohortManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/services/cohort.service */ "../qa-admin/src/app/_common/services/cohort.service.ts");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _new_cohort_dialog_new_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-cohort-dialog/new-cohort-dialog.component */ "../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var CohortManagementComponent = /** @class */ (function () {
    function CohortManagementComponent(router, activatedRoute, cohortService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cohortService = cohortService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.cohortsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['cohortName', 'trainer', 'start'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    CohortManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    CohortManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) { // Check if dataTable is defined. This isn't ready on first search (not that it matters)
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.cohortService.searchCohorts(this.searchInput).subscribe(function (results) {
            _this.cohortsTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    CohortManagementComponent.prototype.onAddCohortButtonClicked = function () {
        var _this = this;
        this.dialog.open(_new_cohort_dialog_new_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewCohortDialogComponent"], {}).afterClosed().subscribe(function (data) {
            if (data) {
                _this.performSearch();
            }
        });
    };
    CohortManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'cohorts', event.data.id]);
    };
    CohortManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_4__["CohortService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"])
    ], CohortManagementComponent.prototype, "dataTable", void 0);
    CohortManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cohort-management',
            template: __webpack_require__(/*! raw-loader!./cohort-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-management/cohort-management.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_4__["CohortService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CohortManagementComponent);
    return CohortManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.css":
/*!***********************************************************************************************!*\
  !*** ../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2NvaG9ydC1tYW5hZ2VtZW50L25ldy1jb2hvcnQtZGlhbG9nL25ldy1jb2hvcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewCohortDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCohortDialogComponent", function() { return NewCohortDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/cohort.service */ "../qa-admin/src/app/_common/services/cohort.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");







var NewCohortDialogComponent = /** @class */ (function () {
    function NewCohortDialogComponent(cohortService, errorService, dialogRef) {
        this.cohortService = cohortService;
        this.errorService = errorService;
        this.dialogRef = dialogRef;
        this.availableTrainers = [];
        this.isLoading = true;
        this.cohortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            startDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trainerUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    NewCohortDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cohortService.getAvailableTrainersForCohort().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (trainers) { return _this.availableTrainers = trainers; }, function (err) { return _this.errorService.handleError(err); });
    };
    NewCohortDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        var newCohort = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.cohortForm.value);
        this.cohortService.addCohort(newCohort)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (cohort) { return _this.dialogRef.close(cohort); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewCohortDialogComponent.ctorParameters = function () { return [
        { type: _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }
    ]; };
    NewCohortDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-cohort-dialog',
            template: __webpack_require__(/*! raw-loader!./new-cohort-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-cohort-dialog.component.css */ "../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]])
    ], NewCohortDialogComponent);
    return NewCohortDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/course-detail/course-detail.component.css":
/*!*********************************************************************!*\
  !*** ../qa-admin/src/app/course-detail/course-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2NvdXJzZS1kZXRhaWwvY291cnNlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../qa-admin/src/app/course-detail/course-detail.component.ts":
/*!********************************************************************!*\
  !*** ../qa-admin/src/app/course-detail/course-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/course.service */ "../qa-admin/src/app/_common/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_technology_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_common/technology.service */ "../qa-admin/src/app/_common/technology.service.ts");










var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(courseService, techService, aR, errorService, toastr) {
        this.courseService = courseService;
        this.techService = techService;
        this.aR = aR;
        this.errorService = errorService;
        this.toastr = toastr;
        this.availableTechCategories = [];
        this.isLoading = true;
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            courseName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]],
            courseCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            courseTechnologies: [[]]
        });
        this.courseForm.disable();
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.courseService.getCourseById(this.aR.snapshot.params.id), this.techService.getAllCategories())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.courseForm.enable();
            _this.isLoading = false;
        }))
            .subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), course = _b[0], techCats = _b[1];
            _this.course = course;
            _this.availableTechCategories = techCats;
            _this.courseForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.course, { courseTechnologies: _this.course.courseTechnologies.map(function (c) { return c.technology.id; }) }));
        }, function (err) { return _this.errorService.handleError(err); });
    };
    CourseDetailComponent.prototype.onSaveCourseClicked = function () {
        var _this = this;
        this.course = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.course, this.courseForm.value, { courseTechnologies: this.techIdArrayToCourseTechArray(this.courseForm.value.courseTechnologies) });
        this.courseService.saveCourse(this.course)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.courseForm.enable();
            _this.isLoading = false;
        })).subscribe(function () {
            _this.toastr.showSuccess('Course updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    CourseDetailComponent.prototype.techIdArrayToCourseTechArray = function (ids) {
        return this.availableTechCategories
            .reduce(function (prev, curr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](prev, curr.technologies); }, [])
            .filter(function (val) { return ids.some(function (id) { return id === val.id; }); })
            .map(function (tech) { return ({ technology: tech }); });
    };
    CourseDetailComponent.ctorParameters = function () { return [
        { type: _common_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
        { type: _common_technology_service__WEBPACK_IMPORTED_MODULE_9__["TechnologyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__["QaToastrService"] }
    ]; };
    CourseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-detail',
            template: __webpack_require__(/*! raw-loader!./course-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-detail/course-detail.component.html"),
            styles: [__webpack_require__(/*! ./course-detail.component.css */ "../qa-admin/src/app/course-detail/course-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _common_technology_service__WEBPACK_IMPORTED_MODULE_9__["TechnologyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__["QaToastrService"]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/course-management/course-management.component.ts":
/*!****************************************************************************!*\
  !*** ../qa-admin/src/app/course-management/course-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: CourseManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseManagementComponent", function() { return CourseManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/services/course.service */ "../qa-admin/src/app/_common/services/course.service.ts");
/* harmony import */ var _new_course_dialog_new_course_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-course-dialog/new-course-dialog.component */ "../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var CourseManagementComponent = /** @class */ (function () {
    function CourseManagementComponent(router, activatedRoute, courseService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.courseService = courseService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.coursesTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['courseName', 'courseCode', 'duration'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    CourseManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    CourseManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) {
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.courseService.getAllCourses().subscribe(function (results) {
            _this.coursesTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    CourseManagementComponent.prototype.onAddCourseButtonClicked = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_course_dialog_new_course_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewCourseDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.performSearch();
            }
        });
    };
    CourseManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'courses', event.data.id]);
    };
    CourseManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _common_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"])
    ], CourseManagementComponent.prototype, "dataTable", void 0);
    CourseManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-management',
            template: __webpack_require__(/*! raw-loader!./course-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-management/course-management.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _common_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CourseManagementComponent);
    return CourseManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.css":
/*!***********************************************************************************************!*\
  !*** ../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2NvdXJzZS1tYW5hZ2VtZW50L25ldy1jb3Vyc2UtZGlhbG9nL25ldy1jb3Vyc2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewCourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseDialogComponent", function() { return NewCourseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/course.service */ "../qa-admin/src/app/_common/services/course.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_technology_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_common/technology.service */ "../qa-admin/src/app/_common/technology.service.ts");








var NewCourseDialogComponent = /** @class */ (function () {
    function NewCourseDialogComponent(courseService, techService, dialogRef, errorService) {
        this.courseService = courseService;
        this.techService = techService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = true;
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            courseName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            duration: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]],
            courseCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            courseTechnologies: [[]]
        });
    }
    NewCourseDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.techService.getAllCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (cats) { return _this.availableTechCategories = cats; }, function (err) { return _this.errorService.handleError(err); });
    };
    NewCourseDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        var newCourse = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.courseForm.value, { courseTechnologies: [] });
        this.courseService.saveCourse(newCourse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (course) { return _this.dialogRef.close(course); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewCourseDialogComponent.ctorParameters = function () { return [
        { type: _common_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
        { type: _common_technology_service__WEBPACK_IMPORTED_MODULE_7__["TechnologyService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewCourseDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-course-dialog',
            template: __webpack_require__(/*! raw-loader!./new-course-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-course-dialog.component.css */ "../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _common_technology_service__WEBPACK_IMPORTED_MODULE_7__["TechnologyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewCourseDialogComponent);
    return NewCourseDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/form-detail/form-detail.component.ts":
/*!****************************************************************!*\
  !*** ../qa-admin/src/app/form-detail/form-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: FormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailComponent", function() { return FormDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/form.service */ "../qa-admin/src/app/_common/services/form.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_models_question_category_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/models/question-category.model */ "./src/app/_common/models/question-category.model.ts");
/* harmony import */ var projects_portal_core_src_app_common_models_question_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/portal-core/src/app/_common/models/question.model */ "./src/app/_common/models/question.model.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");











var FormDetailComponent = /** @class */ (function () {
    function FormDetailComponent(formService, errorService, aR, toastr) {
        this.formService = formService;
        this.errorService = errorService;
        this.aR = aR;
        this.toastr = toastr;
        this.isLoading = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["COMMA"]];
        this.selectionTypes = [
            { value: 'RADIO_BUTTON', label: 'Single' },
            { value: 'CHECK_BOX', label: 'Multiple' }
        ];
        this.formForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]().group({
            formName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['']
        });
    }
    FormDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.getFormById(this.aR.snapshot.params.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.formForm.enable();
            _this.isLoading = false;
        }))
            .subscribe(function (form) {
            _this.form = form;
            _this.formForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.form));
        }, function (err) { return _this.errorService.handleError(err); });
    };
    FormDetailComponent.prototype.onAddCategoryClicked = function () {
        this.form.questionCategories.push(new projects_portal_core_src_app_common_models_question_category_model__WEBPACK_IMPORTED_MODULE_7__["QuestionCategoryModel"]());
    };
    FormDetailComponent.prototype.onAddQuestionClicked = function (category) {
        category.questions.push(new projects_portal_core_src_app_common_models_question_model__WEBPACK_IMPORTED_MODULE_8__["QuestionModel"]());
    };
    FormDetailComponent.prototype.addOption = function (event, question) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            question.selectionOptionsList.push(value);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    FormDetailComponent.prototype.removeOption = function (option, question) {
        var index = question.selectionOptionsList.indexOf(option);
        if (index >= 0) {
            question.selectionOptionsList.splice(index, 1);
        }
    };
    FormDetailComponent.prototype.onSaveFormClicked = function () {
        var _this = this;
        var form = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form, this.formForm.value);
        this.formService.saveForm(form).subscribe(function (resp) {
            _this.toastr.showSuccess('Form updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    FormDetailComponent.ctorParameters = function () { return [
        { type: _common_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_10__["QaToastrService"] }
    ]; };
    FormDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-detail',
            template: __webpack_require__(/*! raw-loader!./form-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-detail/form-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_10__["QaToastrService"]])
    ], FormDetailComponent);
    return FormDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/form-management/form-management.component.ts":
/*!************************************************************************!*\
  !*** ../qa-admin/src/app/form-management/form-management.component.ts ***!
  \************************************************************************/
/*! exports provided: FormManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagementComponent", function() { return FormManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/services/form.service */ "../qa-admin/src/app/_common/services/form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_form_dialog_new_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-form-dialog/new-form-dialog.component */ "../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var FormManagementComponent = /** @class */ (function () {
    function FormManagementComponent(router, activatedRoute, formService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formService = formService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.formsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['formName', 'questionCategories', 'questions'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    FormManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    FormManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) { // Check if dataTable is defined. This isn't ready on first search (not that it matters)
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.formService.getAllForms().subscribe(function (results) {
            _this.formsTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    FormManagementComponent.prototype.onAddFormButtonClicked = function () {
        var _this = this;
        this.dialog.open(_new_form_dialog_new_form_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewFormDialogComponent"], {}).afterClosed().subscribe(function (data) {
            if (data) {
                _this.performSearch();
            }
        });
    };
    FormManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'forms', event.data.id]);
    };
    FormManagementComponent.prototype.getQuestionCount = function (cats) {
        return cats ? cats.map(function (cat) { return cat.questions; }).reduce(function (prev, curr) { return prev + curr.length || 0; }, 0) : 0;
    };
    FormManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _common_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"])
    ], FormManagementComponent.prototype, "dataTable", void 0);
    FormManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-management',
            template: __webpack_require__(/*! raw-loader!./form-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-management/form-management.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _common_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FormManagementComponent);
    return FormManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormDialogComponent", function() { return NewFormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/form.service */ "../qa-admin/src/app/_common/services/form.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var NewFormDialogComponent = /** @class */ (function () {
    function NewFormDialogComponent(formService, dialogRef, errorService) {
        this.formService = formService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = false;
        this.formForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            formName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['']
        });
    }
    NewFormDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.formService.addForm(this.formForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (form) { return _this.dialogRef.close(form); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewFormDialogComponent.ctorParameters = function () { return [
        { type: _common_services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewFormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-form-dialog',
            template: __webpack_require__(/*! raw-loader!./new-form-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewFormDialogComponent);
    return NewFormDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/location-detail/location-detail.component.ts":
/*!************************************************************************!*\
  !*** ../qa-admin/src/app/location-detail/location-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: LocationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailComponent", function() { return LocationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/location.service */ "../qa-admin/src/app/_common/services/location.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");








var LocationDetailComponent = /** @class */ (function () {
    function LocationDetailComponent(locationService, aR, errorService, toastr) {
        this.locationService = locationService;
        this.aR = aR;
        this.errorService = errorService;
        this.toastr = toastr;
        this.isLoading = true;
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.locationForm.disable();
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocationById(this.aR.snapshot.params.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.locationForm.enable();
            _this.isLoading = false;
        }))
            .subscribe(function (location) {
            _this.location = location;
            _this.locationForm.patchValue(_this.location);
        }, function (err) { return _this.errorService.handleError(err); });
    };
    LocationDetailComponent.prototype.onSaveLocationClicked = function () {
        var _this = this;
        this.location = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.location, this.locationForm.value);
        this.locationService.saveLocation(this.location)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.locationForm.enable();
            _this.isLoading = false;
        })).subscribe(function () {
            _this.toastr.showSuccess('Location updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    LocationDetailComponent.ctorParameters = function () { return [
        { type: _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__["QaToastrService"] }
    ]; };
    LocationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-detail',
            template: __webpack_require__(/*! raw-loader!./location-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-detail/location-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_7__["QaToastrService"]])
    ], LocationDetailComponent);
    return LocationDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/location-management/location-management.component.css":
/*!*********************************************************************************!*\
  !*** ../qa-admin/src/app/location-management/location-management.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL2xvY2F0aW9uLW1hbmFnZW1lbnQvbG9jYXRpb24tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../qa-admin/src/app/location-management/location-management.component.ts":
/*!********************************************************************************!*\
  !*** ../qa-admin/src/app/location-management/location-management.component.ts ***!
  \********************************************************************************/
/*! exports provided: LocationManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationManagementComponent", function() { return LocationManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/location.service */ "../qa-admin/src/app/_common/services/location.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _new_location_dialog_new_location_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-location-dialog/new-location-dialog.component */ "../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.ts");








var LocationManagementComponent = /** @class */ (function () {
    function LocationManagementComponent(locationService, dialog, activatedRoute, router, errorService) {
        this.locationService = locationService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errorService = errorService;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.locationsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['name'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    LocationManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    LocationManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) {
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.locationService.getAllLocations().subscribe(function (results) {
            _this.locationsTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    LocationManagementComponent.prototype.onAddLocationButtonClicked = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_location_dialog_new_location_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NewLocationDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.performSearch();
            }
        });
    };
    LocationManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'locations', event.data.id]);
    };
    LocationManagementComponent.ctorParameters = function () { return [
        { type: _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"])
    ], LocationManagementComponent.prototype, "dataTable", void 0);
    LocationManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-management',
            template: __webpack_require__(/*! raw-loader!./location-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-management/location-management.component.html"),
            styles: [__webpack_require__(/*! ./location-management.component.css */ "../qa-admin/src/app/location-management/location-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"]])
    ], LocationManagementComponent);
    return LocationManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NewLocationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLocationDialogComponent", function() { return NewLocationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/services/location.service */ "../qa-admin/src/app/_common/services/location.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var NewLocationDialogComponent = /** @class */ (function () {
    function NewLocationDialogComponent(locationService, dialogRef, errorService) {
        this.locationService = locationService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = false;
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    NewLocationDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.locationService.addLocation(this.locationForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (location) { return _this.dialogRef.close(location); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewLocationDialogComponent.ctorParameters = function () { return [
        { type: _common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewLocationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-location-dialog',
            template: __webpack_require__(/*! raw-loader!./new-location-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewLocationDialogComponent);
    return NewLocationDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/qa-admin-routing.module.ts":
/*!******************************************************!*\
  !*** ../qa-admin/src/app/qa-admin-routing.module.ts ***!
  \******************************************************/
/*! exports provided: QaAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaAdminRoutingModule", function() { return QaAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_console_user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-console/user-management.component */ "../qa-admin/src/app/user-management-console/user-management.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/guards/app-auth-guard */ "./src/app/_common/guards/app-auth-guard.ts");
/* harmony import */ var projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/models/portal-constants */ "./src/app/_common/models/portal-constants.ts");
/* harmony import */ var _cohort_management_cohort_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cohort-management/cohort-management.component */ "../qa-admin/src/app/cohort-management/cohort-management.component.ts");
/* harmony import */ var _cohort_detail_cohort_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cohort-detail/cohort-detail.component */ "../qa-admin/src/app/cohort-detail/cohort-detail.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "../qa-admin/src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _course_management_course_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-management/course-management.component */ "../qa-admin/src/app/course-management/course-management.component.ts");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "../qa-admin/src/app/course-detail/course-detail.component.ts");
/* harmony import */ var _technology_management_technology_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./technology-management/technology-management.component */ "../qa-admin/src/app/technology-management/technology-management.component.ts");
/* harmony import */ var _technology_detail_technology_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./technology-detail/technology-detail.component */ "../qa-admin/src/app/technology-detail/technology-detail.component.ts");
/* harmony import */ var _form_management_form_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-management/form-management.component */ "../qa-admin/src/app/form-management/form-management.component.ts");
/* harmony import */ var _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-detail/form-detail.component */ "../qa-admin/src/app/form-detail/form-detail.component.ts");
/* harmony import */ var _application_management_application_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application-management/application-management.component */ "../qa-admin/src/app/application-management/application-management.component.ts");
/* harmony import */ var _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application-detail/application-detail.component */ "../qa-admin/src/app/application-detail/application-detail.component.ts");
/* harmony import */ var _app_project_management_app_project_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-project-management/app-project-management.component */ "../qa-admin/src/app/app-project-management/app-project-management.component.ts");
/* harmony import */ var _app_project_detail_app_project_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-project-detail/app-project-detail.component */ "../qa-admin/src/app/app-project-detail/app-project-detail.component.ts");
/* harmony import */ var _location_management_location_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./location-management/location-management.component */ "../qa-admin/src/app/location-management/location-management.component.ts");
/* harmony import */ var _location_detail_location_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./location-detail/location-detail.component */ "../qa-admin/src/app/location-detail/location-detail.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./role-management/role-management.component */ "../qa-admin/src/app/role-management/role-management.component.ts");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "../qa-admin/src/app/role-detail/role-detail.component.ts");























var routes = [
    {
        path: 'manage/users',
        component: _user_management_console_user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/users/:id',
        component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/cohorts',
        component: _cohort_management_cohort_management_component__WEBPACK_IMPORTED_MODULE_6__["CohortManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/cohorts/:id',
        component: _cohort_detail_cohort_detail_component__WEBPACK_IMPORTED_MODULE_7__["CohortDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/courses',
        component: _course_management_course_management_component__WEBPACK_IMPORTED_MODULE_9__["CourseManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/courses/:id',
        component: _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_10__["CourseDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/technologies',
        component: _technology_management_technology_management_component__WEBPACK_IMPORTED_MODULE_11__["TechnologyManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/technologies/:id',
        component: _technology_detail_technology_detail_component__WEBPACK_IMPORTED_MODULE_12__["TechnologyDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/forms',
        component: _form_management_form_management_component__WEBPACK_IMPORTED_MODULE_13__["FormManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/forms/:id',
        component: _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_14__["FormDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/applications',
        component: _application_management_application_management_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/applications/:id',
        component: _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_16__["ApplicationDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/app-projects',
        component: _app_project_management_app_project_management_component__WEBPACK_IMPORTED_MODULE_17__["AppProjectManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/app-projects/:id',
        component: _app_project_detail_app_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["AppProjectDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/locations',
        component: _location_management_location_management_component__WEBPACK_IMPORTED_MODULE_19__["LocationManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/locations/:id',
        component: _location_detail_location_detail_component__WEBPACK_IMPORTED_MODULE_20__["LocationDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/roles',
        component: _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_21__["RoleManagementComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    },
    {
        path: 'manage/roles/:id',
        component: _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_22__["RoleDetailComponent"],
        canActivate: [projects_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AppAuthGuard"]],
        data: {
            roles: [
                projects_portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_5__["SUPER_USER"]
            ]
        }
    }
];
var QaAdminRoutingModule = /** @class */ (function () {
    function QaAdminRoutingModule() {
    }
    QaAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QaAdminRoutingModule);
    return QaAdminRoutingModule;
}());



/***/ }),

/***/ "../qa-admin/src/app/qa-admin.module.ts":
/*!**********************************************!*\
  !*** ../qa-admin/src/app/qa-admin.module.ts ***!
  \**********************************************/
/*! exports provided: QaAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaAdminModule", function() { return QaAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_management_console_user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management-console/user-management.component */ "../qa-admin/src/app/user-management-console/user-management.component.ts");
/* harmony import */ var _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");
/* harmony import */ var _qa_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qa-admin-routing.module */ "../qa-admin/src/app/qa-admin-routing.module.ts");
/* harmony import */ var _cohort_management_cohort_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cohort-management/cohort-management.component */ "../qa-admin/src/app/cohort-management/cohort-management.component.ts");
/* harmony import */ var _user_management_console_delete_user_dialog_delete_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management-console/delete-user-dialog/delete-user-dialog.component */ "../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.ts");
/* harmony import */ var _user_management_console_update_user_cohort_dialog_update_user_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component */ "../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.ts");
/* harmony import */ var _user_management_console_update_user_role_dialog_update_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management-console/update-user-role-dialog/update-user-role-dialog.component */ "../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.ts");
/* harmony import */ var _user_management_console_add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-management-console/add-user-dialog/add-user-dialog.component */ "../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.ts");
/* harmony import */ var _cohort_detail_cohort_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cohort-detail/cohort-detail.component */ "../qa-admin/src/app/cohort-detail/cohort-detail.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar */ "../../node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "../../node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "../qa-admin/src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _cohort_detail_add_course_dialog_add_course_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cohort-detail/add-course-dialog/add-course-dialog.component */ "../qa-admin/src/app/cohort-detail/add-course-dialog/add-course-dialog.component.ts");
/* harmony import */ var _course_management_course_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course-management/course-management.component */ "../qa-admin/src/app/course-management/course-management.component.ts");
/* harmony import */ var _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./course-detail/course-detail.component */ "../qa-admin/src/app/course-detail/course-detail.component.ts");
/* harmony import */ var _course_management_new_course_dialog_new_course_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course-management/new-course-dialog/new-course-dialog.component */ "../qa-admin/src/app/course-management/new-course-dialog/new-course-dialog.component.ts");
/* harmony import */ var _technology_management_technology_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./technology-management/technology-management.component */ "../qa-admin/src/app/technology-management/technology-management.component.ts");
/* harmony import */ var _technology_detail_technology_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./technology-detail/technology-detail.component */ "../qa-admin/src/app/technology-detail/technology-detail.component.ts");
/* harmony import */ var _technology_management_new_category_dialog_new_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./technology-management/new-category-dialog/new-category-dialog.component */ "../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.ts");
/* harmony import */ var _cohort_management_new_cohort_dialog_new_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cohort-management/new-cohort-dialog/new-cohort-dialog.component */ "../qa-admin/src/app/cohort-management/new-cohort-dialog/new-cohort-dialog.component.ts");
/* harmony import */ var _form_management_form_management_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form-management/form-management.component */ "../qa-admin/src/app/form-management/form-management.component.ts");
/* harmony import */ var _form_management_new_form_dialog_new_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form-management/new-form-dialog/new-form-dialog.component */ "../qa-admin/src/app/form-management/new-form-dialog/new-form-dialog.component.ts");
/* harmony import */ var _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form-detail/form-detail.component */ "../qa-admin/src/app/form-detail/form-detail.component.ts");
/* harmony import */ var _application_management_application_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./application-management/application-management.component */ "../qa-admin/src/app/application-management/application-management.component.ts");
/* harmony import */ var _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./application-detail/application-detail.component */ "../qa-admin/src/app/application-detail/application-detail.component.ts");
/* harmony import */ var _application_management_new_app_dialog_new_app_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./application-management/new-app-dialog/new-app-dialog.component */ "../qa-admin/src/app/application-management/new-app-dialog/new-app-dialog.component.ts");
/* harmony import */ var _app_project_management_app_project_management_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-project-management/app-project-management.component */ "../qa-admin/src/app/app-project-management/app-project-management.component.ts");
/* harmony import */ var _app_project_detail_app_project_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app-project-detail/app-project-detail.component */ "../qa-admin/src/app/app-project-detail/app-project-detail.component.ts");
/* harmony import */ var _app_project_management_new_project_dialog_new_project_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app-project-management/new-project-dialog/new-project-dialog.component */ "../qa-admin/src/app/app-project-management/new-project-dialog/new-project-dialog.component.ts");
/* harmony import */ var _app_project_detail_delete_page_confirm_dialog_delete_page_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component */ "../qa-admin/src/app/app-project-detail/delete-page-confirm-dialog/delete-page-confirm-dialog.component.ts");
/* harmony import */ var _location_management_location_management_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./location-management/location-management.component */ "../qa-admin/src/app/location-management/location-management.component.ts");
/* harmony import */ var _location_detail_location_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./location-detail/location-detail.component */ "../qa-admin/src/app/location-detail/location-detail.component.ts");
/* harmony import */ var _location_management_new_location_dialog_new_location_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./location-management/new-location-dialog/new-location-dialog.component */ "../qa-admin/src/app/location-management/new-location-dialog/new-location-dialog.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./role-management/role-management.component */ "../qa-admin/src/app/role-management/role-management.component.ts");
/* harmony import */ var _role_management_new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./role-management/new-role-dialog/new-role-dialog.component */ "../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.ts");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "../qa-admin/src/app/role-detail/role-detail.component.ts");
/* harmony import */ var _cohort_detail_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./cohort-detail/edit-course-dialog/edit-course-dialog.component */ "../qa-admin/src/app/cohort-detail/edit-course-dialog/edit-course-dialog.component.ts");








































var QaAdminModule = /** @class */ (function () {
    function QaAdminModule() {
    }
    QaAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_management_console_user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"],
                _user_management_console_add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddUserDialogComponent"],
                _cohort_management_cohort_management_component__WEBPACK_IMPORTED_MODULE_5__["CohortManagementComponent"],
                _user_management_console_delete_user_dialog_delete_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserDialogComponent"],
                _user_management_console_update_user_cohort_dialog_update_user_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateUserCohortDialogComponent"],
                _user_management_console_update_user_role_dialog_update_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UpdateUserRoleDialogComponent"],
                _cohort_detail_cohort_detail_component__WEBPACK_IMPORTED_MODULE_10__["CohortDetailComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
                _cohort_detail_add_course_dialog_add_course_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddCourseDialogComponent"],
                _course_management_course_management_component__WEBPACK_IMPORTED_MODULE_16__["CourseManagementComponent"],
                _course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_17__["CourseDetailComponent"],
                _course_management_new_course_dialog_new_course_dialog_component__WEBPACK_IMPORTED_MODULE_18__["NewCourseDialogComponent"],
                _technology_management_technology_management_component__WEBPACK_IMPORTED_MODULE_19__["TechnologyManagementComponent"],
                _technology_detail_technology_detail_component__WEBPACK_IMPORTED_MODULE_20__["TechnologyDetailComponent"],
                _technology_management_new_category_dialog_new_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewCategoryDialogComponent"],
                _cohort_management_new_cohort_dialog_new_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_22__["NewCohortDialogComponent"],
                _form_management_form_management_component__WEBPACK_IMPORTED_MODULE_23__["FormManagementComponent"],
                _form_management_new_form_dialog_new_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__["NewFormDialogComponent"],
                _form_detail_form_detail_component__WEBPACK_IMPORTED_MODULE_25__["FormDetailComponent"],
                _application_management_application_management_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationManagementComponent"],
                _application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"],
                _application_management_new_app_dialog_new_app_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewAppDialogComponent"],
                _app_project_management_app_project_management_component__WEBPACK_IMPORTED_MODULE_29__["AppProjectManagementComponent"],
                _app_project_detail_app_project_detail_component__WEBPACK_IMPORTED_MODULE_30__["AppProjectDetailComponent"],
                _app_project_management_new_project_dialog_new_project_dialog_component__WEBPACK_IMPORTED_MODULE_31__["NewProjectDialogComponent"],
                _app_project_detail_delete_page_confirm_dialog_delete_page_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DeletePageConfirmDialogComponent"],
                _location_management_location_management_component__WEBPACK_IMPORTED_MODULE_33__["LocationManagementComponent"],
                _location_detail_location_detail_component__WEBPACK_IMPORTED_MODULE_34__["LocationDetailComponent"],
                _location_management_new_location_dialog_new_location_dialog_component__WEBPACK_IMPORTED_MODULE_35__["NewLocationDialogComponent"],
                _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_36__["RoleManagementComponent"],
                _role_management_new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_37__["NewRoleDialogComponent"],
                _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_38__["RoleDetailComponent"],
                _cohort_detail_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_39__["EditCourseDialogComponent"]
            ],
            imports: [
                _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_3__["QaCommonModule"],
                _qa_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["QaAdminRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__["adapterFactory"]
                })
            ],
            providers: [],
            entryComponents: [
                _user_management_console_add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddUserDialogComponent"],
                _user_management_console_delete_user_dialog_delete_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserDialogComponent"],
                _user_management_console_update_user_cohort_dialog_update_user_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateUserCohortDialogComponent"],
                _user_management_console_update_user_role_dialog_update_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UpdateUserRoleDialogComponent"],
                _cohort_detail_add_course_dialog_add_course_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddCourseDialogComponent"],
                _course_management_new_course_dialog_new_course_dialog_component__WEBPACK_IMPORTED_MODULE_18__["NewCourseDialogComponent"],
                _technology_management_new_category_dialog_new_category_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewCategoryDialogComponent"],
                _cohort_management_new_cohort_dialog_new_cohort_dialog_component__WEBPACK_IMPORTED_MODULE_22__["NewCohortDialogComponent"],
                _form_management_new_form_dialog_new_form_dialog_component__WEBPACK_IMPORTED_MODULE_24__["NewFormDialogComponent"],
                _application_management_new_app_dialog_new_app_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewAppDialogComponent"],
                _app_project_management_new_project_dialog_new_project_dialog_component__WEBPACK_IMPORTED_MODULE_31__["NewProjectDialogComponent"],
                _app_project_detail_delete_page_confirm_dialog_delete_page_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DeletePageConfirmDialogComponent"],
                _location_management_new_location_dialog_new_location_dialog_component__WEBPACK_IMPORTED_MODULE_35__["NewLocationDialogComponent"],
                _role_management_new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_37__["NewRoleDialogComponent"],
                _cohort_detail_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_39__["EditCourseDialogComponent"]
            ]
        })
    ], QaAdminModule);
    return QaAdminModule;
}());



/***/ }),

/***/ "../qa-admin/src/app/role-detail/role-detail.component.css":
/*!*****************************************************************!*\
  !*** ../qa-admin/src/app/role-detail/role-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL3JvbGUtZGV0YWlsL3JvbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../qa-admin/src/app/role-detail/role-detail.component.ts":
/*!****************************************************************!*\
  !*** ../qa-admin/src/app/role-detail/role-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: RoleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function() { return RoleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);











var RoleDetailComponent = /** @class */ (function () {
    function RoleDetailComponent(roleService, appService, aR, errorService, toastr) {
        this.roleService = roleService;
        this.appService = appService;
        this.aR = aR;
        this.errorService = errorService;
        this.toastr = toastr;
        this.isLoading = true;
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            portalApplication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.roleForm.disable();
    }
    RoleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this.roleService.getRoleById(this.aR.snapshot.params.id), this.appService.getAllApplications())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.roleForm.enable();
            _this.isLoading = false;
        }))
            .subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), role = _b[0], apps = _b[1];
            _this.role = role;
            _this.availableApps = apps;
            _this.roleForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.role, { portalApplication: lodash__WEBPACK_IMPORTED_MODULE_10__["get"](_this.role, ['portalApplication', 'id'], null) }));
        }, function (err) { return _this.errorService.handleError(err); });
    };
    RoleDetailComponent.prototype.onSaveRoleClicked = function () {
        var _this = this;
        this.role = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.role, this.roleForm.value, { portalApplication: this.availableApps.find(function (app) { return app.id === _this.roleForm.value.portalApplication; }) });
        this.roleService.saveRole(this.role)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.roleForm.enable();
            _this.isLoading = false;
        })).subscribe(function () {
            _this.toastr.showSuccess('Role updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    RoleDetailComponent.ctorParameters = function () { return [
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__["QaToastrService"] }
    ]; };
    RoleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__(/*! raw-loader!./role-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-detail/role-detail.component.html"),
            styles: [__webpack_require__(/*! ./role-detail.component.css */ "../qa-admin/src/app/role-detail/role-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_6__["QaToastrService"]])
    ], RoleDetailComponent);
    return RoleDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoleDialogComponent", function() { return NewRoleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_services_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_common/services/application.service */ "../qa-admin/src/app/_common/services/application.service.ts");








var NewRoleDialogComponent = /** @class */ (function () {
    function NewRoleDialogComponent(roleService, appService, dialogRef, errorService) {
        this.roleService = roleService;
        this.appService = appService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = true;
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            portalApplication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    NewRoleDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getAllApplications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (apps) {
            _this.availableApps = apps;
        });
    };
    NewRoleDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.roleService.addRole(this.roleForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (role) { return _this.dialogRef.close(role); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewRoleDialogComponent.ctorParameters = function () { return [
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _common_services_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewRoleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-role-dialog',
            template: __webpack_require__(/*! raw-loader!./new-role-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _common_services_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewRoleDialogComponent);
    return NewRoleDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/role-management/role-management.component.ts":
/*!************************************************************************!*\
  !*** ../qa-admin/src/app/role-management/role-management.component.ts ***!
  \************************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-role-dialog/new-role-dialog.component */ "../qa-admin/src/app/role-management/new-role-dialog/new-role-dialog.component.ts");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var RoleManagementComponent = /** @class */ (function () {
    function RoleManagementComponent(roleService, dialog, activatedRoute, router, errorService) {
        this.roleService = roleService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errorService = errorService;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.rolesTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'application'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    RoleManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    RoleManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) {
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.roleService.getPortalRoles().subscribe(function (results) {
            _this.rolesTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    RoleManagementComponent.prototype.onAddRoleButtonClicked = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_role_dialog_new_role_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NewRoleDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.performSearch();
            }
        });
    };
    RoleManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'roles', event.data.id]);
    };
    RoleManagementComponent.ctorParameters = function () { return [
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"])
    ], RoleManagementComponent.prototype, "dataTable", void 0);
    RoleManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-management',
            template: __webpack_require__(/*! raw-loader!./role-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/role-management/role-management.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"]])
    ], RoleManagementComponent);
    return RoleManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/technology-detail/technology-detail.component.css":
/*!*****************************************************************************!*\
  !*** ../qa-admin/src/app/technology-detail/technology-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL3RlY2hub2xvZ3ktZGV0YWlsL3RlY2hub2xvZ3ktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../qa-admin/src/app/technology-detail/technology-detail.component.ts":
/*!****************************************************************************!*\
  !*** ../qa-admin/src/app/technology-detail/technology-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: TechnologyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyDetailComponent", function() { return TechnologyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_technology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/technology.service */ "../qa-admin/src/app/_common/technology.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");









var TechnologyDetailComponent = /** @class */ (function () {
    function TechnologyDetailComponent(techService, aR, errorService, toastr) {
        this.techService = techService;
        this.aR = aR;
        this.errorService = errorService;
        this.toastr = toastr;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.technologies = [];
        this.isLoading = true;
        this.technologyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]().group({
            categoryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.technologyForm.disable();
    }
    TechnologyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.techService.getCategoryById(this.aR.snapshot.params.id).subscribe(function (category) {
            _this.techCategory = category;
            _this.isLoading = false;
            _this.technologyForm.patchValue(_this.techCategory);
            _this.technologies = _this.techCategory.technologies;
            _this.technologyForm.enable();
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    TechnologyDetailComponent.prototype.onSaveCategoryClicked = function () {
        var _this = this;
        this.techCategory = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.techCategory, this.technologyForm.value, { technologies: this.technologies });
        this.technologyForm.disable();
        this.isLoading = true;
        this.techService.saveCategory(this.techCategory)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.technologyForm.enable();
            _this.isLoading = false;
        })).subscribe(function () {
            _this.toastr.showSuccess('Category updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    TechnologyDetailComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.technologies.push({ technologyName: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.technologyForm.markAsDirty();
    };
    TechnologyDetailComponent.prototype.remove = function (tech) {
        var index = this.technologies.indexOf(tech);
        if (index >= 0) {
            this.technologies.splice(index, 1);
        }
        this.technologyForm.markAsDirty();
    };
    TechnologyDetailComponent.ctorParameters = function () { return [
        { type: _common_technology_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_8__["QaToastrService"] }
    ]; };
    TechnologyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technology-detail',
            template: __webpack_require__(/*! raw-loader!./technology-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-detail/technology-detail.component.html"),
            styles: [__webpack_require__(/*! ./technology-detail.component.css */ "../qa-admin/src/app/technology-detail/technology-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_technology_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_8__["QaToastrService"]])
    ], TechnologyDetailComponent);
    return TechnologyDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.css":
/*!*******************************************************************************************************!*\
  !*** ../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL3RlY2hub2xvZ3ktbWFuYWdlbWVudC9uZXctY2F0ZWdvcnktZGlhbG9nL25ldy1jYXRlZ29yeS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.ts":
/*!******************************************************************************************************!*\
  !*** ../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NewCategoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryDialogComponent", function() { return NewCategoryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_technology_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/technology.service */ "../qa-admin/src/app/_common/technology.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var NewCategoryDialogComponent = /** @class */ (function () {
    function NewCategoryDialogComponent(techService, dialogRef, errorService) {
        this.techService = techService;
        this.dialogRef = dialogRef;
        this.errorService = errorService;
        this.isLoading = true;
        this.catForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    NewCategoryDialogComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    NewCategoryDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        var newCat = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.catForm.value);
        this.techService.addCategory(newCat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.isLoading = false; })).subscribe(function (cat) { return _this.dialogRef.close(cat); }, function (err) { return _this.errorService.handleError(err); });
    };
    NewCategoryDialogComponent.ctorParameters = function () { return [
        { type: _common_technology_service__WEBPACK_IMPORTED_MODULE_3__["TechnologyService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"] }
    ]; };
    NewCategoryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-category-dialog',
            template: __webpack_require__(/*! raw-loader!./new-category-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-category-dialog.component.css */ "../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_technology_service__WEBPACK_IMPORTED_MODULE_3__["TechnologyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["QaErrorHandlerService"]])
    ], NewCategoryDialogComponent);
    return NewCategoryDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/technology-management/technology-management.component.ts":
/*!************************************************************************************!*\
  !*** ../qa-admin/src/app/technology-management/technology-management.component.ts ***!
  \************************************************************************************/
/*! exports provided: TechnologyManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyManagementComponent", function() { return TechnologyManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _common_technology_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/technology.service */ "../qa-admin/src/app/_common/technology.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_category_dialog_new_category_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-category-dialog/new-category-dialog.component */ "../qa-admin/src/app/technology-management/new-category-dialog/new-category-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");








var TechnologyManagementComponent = /** @class */ (function () {
    function TechnologyManagementComponent(router, activatedRoute, techService, errorService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.techService = techService;
        this.errorService = errorService;
        this.dialog = dialog;
        // SEARCH
        this.searchInput = '';
        // TABLE
        this.categoriesTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['categoryName', 'technologies'];
        this.rowSelection = [];
        this.isLoading = true;
    }
    TechnologyManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    TechnologyManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (this.dataTable) {
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.techService.getAllCategories().subscribe(function (results) {
            _this.categoriesTableDataSource.data = results;
            _this.isLoading = false;
        }, function (err) { return _this.errorService.handleError(err); });
    };
    TechnologyManagementComponent.prototype.onAddCategoryButtonClicked = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_category_dialog_new_category_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewCategoryDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.performSearch();
                // this.isLoading = true;
            }
        });
    };
    TechnologyManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'technologies', event.data.id]);
    };
    TechnologyManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _common_technology_service__WEBPACK_IMPORTED_MODULE_4__["TechnologyService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"])
    ], TechnologyManagementComponent.prototype, "dataTable", void 0);
    TechnologyManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technology-management',
            template: __webpack_require__(/*! raw-loader!./technology-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/technology-management/technology-management.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _common_technology_service__WEBPACK_IMPORTED_MODULE_4__["TechnologyService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TechnologyManagementComponent);
    return TechnologyManagementComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-detail/user-detail.component.ts":
/*!****************************************************************!*\
  !*** ../qa-admin/src/app/user-detail/user-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _common_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/services/user.service */ "../qa-admin/src/app/_common/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-toastr.service */ "./src/app/_common/services/qa-toastr.service.ts");










var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(rolesService, userService, aR, errorService, toastr) {
        this.rolesService = rolesService;
        this.userService = userService;
        this.aR = aR;
        this.errorService = errorService;
        this.toastr = toastr;
        this.isLoading = true;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
                userName: [''],
                firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            }),
            roleNames: [[]]
        });
        this.userForm.disable();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this.rolesService.getPortalRoleNames(), this.userService.getUserByUsername(this.aR.snapshot.params.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), roles = _b[0], user = _b[1];
            _this.roles = roles;
            _this.fetchedUser = user;
            _this.userForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user));
            _this.isLoading = false;
            _this.userForm.enable();
        }, function (err) { return _this.errorService.handleError(err); });
    };
    UserDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.userForm.disable();
        var userData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fetchedUser, this.userForm.value, { user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fetchedUser.user, this.userForm.value.user) });
        this.userService.updateUser(userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (user) {
            _this.userForm.patchValue({ user: user });
            _this.isLoading = false;
            _this.userForm.enable();
            _this.toastr.showSuccess('User updated');
        }, function (err) { return _this.errorService.handleError(err); });
    };
    UserDetailComponent.ctorParameters = function () { return [
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _common_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] },
        { type: projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_9__["QaToastrService"] }
    ]; };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! raw-loader!./user-detail.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-detail/user-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _common_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"],
            projects_portal_core_src_app_common_services_qa_toastr_service__WEBPACK_IMPORTED_MODULE_9__["QaToastrService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserDialogComponent", function() { return AddUserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_common/services/user.service */ "../qa-admin/src/app/_common/services/user.service.ts");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");







var AddUserDialogComponent = /** @class */ (function () {
    function AddUserDialogComponent(dialogRef, rolesService, errorService, userService) {
        this.dialogRef = dialogRef;
        this.rolesService = rolesService;
        this.errorService = errorService;
        this.userService = userService;
        this.isLoading = false;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]().group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    AddUserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rolesService.getPortalRoleNames().subscribe(function (response) {
            _this.roles = response;
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    AddUserDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.userForm.disable();
        this.userService.addUser(this.userForm.value).subscribe(function (user) {
            _this.isLoading = false;
            _this.userForm.enable();
            _this.dialogRef.close(user);
        });
    };
    AddUserDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"] },
        { type: _common_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    AddUserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user-dialog',
            template: __webpack_require__(/*! raw-loader!./add-user-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _common_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["QaErrorHandlerService"],
            _common_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AddUserDialogComponent);
    return AddUserDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.ts":
/*!******************************************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DeleteUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserDialogComponent", function() { return DeleteUserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");



var DeleteUserDialogComponent = /** @class */ (function () {
    function DeleteUserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.canDelete = false;
        this.numberOfUsers = 0;
    }
    DeleteUserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Brief pause before the delete button is enabled.
        // Hopefully people will use this time to think about what they're about to do.
        setTimeout(function () {
            _this.canDelete = true;
        }, 1000);
        this.numberOfUsers = this.data.filter(function (d) { return d; }).length;
    };
    DeleteUserDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DeleteUserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-user-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-user-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Array])
    ], DeleteUserDialogComponent);
    return DeleteUserDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UpdateUserCohortDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserCohortDialogComponent", function() { return UpdateUserCohortDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/cohort.service */ "../qa-admin/src/app/_common/services/cohort.service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");





var UpdateUserCohortDialogComponent = /** @class */ (function () {
    function UpdateUserCohortDialogComponent(dialogRef, cohortService, errorService, data) {
        this.dialogRef = dialogRef;
        this.cohortService = cohortService;
        this.errorService = errorService;
        this.data = data;
        this.cohortSelection = '';
        this.cohorts = [];
    }
    UpdateUserCohortDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cohortService.searchCohorts('').subscribe(function (response) {
            response.forEach(function (cohortModel) {
                _this.cohorts.push(cohortModel.name);
            });
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    UpdateUserCohortDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    UpdateUserCohortDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-user-cohort-dialog',
            template: __webpack_require__(/*! raw-loader!./update-user-cohort-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/update-user-cohort-dialog/update-user-cohort-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _common_services_cohort_service__WEBPACK_IMPORTED_MODULE_3__["CohortService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"], String])
    ], UpdateUserCohortDialogComponent);
    return UpdateUserCohortDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.ts":
/*!****************************************************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: UpdateUserRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserRoleDialogComponent", function() { return UpdateUserRoleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_common/services/role.service */ "../qa-admin/src/app/_common/services/role.service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");





var UpdateUserRoleDialogComponent = /** @class */ (function () {
    function UpdateUserRoleDialogComponent(dialogRef, data, rolesService, errorService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rolesService = rolesService;
        this.errorService = errorService;
        this.roleSelection = '';
        this.roles = [];
    }
    UpdateUserRoleDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rolesService.getPortalRoleNames().subscribe(function (response) {
            _this.roles = response;
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    UpdateUserRoleDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] }
    ]; };
    UpdateUserRoleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-user-role-dialog',
            template: __webpack_require__(/*! raw-loader!./update-user-role-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/update-user-role-dialog/update-user-role-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String, _common_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"]])
    ], UpdateUserRoleDialogComponent);
    return UpdateUserRoleDialogComponent;
}());



/***/ }),

/***/ "../qa-admin/src/app/user-management-console/user-management.component.css":
/*!*********************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/user-management.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-icon {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\nli {\n  display:inline;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWFkbWluL3NyYy9hcHAvdXNlci1tYW5hZ2VtZW50LWNvbnNvbGUvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwcm9qZWN0cy9xYS1hZG1pbi9zcmMvYXBwL3VzZXItbWFuYWdlbWVudC1jb25zb2xlL3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6aW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "../qa-admin/src/app/user-management-console/user-management.component.ts":
/*!********************************************************************************!*\
  !*** ../qa-admin/src/app/user-management-console/user-management.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/user.service */ "../qa-admin/src/app/_common/services/user.service.ts");
/* harmony import */ var projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/qa-common/src/app/data-table/data-table.component */ "../qa-common/src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_user_dialog_delete_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-user-dialog/delete-user-dialog.component */ "../qa-admin/src/app/user-management-console/delete-user-dialog/delete-user-dialog.component.ts");
/* harmony import */ var _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user-dialog/add-user-dialog.component */ "../qa-admin/src/app/user-management-console/add-user-dialog/add-user-dialog.component.ts");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");









var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(dialog, userService, activatedRoute, errorService, router) {
        this.dialog = dialog;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.errorService = errorService;
        this.router = router;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['select', 'Username', 'First Name', 'Last Name'];
        this.searchInput = '';
        this.isLoading = false;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.searchInput = this.activatedRoute.snapshot.queryParams.search || this.searchInput;
        this.performSearch();
    };
    UserManagementComponent.prototype.performSearch = function () {
        var _this = this;
        if (!!this.dataTable) { // Check if dataTable is defined. This isn't ready on first search (not that it matters)
            this.dataTable.deselectAllRows();
        }
        this.isLoading = true;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { search: this.searchInput } });
        this.userService.getAllUsers().subscribe(function (results) {
            // TODO - Add search filter
            _this.dataSource.data = results;
            _this.isLoading = false;
        });
    };
    UserManagementComponent.prototype.onDeleteActionClicked = function () {
        var _this = this;
        var users = this.dataTable.getSelectedRowsData();
        var dialogRef = this.dialog.open(_delete_user_dialog_delete_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserDialogComponent"], { data: users });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.isLoading = true;
                _this.userService.deleteUsers(users).subscribe(function () {
                    _this.performSearch();
                });
            }
        });
    };
    UserManagementComponent.prototype.onAddUserClicked = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddUserDialogComponent"], {});
        dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
                _this.performSearch();
            }
        }, function (err) { return _this.errorService.handleError(err); });
    };
    UserManagementComponent.prototype.onRowClicked = function (event) {
        this.router.navigate(['qa', 'portal', 'admin', 'manage', 'users', event.data.user.userName]);
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _common_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_qa_common_src_app_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"])
    ], UserManagementComponent.prototype, "dataTable", void 0);
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "../../node_modules/raw-loader/index.js!../qa-admin/src/app/user-management-console/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "../qa-admin/src/app/user-management-console/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _common_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["QaErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/_common/models/project-page.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_common/models/project-page.model.ts ***!
  \******************************************************/
/*! exports provided: ProjectPageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModel", function() { return ProjectPageModel; });
var ProjectPageModel = /** @class */ (function () {
    function ProjectPageModel() {
        this.roles = [];
    }
    return ProjectPageModel;
}());



/***/ }),

/***/ "./src/app/_common/models/user-details.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_common/models/user-details.model.ts ***!
  \******************************************************/
/*! exports provided: UserDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsModel", function() { return UserDetailsModel; });
var UserDetailsModel = /** @class */ (function () {
    function UserDetailsModel() {
    }
    return UserDetailsModel;
}());



/***/ })

}]);
//# sourceMappingURL=qa-admin-src-app-qa-admin-module-es5.js.map