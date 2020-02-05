(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qa-cv-src-app-qa-cv-module"],{

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-card-base/cv-card-base.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-card-base/cv-card-base.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card-base mat-elevation-z2\">\n  <mat-drawer-container class=\"card-base-content-container\" autosize>\n    <mat-drawer #drawer class=\"card-base-drawer\" mode=\"side\" position=\"end\">\n      <div class=\"card-base-drawer-content\">\n        <div class=\"top\">\n          <div class=\"drawer-title\">\n            <h4>\n              Comments\n            </h4>\n          </div>\n          <button mat-icon-button (click)=\"drawer.close()\" title=\"Hide comments\">\n            <mat-icon>chevron_right</mat-icon>\n          </button>\n        </div>\n        <div #commentContainer class=\"middle\" data-simplebar>\n          <div class=\"comment-bubble\" *ngFor=\"let comment of feedback\">\n\n            <div class=\"comment-body\">\n              {{comment.comment}}\n            </div>\n            <div class=\"comment-details mat-caption\">\n              <div class=\"reviewer\">\n                {{comment.reviewer}}\n              </div>\n              <div class=\"date\" [title]=\"getFullDate(comment.date)\">\n                {{getFormattedDate(comment.date)}}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"!feedback || feedback.length == 0\" class=\"no-comments-text\">\n            No comments yet\n          </div>\n        </div>\n\n        <div class=\"bottom\" *ngIf=\"canComment\">\n          <form class=\"comment-form\" (ngSubmit)=\"addFeedbackItem()\">\n            <mat-form-field class=\"comment-form-field\" class=\"comment-field\"\n                            [hideRequiredMarker]=\"options.value.hideRequired\" floatLabel=\"never\">\n              <input [formControl]=\"commentInput\" type=\"text\" matInput placeholder=\"Write a comment\" autocomplete=\"off\">\n              <mat-icon matSuffix (click)=\"addFeedbackItem()\">send\n              </mat-icon>\n            </mat-form-field>\n          </form>\n        </div>\n      </div>\n    </mat-drawer>\n    <mat-card-header>\n        <mat-card-title>{{cardTitle || ''}}</mat-card-title>\n        <button mat-icon-button *ngIf=\"showOpenButton && !drawer.opened\" (click)=\"drawer.open()\" title=\"Show comments\">\n          <mat-icon>feedback</mat-icon>\n        </button>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"card-base-content-wrapper\">\n        <ng-content></ng-content>\n      </div>\n    </mat-card-content>\n  </mat-drawer-container>\n</mat-card>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-hobbies/cv-hobbies.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-hobbies/cv-hobbies.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"outline\" class=\"example-full-width\">\n        <textarea matInput rows=8\n                  maxlength=\"750\"\n                  placeholder=\"Maximum of 750 characters\"\n                  [ngModel]=\"hobbies?.hobbiesDetails\"\n                  (ngModelChange)=\"onInputChange($event)\"\n                  [disabled]=\"isDisabled()\"></textarea>\n</mat-form-field>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-profile/cv-profile.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-profile/cv-profile.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field appearance=\"outline\" class=\"example-full-width\">\n  <textarea matInput rows=\"14\"\n            maxlength=\"1800\"\n            placeholder=\"Maximum of 1800 characters\"\n            [ngModel]=\"profile?.profileDetails\"\n            (ngModelChange)=\"onInputChange($event)\"\n            [disabled]=\"isDisabled()\"></textarea>\n</mat-form-field>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-qualis/cv-qualification.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-qualis/cv-qualification.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table class=\"qa-table w-100\" [dataSource]=\"qualificationsTableDataSource\">\n\n    <!-- COLUMNS -->\n    <ng-container matColumnDef=\"qualificationDetails\">\n        <th mat-header-cell *matHeaderCellDef>Qualification</th>\n        <td mat-cell *matCellDef=\"let element\">\n            <input matInput [ngModel]=\"element.qualificationDetails\" placeholder=\"Qualification Details up to 80 characters\"\n                   maxlength=\"80\"\n                (ngModelChange)=\"onQualificationDetailsInputChange(element, $event)\" [readonly]=\"isDisabled()\">\n        </td>\n    </ng-container>\n    <ng-container matColumnDef=\"remove\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index;\" class=\"icon-cell\">\n            <button mat-icon-button (click)=\"onRemoveQualificationClicked(i)\" matTooltip=\"Remove\" [disabled]=\"isDisabled()\"\n                matTooltipPosition=\"left\" aria-label=\"Remove this qualification\">\n                <mat-icon>clear</mat-icon>\n            </button></td>\n    </ng-container>\n    <ng-container matColumnDef=\"feedback\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"icon-cell\">\n            <button mat-icon-button (click)=\"onFeedbackButtonClicked(i, element)\" matTooltip=\"Feedback\"\n                matTooltipPosition=\"left\" aria-label=\"Show feedback for this qualification\">\n                <mat-icon>feedback</mat-icon>\n            </button></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"addNew\">\n        <td mat-footer-cell *matFooterCellDef colspan=\"100%\">\n            <button mat-button color=\"primary\" class=\"w-100\" [disabled]=\"isDisabled() || qualificationsTableDataSource.data.length === 3\"\n                    matTooltip=\"Maximum of 3 qualifications\"\n                (click)=\"onNewQualiClick()\">\n                <mat-icon>add</mat-icon>\n                Add new qualification\n            </button>\n        </td>\n    </ng-container>\n    <tr mat-row *matRowDef=\"let row; columns: ['qualificationDetails', 'remove', 'feedback']; let i = index;\">\n    </tr>\n    <tr mat-footer-row *matFooterRowDef=\"['addNew']\"></tr>\n</table>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-search/cv-search.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-search/cv-search.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Administrator - CV Search\n</div>\n\n<app-search-bar  placeholder=\"Search by name\" [backdropRef]=\"backdrop\" (search)=\"performSearch()\" [(value)]=\"inputName\"\n  (filterApply)=\"performSearch()\" (filterReset)=\"onClearButtonClicked()\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Cohort</mat-label>\n    <mat-select [(ngModel)]=\"selectedCohort\" placeholder=\"Filter by Cohort\">\n      <mat-option [value]=\"null\">All</mat-option>\n      <mat-option *ngFor=\"let cohort of filterOptions?.cohort\" [value]=\"cohort\">\n        {{cohort}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Technology</mat-label>\n    <mat-select [(ngModel)]=\"selectedTech\" placeholder=\"Filter by Technology\">\n      <mat-option [value]=\"null\">All</mat-option>\n      <mat-option *ngFor=\"let tech of filterOptions?.technology\" [value]=\"tech\">\n        {{tech}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Status</mat-label>\n    <mat-select [(ngModel)]=\"selectedStatus\" placeholder=\"Filter by Status\">\n      <mat-option [value]=\"null\">All</mat-option>\n      <mat-option *ngFor=\"let stat of filterOptions?.cvStatus\" [value]=\"stat\">\n        {{stat}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</app-search-bar>\n\n<mat-card class=\"search-results-card\" *ngIf=\"!isLoading\">\n  <mat-card-content>\n    <div>\n      <table mat-table [dataSource]=\"searchResultsDataSource\">\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Name</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.fullName || '-'}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"cohort\">\n          <th mat-header-cell *matHeaderCellDef>Cohort</th>\n          <td mat-cell *matCellDef=\"let element\">{{element.cohort || '-'}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef> Status</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.status || '-'}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"clients\">\n          <th mat-header-cell *matHeaderCellDef> Clients</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.clients || '-'}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr class=\"data-row\" mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onResultRowClicked(row)\">\n        </tr>\n      </table>\n      <div class=\"spinner-container\">\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n      </div>\n    </div>\n  </mat-card-content>\n  <!-- \n  <mat-paginator [pageSizeOptions]=\"[5,10,20]\" showFirstLastButtons></mat-paginator> -->\n</mat-card>\n\n<!-- <mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator> -->\n<!-- \n<div class=\"page-backdrop\" [class.visible]=\"filterExpanded\" (click)=\"filterExpanded = false;\">\n</div> -->\n<app-search-bar-backdrop #backdrop></app-search-bar-backdrop>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-skills/cv-skills.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-skills/cv-skills.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"skills-chip-list\" *ngFor=\"let skillCat of skillCategories\">\n  <mat-chip-list #chipList [attr.aria-label]=\"skillCat.label\">\n    <ng-template [ngIf]=\"skills\">\n      <mat-chip color=\"primary\" *ngFor=\"let skill of skills[skillCat.key]\">\n        {{skill}}\n      </mat-chip>\n      <input [placeholder]=\"skillCat.label\" [matChipInputFor]=\"chipList\" readonly>\n    </ng-template>\n  </mat-chip-list>\n</mat-form-field>\n\n<mat-form-field class=\"skills-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Other Skills\">\n    <mat-chip color=\"primary\" selected *ngFor=\"let others of skills?.other\" [selectable]=\"selectable\"\n      [removable]=\"!isDisabled()\" (removed)=\"remove(others)\">\n      {{others}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"Other skills\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" [disabled]=\"isDisabled()\">\n  </mat-chip-list>\n</mat-form-field>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-work-exp/cv-work-exp.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/cv-work-exp/cv-work-exp.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table class=\"qa-table w-100\" [dataSource]=\"workExperienceTableDataSource\" multiTemplateDataRows>\n\n  <!-- COLUMNS -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Job Title</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <div class=\"job-title-container\">\n        <div class=\"job-title-text\">{{element?.jobTitle || 'Click to expand'}}</div>\n        <div class=\"date-range-text\">{{getFormattedDateRange(element)}}</div>\n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"remove\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element; let i = dataIndex\" class=\"icon-cell\">\n      <button mat-icon-button (click)=\"onRemoveWorkExperienceClicked(i)\" matTooltip=\"Remove\" matTooltipPosition=\"left\"\n              [disabled]=\"isDisabled()\" aria-label=\"Remove this work experience\">\n        <mat-icon>clear</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"feedback\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element; let i = dataIndex\" class=\"icon-cell\">\n      <button mat-icon-button (click)=\"onFeedbackButtonClicked($event, i, element)\" matTooltip=\"Feedback\"\n              matTooltipPosition=\"left\" aria-label=\"Show feedback for this work experience\">\n        <mat-icon>feedback</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n\n  <!-- EXPANDER ROW COLUMN -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" colspan=\"100%\">\n      <div class=\"row-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"job-title-container\">\n          <mat-form-field class=\"job-title-field\" appearance=\"outline\">\n            <mat-label>Job Title</mat-label>\n            <input matInput [ngModel]=\"element.jobTitle\" (ngModelChange)=\"element.jobTitle = $event; announceChange();\"\n                   [readonly]=\"isDisabled()\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"date-range-container\">\n          <mat-form-field class=\"date-left\" appearance=\"outline\">\n            <mat-label>Start</mat-label>\n            <input matInput [matDatepicker]=\"picker1\" [ngModel]=\"element.start\"\n                   (ngModelChange)=\"element.start = $event; announceChange();\" [readonly]=\"isDisabled()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"date-right\" appearance=\"outline\">\n            <mat-label>End</mat-label>\n            <input matInput [matDatepicker]=\"picker2\" [ngModel]=\"element.end\"\n                   (ngModelChange)=\"element.end = $event; announceChange();\" [readonly]=\"isDisabled()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n          </mat-form-field>\n        </div>\n\n        <div class=\"description-container\">\n          <mat-form-field class=\"description-field\" appearance=\"outline\">\n            <mat-label>Description</mat-label>\n            <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\"\n                      cdkAutosizeMaxRows=\"5\" [ngModel]=\"element.workExperienceDetails\"\n                      (ngModelChange)=\"element.workExperienceDetails = $event; announceChange();\"\n                      maxlength=\"400\"\n                      placeholder=\"Details of work experience up to maximum of 400 characters\"\n                      [readonly]=\"isDisabled()\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <!-- FOOTER COLUMN -->\n  <ng-container matColumnDef=\"addNew\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"100%\">\n      <button mat-button color=\"primary\" class=\"w-100\"\n              matTooltip=\"Maximum of 3 work experiences\"\n              (click)=\"onNewWorkExperienceClick()\"\n              [disabled]=\"isDisabled() || workExperienceTableDataSource.data.length === 3\">\n        <mat-icon>add</mat-icon>\n        Add work experience\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr> -->\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns; let i = index;\" class=\"selectable\"\n      [class.expanded]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']; let i = index;\" class=\"expander-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['addNew']\"></tr>\n</table>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Are you Sure?</h1>\n<div mat-dialog-content>\n  You won't be able to make any changes while your trainer is reviewing your CV.\n</div>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"onNoClick()\" cdkFocusInitial>Cancel</button>\n  <button mat-button color=\"warn\" (click)=\"onSubmit()\">Submit</button>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/view-cv/view-cv.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/qa-admin/Documents/qa-portal-deployment/frontend/qa-portal-angular/node_modules/raw-loader!../qa-cv/src/app/view-cv/view-cv.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"qa-app-title\">\n  Trainee - Maintain CV\n</div>\n\n<div style=\"display: flex; justify-content: center;\">\n  <mat-spinner [diameter]=\"70\" *ngIf=\"loadingData\"></mat-spinner>\n</div>\n\n<div *ngIf=\"!loadingData\">\n  <div\n    style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-size: 18px;\">\n    <div style=\"color: #004050\">{{cvData?.fullName}}</div>\n    <div style=\"margin-left: auto; color: #004050\"><b>CV Status:</b> {{cvData?.status}}</div>\n  </div>\n\n  <div class=\"cv-content-wrapper\" (onSubmit)=\"onCvSubmitForReview($event)\">\n    <section>\n      <app-cv-card-base cardTitle=\"Personal Profile\" [canComment]=\"canComment\"\n        [feedback]=\"cvData?.profile?.profileFeedback\">\n        <app-cv-profile [profile]=\"cvData?.profile\" (profileChange)=\"cvData.profile = $event\" [canEdit]=\"canEdit\">\n        </app-cv-profile>\n      </app-cv-card-base>\n    </section>\n\n    <section>\n      <app-cv-card-base cardTitle=\"Hobbies and Interests\" [canComment]=\"canComment\"\n        [feedback]=\"cvData?.hobbies?.hobbiesFeedback\">\n        <app-cv-hobbies [hobbies]=\"cvData?.hobbies\" (hobbiesChange)=\"cvData.hobbies = $event\" [canEdit]=\"canEdit\">\n        </app-cv-hobbies>\n      </app-cv-card-base>\n    </section>\n\n    <section>\n      <app-cv-card-base #qualCard [feedback]=\"qualificationFeedback\" [canComment]=\"canComment\"\n        (feedbackChange)=\"onQualificationFeedbackChange($event)\" [showOpenButton]=\"false\" cardTitle=\"Qualifications\">\n        <app-cv-qualis [qualifications]=\"cvData?.allQualifications\"\n          (qualificationsChange)=\"cvData.allQualifications = $event\"\n          (feedbackClick)=\"onQualificationFeedbackClick($event, qualCard)\" [canEdit]=\"canEdit\">\n        </app-cv-qualis>\n      </app-cv-card-base>\n    </section>\n\n    <section>\n      <app-cv-card-base #expCard [feedback]=\"workExperienceFeedback\" [canComment]=\"canComment\"\n        (feedbackChange)=\"onWorkExperienceFeedbackChange($event)\" [showOpenButton]=\"false\" cardTitle=\"Work Experience\">\n        <app-cv-work-exp [experiences]=\"cvData?.allWorkExperience\" \n          (experiencesChange)=\"cvData.allWorkExperience = $event\"\n          (feedbackClick)=\"onWorkExperienceFeedbackClick($event, expCard)\" [canEdit]=\"canEdit\">\n        </app-cv-work-exp>\n      </app-cv-card-base>\n    </section>\n\n    <section>\n      <app-cv-card-base [showOpenButton]=\"false\" cardTitle=\"Skills\">\n        <app-cv-skills [skills]=\"cvData?.allSkills[0]\" (skillsChange)=\"cvData.allSkills[0] = $event\"\n          [canEdit]=\"canEdit\">\n        </app-cv-skills>\n      </app-cv-card-base>\n    </section>\n\n\n    <div class=\"button-row\">\n      <div *ngIf=\"isTraineeView\"\n        style=\"width: 50%; display:flex; flex-direction: row; justify-content: left; align-items: center\">\n        <button *ngIf=\"!canComment && cvData.status !== 'Approved'\" mat-flat-button color=\"primary\" (click)=\"onCvSave()\"\n          title=\"Save all Changes\" [disabled]=\"!cvData || cvData.status==='For Review'\">Save\n        </button>\n        <div *ngIf=\"!canComment\" style=\"margin-right: 20px\"></div>\n        <button *ngIf=\"!canComment && allDetailsEntered() && cvData.status !== 'Approved'\" mat-flat-button\n          color=\"primary\" (click)=\"openDialog()\" title=\"Submit for Review\"\n          [disabled]=\"!cvData || cvData.status==='For Review'\">Submit\n        </button>\n\n\n        <button *ngIf=\"cvData.status === 'Approved' && isTraineeView\" mat-flat-button color=\"primary\"\n          (click)=\"onInitialiseNewCv()\" title=\"Create New Cv\">\n          New CV\n        </button>\n        <mat-checkbox *ngIf=\"cvData.status === 'Approved' && isTraineeView\" style=\"margin-left: 15px;\"\n          aria-label=\"Use current CV as template\" label=\"Use current CV as template\" labelPosition=\"after\"\n          color=\"primary\" [ngModel]=\"useExistingCvAsTemplate\" [value]=\"useExistingCvAsTemplate\"\n          (change)=\"onUseExistingCvAsTemplateChanged()\">Use current CV as template\n        </mat-checkbox>\n      </div>\n\n      <div *ngIf=\"!isTraineeView\"\n        style=\"width: 50%; display:flex; flex-direction: row; justify-content: left; align-items: center\">\n        <button *ngIf=\"canComment && cvData.status !== 'Approved'\" mat-flat-button color=\"primary\"\n          (click)=\"onCvApproved()\" title=\"Approve Cv\"\n          [disabled]=\"!cvData || cvData.status==='In Progress' || cvData.status === 'Failed Review' || !cvData.status\">\n          Approve\n        </button>\n        <div *ngIf=\"canComment\" style=\"margin-right: 20px\"></div>\n        <button *ngIf=\"canComment  && cvData.status !== 'Approved'\" mat-flat-button color=\"primary\"\n          (click)=\"onCvFailedReview()\" title=\"Fail Cv\"\n          [disabled]=\"!cvData || cvData.status==='In Progress' || !cvData.status || cvData.status === 'Failed Review'\">\n          Fail\n        </button>\n      </div>\n\n      <button style=\"margin-left: auto;\" mat-flat-button color=\"primary\" (click)=\"onDisplayPdf()\" title=\"Open PDF\"\n        [disabled]=\"!cvData || !allDetailsEntered()\">View PDF\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../qa-cv/src/app/_common/models/cv.constants.ts":
/*!*******************************************************!*\
  !*** ../qa-cv/src/app/_common/models/cv.constants.ts ***!
  \*******************************************************/
/*! exports provided: ADMIN_CV_SEARCH, APPLICATION_PDF_CONTENT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_CV_SEARCH", function() { return ADMIN_CV_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_PDF_CONTENT_TYPE", function() { return APPLICATION_PDF_CONTENT_TYPE; });
const ADMIN_CV_SEARCH = 'qa/portal/training/cv/admin/search';
const APPLICATION_PDF_CONTENT_TYPE = 'application/pdf';


/***/ }),

