"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:PromoTopDescriptionCtrl
 * @description
 * # PromoTopDescriptionCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("PromoTopDescriptionCtrl", function ($scope) {
    $scope.title = sessionStorage.getItem("promoTopTitle") || "";
    $scope.description = sessionStorage.getItem("promoTopDescription") || "";
    $scope.localCardColor = sessionStorage.getItem("promoTopCardColor") || "";
    $scope.localTextColor = sessionStorage.getItem("promoTopTextColor") || "";
    $scope.image = firstImage();
    $scope.setDescription = (description) => {
      $scope.description = description;
      sessionStorage.setItem("promoTopDescription", description);
    };

    function firstImage() {
      const images = JSON.parse(sessionStorage.getItem("images") || "") || [];

      if (images.length > 0) {
        return images[0];
      }
      return undefined;
    }

    $scope.cardColor =
      "background-color: " + ($scope.localCardColor || "#000000");
    $scope.textColor = "color: " + ($scope.localTextColor || "#ffffff");
  });
