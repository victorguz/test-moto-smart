"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:PromoTopCardColorCtrl
 * @description
 * # PromoTopCardColorCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("PromoTopCardColorCtrl", function ($scope) {
    $scope.title = sessionStorage.getItem("promoTopTitle") || "";
    $scope.description = sessionStorage.getItem("promoTopDescription") || "";
    $scope.localCardColor = sessionStorage.getItem("promoTopCardColor") || "";
    $scope.localTextColor = sessionStorage.getItem("promoTopTextColor") || "";
    $scope.image = firstImage();

    $scope.setColor = () => {
      $scope.cardColor =
      "background-color: " + ($scope.localCardColor || "#000000");
      sessionStorage.setItem("promoTopCardColor", $scope.localCardColor);
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