/***/ "../qa-cv/src/app/_common/models/qac-cv-db.model.ts":
/*!**********************************************************!*\
  !*** ../qa-cv/src/app/_common/models/qac-cv-db.model.ts ***!
  \**********************************************************/
/*! exports provided: DEFAULT_CV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CV", function() { return DEFAULT_CV; });
const DEFAULT_CV = {
    versionNumber: 1,
    profile: {
        profileDetails: '',
        profileFeedback: []
    },
    allSkills: [{
            programmingLanguages: [],
            ides: [],
            operatingSystems: [],
            devops: [],
            databases: [],
            platforms: [],
            other: []
        }],
    allQualifications: [],
    allWorkExperience: [],
    hobbies: {
        hobbiesDetails: '',
        hobbiesFeedback: []
    }
};


/***/ }),

/***/ "../qa-cv/src/app/cv-card-base/cv-card-base.component.scss":
/*!*****************************************************************!*\
  !*** ../qa-cv/src/app/cv-card-base/cv-card-base.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9xYS1jdi9zcmMvYXBwL2N2LWNhcmQtYmFzZS9jdi1jYXJkLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../qa-cv/src/app/cv-card-base/cv-card-base.component.ts":
/*!***************************************************************!*\
  !*** ../qa-cv/src/app/cv-card-base/cv-card-base.component.ts ***!
  \***************************************************************/
