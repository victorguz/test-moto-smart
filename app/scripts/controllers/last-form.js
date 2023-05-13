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
      if ($scope.toggle && $scope.first_value && $scope.percent) {
        return true;
      }
      if (!$scope.toggle && $scope.first_value) {
        return true;
      }
      return false;
    };
    $scope.setPercent = (event) => {
      $scope.percent = event.target.value;
    };
  });
