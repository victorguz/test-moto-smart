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
        controllerAs: "UploadPhotosForm",
      })
      .when("/uploaded-photos", {
        templateUrl: "views/uploaded-photos.html",
        controller: "UploadPhotosCtrl",
        controllerAs: "UploadPhotosForm",
      })
      .when("/last-form", {
        templateUrl: "views/last-form.html",
        controller: "LastFormCtrl",
        controllerAs: "LastForm",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
