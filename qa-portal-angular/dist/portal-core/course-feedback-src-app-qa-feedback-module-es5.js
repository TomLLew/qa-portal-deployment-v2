(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-feedback-src-app-qa-feedback-module"],{

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/course-evaluation/course-evaluation.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/course-evaluation/course-evaluation.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"user-name\"></h1>\n\n<app-evaluation-table></app-evaluation-table>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/evaluation-table/evaluation-table.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/evaluation-table/evaluation-table.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Course Column -->\n    <ng-container matColumnDef=\"course\">\n      <th mat-header-cell *matHeaderCellDef> Course </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.course}} </td>\n    </ng-container>\n  \n    <!-- Start Column -->\n    <ng-container matColumnDef=\"start\">\n      <th mat-header-cell *matHeaderCellDef> Start </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.start}} </td>\n    </ng-container>\n  \n    <!-- End Column -->\n    <ng-container matColumnDef=\"end\">\n      <th mat-header-cell *matHeaderCellDef> End </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.end}} </td>\n    </ng-container>\n  \n    <!-- Course-ID Column -->\n    <ng-container matColumnDef=\"courseid\">\n      <th mat-header-cell *matHeaderCellDef> Course-ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.courseid}} </td>\n    </ng-container>\n  \n    <!-- Pin Column -->\n    <ng-container matColumnDef=\"pin\">\n      <th mat-header-cell *matHeaderCellDef> Pin </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.pin}} </td>\n    </ng-container>\n  \n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  "

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  <h1>Trainee - Course Evaluation</h1>\n</div>\n\n<div style=\"display: flex; justify-content: center; margin-top: 20px\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"!dataLoaded\"></mat-spinner>\n</div>\n\n<div *ngIf=\"!!dataLoaded\">\n  <app-qa-form [model]=\"viewModel\">\n  </app-qa-form>\n\n  <div *ngIf=\"viewModel.status !== 'Submitted'\" style=\"display: flex; justify-content: center\">\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">\n      {{ formCompleted() ? 'Submit' : 'Save' }}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Trainee - Evaluation Summary\n</div>\n\n<div style=\"display: flex; justify-content: center\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"dataLoading\"></mat-spinner>\n</div>\n\n<mat-card *ngIf=\"!dataLoading\">\n<!--  <mat-card-title>-->\n<!--    Course Evaluation Summary-->\n<!--  </mat-card-title>-->\n\n  <mat-card-subtitle>\n    Trainee Courses\n  </mat-card-subtitle>\n\n  <mat-card-content>\n    <div style=\"display: flex; justify-content: center\">\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <!-- Course Column -->\n        <ng-container matColumnDef=\"course\">\n          <th mat-header-cell *matHeaderCellDef> Course</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cohortCourse.course.courseName}} </td>\n        </ng-container>\n\n        <!-- Start Column -->\n        <ng-container matColumnDef=\"start\">\n          <th mat-header-cell *matHeaderCellDef> Start</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cohortCourse.startDate}} </td>\n        </ng-container>\n\n        <!-- End Column -->\n        <ng-container matColumnDef=\"end\">\n          <th mat-header-cell *matHeaderCellDef> End</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cohortCourse.endDate}} </td>\n        </ng-container>\n\n        <!-- Course-ID Column -->\n        <ng-container matColumnDef=\"courseid\">\n          <th mat-header-cell *matHeaderCellDef> Course-ID</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.cohortCourse.course.courseCode}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef> Status</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.evaluationStatus}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n            [routerLink]=\"getEvaluationUrl(row.cohortCourse.id)\">\n      </table>\n    </div>\n  </mat-card-content>\n\n</mat-card>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Trainer - Course Evaluation History\n</div>\n\n<div style=\"display: flex; justify-content: center; margin-top: 20px\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"dataLoading\"></mat-spinner>\n</div>\n\n<div *ngIf=\"!dataLoading\">\n  <mat-card>\n    <mat-card-content>\n      <mat-card-subtitle style=\"color: #0060B9\">Current Course:</mat-card-subtitle>\n      <table class=\"eval-table\" mat-table [dataSource]=\"currentCourseDataSource\" class=\"mat-elevation-z8 full width\">\n\n        <ng-container matColumnDef=\"course\">\n          <th mat-header-cell *matHeaderCellDef>Course</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.course.courseName}}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"startDate\">\n          <th mat-header-cell *matHeaderCellDef> Start Date</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.startDate}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"endDate\">\n          <th mat-header-cell *matHeaderCellDef> End Date</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.endDate}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"classSize\">\n          <th mat-header-cell *matHeaderCellDef> Class Size</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.classSize}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"courseCode\">\n          <th mat-header-cell *matHeaderCellDef> Course Code</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.course.courseCode}}\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"['course', 'startDate', 'endDate', 'courseCode', 'classSize']\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['course', 'startDate', 'endDate', 'courseCode', 'classSize'];\">\n      </table>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-subtitle style=\"color: #0060B9\">Previous Courses (Last {{prevCoursesDataSource.data.length}} Weeks):\n    </mat-card-subtitle>\n    <mat-card-content>\n      <table class=\"eval-table\" mat-table [dataSource]=\"prevCoursesDataSource\" class=\"mat-elevation-z8 full width\">\n        <ng-container matColumnDef=\"courseName\">\n          <th mat-header-cell *matHeaderCellDef> Course</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{element.course.courseName}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"startDate\">\n          <th mat-header-cell *matHeaderCellDef> Start</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.startDate}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"location\">\n          <th mat-header-cell *matHeaderCellDef> Location</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.location.name}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"averageKnowledgeRating\">\n          <th mat-header-cell *matHeaderCellDef> Knowledge</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.averageKnowledgeRating}}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"tqi\">\n          <th mat-header-cell *matHeaderCellDef> TQI</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.tqi}}\n          </td>\n        </ng-container>\n\n        <tr mat-header-row\n            *matHeaderRowDef=\"['courseName', 'startDate', 'location', 'averageKnowledgeRating', 'tqi']\"></tr>\n        <tr class=\"data-row\" mat-row\n            *matRowDef=\"let row; columns: ['courseName', 'startDate', 'location', 'averageKnowledgeRating', 'tqi'];\"\n            matTooltip=\"Select to view summary of trainees evaluations for the {{row.course.courseName}} course\"\n            [routerLink]=\"['/qa/portal/training/feedback/trainer/evaluation/course/summary', row.id]\">\n      </table>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-subtitle style=\"color: #0060B9\">Overall (Last {{prevCoursesDataSource.data.length}} Weeks):\n    </mat-card-subtitle>\n    <mat-card-content>\n      <div style=\"display: flex; flex-direction: row;\">\n        <div style=\"flex: 75;\">\n        </div>\n\n        <div style=\"flex: 25;\">\n          <table mat-table style=\"width: 100%;\" [dataSource]=\"trainerEvalHistory\" class=\"bottom-table mat-elevation-z8 right-mat-table\">\n            <ng-container matColumnDef=\"knowledge\">\n              <th mat-header-cell *matHeaderCellDef> Knowledge</th>\n              <td mat-cell matTooltip=\"Average knowledge rating for courses over past {{prevCoursesDataSource.data.length}} weeks\"\n                  *matCellDef=\"let element\">\n                {{element.knowledge}}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=tqi>\n              <th mat-header-cell *matHeaderCellDef> TQI</th>\n              <td mat-cell matTooltip=\"Average trainer quality index for courses over past {{prevCoursesDataSource.data.length}} weeks\"\n                  *matCellDef=\"let element\">\n                {{element.tqi}}\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"['knowledge', 'tqi']\"></tr>\n            <tr class=\"\" mat-row *matRowDef=\"let row; columns: ['knowledge', 'tqi'];\">\n          </table>\n        </div>\n\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.html":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; width: 100%; flex-direction: row\">\n  <div style=\"flex: 20;\">\n  </div>\n\n  <div style=\"flex: 60; width: 100%; justify-content: center\">\n    <table style=\"width: 100%;\">\n      <tr>\n        <td>Course: {{courseName}} {{courseId}}</td>\n        <td>Location: {{location}}</td>\n      </tr>\n      <div style=\"margin-bottom: 10px;\"></div>\n      <tr>\n        <td>Start Date: {{startDate}}</td>\n        <td>Duration: {{duration}} {{duration !== 1 ? 'days' : 'day'}}</td>\n      </tr>\n    </table>\n  </div>\n\n  <div style=\"flex: 20;\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: row; width: 100%\">\n  <div style=\"flex: 10;\"></div>\n  <table mat-table style=\"flex: 80; width: 100%\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <ng-container matColumnDef=\"traineeName\">\n      <th mat-header-cell style=\"vertical-align: middle; text-align: center;\" *matHeaderCellDef> Delegate</th>\n      <td mat-cell style=\"vertical-align: middle; text-align: center;\"\n          *matCellDef=\"let eval\"> {{eval.traineeName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"knowledge\">\n      <th mat-header-cell style=\"vertical-align: middle; text-align: center;\" *matHeaderCellDef> Trainer Knowledge</th>\n      <td mat-cell style=\"vertical-align: middle; text-align: center;\" *matCellDef=\"let eval\"> {{eval.knowledge}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"recommend\">\n      <th mat-header-cell style=\"vertical-align: middle; text-align: center;\" *matHeaderCellDef> Recommend QA</th>\n      <td mat-cell style=\"vertical-align: middle; text-align: center;\" *matCellDef=\"let eval\"> {{eval.recommend}} </td>\n    </ng-container>\n  </table>\n  <div style=\"flex: 10;\"></div>\n</div>\n\n<div style=\"display: flex; flex-direction: row; width: 100%\">\n  <div style=\"flex: 70;\"></div>\n  <table class=\"average\" style=\"flex:20; width: 100%;\">\n    <ng-container matColumnDef=\"tqi\">\n      <tr>\n        <td mat-cell matTooltip=\"Trainer Quality Index for this {{courseName}} course\"> TQI for this event</td>\n        <td mat-cell> {{tqi}} </td>\n      </tr>\n    </ng-container>\n    <div style=\"margin-bottom: 20px;\"></div>\n    <ng-container matColumnDef=\"average\">\n      <tr>\n        <td mat-cell matTooltip=\"Average Trainer Quality Index for all {{courseName}} courses\"> Average for this event</td>\n        <td mat-cell> {{average}} </td>\n      </tr>\n    </ng-container>\n  </table>\n  <div style=\"flex: 10;\"></div>\n</div>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Trainer - Course Evaluation Summary\n</div>\n\n<mat-card>\n  <mat-card-content>\n    <app-course-info [courseName]=\"courseName\" [location]=\"location\" [startDate]=\"startDate\"\n                     [duration]=\"duration\"></app-course-info>\n  </mat-card-content>\n\n  <mat-card-content>\n    <app-table-component [dataSource]=\"dataSource\" [courseName]=\"courseName\" [average]=\"courseHistoryTqi\" [tqi]=\"tqi\"></app-table-component>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Trainer - Course Feedback Summary\n</div>\n\n<div style=\"display: flex; justify-content: center\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"dataLoading\"></mat-spinner>\n</div>\n\n<mat-card *ngIf=\"!dataLoading\">\n  <mat-card-subtitle>\n    Trainer Courses\n  </mat-card-subtitle>\n\n  <mat-card-content>\n    <div style=\"display: flex; justify-content: center\">\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <!-- Course Column -->\n        <ng-container matColumnDef=\"course\">\n          <th mat-header-cell *matHeaderCellDef> Course</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.course.courseName}} </td>\n        </ng-container>\n\n        <!-- Start Column -->\n        <ng-container matColumnDef=\"start\">\n          <th mat-header-cell *matHeaderCellDef> Start</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.startDate}} </td>\n        </ng-container>\n\n        <!-- End Column -->\n        <ng-container matColumnDef=\"end\">\n          <th mat-header-cell *matHeaderCellDef> End</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"feedback-status\">\n          <th mat-header-cell *matHeaderCellDef> Feedback Status</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.feedbackStatus}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr class=\"data-row\" mat-row\n            *matRowDef=\"let row; columns: displayedColumns;\"\n            matTooltip=\"Select to access Trainer Feedback Form for {{row.course.courseName}} course\"\n            [routerLink]=\"getFeedbackUrl(row.id)\">\n      </table>\n    </div>\n  </mat-card-content>\n\n</mat-card>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  <h1>Trainer - Course Feedback</h1>\n</div>\n\n<div style=\"display: flex; justify-content: center; margin-top: 20px\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"!dataLoaded\"></mat-spinner>\n</div>\n\n<div *ngIf=\"dataLoaded\">\n  <app-qa-form [model]=\"viewModel\"\n               (modelChange)=\"viewModel = $event\">\n  </app-qa-form>\n\n  <div *ngIf=\"viewModel.status !== 'Submitted'\"class=\"qa-feedback-page-action-container\">\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">\n      {{formCompleted() ? 'Submit' : 'Save'}}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/category/category.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/category/category.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [attr.name]=\"'category_' + categoryResponse?.id || 'UNKNOWN'\" class=\"form-category-card\">\n    <div class=\"form-category-header\"><h2>{{categoryResponse.questionCategory.categoryName}}</h2></div>\n    <app-control-factory *ngFor=\"let question of categoryResponse.questionCategory.questions; let i = index; trackBy: trackQuestion\"\n                         [question]=\"question\"\n                         [type]=\"categoryResponse.questionCategory.selectionType\"\n                         [isDisabled]=\"isDisabled\"\n                         [displayDirection]=\"categoryResponse.questionCategory.displayDirection\"\n                         [questionResponse]=\"categoryResponse.questionResponses[i]\"\n                         (questionResponseChange)=\"onQuestionResponseChange($event, i)\">\n    </app-control-factory>\n    <ng-content></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/control-factory/control-factory.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/control-factory/control-factory.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #elWrapper class=\"element-wrapper\">\n  <ng-template appControlHost></ng-template>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/check-box/check-box.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/controls/check-box/check-box.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"checkboxLayout\">\n\n  <div id=\"questionLayout\">\n    <div class=\"qa-checkbox-grp-label\">\n      {{question.body}}\n    </div>\n\n\n    <section role=\"grid\" name=\"portal-applications\" class=\"checkbox-grid-width\">\n      <div class=\"app-card-container\" *ngFor=\"let option of question.selectionOptionsList\">\n        <mat-card class=\"checkbox-card\">\n          <mat-grid-tile>\n          </mat-grid-tile>\n          <mat-card-content id=\"matCard\">\n            <mat-checkbox id=\"checkbox\" flex=\"auto\" #matCheckBox class=\"checkbox-response\" [value]=\"option\" [disabled]=\"isDisabled\"\n              [checked]=\"matchesValue(option, questionResponse.responseValues)\" (change)=\"setCheckResponse($event)\">\n              {{option}}\n            </mat-checkbox>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </section>\n  </div>\n\n  <div id=\"commentBox\" *ngIf=\"question.hasComment\">\n    <mat-form-field appearance=\"outline\" class=\"textarea-response\">\n      <mat-label>Comments</mat-label>\n      <textarea matInput [disabled]=\"isDisabled\" [ngModel]=\"questionResponse?.comment?.content\"\n        (ngModelChange)=\"setComment($event)\" [placeholder]=\"question.commentLabel\"></textarea>\n    </mat-form-field>\n  </div>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/generic-control/generic-control.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/controls/generic-control/generic-control.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/radio-button/radio-button.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/controls/radio-button/radio-button.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"radioButtonLayout\">\n    <div class=\"qa-radio-btn-grp-label\">\n      {{question.body}}\n    </div>\n\n    <mat-radio-group class=\"qa-radio-btn-grp\">\n      <div class=\"qa-radio-btn-layout-horizontal\">\n        <mat-radio-button #matRadioButton color=\"primary\" class=\"qa-response-button\"\n                          *ngFor=\"let options of question.selectionOptionsList\"\n                          (change)=\"setRadioResponse(matRadioButton.value)\"\n                          [disabled]=\"isDisabled\"\n                          [checked]=\"matchesValue(options)\"\n                          [value]=\"options\">{{options}}</mat-radio-button>\n      </div>\n    </mat-radio-group>\n\n  <div></div>\n\n  <div id=\"commentsBox\" *ngIf=\"question.hasComment\">\n      <mat-form-field appearance=\"outline\" class=\"textarea-response\">\n        <mat-label>{{question.commentLabel}}</mat-label>\n        <textarea matInput [disabled]=\"isDisabled\" [ngModel]=\"questionResponse?.comment?.content\"\n          (ngModelChange)=\"setComment($event)\"></textarea>\n      </mat-form-field>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/form/form.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-forms/src/app/form/form.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category-wrapper\" *ngFor=\"let cat of model.categoryResponses; let i = index\">\n    <app-category [categoryResponse]=\"cat\" [isDisabled]=\"model.status === 'Submitted'\" (categoryResponseChange)=\"onCategoryChange($event, i)\">\n        <ng-content *ngIf=\"i === model.length-1\" select=\"[position=last]\"></ng-content>\n    </app-category>\n</div>\n"

/***/ }),

