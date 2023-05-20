"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:CategoriesFormCtrl
 * @description
 * # CategoriesFormCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("CategoriesFormCtrl", function ($scope) {
    $scope.categories = [
      {
        id: 1,
        name: "Viajes y turismo",
        image: "Viajes y turismo.png",
      },
      {
        id: 2,
        name: "Moto lujos",
        image: "Moto lujos.png",
      },
      {
        id: 3,
        name: "Compra venta",
        image: "Compra venta.png",
      },
      {
        id: 4,
        name: "Concesionarios",
        image: "Concesionarios.png",
      },
      {
        id: 5,
        name: "Gruas",
        image: "Gruas.png",
      },
      {
        id: 6,
        name: "Lavaderos",
        image: "Lavaderos.png",
      },
      {
        id: 7,
        name: "Llantas",
        image: "Llantas.png",
      },
      {
        id: 8,
        name: "Accesorios",
        image: "Accesorios.png",
      },
      {
        id: 9,
        name: "Repuestos",
        image: "Repuestos.png",
      },
      {
        id: 10,
        name: "Tecnomecanica",
        image: "Tecnomecanica.png",
      },
    ];

    $scope.selectedCategories =
      JSON.parse(sessionStorage.getItem("selectedCategories")) || [];

    $scope.isSelectedCategory = (category) => {
      const find = $scope.selectedCategories.find(
        (val) => val.id === category.id
      );
      return find ? true : false;
    };
    $scope.selectCategory = (category) => {
      if ($scope.isSelectedCategory(category)) {
        $scope.selectedCategories = $scope.selectedCategories.filter(
          (val) => val.id !== category.id
        );
      } else {
        $scope.selectedCategories.push(category);
      }
      sessionStorage.setItem(
        "selectedCategories",
        JSON.stringify($scope.selectedCategories)
      );
    };
  });