/*! exports provided: CvCardBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvCardBaseComponent", function() { return CvCardBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keycloak-angular */ "../../node_modules/keycloak-angular/fesm2015/keycloak-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let CvCardBaseComponent = class CvCardBaseComponent {
    constructor(keycloak, fb) {
        this.keycloak = keycloak;
        this.feedbackChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showOpenButton = true;
        this.commentInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.options = fb.group({
            hideRequired: true,
        });
    }
    getFormattedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).fromNow();
    }
    getFullDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    scrollCommentsToBottom() {
        const { SimpleBar } = this.commentContainer.nativeElement;
        SimpleBar.getScrollElement().scrollTo(0, SimpleBar.contentEl.clientHeight);
    }
    addFeedbackItem() {
        if (this.commentInput.valid) {
            const fb = {
                comment: this.commentInput.value,
                date: moment__WEBPACK_IMPORTED_MODULE_5__().format(),
                reviewer: this.keycloak.getUsername()
            };
            this.feedback.push(fb);
            this.feedbackChange.emit(this.feedback);
            this.commentInput.reset();
            this.commentInput.markAsUntouched();
            setTimeout(() => {
                this.scrollCommentsToBottom();
            }, 0);
        }
    }
};
CvCardBaseComponent.ctorParameters = () => [
    { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CvCardBaseComponent.prototype, "cardTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvCardBaseComponent.prototype, "canComment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvCardBaseComponent.prototype, "canEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CvCardBaseComponent.prototype, "feedback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvCardBaseComponent.prototype, "feedbackChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvCardBaseComponent.prototype, "showOpenButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commentContainer', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CvCardBaseComponent.prototype, "commentContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
], CvCardBaseComponent.prototype, "drawer", void 0);
CvCardBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-card-base',
        template: __webpack_require__(/*! raw-loader!./cv-card-base.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-card-base/cv-card-base.component.html"),
        styles: [__webpack_require__(/*! ./cv-card-base.component.scss */ "../qa-cv/src/app/cv-card-base/cv-card-base.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], CvCardBaseComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-hobbies/cv-hobbies.component.css":
/*!************************************************************!*\
  !*** ../qa-cv/src/app/cv-hobbies/cv-hobbies.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWN2L3NyYy9hcHAvY3YtaG9iYmllcy9jdi1ob2JiaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJwcm9qZWN0cy9xYS1jdi9zcmMvYXBwL2N2LWhvYmJpZXMvY3YtaG9iYmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "../qa-cv/src/app/cv-hobbies/cv-hobbies.component.ts":
/*!***********************************************************!*\
  !*** ../qa-cv/src/app/cv-hobbies/cv-hobbies.component.ts ***!
  \***********************************************************/
/*! exports provided: CvHobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvHobbiesComponent", function() { return CvHobbiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let CvHobbiesComponent = class CvHobbiesComponent {
    constructor() {
        this.hobbiesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onInputChange(data) {
        this.hobbies.hobbiesDetails = data;
        this.hobbiesChange.emit(this.hobbies);
    }
    isDisabled() {
        return !this.canEdit;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvHobbiesComponent.prototype, "hobbies", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvHobbiesComponent.prototype, "hobbiesChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvHobbiesComponent.prototype, "canEdit", void 0);
CvHobbiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-hobbies',
        template: __webpack_require__(/*! raw-loader!./cv-hobbies.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-hobbies/cv-hobbies.component.html"),
        styles: [__webpack_require__(/*! ./cv-hobbies.component.css */ "../qa-cv/src/app/cv-hobbies/cv-hobbies.component.css")]
    })
], CvHobbiesComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-profile/cv-profile.component.css":
/*!************************************************************!*\
  !*** ../qa-cv/src/app/cv-profile/cv-profile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWN2L3NyYy9hcHAvY3YtcHJvZmlsZS9jdi1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJwcm9qZWN0cy9xYS1jdi9zcmMvYXBwL2N2LXByb2ZpbGUvY3YtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "../qa-cv/src/app/cv-profile/cv-profile.component.ts":
/*!***********************************************************!*\
  !*** ../qa-cv/src/app/cv-profile/cv-profile.component.ts ***!
  \***********************************************************/