/***/ "../course-feedback/src/app/_common/form-page.ts":
/*!*******************************************************!*\
  !*** ../course-feedback/src/app/_common/form-page.ts ***!
  \*******************************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");


var FormPage = /** @class */ (function () {
    function FormPage(formService, errorHandlerService, router, route, summaryUrl) {
        this.formService = formService;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.route = route;
        this.summaryUrl = summaryUrl;
        this.dataLoaded = false;
    }
    FormPage.prototype.initialiseForm = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getForm(params.get('id'));
        });
    };
    FormPage.prototype.clearSubscriptions = function () {
        this.unsubscribe(this.getFormSubscription);
        this.unsubscribe(this.createFormSubscription);
        this.unsubscribe(this.updateFormSubscription);
    };
    FormPage.prototype.navigateToSummary = function (url) {
        this.router.navigateByUrl(url);
    };
    FormPage.prototype.onSubmit = function () {
        this.setFormStatus();
        if (this.isNewForm()) {
            this.createForm();
        }
        else {
            this.updateForm();
        }
    };
    FormPage.prototype.getForm = function (id) {
        var _this = this;
        this.getFormSubscription = this.formService.getForm(id)
            .subscribe(function (response) {
            _this.viewModel = response;
            _this.dataLoaded = true;
        }, function (error) {
            _this.dataLoaded = true;
            _this.errorHandlerService.handleError(error);
        });
    };
    FormPage.prototype.createForm = function () {
        var _this = this;
        this.createFormSubscription = this.formService.createForm(this.viewModel)
            .subscribe(function (response) {
            _this.navigateToSummary(_this.summaryUrl);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    FormPage.prototype.updateForm = function () {
        var _this = this;
        this.updateFormSubscription = this.formService.updateForm(this.viewModel)
            .subscribe(function (response) {
            _this.navigateToSummary(_this.summaryUrl);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    FormPage.prototype.setFormStatus = function () {
        this.viewModel.status = this.formCompleted() ? 'Submitted' : 'Saved';
    };
    FormPage.prototype.isNewForm = function () {
        return !this.viewModel.id;
    };
    FormPage.prototype.formCompleted = function () {
        var _this = this;
        var incompleteQuestionCategory = this.viewModel.categoryResponses
            .find(function (cr) {
            return !_this.questionsAnswered(cr);
        });
        return !incompleteQuestionCategory;
    };
    FormPage.prototype.questionsAnswered = function (categoryResponse) {
        var questionResponse = categoryResponse.questionResponses.find(function (qr) {
            return !qr.responseValues || qr.responseValues.length === 0;
        });
        return !questionResponse;
    };
    FormPage.prototype.unsubscribe = function (subscription) {
        if (!!subscription) {
            subscription.unsubscribe();
        }
    };
    FormPage.ctorParameters = function () { return [
        { type: undefined },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_0__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: String }
    ]; };
    return FormPage;
}());



/***/ }),

/***/ "../course-feedback/src/app/_common/services/evaluation-service.ts":
/*!*************************************************************************!*\
  !*** ../course-feedback/src/app/_common/services/evaluation-service.ts ***!
  \*************************************************************************/
/*! exports provided: EvaluationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationService", function() { return EvaluationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var EvaluationService = /** @class */ (function () {
    function EvaluationService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    EvaluationService.prototype.getForm = function (cohortCourseId) {
        return this.qaHttp.get({ ref: 'GET_EVALUATION_FOR_TRAINEE_AND_COURSE', params: { cohortCourseId: cohortCourseId } });
    };
    EvaluationService.prototype.createForm = function (formModel) {
        return this.qaHttp.post({ ref: 'CREATE_EVALUATION_FORM' }, formModel);
    };
    EvaluationService.prototype.updateForm = function (formModel) {
        return this.qaHttp.put({ ref: 'UPDATE_EVALUATION_FORM' }, formModel);
    };
    EvaluationService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    EvaluationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], EvaluationService);
    return EvaluationService;
}());



