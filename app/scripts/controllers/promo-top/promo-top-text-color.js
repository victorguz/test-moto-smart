"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:PromoTopTextColorCtrl
 * @description
 * # PromoTopTextColorCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("PromoTopTextColorCtrl", function ($scope) {
    $scope.title = sessionStorage.getItem("promoTopTitle") || "";
    $scope.description = sessionStorage.getItem("promoTopDescription") || "";
    $scope.localCardColor = sessionStorage.getItem("promoTopCardColor") || "#000000";
    $scope.localTextColor = sessionStorage.getItem("promoTopTextColor") || "#ffffff";
    $scope.image = firstImage();

    $scope.setColor = () => {
      $scope.textColor = "color: " + ($scope.localTextColor || "#000000");
      sessionStorage.setItem("promoTopTextColor", $scope.localTextColor);
    };

    $scope.nextRoute = () => {
      location.href = "#!/promo-top-text-color";
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