/*! exports provided: CvProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvProfileComponent", function() { return CvProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let CvProfileComponent = class CvProfileComponent {
    constructor() {
        this.profileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onInputChange(data) {
        this.profile.profileDetails = data;
        this.profileChange.emit(this.profile);
    }
    isDisabled() {
        return !this.canEdit;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvProfileComponent.prototype, "profile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvProfileComponent.prototype, "profileChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvProfileComponent.prototype, "canEdit", void 0);
CvProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-profile',
        template: __webpack_require__(/*! raw-loader!./cv-profile.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-profile/cv-profile.component.html"),
        styles: [__webpack_require__(/*! ./cv-profile.component.css */ "../qa-cv/src/app/cv-profile/cv-profile.component.css")]
    })
], CvProfileComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-qualis/cv-qualification.component.ts":
/*!****************************************************************!*\
  !*** ../qa-cv/src/app/cv-qualis/cv-qualification.component.ts ***!
  \****************************************************************/
/*! exports provided: CvQualificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvQualificationComponent", function() { return CvQualificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");



let CvQualificationComponent = class CvQualificationComponent {
    constructor() {
        this.qualificationsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.feedbackClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.qualificationsTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    set qualifications(qualis) {
        this.qualificationsTableDataSource.data = qualis;
    }
    get qualifications() {
        return this.qualificationsTableDataSource.data;
    }
    onNewQualiClick() {
        this.qualifications = [...this.qualifications,
            {
                qualificationDetails: '',
                qualificationFeedback: []
            }];
        this.qualificationsChange.emit(this.qualifications);
    }
    onFeedbackButtonClicked(index, qualifications) {
        this.feedbackClick.emit({ index, qualifications });
    }
    announceChange() {
        this.qualificationsChange.emit(this.qualifications);
    }
    onQualificationDetailsInputChange(qualification, value) {
        qualification.qualificationDetails = value;
        this.announceChange();
    }
    onRemoveQualificationClicked(index) {
        this.qualificationsTableDataSource.data.splice(index, 1); // setters don't get called by higher order functions so do it directly
        this.qualificationsTableDataSource._updateChangeSubscription(); // force the table to update (it doesn't auto detect splices)
        this.announceChange();
    }
    isDisabled() {
        return !this.canEdit;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], CvQualificationComponent.prototype, "qualifications", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvQualificationComponent.prototype, "qualificationsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvQualificationComponent.prototype, "feedbackClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvQualificationComponent.prototype, "canEdit", void 0);
CvQualificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-qualis',
        template: __webpack_require__(/*! raw-loader!./cv-qualification.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-qualis/cv-qualification.component.html")
    })
], CvQualificationComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-routing.module.ts":
/*!*********************************************!*\
  !*** ../qa-cv/src/app/cv-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvRoutingModule", function() { return CvRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-cv/view-cv.component */ "../qa-cv/src/app/view-cv/view-cv.component.ts");
/* harmony import */ var _cv_search_cv_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv-search/cv-search.component */ "../qa-cv/src/app/cv-search/cv-search.component.ts");
/* harmony import */ var _portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../portal-core/src/app/_common/guards/app-auth-guard */ "./src/app/_common/guards/app-auth-guard.ts");
/* harmony import */ var _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../portal-core/src/app/_common/models/portal-constants */ "./src/app/_common/models/portal-constants.ts");







const routes = [
    {
        path: 'trainee/current',
        component: _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_3__["ViewCvComponent"],
        canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AppAuthGuard"]],
        data: {
            roles: [
                _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_6__["TRAINEE_ROLE"]
            ]
        }
    },
    {
        path: 'admin/view/:id',
        component: _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_3__["ViewCvComponent"],
        canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AppAuthGuard"]],
        data: {
            roles: [
                _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_6__["TRAINING_ADMIN_ROLE"]
            ]
        }
    },
    {
        path: 'admin/search',
        component: _cv_search_cv_search_component__WEBPACK_IMPORTED_MODULE_4__["CvSearchComponent"],
        canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AppAuthGuard"]],
        data: {
            roles: [
                _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_6__["TRAINING_ADMIN_ROLE"]
            ]
        }
    },
    {
        path: 'admin/view/:id',
        component: _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_3__["ViewCvComponent"],
        canActivate: [_portal_core_src_app_common_guards_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AppAuthGuard"]],
        data: {
            roles: [
                _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_6__["TRAINING_ADMIN_ROLE"]
            ]
        }
    }
];
let CvRoutingModule = class CvRoutingModule {
};
CvRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CvRoutingModule);



/***/ }),

/***/ "../qa-cv/src/app/cv-search/cv-search.component.ts":
/*!*********************************************************!*\
  !*** ../qa-cv/src/app/cv-search/cv-search.component.ts ***!
  \*********************************************************/
/*! exports provided: CvSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvSearchComponent", function() { return CvSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_cv_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cv-search.service */ "../qa-cv/src/app/cv-search/services/cv-search.service.ts");
/* harmony import */ var _services_cv_search_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/cv-search-filter.service */ "../qa-cv/src/app/cv-search/services/cv-search-filter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");