/***/ }),

/***/ "../course-feedback/src/app/_common/services/form-type.service.ts":
/*!************************************************************************!*\
  !*** ../course-feedback/src/app/_common/services/form-type.service.ts ***!
  \************************************************************************/
/*! exports provided: FormTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTypeService", function() { return FormTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var FormTypeService = /** @class */ (function () {
    function FormTypeService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    FormTypeService.prototype.getFormType = function (formName) {
        return this.qaHttp.get({ ref: 'GET_FORM_TYPE', params: { formName: formName } });
    };
    /**
     *This method is used to send the user's end of course feedback response back to the data, currently this method acts as both the save and submit function,
     * though the sent body does not feature a completed property.
     * Also current SEND_EVAL_RESPONSE is set to " "
     *
     * @param {IFormModel} form
     * @memberof FormTypeService
     */
    FormTypeService.prototype.sendEvalForm = function (form) {
        return this.qaHttp.post({ ref: 'SEND_EVAL_RESPONSE' }, form);
    };
    FormTypeService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    FormTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], FormTypeService);
    return FormTypeService;
}());



/***/ }),

/***/ "../course-feedback/src/app/_common/services/trainer-course-history.service.ts":
/*!*************************************************************************************!*\
  !*** ../course-feedback/src/app/_common/services/trainer-course-history.service.ts ***!
  \*************************************************************************************/
/*! exports provided: TrainerCourseHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerCourseHistoryService", function() { return TrainerCourseHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var TrainerCourseHistoryService = /** @class */ (function () {
    function TrainerCourseHistoryService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    TrainerCourseHistoryService.prototype.getCourseHistory = function () {
        return this.qaHttp.get({ ref: 'GET_COHORT_COURSES_FOR_TRAINER' });
    };
    TrainerCourseHistoryService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    TrainerCourseHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], TrainerCourseHistoryService);
    return TrainerCourseHistoryService;
}());



/***/ }),

/***/ "../course-feedback/src/app/course-evaluation/course-evaluation.component.scss":
/*!*************************************************************************************!*\
  !*** ../course-feedback/src/app/course-evaluation/course-evaluation.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC9jb3Vyc2UtZXZhbHVhdGlvbi9jb3Vyc2UtZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../course-feedback/src/app/course-evaluation/course-evaluation.component.ts":
/*!***********************************************************************************!*\
  !*** ../course-feedback/src/app/course-evaluation/course-evaluation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CourseEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEvaluationComponent", function() { return CourseEvaluationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CourseEvaluationComponent = /** @class */ (function () {
    function CourseEvaluationComponent() {
    }
    CourseEvaluationComponent.prototype.ngOnInit = function () {
    };
    CourseEvaluationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-evaluation',
            template: __webpack_require__(/*! raw-loader!./course-evaluation.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/course-evaluation/course-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./course-evaluation.component.scss */ "../course-feedback/src/app/course-evaluation/course-evaluation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseEvaluationComponent);
    return CourseEvaluationComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/evaluation-table/evaluation-table.component.scss":
/*!***********************************************************************************!*\
  !*** ../course-feedback/src/app/evaluation-table/evaluation-table.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC9ldmFsdWF0aW9uLXRhYmxlL2V2YWx1YXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC9ldmFsdWF0aW9uLXRhYmxlL2V2YWx1YXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvZXZhbHVhdGlvbi10YWJsZS9ldmFsdWF0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "../course-feedback/src/app/evaluation-table/evaluation-table.component.ts":
/*!*********************************************************************************!*\
  !*** ../course-feedback/src/app/evaluation-table/evaluation-table.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EvaluationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationTableComponent", function() { return EvaluationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { course: 'Test1', start: '01/01/19', end: '08/01/19', courseid: 'HAPHAP', pin: 4658554, status: "\u2714" },
    { course: 'Test2', start: '08/01/19', end: '15/01/19', courseid: 'HAPHAP', pin: 4658554, status: "\u274C" },
    { course: 'Test3', start: '08/01/19', end: '15/01/19', courseid: 'HAPHAP', pin: 4658554, status: "\uD83D\uDD12" },
];
var EvaluationTableComponent = /** @class */ (function () {
    function EvaluationTableComponent() {
        this.displayedColumns = ['course', 'start', 'end', 'courseid', 'pin', 'status'];
        this.dataSource = ELEMENT_DATA;
    }
    EvaluationTableComponent.prototype.ngOnInit = function () {
        //call service here
    };
    EvaluationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evaluation-table',
            template: __webpack_require__(/*! raw-loader!./evaluation-table.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/evaluation-table/evaluation-table.component.html"),
            styles: [__webpack_require__(/*! ./evaluation-table.component.scss */ "../course-feedback/src/app/evaluation-table/evaluation-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EvaluationTableComponent);
    return EvaluationTableComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/qa-feedback-routing.module.ts":
/*!****************************************************************!*\
  !*** ../course-feedback/src/app/qa-feedback-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: QaFeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaFeedbackRoutingModule", function() { return QaFeedbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trainee_course_evaluation_trainee_course_evaluation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trainee-course-evaluation/trainee-course-evaluation.component */ "../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.ts");
/* harmony import */ var _trainer_evaluation_summary_trainer_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainer-evaluation-summary/trainer-evaluation-summary.component */ "../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.ts");
/* harmony import */ var _trainer_evaluation_history_trainer_evaluation_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-evaluation-history/trainer-evaluation-history.component */ "../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.ts");
/* harmony import */ var _trainer_feedback_page_trainer_feedback_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainer-feedback-page/trainer-feedback-page.component */ "../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.ts");
/* harmony import */ var _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../portal-core/src/app/_common/models/portal-constants */ "./src/app/_common/models/portal-constants.ts");
/* harmony import */ var _portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal-core/src/app/_common/guards/app-auth-guard */ "./src/app/_common/guards/app-auth-guard.ts");
/* harmony import */ var _trainee_evaluation_summary_trainee_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trainee-evaluation-summary/trainee-evaluation-summary.component */ "../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.ts");
/* harmony import */ var _trainer_feedback_history_trainer_feedback_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trainer-feedback-history/trainer-feedback-history.component */ "../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.ts");











