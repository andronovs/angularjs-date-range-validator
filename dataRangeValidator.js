(function (angular) {
    'use strict';
    angular.module('date-range-validator', [])
        .directive('validateAgainstDatepicker', ['$rootScope', function ($rootScope) {

            function checkDateRange(date1, date2) {
                return date1 < date2;
            }

            return {
                require: 'ngModel',
                link: function (scope, elem, attrs, ctrl) {

                    scope.$on('date-change', function (event, data) {

                        if (data !== ctrl.$modelValue) {
                            ctrl.$setValidity("startDateShouldBeLessThanEndDate", true);
                        }
                    });

                    scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                        ctrl.$valid = true;
                        ctrl.$setValidity("required", ctrl.$modelValue);
                        ctrl.$setValidity("startDateShouldBeLessThanEndDate", true);

                        if (newValue != oldValue) {
                            $rootScope.$broadcast('date-change', newValue);

                            var otherCtrl = $("#" + attrs.validateAgainstDatepicker).val();
                            var otherCtrlValue = moment(otherCtrl, "DD-MM-YYYY").toDate();

                            var isValid = (ctrl.$name == attrs.validateStartDatepicker) ? checkDateRange(newValue, otherCtrlValue) :
                                checkDateRange(otherCtrlValue, newValue);
                            ctrl.$setValidity("startDateShouldBeLessThanEndDate", isValid);
                        }
                    });
                }
            }
        }]);
})(angular);
