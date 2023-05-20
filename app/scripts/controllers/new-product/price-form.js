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
    $scope.notOnlyMotoPuntos =
      JSON.parse(sessionStorage.getItem("notOnlyMotoPuntos")) || true;
    $scope.price = JSON.parse(sessionStorage.getItem("price")) || "";
    $scope.percent = JSON.parse(sessionStorage.getItem("percent")) || "";
    $scope.salesTypes = [
      {
        id: 1,
        name: "Sin restricciones",
        description:
          "El producto o servicio prodra ser adquirido por el usuario las veces que quiera pagando solo con MotoPuntos",
      },
      {
        id: 2,
        name: "Redención unica en toda la aplicación",
        description:
          "El usuario podra redimir el producto o servicio por una unica vez en toda la apliación con MotoPuntos",
      },
      {
        id: 3,
        name: "Redención unica en tu establecimiento",
        description:
          "Redención unica en tu establecimiento: El usuario podra redimir por una unica vez tu producto o servicio en tu establecimiento con MotoPuntos ",
      },
    ];
    $scope.selectedSalesType = 1;

    $scope.isSelectedSalesType = (sales) => {
      return $scope.selectedSalesType === sales.id;
    };
    $scope.setSelectedSalesType = (sales) => {
      $scope.selectedSalesType = sales.id;
      sessionStorage.setItem("selectedSalesType", $scope.selectedSalesType);
    };

    $scope.isEnabledContinue = () => {
      return (
        ($scope.notOnlyMotoPuntos && $scope.price && $scope.percent) ||
        (!$scope.notOnlyMotoPuntos && $scope.price)
      );
    };

    $scope.changeToggle = (value) => {
      $scope.notOnlyMotoPuntos = value;
      sessionStorage.setItem("notOnlyMotoPuntos", $scope.notOnlyMotoPuntos);

      if ($scope.notOnlyMotoPuntos) {
        sessionStorage.removeItem("selectedSalesType");
      } else {
        $scope.setSelectedSalesType({ id: 1 });
        sessionStorage.removeItem("percent");
      }
    };

    $scope.setPrice = (event) => {
      $scope.price = event.target.value;
      sessionStorage.setItem("price", $scope.price);
      if (!$scope.notOnlyMotoPuntos) $scope.setSelectedSalesType({ id: 1 });
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