var routes = [
    {
        path: 'trainee',
        children: [
            {
                path: 'evaluation/history',
                component: _trainee_evaluation_summary_trainee_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_9__["TraineeEvaluationSummaryComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINEE_ROLE"]
                    ]
                }
            },
            {
                path: 'evaluation/:id',
                component: _trainee_course_evaluation_trainee_course_evaluation_component__WEBPACK_IMPORTED_MODULE_3__["TraineeCourseEvaluationComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINEE_ROLE"]
                    ]
                }
            }
        ]
    },
    {
        path: 'trainer',
        children: [
            {
                path: 'evaluation/history',
                component: _trainer_evaluation_history_trainer_evaluation_history_component__WEBPACK_IMPORTED_MODULE_5__["TrainerEvaluationHistoryComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINER_ROLE"]
                    ]
                }
            },
            {
                path: 'evaluation/course/summary/:id',
                component: _trainer_evaluation_summary_trainer_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_4__["TrainerEvaluationSummaryComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINER_ROLE"]
                    ]
                }
            },
            {
                path: 'history',
                component: _trainer_feedback_history_trainer_feedback_history_component__WEBPACK_IMPORTED_MODULE_10__["TrainerFeedbackHistoryComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINER_ROLE"]
                    ]
                }
            },
            {
                path: 'course/:id',
                component: _trainer_feedback_page_trainer_feedback_page_component__WEBPACK_IMPORTED_MODULE_6__["TrainerFeedbackPageComponent"],
                canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AppAuthGuard"]],
                data: {
                    roles: [
                        _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_7__["TRAINER_ROLE"]
                    ]
                }
            }
        ]
    }
];
var QaFeedbackRoutingModule = /** @class */ (function () {
    function QaFeedbackRoutingModule() {
    }
    QaFeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QaFeedbackRoutingModule);
    return QaFeedbackRoutingModule;
}());



/***/ }),

/***/ "../course-feedback/src/app/qa-feedback.module.ts":
/*!********************************************************!*\
  !*** ../course-feedback/src/app/qa-feedback.module.ts ***!
  \********************************************************/
/*! exports provided: QaFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaFeedbackModule", function() { return QaFeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _qa_feedback_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qa-feedback-routing.module */ "../course-feedback/src/app/qa-feedback-routing.module.ts");
/* harmony import */ var _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");
/* harmony import */ var _trainer_evaluation_summary_trainer_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainer-evaluation-summary/trainer-evaluation-summary.component */ "../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.ts");
/* harmony import */ var _trainer_evaluation_summary_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainer-evaluation-summary/table-component/table-component.component */ "../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.ts");
/* harmony import */ var _trainer_evaluation_summary_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trainer-evaluation-summary/course-info/course-info.component */ "../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.ts");
/* harmony import */ var _course_evaluation_course_evaluation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-evaluation/course-evaluation.component */ "../course-feedback/src/app/course-evaluation/course-evaluation.component.ts");
/* harmony import */ var _evaluation_table_evaluation_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluation-table/evaluation-table.component */ "../course-feedback/src/app/evaluation-table/evaluation-table.component.ts");
/* harmony import */ var _trainer_evaluation_history_trainer_evaluation_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trainer-evaluation-history/trainer-evaluation-history.component */ "../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.ts");
/* harmony import */ var _common_services_trainer_course_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_common/services/trainer-course-history.service */ "../course-feedback/src/app/_common/services/trainer-course-history.service.ts");
/* harmony import */ var _common_services_form_type_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_common/services/form-type.service */ "../course-feedback/src/app/_common/services/form-type.service.ts");
/* harmony import */ var _trainee_course_evaluation_trainee_course_evaluation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trainee-course-evaluation/trainee-course-evaluation.component */ "../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.ts");
/* harmony import */ var _trainer_feedback_page_trainer_feedback_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trainer-feedback-page/trainer-feedback-page.component */ "../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.ts");
/* harmony import */ var projects_qa_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/qa-forms */ "../qa-forms/index.ts");
/* harmony import */ var _common_services_evaluation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_common/services/evaluation-service */ "../course-feedback/src/app/_common/services/evaluation-service.ts");
/* harmony import */ var _trainee_evaluation_summary_trainee_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trainee-evaluation-summary/trainee-evaluation-summary.component */ "../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.ts");
/* harmony import */ var _trainee_evaluation_summary_services_trainee_evaluation_summary_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trainee-evaluation-summary/services/trainee-evaluation-summary.service */ "../course-feedback/src/app/trainee-evaluation-summary/services/trainee-evaluation-summary.service.ts");
/* harmony import */ var _trainer_feedback_page_common_services_feedback_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./trainer-feedback-page/_common/services/feedback.service */ "../course-feedback/src/app/trainer-feedback-page/_common/services/feedback.service.ts");
/* harmony import */ var _trainer_feedback_history_trainer_feedback_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trainer-feedback-history/trainer-feedback-history.component */ "../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.ts");
/* harmony import */ var _trainer_evaluation_history_services_retrieve_trainer_evaluation_history_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./trainer-evaluation-history/services/retrieve-trainer-evaluation-history.service */ "../course-feedback/src/app/trainer-evaluation-history/services/retrieve-trainer-evaluation-history.service.ts");
/* harmony import */ var _trainer_evaluation_summary_services_trainer_evaluation_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trainer-evaluation-summary/services/trainer-evaluation.service */ "../course-feedback/src/app/trainer-evaluation-summary/services/trainer-evaluation.service.ts");






















var QaFeedbackModule = /** @class */ (function () {
    function QaFeedbackModule() {
    }
    QaFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _trainer_evaluation_summary_trainer_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_4__["TrainerEvaluationSummaryComponent"],
                _trainer_evaluation_summary_table_component_table_component_component__WEBPACK_IMPORTED_MODULE_5__["TableComponentComponent"],
                _trainer_evaluation_summary_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_6__["CourseInfoComponent"],
                _course_evaluation_course_evaluation_component__WEBPACK_IMPORTED_MODULE_7__["CourseEvaluationComponent"],
                _evaluation_table_evaluation_table_component__WEBPACK_IMPORTED_MODULE_8__["EvaluationTableComponent"],
                _trainer_evaluation_history_trainer_evaluation_history_component__WEBPACK_IMPORTED_MODULE_9__["TrainerEvaluationHistoryComponent"],
                _trainee_course_evaluation_trainee_course_evaluation_component__WEBPACK_IMPORTED_MODULE_12__["TraineeCourseEvaluationComponent"],
                _trainer_feedback_page_trainer_feedback_page_component__WEBPACK_IMPORTED_MODULE_13__["TrainerFeedbackPageComponent"],
                _trainee_evaluation_summary_trainee_evaluation_summary_component__WEBPACK_IMPORTED_MODULE_16__["TraineeEvaluationSummaryComponent"],
                _trainer_feedback_history_trainer_feedback_history_component__WEBPACK_IMPORTED_MODULE_19__["TrainerFeedbackHistoryComponent"]
            ],
            imports: [
                _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_3__["QaCommonModule"],
                _qa_feedback_routing_module__WEBPACK_IMPORTED_MODULE_2__["QaFeedbackRoutingModule"],
                projects_qa_forms__WEBPACK_IMPORTED_MODULE_14__["QaFormsModule"]
            ],
            providers: [
                _common_services_trainer_course_history_service__WEBPACK_IMPORTED_MODULE_10__["TrainerCourseHistoryService"],
                _trainee_evaluation_summary_services_trainee_evaluation_summary_service__WEBPACK_IMPORTED_MODULE_17__["TraineeEvaluationSummaryService"],
                _trainer_evaluation_history_services_retrieve_trainer_evaluation_history_service__WEBPACK_IMPORTED_MODULE_20__["RetrieveTrainerEvaluationHistoryService"],
                _common_services_form_type_service__WEBPACK_IMPORTED_MODULE_11__["FormTypeService"],
                _trainer_feedback_page_common_services_feedback_service__WEBPACK_IMPORTED_MODULE_18__["FeedbackService"],
                _common_services_evaluation_service__WEBPACK_IMPORTED_MODULE_15__["EvaluationService"],
                _trainer_evaluation_summary_services_trainer_evaluation_service__WEBPACK_IMPORTED_MODULE_21__["TrainerEvaluationService"]
            ]
        })
    ], QaFeedbackModule);
    return QaFeedbackModule;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.scss":
/*!*****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVlLWNvdXJzZS1ldmFsdWF0aW9uL3RyYWluZWUtY291cnNlLWV2YWx1YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.ts":
/*!***************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TraineeCourseEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeCourseEvaluationComponent", function() { return TraineeCourseEvaluationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/services/evaluation-service */ "../course-feedback/src/app/_common/services/evaluation-service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/form-page */ "../course-feedback/src/app/_common/form-page.ts");






var TraineeCourseEvaluationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TraineeCourseEvaluationComponent, _super);
    function TraineeCourseEvaluationComponent(evaluationService, errorHandlerService, router, route) {
        return _super.call(this, evaluationService, errorHandlerService, router, route, 'qa/portal/training/feedback/trainee/evaluation/history') || this;
    }
    TraineeCourseEvaluationComponent.prototype.ngOnInit = function () {
        this.initialiseForm();
    };
    TraineeCourseEvaluationComponent.prototype.ngOnDestroy = function () {
        this.clearSubscriptions();
    };
    TraineeCourseEvaluationComponent.ctorParameters = function () { return [
        { type: _common_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__["EvaluationService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    TraineeCourseEvaluationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainee-course-evaluation',
            template: __webpack_require__(/*! raw-loader!./trainee-course-evaluation.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./trainee-course-evaluation.component.scss */ "../course-feedback/src/app/trainee-course-evaluation/trainee-course-evaluation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__["EvaluationService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TraineeCourseEvaluationComponent);
    return TraineeCourseEvaluationComponent;
}(_common_form_page__WEBPACK_IMPORTED_MODULE_5__["FormPage"]));



/***/ }),

