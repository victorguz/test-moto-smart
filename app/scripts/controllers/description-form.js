"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:DescriptionFormCtrl
 * @description
 * # DescriptionFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("DescriptionFormCtrl", function ($scope) {
    $scope.description = sessionStorage.getItem("description") || "";
    $scope.setDescription = (description) => {
      $scope.description = description;
      sessionStorage.setItem("description", description);
    };
  });
