"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:UploadPhotosCtrl
 * @description
 * # UploadPhotosCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("UploadPhotosCtrl", function ($scope) {
    $scope.init = () => {
      document.addEventListener("DOMContentLoaded", function () {
        let elems = document.querySelectorAll(".fixed-action-btn");
        let instances = M.FloatingActionButton.init(elems, options);
      });

      // Or with jQuery

      $(document).ready(function () {
        $(".fixed-action-btn").floatingActionButton();
      });
    };

    $scope.init();
  });