/***/ "../course-feedback/src/app/trainee-evaluation-summary/services/trainee-evaluation-summary.service.ts":
/*!************************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainee-evaluation-summary/services/trainee-evaluation-summary.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: TraineeEvaluationSummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeEvaluationSummaryService", function() { return TraineeEvaluationSummaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var TraineeEvaluationSummaryService = /** @class */ (function () {
    function TraineeEvaluationSummaryService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    TraineeEvaluationSummaryService.prototype.getTraineeEvaluationSummary = function () {
        return this.qaHttp.get({ ref: 'GET_TRAINEE_EVALUATION_SUMMARY' });
    };
    TraineeEvaluationSummaryService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    TraineeEvaluationSummaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], TraineeEvaluationSummaryService);
    return TraineeEvaluationSummaryService;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.scss":
/*!*******************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-cell {\n  font-size: 20px;\n}\n\nmat-cell.cdk-column-date {\n  position: relative;\n  left: 60%;\n  top: -32px;\n}\n\n.mat-row {\n  position: relative;\n}\n\n.mat-row-link {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.data-row:hover {\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVlLWV2YWx1YXRpb24tc3VtbWFyeS90cmFpbmVlLWV2YWx1YXRpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvdXJzZS1mZWVkYmFjay9zcmMvYXBwL3RyYWluZWUtZXZhbHVhdGlvbi1zdW1tYXJ5L3RyYWluZWUtZXZhbHVhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVlLWV2YWx1YXRpb24tc3VtbWFyeS90cmFpbmVlLWV2YWx1YXRpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxse1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1jZWxsLmNkay1jb2x1bW4tZGF0ZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDotMzJweDtcbn1cblxuLm1hdC1yb3d7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1yb3ctbGlua3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5kYXRhLXJvdzpob3ZlcntcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5tYXQtY2VsbC5jZGstY29sdW1uLWRhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiAtMzJweDtcbn1cblxuLm1hdC1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtcm93LWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmRhdGEtcm93OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TraineeEvaluationSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeEvaluationSummaryComponent", function() { return TraineeEvaluationSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trainee_evaluation_summary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/trainee-evaluation-summary.service */ "../course-feedback/src/app/trainee-evaluation-summary/services/trainee-evaluation-summary.service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");





var TraineeEvaluationSummaryComponent = /** @class */ (function () {
    function TraineeEvaluationSummaryComponent(traineeEvaluationSummaryService, errorHandlerService) {
        this.traineeEvaluationSummaryService = traineeEvaluationSummaryService;
        this.errorHandlerService = errorHandlerService;
        this.dataLoading = true;
        this.displayedColumns = ['course', 'start', 'end', 'courseid', 'status'];
    }
    TraineeEvaluationSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEvaluationSummarySubscription = this.traineeEvaluationSummaryService.getTraineeEvaluationSummary().subscribe(function (response) {
            _this.viewModel = response;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.viewModel.evaluationSummaryRows);
            _this.dataLoading = false;
        }, function (error) {
            _this.dataLoading = false;
            _this.errorHandlerService.handleError(error);
        });
    };
    TraineeEvaluationSummaryComponent.prototype.ngOnDestroy = function () {
        if (this.getEvaluationSummarySubscription && !this.getEvaluationSummarySubscription.closed) {
            this.getEvaluationSummarySubscription.unsubscribe();
        }
    };
    TraineeEvaluationSummaryComponent.prototype.getEvaluationUrl = function (cohortCourseId) {
        return '/qa/portal/training/feedback/trainee/evaluation/' + cohortCourseId;
    };
    TraineeEvaluationSummaryComponent.ctorParameters = function () { return [
        { type: _services_trainee_evaluation_summary_service__WEBPACK_IMPORTED_MODULE_2__["TraineeEvaluationSummaryService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"] }
    ]; };
    TraineeEvaluationSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainee-evaluation-summary',
            template: __webpack_require__(/*! raw-loader!./trainee-evaluation-summary.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.html"),
            styles: [__webpack_require__(/*! ./trainee-evaluation-summary.component.scss */ "../course-feedback/src/app/trainee-evaluation-summary/trainee-evaluation-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainee_evaluation_summary_service__WEBPACK_IMPORTED_MODULE_2__["TraineeEvaluationSummaryService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["QaErrorHandlerService"]])
    ], TraineeEvaluationSummaryComponent);
    return TraineeEvaluationSummaryComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-history/services/retrieve-trainer-evaluation-history.service.ts":
/*!*********************************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-history/services/retrieve-trainer-evaluation-history.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: RetrieveTrainerEvaluationHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveTrainerEvaluationHistoryService", function() { return RetrieveTrainerEvaluationHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var RetrieveTrainerEvaluationHistoryService = /** @class */ (function () {
    function RetrieveTrainerEvaluationHistoryService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    RetrieveTrainerEvaluationHistoryService.prototype.getEvalHistory = function () {
        return this.qaHttp.get({ ref: 'GET_COHORT_COURSES_FOR_TRAINER' });
    };
    RetrieveTrainerEvaluationHistoryService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    RetrieveTrainerEvaluationHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], RetrieveTrainerEvaluationHistoryService);
    return RetrieveTrainerEvaluationHistoryService;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.scss":
/*!*******************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-cell {\n  font-size: 20px;\n}\n\nmat-cell.cdk-column-date {\n  position: relative;\n  left: 60%;\n  top: -32px;\n}\n\n.mat-row {\n  position: relative;\n}\n\n.mat-row-link {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.data-row:hover {\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n  cursor: pointer;\n}\n\n.bottom-table {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24taGlzdG9yeS90cmFpbmVyLWV2YWx1YXRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvdXJzZS1mZWVkYmFjay9zcmMvYXBwL3RyYWluZXItZXZhbHVhdGlvbi1oaXN0b3J5L3RyYWluZXItZXZhbHVhdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24taGlzdG9yeS90cmFpbmVyLWV2YWx1YXRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxse1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1jZWxsLmNkay1jb2x1bW4tZGF0ZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDotMzJweDtcbn1cblxuLm1hdC1yb3d7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1yb3ctbGlua3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5kYXRhLXJvdzpob3ZlcntcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvdHRvbS10YWJsZSB7XG4gIHdpZHRoOiA1MCU7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubWF0LWNlbGwuY2RrLWNvbHVtbi1kYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogLTMycHg7XG59XG5cbi5tYXQtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LXJvdy1saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5kYXRhLXJvdzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3R0b20tdGFibGUge1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TrainerEvaluationHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerEvaluationHistoryComponent", function() { return TrainerEvaluationHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _services_retrieve_trainer_evaluation_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/retrieve-trainer-evaluation-history.service */ "../course-feedback/src/app/trainer-evaluation-history/services/retrieve-trainer-evaluation-history.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");





var TrainerEvaluationHistoryComponent = /** @class */ (function () {
    function TrainerEvaluationHistoryComponent(retrieveTrainerEvalHistory, errorHandler) {
        this.retrieveTrainerEvalHistory = retrieveTrainerEvalHistory;
        this.errorHandler = errorHandler;
        this.dataLoading = true;
    }
    TrainerEvaluationHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.retrieveTrainerEvalHistory.getEvalHistory().subscribe(function (response) {
            _this.populateTables(response);
        }, function (error) {
            _this.dataLoading = false;
            _this.errorHandler.handleError(error);
        });
    };
    TrainerEvaluationHistoryComponent.prototype.populateTables = function (response) {
        if (!!response.currentCohortCourse) {
            this.currentCourseDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([response.currentCohortCourse]);
        }
        else {
            this.currentCourseDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        }
        this.prevCoursesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.previousCohortCourses);
        this.trainerEvalHistory = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([{ knowledge: response.averageKnowledgeRating, tqi: response.averageTqiRating }]);
        this.dataLoading = false;
    };
    TrainerEvaluationHistoryComponent.ctorParameters = function () { return [
        { type: _services_retrieve_trainer_evaluation_history_service__WEBPACK_IMPORTED_MODULE_3__["RetrieveTrainerEvaluationHistoryService"] },
        { type: projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["QaErrorHandlerService"] }
    ]; };
    TrainerEvaluationHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainer-evaluation-history',
            template: __webpack_require__(/*! raw-loader!./trainer-evaluation-history.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.html"),
            styles: [__webpack_require__(/*! ./trainer-evaluation-history.component.scss */ "../course-feedback/src/app/trainer-evaluation-history/trainer-evaluation-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_retrieve_trainer_evaluation_history_service__WEBPACK_IMPORTED_MODULE_3__["RetrieveTrainerEvaluationHistoryService"],
            projects_portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["QaErrorHandlerService"]])
    ], TrainerEvaluationHistoryComponent);
    return TrainerEvaluationHistoryComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.scss":
