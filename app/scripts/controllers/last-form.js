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
      return $scope.toggle
        ? $scope.first_value && $scope.percent
        : $scope.first_value;
    };
    $scope.setPercent = (event) => {
      $scope.percent = event.target.value;
    };
  });
