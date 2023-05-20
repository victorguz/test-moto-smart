"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:TitleFormCtrl
 * @description
 * # TitleFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("TitleFormCtrl", function ($scope) {
    $scope.title = sessionStorage.getItem("title")||"";
    $scope.setTitle = (title) => {
      $scope.title = title;
      sessionStorage.setItem("title", title);
    };
  });
