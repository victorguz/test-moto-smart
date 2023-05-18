"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:PriceFormCtrl
 * @description
 * # PriceFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("PriceFormCtrl", function ($scope) {
    $scope.toggle = true;
    $scope.price = "";
    $scope.percent = "";
    $scope.isEnabledContinue = () => {
      if (
        ($scope.toggle && $scope.price && $scope.percent) ||
        (!$scope.toggle && $scope.price)
      ) {
        return true;
      }
      return false;
    };

    $scope.changeToggle = () => {
      $scope.toggle = $scope.toggle;
      if (!$scope.toggle) sessionStorage.removeItem("percent");
    };
    $scope.setPrice = (event) => {
      $scope.price = event.target.value;
      sessionStorage.setItem("price", $scope.price);
    };
    $scope.setPercent = (event) => {
      $scope.percent = event.target.value;
      sessionStorage.setItem("percent", $scope.percent);
    };
    $scope.getPercentLength = () => {
      return $scope.percent ? String($scope.percent).length : 0;
    };
    $scope.getPercentX100 = () => {
      return $scope.percent * 100;
    };
    $scope.getFirstValueLength = () => {
      return $scope.price ? String($scope.price).length : 0;
    };
    $scope.getValueMotoPuntos = () => {
      return $scope.price - ($scope.price * $scope.percent) / 100;
    };
  });
