(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_common/models/question-category.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/_common/models/question-category.model.ts ***!
  \***********************************************************/
/*! exports provided: QuestionCategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCategoryModel", function() { return QuestionCategoryModel; });
class QuestionCategoryModel {
    constructor() {
        this.hasComment = false;
        this.questions = [];
    }
}


/***/ }),

/***/ "./src/app/_common/models/question.model.ts":
/*!**************************************************!*\
  !*** ./src/app/_common/models/question.model.ts ***!
  \**************************************************/
/*! exports provided: QuestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModel", function() { return QuestionModel; });
class QuestionModel {
    constructor() {
        /**
         * Determines the visibility of an additional comment field
         */
        this.hasComment = false;
        this.selectionOptionsList = [];
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map