/*!****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24tc3VtbWFyeS9jb3Vyc2UtaW5mby9jb3Vyc2UtaW5mby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvdXJzZS1mZWVkYmFjay9zcmMvYXBwL3RyYWluZXItZXZhbHVhdGlvbi1zdW1tYXJ5L2NvdXJzZS1pbmZvL2NvdXJzZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2NvdXJzZS1mZWVkYmFjay9zcmMvYXBwL3RyYWluZXItZXZhbHVhdGlvbi1zdW1tYXJ5L2NvdXJzZS1pbmZvL2NvdXJzZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gICAgd2lkdGg6NzAlOyBcbiAgICBtYXJnaW4tbGVmdDoxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OjE1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.ts":
/*!**************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CourseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInfoComponent", function() { return CourseInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CourseInfoComponent = /** @class */ (function () {
    function CourseInfoComponent() {
    }
    CourseInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseInfoComponent.prototype, "courseName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseInfoComponent.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseInfoComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseInfoComponent.prototype, "duration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CourseInfoComponent.prototype, "courseId", void 0);
    CourseInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-info',
            template: __webpack_require__(/*! raw-loader!./course-info.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.html"),
            styles: [__webpack_require__(/*! ./course-info.component.scss */ "../course-feedback/src/app/trainer-evaluation-summary/course-info/course-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseInfoComponent);
    return CourseInfoComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/services/trainer-evaluation.service.ts":
/*!****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/services/trainer-evaluation.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: TrainerEvaluationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerEvaluationService", function() { return TrainerEvaluationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var TrainerEvaluationService = /** @class */ (function () {
    function TrainerEvaluationService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    TrainerEvaluationService.prototype.getTrainerCourseEvaluationSummary = function (courseId) {
        return this.qaHttp.get({ ref: 'GET_TRAINER_EVALUATION_SUMMARY', params: { courseId: courseId.toString() } });
    };
    TrainerEvaluationService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    TrainerEvaluationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], TrainerEvaluationService);
    return TrainerEvaluationService;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.scss":
/*!************************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\ntable.average {\n  padding-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24tc3VtbWFyeS90YWJsZS1jb21wb25lbnQvdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvdHJhaW5lci1ldmFsdWF0aW9uLXN1bW1hcnkvdGFibGUtY29tcG9uZW50L3RhYmxlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24tc3VtbWFyeS90YWJsZS1jb21wb25lbnQvdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbnRhYmxlLmF2ZXJhZ2V7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZS5hdmVyYWdlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.ts":
/*!**********************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TableComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponentComponent", function() { return TableComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TableComponentComponent = /** @class */ (function () {
    function TableComponentComponent() {
        this.displayedColumns = ['traineeName', 'knowledge', 'recommend'];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TableComponentComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TableComponentComponent.prototype, "average", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TableComponentComponent.prototype, "tqi", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableComponentComponent.prototype, "courseName", void 0);
    TableComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-component',
            template: __webpack_require__(/*! raw-loader!./table-component.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.html"),
            styles: [__webpack_require__(/*! ./table-component.component.scss */ "../course-feedback/src/app/trainer-evaluation-summary/table-component/table-component.component.scss")]
        })
    ], TableComponentComponent);
    return TableComponentComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.scss":
/*!*******************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWV2YWx1YXRpb24tc3VtbWFyeS90cmFpbmVyLWV2YWx1YXRpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TrainerEvaluationSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerEvaluationSummaryComponent", function() { return TrainerEvaluationSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trainer_evaluation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/trainer-evaluation.service */ "../course-feedback/src/app/trainer-evaluation-summary/services/trainer-evaluation.service.ts");




var TrainerEvaluationSummaryComponent = /** @class */ (function () {
    function TrainerEvaluationSummaryComponent(trainerEvaluationService, activatedRoute) {
        this.trainerEvaluationService = trainerEvaluationService;
        this.activatedRoute = activatedRoute;
        this.dataSource = [];
    }
    TrainerEvaluationSummaryComponent.prototype.ngOnInit = function () {
        this.initalizeTable();
    };
    TrainerEvaluationSummaryComponent.prototype.initalizeTable = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var courseId = params.get('id');
            _this.trainerEvaluationService.getTrainerCourseEvaluationSummary(courseId).subscribe(function (response) {
                _this.viewModel = response;
                _this.tqi = response.courseTqi;
                _this.courseHistoryTqi = response.courseHistoryTqi;
                _this.getCourseInfo(response.traineeEvaluationsForCourse[0]);
                _this.getTraineeEvaulations(response.traineeEvaluationsForCourse);
            });
        });
    };
    TrainerEvaluationSummaryComponent.prototype.getCourseInfo = function (data) {
        if (data) {
            var cohortCourse = data.cohortCourse;
            this.courseName = cohortCourse.course.courseName;
            this.location = cohortCourse.location.name;
            var end = new Date(cohortCourse.endDate);
            var start = new Date(cohortCourse.startDate);
            var diffTime = Math.abs(end.getTime() - start.getTime());
            this.startDate = start.getDate() + '/' + start.getMonth() + '/' + start.getFullYear();
            this.duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        }
    };
    TrainerEvaluationSummaryComponent.prototype.getTraineeEvaulations = function (data) {
        var e_1, _a, e_2, _b;
        var tempData = [];
        try {
            for (var data_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var response = data_1_1.value;
                var evaluation = {
                    traineeName: response.trainee.firstName + ' ' + response.trainee.lastName,
                    knowledge: '',
                    recommend: ''
                };
                try {
                    for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.categoryResponses), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var catResponse = _d.value;
                        if (catResponse.questionCategory.categoryName === 'Evaluation Trainer') {
                            evaluation.knowledge = catResponse.questionResponses[0].responseValues[0];
                        }
                        else if (catResponse.questionCategory.categoryName === 'Evaluation Recommend QA') {
                            evaluation.recommend = catResponse.questionResponses[0].responseValues[0];
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                tempData.push(evaluation);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.dataSource = tempData;
    };
    TrainerEvaluationSummaryComponent.ctorParameters = function () { return [
        { type: _services_trainer_evaluation_service__WEBPACK_IMPORTED_MODULE_3__["TrainerEvaluationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TrainerEvaluationSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainer-evaluation-summary',
            template: __webpack_require__(/*! raw-loader!./trainer-evaluation-summary.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.html"),
            styles: [__webpack_require__(/*! ./trainer-evaluation-summary.component.scss */ "../course-feedback/src/app/trainer-evaluation-summary/trainer-evaluation-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_evaluation_service__WEBPACK_IMPORTED_MODULE_3__["TrainerEvaluationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TrainerEvaluationSummaryComponent);
    return TrainerEvaluationSummaryComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-history/models/trainer-feedback-history.model.ts":
/*!****************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-history/models/trainer-feedback-history.model.ts ***!
  \****************************************************************************************************/
/*! exports provided: TrainerFeedbackHistoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerFeedbackHistoryModel", function() { return TrainerFeedbackHistoryModel; });
var TrainerFeedbackHistoryModel = /** @class */ (function () {
    function TrainerFeedbackHistoryModel() {
    }
    return TrainerFeedbackHistoryModel;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.scss":
/*!***************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\nmat-cell {\n  font-size: 20px;\n}\n\nmat-cell.cdk-column-date {\n  position: relative;\n  left: 60%;\n  top: -32px;\n}\n\n.mat-row {\n  position: relative;\n}\n\n.mat-row-link {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.data-row:hover {\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWZlZWRiYWNrLWhpc3RvcnkvdHJhaW5lci1mZWVkYmFjay1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvdHJhaW5lci1mZWVkYmFjay1oaXN0b3J5L3RyYWluZXItZmVlZGJhY2staGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvdHJhaW5lci1mZWVkYmFjay1oaXN0b3J5L3RyYWluZXItZmVlZGJhY2staGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxse1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm1hdC1jZWxsLmNkay1jb2x1bW4tZGF0ZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDotMzJweDtcbn1cblxuLm1hdC1yb3d7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1yb3ctbGlua3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5kYXRhLXJvdzpob3ZlcntcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5tYXQtY2VsbC5jZGstY29sdW1uLWRhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiAtMzJweDtcbn1cblxuLm1hdC1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtcm93LWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmRhdGEtcm93OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.ts":
/*!*************************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TrainerFeedbackHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerFeedbackHistoryComponent", function() { return TrainerFeedbackHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_services_trainer_course_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/services/trainer-course-history.service */ "../course-feedback/src/app/_common/services/trainer-course-history.service.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _models_trainer_feedback_history_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/trainer-feedback-history.model */ "../course-feedback/src/app/trainer-feedback-history/models/trainer-feedback-history.model.ts");






var TrainerFeedbackHistoryComponent = /** @class */ (function () {
    function TrainerFeedbackHistoryComponent(trainerCourseHistoryService, errorHandlerService) {
        this.trainerCourseHistoryService = trainerCourseHistoryService;
        this.errorHandlerService = errorHandlerService;
        this.dataLoading = true;
        this.displayedColumns = ['course', 'start', 'end', 'feedback-status'];
    }
    TrainerFeedbackHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainerCourseHistoryService.getCourseHistory().subscribe(function (response) {
            _this.viewModel = new _models_trainer_feedback_history_model__WEBPACK_IMPORTED_MODULE_5__["TrainerFeedbackHistoryModel"]();
            _this.viewModel.cohortCourses = response.cohortCourseHistory;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.viewModel.cohortCourses);
            _this.dataLoading = false;
        }, function (error) {
            _this.dataLoading = false;
            _this.errorHandlerService.handleError(error);
        });
    };
    TrainerFeedbackHistoryComponent.prototype.getFeedbackUrl = function (id) {
        return '/qa/portal/training/feedback/trainer/course/' + id;
    };
    TrainerFeedbackHistoryComponent.ctorParameters = function () { return [
        { type: _common_services_trainer_course_history_service__WEBPACK_IMPORTED_MODULE_3__["TrainerCourseHistoryService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"] }
    ]; };
    TrainerFeedbackHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainer-feedback-history',
            template: __webpack_require__(/*! raw-loader!./trainer-feedback-history.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.html"),
            styles: [__webpack_require__(/*! ./trainer-feedback-history.component.scss */ "../course-feedback/src/app/trainer-feedback-history/trainer-feedback-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_trainer_course_history_service__WEBPACK_IMPORTED_MODULE_3__["TrainerCourseHistoryService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["QaErrorHandlerService"]])
    ], TrainerFeedbackHistoryComponent);
    return TrainerFeedbackHistoryComponent;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-page/_common/services/feedback.service.ts":
/*!*********************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-page/_common/services/feedback.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");



var FeedbackService = /** @class */ (function () {
    function FeedbackService(qaHttp) {
        this.qaHttp = qaHttp;
    }
    FeedbackService.prototype.getForm = function (courseId) {
        return this.qaHttp.get({ ref: 'GET_FEEDBACK_FOR_COURSE', params: { courseId: courseId.toString() } });
    };
    FeedbackService.prototype.createForm = function (feedbackForm) {
        return this.qaHttp.post({ ref: 'CREATE_FEEDBACK_FORM' }, feedbackForm);
    };
    FeedbackService.prototype.updateForm = function (feedbackForm) {
        return this.qaHttp.put({ ref: 'UPDATE_FEEDBACK_FORM' }, feedbackForm);
    };
    FeedbackService.ctorParameters = function () { return [
        { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"] }
    ]; };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_2__["QaHttpService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.scss":
/*!*********************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qa-feedback-page-action-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9jb3Vyc2UtZmVlZGJhY2svc3JjL2FwcC90cmFpbmVyLWZlZWRiYWNrLXBhZ2UvdHJhaW5lci1mZWVkYmFjay1wYWdlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvdHJhaW5lci1mZWVkYmFjay1wYWdlL3RyYWluZXItZmVlZGJhY2stcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvY291cnNlLWZlZWRiYWNrL3NyYy9hcHAvdHJhaW5lci1mZWVkYmFjay1wYWdlL3RyYWluZXItZmVlZGJhY2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xYS1mZWVkYmFjay1wYWdlLWFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiIsIi5xYS1mZWVkYmFjay1wYWdlLWFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TrainerFeedbackPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerFeedbackPageComponent", function() { return TrainerFeedbackPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _common_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_common/services/feedback.service */ "../course-feedback/src/app/trainer-feedback-page/_common/services/feedback.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/form-page */ "../course-feedback/src/app/_common/form-page.ts");






var TrainerFeedbackPageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TrainerFeedbackPageComponent, _super);
    function TrainerFeedbackPageComponent(feedbackService, errorHandlerService, router, route) {
        return _super.call(this, feedbackService, errorHandlerService, router, route, 'qa/portal/training/feedback/trainer/history') || this;
    }
    TrainerFeedbackPageComponent.prototype.ngOnInit = function () {
        this.initialiseForm();
    };
    TrainerFeedbackPageComponent.prototype.ngOnDestroy = function () {
        this.clearSubscriptions();
    };
    TrainerFeedbackPageComponent.ctorParameters = function () { return [
        { type: _common_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"] },
        { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["QaErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    TrainerFeedbackPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trainer-feedback-page',
            template: __webpack_require__(/*! raw-loader!./trainer-feedback-page.component.html */ "../../node_modules/raw-loader/index.js!../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.html"),
            styles: [__webpack_require__(/*! ./trainer-feedback-page.component.scss */ "../course-feedback/src/app/trainer-feedback-page/trainer-feedback-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"],
            _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["QaErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TrainerFeedbackPageComponent);
    return TrainerFeedbackPageComponent;
}(_common_form_page__WEBPACK_IMPORTED_MODULE_5__["FormPage"]));



/***/ }),

/***/ "../qa-forms/index.ts":
/*!****************************!*\
  !*** ../qa-forms/index.ts ***!
  \****************************/
/*! exports provided: FormComponent, QaFormsModule, RadioButtonComponent, CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/form/form.component */ "../qa-forms/src/app/form/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return _src_app_form_form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"]; });

/* harmony import */ var _src_app_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/controls */ "../qa-forms/src/app/controls/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _src_app_controls__WEBPACK_IMPORTED_MODULE_1__["RadioButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return _src_app_controls__WEBPACK_IMPORTED_MODULE_1__["CheckBoxComponent"]; });

/* harmony import */ var _src_app_qa_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/qa-forms.module */ "../qa-forms/src/app/qa-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QaFormsModule", function() { return _src_app_qa_forms_module__WEBPACK_IMPORTED_MODULE_2__["QaFormsModule"]; });






/***/ }),

/***/ "../qa-forms/src/app/_common/models/control.constants.ts":
/*!***************************************************************!*\
  !*** ../qa-forms/src/app/_common/models/control.constants.ts ***!
  \***************************************************************/
/*! exports provided: CONTROLS_MAP, CONTROLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS_MAP", function() { return CONTROLS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS", function() { return CONTROLS; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controls */ "../qa-forms/src/app/controls/index.ts");

var CONTROLS_MAP = {
    'CHECK_BOX': _controls__WEBPACK_IMPORTED_MODULE_0__["CheckBoxComponent"],
    'RADIO_BUTTON': _controls__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]
};
var CONTROLS = [
    _controls__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"],
    _controls__WEBPACK_IMPORTED_MODULE_0__["CheckBoxComponent"]
];


/***/ }),