let CvSearchComponent = class CvSearchComponent {
    constructor(cvSearchFilterService, cvSearchHistoryService, router, activatedRoute) {
        this.cvSearchFilterService = cvSearchFilterService;
        this.cvSearchHistoryService = cvSearchHistoryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // Results table data
        this.searchResultsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'cohort', 'status', 'clients'];
        // Misc
        this.isLoading = true;
    }
    ngOnInit() {
        const { name, cohort, tech, status } = this.activatedRoute.snapshot.queryParams;
        // populate search field sources with params (if found)
        this.inputName = name || '';
        this.selectedCohort = cohort || null;
        this.selectedTech = tech || null;
        this.selectedStatus = status || null;
        this.cvSearchFilterService.getFilters().subscribe(response => this.filterOptions = response); // Populate filters
        this.performSearch(); // search on page load
    }
    performSearch() {
        const name = this.inputName;
        const cohort = this.selectedCohort;
        const tech = this.selectedTech;
        const status = this.selectedStatus;
        this.isLoading = true;
        this.searchResultsDataSource.data = [];
        // Update URL params
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { name, cohort, tech, status } });
        this.cvSearchHistoryService.searchCVs({ name, cohort, tech, status }).subscribe(response => {
            this.searchResultsDataSource.data = response;
            this.isLoading = false;
        });
    }
    onResultRowClicked(row) {
        this.router.navigate(['qa', 'portal', 'training', 'cv', 'admin', 'view', row.id]);
    }
    onClearButtonClicked() {
        this.inputName = '';
        this.selectedCohort = null;
        this.selectedTech = null;
        this.selectedStatus = null;
    }
};
CvSearchComponent.ctorParameters = () => [
    { type: _services_cv_search_filter_service__WEBPACK_IMPORTED_MODULE_4__["CVSearchFilterService"] },
    { type: _services_cv_search_service__WEBPACK_IMPORTED_MODULE_3__["CVSearchHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CvSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-search',
        template: __webpack_require__(/*! raw-loader!./cv-search.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-search/cv-search.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cv_search_filter_service__WEBPACK_IMPORTED_MODULE_4__["CVSearchFilterService"],
        _services_cv_search_service__WEBPACK_IMPORTED_MODULE_3__["CVSearchHistoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], CvSearchComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-search/models/mock-filters.ts":
/*!*********************************************************!*\
  !*** ../qa-cv/src/app/cv-search/models/mock-filters.ts ***!
  \*********************************************************/
/*! exports provided: FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
const FILTERS = {
    technology: ["Java", "Scala", "Python"],
    cvStatus: ["In Progress", "For Review", "Failed Review", "Approved"],
    cohort: ["CI Intake 1", "CI Intake 2"]
};


/***/ }),

/***/ "../qa-cv/src/app/cv-search/services/cv-search-filter.service.ts":
/*!***********************************************************************!*\
  !*** ../qa-cv/src/app/cv-search/services/cv-search-filter.service.ts ***!
  \***********************************************************************/
/*! exports provided: CVSearchFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVSearchFilterService", function() { return CVSearchFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_mock_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/mock-filters */ "../qa-cv/src/app/cv-search/models/mock-filters.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");






let CVSearchFilterService = class CVSearchFilterService {
    constructor(qaHttp) {
        this.qaHttp = qaHttp;
        this.filterUrl = 'portal-application-api/referencedata'; // URL to web api
    }
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    getFiltersSearches() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_mock_filters__WEBPACK_IMPORTED_MODULE_3__["FILTERS"]);
    }
    /* GET filter dropdowns */
    getFilters() {
        return this.qaHttp.get(`${this.filterUrl}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFilters', {
            technology: [],
            cvStatus: [],
            cohort: []
        })));
    }
};
CVSearchFilterService.ctorParameters = () => [
    { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_5__["QaHttpService"] }
];
CVSearchFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_5__["QaHttpService"]])
], CVSearchFilterService);



/***/ }),

/***/ "../qa-cv/src/app/cv-search/services/cv-search.service.ts":
/*!****************************************************************!*\
  !*** ../qa-cv/src/app/cv-search/services/cv-search.service.ts ***!
  \****************************************************************/
/*! exports provided: CVSearchHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVSearchHistoryService", function() { return CVSearchHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");





let CVSearchHistoryService = class CVSearchHistoryService {
    constructor(qahttp) {
        this.qahttp = qahttp;
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /* GET cvs whose name contains search term */
    searchCVs(params) {
        return this.qahttp.get({ ref: 'CV_SEARCH' }, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchCVs', [])));
    }
};
CVSearchHistoryService.ctorParameters = () => [
    { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"] }
];
CVSearchHistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"]])
], CVSearchHistoryService);



/***/ }),

/***/ "../qa-cv/src/app/cv-skills/cv-skills.component.css":
/*!**********************************************************!*\
  !*** ../qa-cv/src/app/cv-skills/cv-skills.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills-chip-list {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3FhLWN2L3NyYy9hcHAvY3Ytc2tpbGxzL2N2LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InByb2plY3RzL3FhLWN2L3NyYy9hcHAvY3Ytc2tpbGxzL2N2LXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscy1jaGlwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "../qa-cv/src/app/cv-skills/cv-skills.component.ts":
/*!*********************************************************!*\
  !*** ../qa-cv/src/app/cv-skills/cv-skills.component.ts ***!
  \*********************************************************/
/*! exports provided: CvSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvSkillsComponent", function() { return CvSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm2015/keycodes.js");



let CvSkillsComponent = class CvSkillsComponent {
    constructor() {
        this.skillsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.skillCategories = [
            {
                key: 'programmingLanguages',
                label: 'Programming Languages'
            },
            {
                key: 'ides',
                label: 'IDEs'
            },
            {
                key: 'devops',
                label: 'Devops'
            },
            {
                key: 'databases',
                label: 'Databases'
            },
            {
                key: 'platforms',
                label: 'Platforms'
            },
            {
                key: 'operatingSystems',
                label: 'Operating Systems'
            }
        ];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.skills.other.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(others) {
        const index = this.skills.other.indexOf(others);
        if (index >= 0) {
            this.skills.other.splice(index, 1);
        }
    }
    ngOnInit() {
    }
    onInputChange(data) {
        this.skills.other = data;
        this.skillsChange.emit(this.skills);
    }
    isDisabled() {
        return !this.canEdit;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvSkillsComponent.prototype, "skills", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvSkillsComponent.prototype, "skillsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvSkillsComponent.prototype, "canEdit", void 0);
CvSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-skills',
        template: __webpack_require__(/*! raw-loader!./cv-skills.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-skills/cv-skills.component.html"),
        styles: [__webpack_require__(/*! ./cv-skills.component.css */ "../qa-cv/src/app/cv-skills/cv-skills.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CvSkillsComponent);



/***/ }),

/***/ "../qa-cv/src/app/cv-work-exp/cv-work-exp.component.ts":
/*!*************************************************************!*\
  !*** ../qa-cv/src/app/cv-work-exp/cv-work-exp.component.ts ***!
  \*************************************************************/
/*! exports provided: CvWorkExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvWorkExpComponent", function() { return CvWorkExpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





let CvWorkExpComponent = class CvWorkExpComponent {
    constructor() {
        this.experiencesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.feedbackClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.workExperienceTableDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['title', 'remove', 'feedback'];
    }
    set experiences(workExp) {
        this.workExperienceTableDataSource.data = workExp;
    }
    get experiences() {
        return this.workExperienceTableDataSource.data;
    }
    onNewWorkExperienceClick() {
        const lastExp = this.experiences[this.experiences.length - 1];
        if (!lastExp || lastExp.jobTitle || lastExp.end || lastExp.start || lastExp.workExperienceDetails) {
            const newExperience = {
                jobTitle: '',
                start: '',
                end: '',
                workExperienceDetails: '',
                workExperienceFeedback: []
            };
            this.experiences = [
                ...this.experiences, newExperience
            ];
            this.expandedElement = newExperience;
            this.experiencesChange.emit(this.experiences);
        }
    }
    onRemoveWorkExperienceClicked(index) {
        this.workExperienceTableDataSource.data.splice(index, 1); // setters don't get called by higher order functions so do it directly
        this.workExperienceTableDataSource._updateChangeSubscription(); // force the table to update (it doesn't auto detect splices)
        this.announceChange();
    }
    onFeedbackButtonClicked(event, index, experience) {
        event.stopPropagation(); // Prevent event bubbling to the row below it.
        this.expandedElement = experience;
        this.feedbackClick.emit({ index, experience });
    }
    isDisabled() {
        return !this.canEdit;
    }
    announceChange() {
        this.experiencesChange.emit(this.experiences);
    }
    getFormattedDateRange({ start, end }) {
        const dateFormat = 'MMM GGGG';
        const startMom = moment__WEBPACK_IMPORTED_MODULE_4__(start);
        const endMom = !!end ? moment__WEBPACK_IMPORTED_MODULE_4__(end) : null;
        if (startMom.isValid() || (!!endMom && endMom.isValid())) {
            const formattedStart = startMom.format(dateFormat);
            const formattedEnd = !!endMom ? endMom.format(dateFormat) : 'Present';
            return formattedStart + ' - ' + formattedEnd;
        }
        else {
            return '';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], CvWorkExpComponent.prototype, "experiences", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvWorkExpComponent.prototype, "experiencesChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CvWorkExpComponent.prototype, "feedbackClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CvWorkExpComponent.prototype, "canEdit", void 0);
CvWorkExpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cv-work-exp',
        template: __webpack_require__(/*! raw-loader!./cv-work-exp.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/cv-work-exp/cv-work-exp.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ]
    })
], CvWorkExpComponent);



/***/ }),

/***/ "../qa-cv/src/app/qa-cv.module.ts":
/*!****************************************!*\
  !*** ../qa-cv/src/app/qa-cv.module.ts ***!
  \****************************************/
/*! exports provided: QaCvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaCvModule", function() { return QaCvModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../qa-common/src/app/qa-common.module */ "../qa-common/src/app/qa-common.module.ts");
/* harmony import */ var _cv_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv-routing.module */ "../qa-cv/src/app/cv-routing.module.ts");
/* harmony import */ var _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-cv/view-cv.component */ "../qa-cv/src/app/view-cv/view-cv.component.ts");
/* harmony import */ var _cv_profile_cv_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cv-profile/cv-profile.component */ "../qa-cv/src/app/cv-profile/cv-profile.component.ts");
/* harmony import */ var _cv_work_exp_cv_work_exp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cv-work-exp/cv-work-exp.component */ "../qa-cv/src/app/cv-work-exp/cv-work-exp.component.ts");
/* harmony import */ var _cv_hobbies_cv_hobbies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cv-hobbies/cv-hobbies.component */ "../qa-cv/src/app/cv-hobbies/cv-hobbies.component.ts");
/* harmony import */ var _cv_qualis_cv_qualification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv-qualis/cv-qualification.component */ "../qa-cv/src/app/cv-qualis/cv-qualification.component.ts");
/* harmony import */ var _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cv-skills/cv-skills.component */ "../qa-cv/src/app/cv-skills/cv-skills.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _cv_search_services_cv_search_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cv-search/services/cv-search-filter.service */ "../qa-cv/src/app/cv-search/services/cv-search-filter.service.ts");
/* harmony import */ var _cv_search_cv_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cv-search/cv-search.component */ "../qa-cv/src/app/cv-search/cv-search.component.ts");
/* harmony import */ var _cv_card_base_cv_card_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cv-card-base/cv-card-base.component */ "../qa-cv/src/app/cv-card-base/cv-card-base.component.ts");
/* harmony import */ var _cv_search_services_cv_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cv-search/services/cv-search.service */ "../qa-cv/src/app/cv-search/services/cv-search.service.ts");
/* harmony import */ var _view_cv_submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-cv/submit-confirm-dialog/submit-confirm-dialog.component */ "../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.ts");
/* harmony import */ var _view_cv_services_view_cv_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-cv/services/view-cv.service */ "../qa-cv/src/app/view-cv/services/view-cv.service.ts");
/* harmony import */ var _view_cv_services_view_cv_state_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-cv/services/view-cv-state-manager.service */ "../qa-cv/src/app/view-cv/services/view-cv-state-manager.service.ts");
/* harmony import */ var _view_cv_services_view_cv_page_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-cv/services/view-cv-page-data.service */ "../qa-cv/src/app/view-cv/services/view-cv-page-data.service.ts");



















let QaCvModule = class QaCvModule {
};
QaCvModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _view_cv_view_cv_component__WEBPACK_IMPORTED_MODULE_4__["ViewCvComponent"],
            _cv_profile_cv_profile_component__WEBPACK_IMPORTED_MODULE_5__["CvProfileComponent"],
            _cv_work_exp_cv_work_exp_component__WEBPACK_IMPORTED_MODULE_6__["CvWorkExpComponent"],
            _cv_hobbies_cv_hobbies_component__WEBPACK_IMPORTED_MODULE_7__["CvHobbiesComponent"],
            _cv_qualis_cv_qualification_component__WEBPACK_IMPORTED_MODULE_8__["CvQualificationComponent"],
            _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_9__["CvSkillsComponent"],
            _cv_search_cv_search_component__WEBPACK_IMPORTED_MODULE_12__["CvSearchComponent"],
            _cv_card_base_cv_card_base_component__WEBPACK_IMPORTED_MODULE_13__["CvCardBaseComponent"],
            _view_cv_submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["SubmitConfirmDialogComponent"],
            _cv_card_base_cv_card_base_component__WEBPACK_IMPORTED_MODULE_13__["CvCardBaseComponent"]
        ],
        imports: [
            _qa_common_src_app_qa_common_module__WEBPACK_IMPORTED_MODULE_2__["QaCommonModule"],
            _cv_routing_module__WEBPACK_IMPORTED_MODULE_3__["CvRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]
        ],
        providers: [
            _cv_search_services_cv_search_service__WEBPACK_IMPORTED_MODULE_14__["CVSearchHistoryService"],
            _cv_search_services_cv_search_filter_service__WEBPACK_IMPORTED_MODULE_11__["CVSearchFilterService"],
            _view_cv_services_view_cv_service__WEBPACK_IMPORTED_MODULE_16__["ViewCvService"],
            _view_cv_services_view_cv_state_manager_service__WEBPACK_IMPORTED_MODULE_17__["ViewCvStateManagerService"],
            _view_cv_services_view_cv_page_data_service__WEBPACK_IMPORTED_MODULE_18__["ViewCvPageDataService"]
        ],
        entryComponents: [
            _view_cv_submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["SubmitConfirmDialogComponent"]
        ]
    })
], QaCvModule);



/***/ }),

/***/ "../qa-cv/src/app/view-cv/models/view-cv.constants.ts":
/*!************************************************************!*\
  !*** ../qa-cv/src/app/view-cv/models/view-cv.constants.ts ***!
  \************************************************************/
/*! exports provided: IN_PROGRESS_STATUS, FOR_REVIEW_STATUS, FAILED_REVIEW_STATUS, APPROVED_STATUS, ADMIN_USER_EDIT_STATES, TRAINING_USER_EDIT_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IN_PROGRESS_STATUS", function() { return IN_PROGRESS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_REVIEW_STATUS", function() { return FOR_REVIEW_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILED_REVIEW_STATUS", function() { return FAILED_REVIEW_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVED_STATUS", function() { return APPROVED_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_USER_EDIT_STATES", function() { return ADMIN_USER_EDIT_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAINING_USER_EDIT_STATES", function() { return TRAINING_USER_EDIT_STATES; });
const IN_PROGRESS_STATUS = 'In Progress';
const FOR_REVIEW_STATUS = 'For Review';
const FAILED_REVIEW_STATUS = 'Failed Review';
const APPROVED_STATUS = 'Approved';
const ADMIN_USER_EDIT_STATES = [
    FOR_REVIEW_STATUS
];
const TRAINING_USER_EDIT_STATES = [
    IN_PROGRESS_STATUS,
    FAILED_REVIEW_STATUS
];


/***/ }),

/***/ "../qa-cv/src/app/view-cv/services/view-cv-page-data.service.ts":
/*!**********************************************************************!*\
  !*** ../qa-cv/src/app/view-cv/services/view-cv-page-data.service.ts ***!
  \**********************************************************************/
/*! exports provided: ViewCvPageDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCvPageDataService", function() { return ViewCvPageDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_qac_cv_db_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/models/qac-cv-db.model */ "../qa-cv/src/app/_common/models/qac-cv-db.model.ts");
/* harmony import */ var _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/view-cv.constants */ "../qa-cv/src/app/view-cv/models/view-cv.constants.ts");




let ViewCvPageDataService = class ViewCvPageDataService {
    constructor() {
    }
    initialiseNewCv(cvData, useExistingCvAsTemplate) {
        const tempCv = cvData;
        const emptyCv = null;
        let newCv = null;
        if (!!useExistingCvAsTemplate) {
            newCv = Object.assign({}, _common_models_qac_cv_db_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CV"], cvData);
            newCv.id = null;
            newCv.versionNumber = null;
        }
        else {
            newCv = Object.assign({}, _common_models_qac_cv_db_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CV"], emptyCv);
            newCv.allSkills = tempCv.allSkills;
            newCv.fullName = tempCv.fullName;
        }
        newCv.status = _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__["IN_PROGRESS_STATUS"];
        return newCv;
    }
    populateCvUserDetails(cvData, userSkillsModel) {
        cvData.userName = userSkillsModel.userName;
        cvData.firstName = userSkillsModel.userFirstName;
        cvData.surname = userSkillsModel.userLastName;
        cvData.fullName = cvData.firstName + ' ' + cvData.surname;
        cvData.status = _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__["IN_PROGRESS_STATUS"];
    }
    populateCvSkills(cvData, userSkillsModel) {
        Object.keys(cvData.allSkills[0]).forEach((skillCategory) => {
            cvData.allSkills[0][skillCategory] = this.getSkillsArrayForTechnology(userSkillsModel.skills[skillCategory]);
        });
    }
    getSkillsArrayForTechnology(skills) {
        const skillsArr = [];
        if (!!skills) {
            skills.forEach(s => {
                skillsArr.push(s.technologyName);
            });
        }
        return skillsArr;
    }
};
ViewCvPageDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewCvPageDataService);



/***/ }),

/***/ "../qa-cv/src/app/view-cv/services/view-cv-state-manager.service.ts":
/*!**************************************************************************!*\
  !*** ../qa-cv/src/app/view-cv/services/view-cv-state-manager.service.ts ***!
  \**************************************************************************/
/*! exports provided: ViewCvStateManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCvStateManagerService", function() { return ViewCvStateManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../portal-core/src/app/_common/models/portal-constants */ "./src/app/_common/models/portal-constants.ts");
/* harmony import */ var _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/view-cv.constants */ "../qa-cv/src/app/view-cv/models/view-cv.constants.ts");




let ViewCvStateManagerService = class ViewCvStateManagerService {
    constructor() {
    }
    isPageEditable(activatedRoute, cvData) {
        let isEditable = false;
        if (activatedRoute.snapshot.data.roles[0] === _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_2__["TRAINING_ADMIN_ROLE"]) {
            if (_models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__["ADMIN_USER_EDIT_STATES"].includes(cvData.status)) {
                isEditable = true;
            }
        }
        if (activatedRoute.snapshot.data.roles[0] === _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_2__["TRAINEE_ROLE"]) {
            if (_models_view_cv_constants__WEBPACK_IMPORTED_MODULE_3__["TRAINING_USER_EDIT_STATES"].includes(cvData.status)) {
                isEditable = true;
            }
        }
        return isEditable;
    }
    isPageDisplayForTrainee(activatedRoute) {
        if (activatedRoute.snapshot.data.roles[0] === _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_2__["TRAINING_ADMIN_ROLE"]) {
            return false;
        }
        return true;
    }
    isMandatoryCvDetailsEntered(cvData) {
        return !!this.allQualificationsCompleted(cvData.allQualifications) &&
            !!this.allWorkExperienceCompleted(cvData.allWorkExperience) &&
            !!cvData.hobbies && !!cvData.hobbies.hobbiesDetails &&
            !!cvData.profile && !!cvData.profile.profileDetails;
    }
    allQualificationsCompleted(qualifications) {
        return !!qualifications &&
            qualifications.length > 0 &&
            !qualifications.find(q => !this.qualificationCompleted(q));
    }
    qualificationCompleted(qualifiation) {
        return !!qualifiation &&
            !!qualifiation.qualificationDetails;
    }
    allWorkExperienceCompleted(workExperiences) {
        return !!workExperiences &&
            workExperiences.length > 0 &&
            !workExperiences.find(w => !this.workExperienceCompleted(w));
    }
    workExperienceCompleted(workExperience) {
        return !!workExperience &&
            !!workExperience.start &&
            !!workExperience.jobTitle &&
            !!workExperience.workExperienceDetails;
    }
};
ViewCvStateManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ViewCvStateManagerService);



/***/ }),

/***/ "../qa-cv/src/app/view-cv/services/view-cv.service.ts":
/*!************************************************************!*\
  !*** ../qa-cv/src/app/view-cv/services/view-cv.service.ts ***!
  \************************************************************/
/*! exports provided: ViewCvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCvService", function() { return ViewCvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_cv_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/models/cv.constants */ "../qa-cv/src/app/_common/models/cv.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/portal-core/src/app/_common/services/qa-http.service */ "./src/app/_common/services/qa-http.service.ts");





let ViewCvService = class ViewCvService {
    constructor(qaHttp) {
        this.qaHttp = qaHttp;
    }
    /** GET cv by id. Will 404 if id not found */
    getCvForId(id) {
        return this.qaHttp.get({ ref: 'GET_CV_FOR_ID', params: { id: id.toString() } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getSkillsForTrainee() {
        return this.qaHttp.get({ ref: 'GET_SKILLS_FOR_TRAINEE' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getCurrentCvForTrainee() {
        return this.qaHttp.get({ ref: 'GET_CURRENT_CV' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    displayPdf(cv) {
        return this.qaHttp.post({ ref: 'GENERATE_CV' }, cv).subscribe((response) => {
            const file = new Blob([response], { type: _common_models_cv_constants__WEBPACK_IMPORTED_MODULE_2__["APPLICATION_PDF_CONTENT_TYPE"] });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL, '_blank');
        });
    }
    // /** POST: add a new cv to the server */
    createCv(cv) {
        return this.qaHttp.post({ ref: 'SAVE_CV_DATA' }, cv).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    /** PUT: update the cv on the server */
    updateCv(cv) {
        return this.qaHttp.put({ ref: 'SAVE_CV_DATA' }, cv).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ViewCvService.ctorParameters = () => [
    { type: projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"] }
];
ViewCvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_portal_core_src_app_common_services_qa_http_service__WEBPACK_IMPORTED_MODULE_4__["QaHttpService"]])
], ViewCvService);



/***/ }),

/***/ "../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SubmitConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitConfirmDialogComponent", function() { return SubmitConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");



let SubmitConfirmDialogComponent = class SubmitConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.doSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onNoClick() {
        this.canSubmit = false;
        this.doSubmit.emit();
        this.dialogRef.close();
    }
    onSubmit() {
        this.canSubmit = true;
        this.doSubmit.emit();
        this.dialogRef.close();
    }
};
SubmitConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubmitConfirmDialogComponent.prototype, "doSubmit", void 0);
SubmitConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-confirm-dialog',
        template: __webpack_require__(/*! raw-loader!./submit-confirm-dialog.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], SubmitConfirmDialogComponent);



/***/ }),

/***/ "../qa-cv/src/app/view-cv/view-cv.component.scss":
/*!*******************************************************!*\
  !*** ../qa-cv/src/app/view-cv/view-cv.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cv-content-wrapper > section {\n  margin-bottom: 1rem;\n}\n.cv-content-wrapper > section:last-child {\n  margin-bottom: 0;\n}\n.button-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3FhLWFkbWluL0RvY3VtZW50cy9xYS1wb3J0YWwtZGVwbG95bWVudC9mcm9udGVuZC9xYS1wb3J0YWwtYW5ndWxhci9wcm9qZWN0cy9xYS1jdi9zcmMvYXBwL3ZpZXctY3Yvdmlldy1jdi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3FhLWN2L3NyYy9hcHAvdmlldy1jdi92aWV3LWN2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7QUNEUjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDRkYiLCJmaWxlIjoicHJvamVjdHMvcWEtY3Yvc3JjL2FwcC92aWV3LWN2L3ZpZXctY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3YtY29udGVudC13cmFwcGVyIHtcbiAgICA+c2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgPnNlY3Rpb246bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuXG4uYnV0dG9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4iLCIuY3YtY29udGVudC13cmFwcGVyID4gc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY3YtY29udGVudC13cmFwcGVyID4gc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "../qa-cv/src/app/view-cv/view-cv.component.ts":
/*!*****************************************************!*\
  !*** ../qa-cv/src/app/view-cv/view-cv.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCvComponent", function() { return ViewCvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_qac_cv_db_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/models/qac-cv-db.model */ "../qa-cv/src/app/_common/models/qac-cv-db.model.ts");
/* harmony import */ var _services_view_cv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/view-cv.service */ "../qa-cv/src/app/view-cv/services/view-cv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-confirm-dialog/submit-confirm-dialog.component */ "../qa-cv/src/app/view-cv/submit-confirm-dialog/submit-confirm-dialog.component.ts");
/* harmony import */ var _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/services/qa-error-handler.service */ "./src/app/_common/services/qa-error-handler.service.ts");
/* harmony import */ var _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal-core/src/app/_common/models/portal-constants */ "./src/app/_common/models/portal-constants.ts");
/* harmony import */ var _common_models_cv_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_common/models/cv.constants */ "../qa-cv/src/app/_common/models/cv.constants.ts");
/* harmony import */ var _services_view_cv_state_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/view-cv-state-manager.service */ "../qa-cv/src/app/view-cv/services/view-cv-state-manager.service.ts");
/* harmony import */ var _services_view_cv_page_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/view-cv-page-data.service */ "../qa-cv/src/app/view-cv/services/view-cv-page-data.service.ts");
/* harmony import */ var _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/view-cv.constants */ "../qa-cv/src/app/view-cv/models/view-cv.constants.ts");













let ViewCvComponent = class ViewCvComponent {
    constructor(cvService, viewCvStateManagerService, viewCvPageDataService, errorHandlerService, activatedRoute, router, dialog) {
        this.cvService = cvService;
        this.viewCvStateManagerService = viewCvStateManagerService;
        this.viewCvPageDataService = viewCvPageDataService;
        this.errorHandlerService = errorHandlerService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
        this.canComment = false;
        this.canEdit = true;
        this.useExistingCvAsTemplate = true;
        this.isTraineeView = true;
        this.loadingData = true;
        this.workExperienceFeedback = [];
        this.qualificationFeedback = [];
    }
    ngOnInit() {
        this.setRoleForPage(); // Is page being displayed for Trainee or Admin
        if (this.isTraineeView) {
            this.initialiseCvPageForTrainee();
        }
        else {
            this.initialiseCvPageForAdmin();
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SubmitConfirmDialogComponent"], {
            width: '250px'
        });
        dialogRef.componentInstance.canSubmit = false;
        dialogRef.componentInstance.doSubmit.subscribe(() => {
            if (dialogRef.componentInstance.canSubmit === true) {
                this.onCvSubmitForReview();
            }
        });
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    onDisplayPdf() {
        this.cvService.displayPdf(this.cvData);
    }
    onInitialiseNewCv() {
        this.cvData = this.viewCvPageDataService.initialiseNewCv(this.cvData, this.useExistingCvAsTemplate);
        this.initialiseBlankCvForTrainee();
        this.refreshPageStatus();
    }
    onCvSave() {
        if (!this.cvData.id) {
            this.cvData.status = _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__["IN_PROGRESS_STATUS"];
        }
        this.persistCvForTrainee();
    }
    onCvSubmitForReview() {
        this.cvData.status = _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__["FOR_REVIEW_STATUS"];
        this.persistCvForTrainee();
    }
    onCvApproved() {
        this.cvUpdatedByAdmin(_models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__["APPROVED_STATUS"]);
    }
    onCvFailedReview() {
        this.cvUpdatedByAdmin(_models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__["FAILED_REVIEW_STATUS"]);
    }
    onWorkExperienceFeedbackClick({ index }, expCard) {
        this.workExperienceFeedbackIndex = index;
        this.workExperienceFeedback = this.cvData.allWorkExperience[index].workExperienceFeedback;
        expCard.drawer.open();
    }
    onWorkExperienceFeedbackChange(feedback) {
        this.cvData.allWorkExperience[this.workExperienceFeedbackIndex].workExperienceFeedback = feedback;
    }
    onQualificationFeedbackClick({ index }, qualCard) {
        this.qualificationFeedbackIndex = index;
        this.qualificationFeedback = this.cvData.allQualifications[index].qualificationFeedback;
        qualCard.drawer.open();
    }
    onQualificationFeedbackChange(feedback) {
        this.cvData.allQualifications[this.qualificationFeedbackIndex].qualificationFeedback = feedback;
    }
    onUseExistingCvAsTemplateChanged() {
        this.useExistingCvAsTemplate = !this.useExistingCvAsTemplate;
    }
    initialiseCvPageForTrainee() {
        this.cvService.getCurrentCvForTrainee().subscribe((cv) => {
            this.cvData = Object.assign({}, _common_models_qac_cv_db_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CV"], cv); // use spread operator to merge blank default Cv with returned CV
            if (this.noExistingCvForTrainee(cv)) {
                this.initialiseBlankCvForTrainee();
            }
            else {
                this.refreshPageStatus();
            }
        }, (error) => {
            this.processError(error);
        });
    }
    noExistingCvForTrainee(traineeCv) {
        return !traineeCv;
    }
    initialiseBlankCvForTrainee() {
        this.cvService.getSkillsForTrainee().subscribe((userSkillsModel) => {
            this.viewCvPageDataService.populateCvUserDetails(this.cvData, userSkillsModel);
            this.viewCvPageDataService.populateCvSkills(this.cvData, userSkillsModel);
            this.refreshPageStatus();
        });
    }
    initialiseCvPageForAdmin() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.cvService.getCvForId(paramMap.get('id')).subscribe((response) => {
                this.cvData = response;
                this.refreshPageStatus();
            }, (error) => {
                this.processError(error);
            });
        });
    }
    persistCvForTrainee() {
        if (!this.cvData.id) {
            this.createCv();
        }
        else {
            this.updateCv();
        }
    }
    createCv() {
        this.processCvServiceResponse(this.cvService.createCv(this.cvData));
    }
    updateCv() {
        this.processCvServiceResponse(this.cvService.updateCv(this.cvData));
    }
    processCvServiceResponse(obs) {
        obs.subscribe((response) => {
            this.populateResponse(response);
        }, (error) => {
            this.processError(error);
        });
    }
    cvUpdatedByAdmin(cvStatus) {
        this.cvData.status = cvStatus;
        this.updateCv();
        this.navigateToAdminSearch();
    }
    setRoleForPage() {
        this.isTraineeView = this.viewCvStateManagerService.isPageDisplayForTrainee(this.activatedRoute);
    }
    populateResponse(response) {
        this.cvData = response;
        this.setPageEditStatus();
    }
    navigateToAdminSearch() {
        this.router.navigateByUrl(_common_models_cv_constants__WEBPACK_IMPORTED_MODULE_9__["ADMIN_CV_SEARCH"]);
    }
    allDetailsEntered() {
        return this.viewCvStateManagerService.isMandatoryCvDetailsEntered(this.cvData);
    }
    processError(error) {
        this.loadingData = false;
        this.errorHandlerService.handleError(error);
    }
    refreshPageStatus() {
        this.setPageEditStatus();
        this.setCommentStatus();
        this.loadingData = false;
    }
    setPageEditStatus() {
        this.canEdit = this.viewCvStateManagerService.isPageEditable(this.activatedRoute, this.cvData);
    }
    setCommentStatus() {
        if (_submit_confirm_dialog_submit_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SubmitConfirmDialogComponent"]) {
            this.canComment = this.activatedRoute.snapshot.data.roles[0] === _portal_core_src_app_common_models_portal_constants__WEBPACK_IMPORTED_MODULE_8__["TRAINING_ADMIN_ROLE"] && this.cvData.status === _models_view_cv_constants__WEBPACK_IMPORTED_MODULE_12__["FOR_REVIEW_STATUS"];
        }
    }
};
ViewCvComponent.ctorParameters = () => [
    { type: _services_view_cv_service__WEBPACK_IMPORTED_MODULE_3__["ViewCvService"] },
    { type: _services_view_cv_state_manager_service__WEBPACK_IMPORTED_MODULE_10__["ViewCvStateManagerService"] },
    { type: _services_view_cv_page_data_service__WEBPACK_IMPORTED_MODULE_11__["ViewCvPageDataService"] },
    { type: _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewCvComponent.prototype, "canComment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewCvComponent.prototype, "canEdit", void 0);
ViewCvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-cv',
        template: __webpack_require__(/*! raw-loader!./view-cv.component.html */ "../../node_modules/raw-loader/index.js!../qa-cv/src/app/view-cv/view-cv.component.html"),
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
        ],
        styles: [__webpack_require__(/*! ./view-cv.component.scss */ "../qa-cv/src/app/view-cv/view-cv.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_view_cv_service__WEBPACK_IMPORTED_MODULE_3__["ViewCvService"],
        _services_view_cv_state_manager_service__WEBPACK_IMPORTED_MODULE_10__["ViewCvStateManagerService"],
        _services_view_cv_page_data_service__WEBPACK_IMPORTED_MODULE_11__["ViewCvPageDataService"],
        _portal_core_src_app_common_services_qa_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["QaErrorHandlerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], ViewCvComponent);



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
const TRAINEE_ROLE = 'training-user';
const TRAINER_ROLE = 'training-manager';
const TRAINING_ADMIN_ROLE = 'training-admin';
const SUPER_USER = 'super-user';


/***/ })

}]);
//# sourceMappingURL=qa-cv-src-app-qa-cv-module-es2015.js.map