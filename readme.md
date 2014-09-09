angularjs-date-range-validator
==============================

Date range validation directive for Angular.js.

Allows to enforce the date range validation between dates selected in the start and end date pickers. 

Usage:
`angular.module('myApp', ['date-range-validator', ...]);`

Example:

```
<form name="searchForm" role="form" ng-submit="searchByDateRange()">
      <div class="form-group">
        <label for="dtStartDate" class="control-label">Start Date:</label>
        <input type="text" id="dtStartDate" name="dtStartDate" class="dtp-form-control" datepicker-popup="dd-MM-yyyy" ng-model="searchParameters.startDate" is-open="startDateOpened" ng-required="true" close-text="Close" validate-

against-datepicker="dtEndDate" validate-start-datepicker="dtStartDate" readonly />
        <span class="dtp-input-group-btn">
          <button class="btn btn-default" ng-click="openStartDate($event)">
            <i class="glyphicon glyphicon-calendar"></i>
          </button>
        </span>
        <span class="error-container" ng-show="searchForm.dtStartDate.$dirty && searchForm.dtStartDate.$invalid">
          <small ng-show="searchForm.dtStartDate.$error.required">Start date is required in format dd-MM-yyyy</small>
          <small ng-show="searchForm.dtStartDate.$error.startDateShouldBeLessThanEndDate">Start date should be less than the end date</small>
        </span>
      </div>
      <div class="form-group">
        <label for="dtEndDate" class="control-label">End Date: </label>
        <input type="text" id="dtEndDate" name="dtEndDate" class="dtp-form-control" datepicker-popup="dd-MM-yyyy" ng-model="searchParameters.endDate" is-open="endDateOpened" ng-required="true" close-text="Close" validate-against-

datepicker="dtStartDate" validate-start-datepicker="dtStartDate" readonly />
        <span class="dtp-input-group-btn">
          <button class="btn btn-default" ng-click="openEndDate($event)">
            <i class="glyphicon glyphicon-calendar"></i>
          </button>
        </span>
        <span class="error-container" ng-show="searchForm.dtEndDate.$dirty && searchForm.dtEndDate.$invalid">
          <small ng-show="searchForm.dtEndDate.$error.required">End date is required in format dd-MM-yyyy</small>
          <small ng-show="searchForm.dtEndDate.$error.startDateShouldBeLessThanEndDate">End date should be greater than the start date</small>
        </span>
      </div>
      <input type="button" id="btnResetSearchByDateRange" class="btn btn-default pull-right" value="Reset" ng-click="reset()" />
      <input type="submit" id="btnSearchByDateRange" class="btn btn-primary pull-right" value="Search" ng-disabled="searchForm.$invalid" />
    </form>
```
    
where the controller contains

```
// set the default start and end dates 
              
var dtStart = new Date();
              
var dtEnd = new Date();
              
dtStart.setMonth(dtEnd.getMonth() - 1);
              
$scope.searchParameters = { startDate: dtStart, endDate: dtEnd, selected: false };

```

Third-party dependencies: 
* jQuery
* Bootstrap 3 CSS (for styling, optional)
* moment.js

Demo is available here: http://plnkr.co/edit/E8jkzyJ8Y8Wu8tYDHca0?p=preview

License: MIT