/***/ "../qa-forms/src/app/_common/models/index.ts":
/*!***************************************************!*\
  !*** ../qa-forms/src/app/_common/models/index.ts ***!
  \***************************************************/
/*! exports provided: IQuestionCategory, IQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portal_core_src_app_common_models_question_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/models/question-category.model */ "./src/app/_common/models/question-category.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IQuestionCategory", function() { return _portal_core_src_app_common_models_question_category_model__WEBPACK_IMPORTED_MODULE_0__["QuestionCategoryModel"]; });

/* harmony import */ var _portal_core_src_app_common_models_question_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/models/question.model */ "./src/app/_common/models/question.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IQuestion", function() { return _portal_core_src_app_common_models_question_model__WEBPACK_IMPORTED_MODULE_1__["QuestionModel"]; });





/***/ }),

/***/ "../qa-forms/src/app/category/category.component.css":
/*!***********************************************************!*\
  !*** ../qa-forms/src/app/category/category.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-category-header{\n    text-align: center;\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWZvcm1zL3NyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoicHJvamVjdHMvcWEtZm9ybXMvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2F0ZWdvcnktaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"

/***/ }),

/***/ "../qa-forms/src/app/category/category.component.ts":
/*!**********************************************************!*\
  !*** ../qa-forms/src/app/category/category.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
        this.categoryResponseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.onQuestionResponseChange = function (event, i) {
        this.categoryResponse.questionResponses[i] = event;
        // this.categoryResponseChange.emit(this.categoryResponse);
    };
    CategoryComponent.prototype.trackQuestion = function (_index, question) {
        return question.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryComponent.prototype, "categoryResponse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CategoryComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryComponent.prototype, "categoryResponseChange", void 0);
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "../qa-forms/src/app/category/category.component.css")]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../qa-forms/src/app/control-factory/control-factory.component.css":
/*!*************************************************************************!*\
  !*** ../qa-forms/src/app/control-factory/control-factory.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1mb3Jtcy9zcmMvYXBwL2NvbnRyb2wtZmFjdG9yeS9jb250cm9sLWZhY3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../qa-forms/src/app/control-factory/control-factory.component.ts":
/*!************************************************************************!*\
  !*** ../qa-forms/src/app/control-factory/control-factory.component.ts ***!
  \************************************************************************/
/*! exports provided: ControlFactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlFactoryComponent", function() { return ControlFactoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _control_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-host.directive */ "../qa-forms/src/app/control-factory/control-host.directive.ts");
/* harmony import */ var _common_models_control_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/models/control.constants */ "../qa-forms/src/app/_common/models/control.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/models */ "../qa-forms/src/app/_common/models/index.ts");






var ControlFactoryComponent = /** @class */ (function () {
    function ControlFactoryComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.questionResponseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keepAlive = true;
    }
    ControlFactoryComponent.prototype.ngOnInit = function () {
        this.loadControl();
    };
    ControlFactoryComponent.prototype.ngOnDestroy = function () {
        this.keepAlive = false;
    };
    ControlFactoryComponent.prototype.loadControl = function () {
        var _this = this;
        // console.debug('ControlFactoryComponent::loadControl - question:', this.question, 'type:', this.type, 'questionResponse:', this.questionResponse);
        // Setup factory with correct control
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_common_models_control_constants__WEBPACK_IMPORTED_MODULE_3__["CONTROLS_MAP"][this.question.selectionType || this.type]);
        var viewContainerRef = this.controlHost.viewContainerRef;
        // Create control
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        // Hook all the I/O together
        componentRef.instance.question = this.question;
        componentRef.instance.isDisabled = this.isDisabled;
        componentRef.instance.questionResponse = this.questionResponse;
        componentRef.instance.displayDirection = this.displayDirection;
        componentRef.instance.questionResponseChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () { return _this.keepAlive; }))
            .subscribe(function (event) {
            // this.questionResponseChange.emit(event);
        });
    };
    ControlFactoryComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"])
    ], ControlFactoryComponent.prototype, "controlHost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models__WEBPACK_IMPORTED_MODULE_5__["IQuestion"])
    ], ControlFactoryComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ControlFactoryComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ControlFactoryComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ControlFactoryComponent.prototype, "displayDirection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlFactoryComponent.prototype, "questionResponse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlFactoryComponent.prototype, "questionResponseChange", void 0);
    ControlFactoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-factory',
            template: __webpack_require__(/*! raw-loader!./control-factory.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/control-factory/control-factory.component.html"),
            styles: [__webpack_require__(/*! ./control-factory.component.css */ "../qa-forms/src/app/control-factory/control-factory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ControlFactoryComponent);
    return ControlFactoryComponent;
}());



