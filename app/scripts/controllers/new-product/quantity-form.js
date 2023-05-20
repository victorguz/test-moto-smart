"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:QuantityFormCtrl
 * @description
 * # QuantityFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("QuantityFormCtrl", function ($scope) {
    $scope.quantity = sessionStorage.getItem("quantity") || "";

    $scope.setQuantity = (event) => {
      $scope.quantity = event.target.value;
      sessionStorage.setItem("quantity", $scope.quantity);
    };
    $scope.getPercentLength = () => {
      return $scope.quantity ? String($scope.quantity).length : 0;
    };
  });
