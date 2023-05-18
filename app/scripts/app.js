"use strict";

/**
 * @ngdoc overview
 * @name testMotoSmartApp
 * @description
 * # testMotoSmartApp
 *
 * Main module of the application.
 */
angular
  .module("testMotoSmartApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main",
      })
      .when("/title-form", {
        templateUrl: "views/title-form.html",
        controller: "TitleFormCtrl",
        controllerAs: "titleForm",
      })
      .when("/description-form", {
        templateUrl: "views/description-form.html",
        controller: "DescriptionFormCtrl",
        controllerAs: "descriptionForm",
      })
      .when("/categories-form", {
        templateUrl: "views/categories-form.html",
        controller: "CategoriesFormCtrl",
        controllerAs: "categoriesForm",
      })
      .when("/splash-upload-photos", {
        templateUrl: "views/splash-upload-photos.html",
        controller: "SplashUploadPhotosCtrl",
        controllerAs: "splashUploadPhotosForm",
      })
      .when("/upload-photos", {
        templateUrl: "views/upload-photos.html",
        controller: "UploadPhotosCtrl",
        controllerAs: "uploadPhotosForm",
      })
      .when("/uploaded-photos", {
        templateUrl: "views/uploaded-photos.html",
        controller: "UploadedPhotosCtrl",
        controllerAs: "uploadedPhotosForm",
      })
      .when("/price-form", {
        templateUrl: "views/price-form.html",
        controller: "PriceFormCtrl",
        controllerAs: "priceForm",
      })
      .when("/new-product-splash", {
        templateUrl: "views/new-product-splash.html",
        controller: "NewProductSplashCtrl",
        controllerAs: "newProductForm",
      })
      .when("/dates-form", {
        templateUrl: "views/dates-form.html",
        controller: "DatesFormCtrl",
        controllerAs: "datesForm",
      })
      .when("/quantity-form", {
        templateUrl: "views/quantity-form.html",
        controller: "QuantityFormCtrl",
        controllerAs: "quantityForm",
      })
      .when("/splash-promos-top", {
        templateUrl: "views/splash-promos-top.html",
        controller: "SplashPromosTopCtrl",
        controllerAs: "splashPromosTopForm",
      })
      .when("/splash-promos-top-second", {
        templateUrl: "views/splash-promos-top-second.html",
        controller: "SplashPromosTopSecondCtrl",
        controllerAs: "splashPromosTopSecondForm",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
