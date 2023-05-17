"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:LastFormCtrl
 * @description
 * # LastFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("LastFormCtrl", function ($scope) {
    $scope.toggle = true;
    $scope.first_value = "";
    $scope.percent = "";
    $scope.isEnabledContinue = () => {
      if (
        ($scope.toggle && $scope.first_value && $scope.percent) ||
        (!$scope.toggle && $scope.first_value)
      ) {
        return true;
      }
      return false;
    };
    $scope.setPercent = (event) => {
      $scope.percent = event.target.value;
    };
    $scope.getPercentLength = () => {
      return $scope.percent ? String($scope.percent).length : 0;
    };
    $scope.getPercentX100 = () => {
      return $scope.percent * 100;
    };
    $scope.getFirstValueLength = () => {
      return $scope.first_value ? String($scope.first_value).length : 0;
    };
    $scope.getValueMotoPuntos = () => {
      return $scope.first_value - ($scope.first_value * $scope.percent) / 100;
    };
  });