/***/ }),

/***/ "../qa-forms/src/app/control-factory/control-host.directive.ts":
/*!*********************************************************************!*\
  !*** ../qa-forms/src/app/control-factory/control-host.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ControlHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlHostDirective", function() { return ControlHostDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ControlHostDirective = /** @class */ (function () {
    function ControlHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ControlHostDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    ControlHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appControlHost]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ControlHostDirective);
    return ControlHostDirective;
}());



/***/ }),

/***/ "../qa-forms/src/app/controls/check-box/check-box.component.ts":
/*!*********************************************************************!*\
  !*** ../qa-forms/src/app/controls/check-box/check-box.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic-control/generic-control.component */ "../qa-forms/src/app/controls/generic-control/generic-control.component.ts");



var CheckBoxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckBoxComponent, _super);
    function CheckBoxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     *This function is used to extract from the checkboxes whether they are checked or not, if they are checked then their corresponding entry will be added to the evaluation form,
     *when the box is unchecked then it will remove the data from the array. The function will emit the value upon every change.
     *
     * @param {MatCheckboxChange} { checked, source: { value } }
     * @memberof ResponsesComponent
     */
    CheckBoxComponent.prototype.setCheckResponse = function (_a) {
        var checked = _a.checked, value = _a.source.value;
        if (checked) {
            this.questionResponse.responseValues.push(value);
        }
        else {
            this.questionResponse.responseValues = this.questionResponse.responseValues.filter(function (v) { return v !== value; });
        }
        this.announceChange();
    };
    CheckBoxComponent.prototype.matchesValue = function (option, responseValues) {
        return responseValues.includes(option);
    };
    CheckBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-box',
            template: __webpack_require__(/*! raw-loader!./check-box.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/check-box/check-box.component.html")
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}(_generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_2__["GenericControlComponent"]));



/***/ }),

/***/ "../qa-forms/src/app/controls/generic-control/generic-control.component.css":
/*!**********************************************************************************!*\
  !*** ../qa-forms/src/app/controls/generic-control/generic-control.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1mb3Jtcy9zcmMvYXBwL2NvbnRyb2xzL2dlbmVyaWMtY29udHJvbC9nZW5lcmljLWNvbnRyb2wuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../qa-forms/src/app/controls/generic-control/generic-control.component.ts":
/*!*********************************************************************************!*\
  !*** ../qa-forms/src/app/controls/generic-control/generic-control.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GenericControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericControlComponent", function() { return GenericControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/models */ "../qa-forms/src/app/_common/models/index.ts");



var GenericControlComponent = /** @class */ (function () {
    function GenericControlComponent() {
        this.questionResponseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GenericControlComponent.prototype.announceChange = function () {
        // this.questionResponseChange.emit(this.questionResponse);
    };
    GenericControlComponent.prototype.setComment = function (comment) {
        if (!!comment) {
            if (!this.questionResponse.comment) {
                this.questionResponse.comment = { id: null, content: comment };
            }
            else {
                this.questionResponse.comment.content = comment;
            }
            this.announceChange();
        }
        if (!comment && !!this.questionResponse.comment) {
            this.questionResponse.comment.content = comment;
            this.announceChange();
        }
    };
    GenericControlComponent.prototype.setResponseValues = function (value) {
        this.questionResponse.responseValues = value;
        this.announceChange();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models__WEBPACK_IMPORTED_MODULE_2__["IQuestion"])
    ], GenericControlComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericControlComponent.prototype, "questionResponse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], GenericControlComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GenericControlComponent.prototype, "displayDirection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenericControlComponent.prototype, "questionResponseChange", void 0);
    GenericControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generic-control',
            template: __webpack_require__(/*! raw-loader!./generic-control.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/generic-control/generic-control.component.html"),
            styles: [__webpack_require__(/*! ./generic-control.component.css */ "../qa-forms/src/app/controls/generic-control/generic-control.component.css")]
        })
    ], GenericControlComponent);
    return GenericControlComponent;
}());



/***/ }),

/***/ "../qa-forms/src/app/controls/index.ts":
/*!*********************************************!*\
  !*** ../qa-forms/src/app/controls/index.ts ***!
  \*********************************************/
/*! exports provided: RadioButtonComponent, CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button/radio-button.component */ "../qa-forms/src/app/controls/radio-button/radio-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]; });

/* harmony import */ var _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-box/check-box.component */ "../qa-forms/src/app/controls/check-box/check-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__["CheckBoxComponent"]; });





/***/ }),

/***/ "../qa-forms/src/app/controls/radio-button/radio-button.component.ts":
/*!***************************************************************************!*\
  !*** ../qa-forms/src/app/controls/radio-button/radio-button.component.ts ***!
  \***************************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic-control/generic-control.component */ "../qa-forms/src/app/controls/generic-control/generic-control.component.ts");



var RadioButtonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioButtonComponent, _super);
    function RadioButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioButtonComponent.prototype.ngOnInit = function () {
    };
    RadioButtonComponent.prototype.setRadioResponse = function (response) {
        this.questionResponse.responseValues = [response];
        this.announceChange();
    };
    RadioButtonComponent.prototype.matchesValue = function (value) {
        return !!this.questionResponse.responseValues && (this.questionResponse.responseValues[0] === value);
    };
    RadioButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-button',
            template: __webpack_require__(/*! raw-loader!./radio-button.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/controls/radio-button/radio-button.component.html")
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(_generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_2__["GenericControlComponent"]));



/***/ }),

/***/ "../qa-forms/src/app/form/form.component.css":
/*!***************************************************!*\
  !*** ../qa-forms/src/app/form/form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-wrapper {\n    margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWZvcm1zL3NyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoicHJvamVjdHMvcWEtZm9ybXMvc3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "../qa-forms/src/app/form/form.component.ts":
/*!**************************************************!*\
  !*** ../qa-forms/src/app/form/form.component.ts ***!
  \**************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.onCategoryChange = function (categoryResponse, index) {
        this.model.categoryResponses[index] = categoryResponse;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "modelChange", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qa-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "../../node_modules/raw-loader/index.js!../qa-forms/src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "../qa-forms/src/app/form/form.component.css")]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../qa-forms/src/app/qa-forms.module.ts":
/*!**********************************************!*\
  !*** ../qa-forms/src/app/qa-forms.module.ts ***!
  \**********************************************/
/*! exports provided: QaFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaFormsModule", function() { return QaFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "../qa-forms/src/app/form/form.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "../qa-forms/src/app/category/category.component.ts");
/* harmony import */ var _control_factory_control_factory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-factory/control-factory.component */ "../qa-forms/src/app/control-factory/control-factory.component.ts");
/* harmony import */ var projects_qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");
/* harmony import */ var _control_factory_control_host_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-factory/control-host.directive */ "../qa-forms/src/app/control-factory/control-host.directive.ts");
/* harmony import */ var _common_models_control_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_common/models/control.constants */ "../qa-forms/src/app/_common/models/control.constants.ts");
/* harmony import */ var _controls_generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/generic-control/generic-control.component */ "../qa-forms/src/app/controls/generic-control/generic-control.component.ts");









var QaFormsModule = /** @class */ (function () {
    function QaFormsModule() {
    }
    QaFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
                _control_factory_control_factory_component__WEBPACK_IMPORTED_MODULE_4__["ControlFactoryComponent"],
                _control_factory_control_host_directive__WEBPACK_IMPORTED_MODULE_6__["ControlHostDirective"]
            ], _common_models_control_constants__WEBPACK_IMPORTED_MODULE_7__["CONTROLS"], [
                _controls_generic_control_generic_control_component__WEBPACK_IMPORTED_MODULE_8__["GenericControlComponent"]
            ]),
            imports: [
                projects_qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_5__["QaCommonModule"]
            ],
            exports: [
                _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]
            ],
            entryComponents: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_common_models_control_constants__WEBPACK_IMPORTED_MODULE_7__["CONTROLS"])
        })
    ], QaFormsModule);
    return QaFormsModule;
}());



/***/ }),

/***/ "./src/app/_common/models/portal-constants.ts":
/*!****************************************************!*\
  !*** ./src/app/_common/models/portal-constants.ts ***!
  \****************************************************/
/*! exports provided: TRAINEE_ROLE, TRAINER_ROLE, TRAINING_ADMIN_ROLE, SUPER_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAINEE_ROLE", function() { return TRAINEE_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAINER_ROLE", function() { return TRAINER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAINING_ADMIN_ROLE", function() { return TRAINING_ADMIN_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPER_USER", function() { return SUPER_USER; });
// Roles for application
var TRAINEE_ROLE = 'training-user';
var TRAINER_ROLE = 'training-manager';
var TRAINING_ADMIN_ROLE = 'training-admin';
var SUPER_USER = 'super-user';


/***/ })

}]);
//# sourceMappingURL=course-feedback-src-app-qa-feedback-module-es5.js.map