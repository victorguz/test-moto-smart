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
        templateUrl: "views/new-product/main.html",
        controller: "MainCtrl",
        controllerAs: "main",
      })
      .when("/title-form", {
        templateUrl: "views/new-product/title-form.html",
        controller: "TitleFormCtrl",
        controllerAs: "titleForm",
      })
      .when("/description-form", {
        templateUrl: "views/new-product/description-form.html",
        controller: "DescriptionFormCtrl",
        controllerAs: "descriptionForm",
      })
      .when("/categories-form", {
        templateUrl: "views/new-product/categories-form.html",
        controller: "CategoriesFormCtrl",
        controllerAs: "categoriesForm",
      })
      .when("/splash-upload-photos", {
        templateUrl: "views/new-product/splash-upload-photos.html",
        controller: "SplashUploadPhotosCtrl",
        controllerAs: "splashUploadPhotosForm",
      })
      .when("/upload-photos", {
        templateUrl: "views/new-product/upload-photos.html",
        controller: "UploadPhotosCtrl",
        controllerAs: "uploadPhotosForm",
      })
      .when("/uploaded-photos", {
        templateUrl: "views/new-product/uploaded-photos.html",
        controller: "UploadedPhotosCtrl",
        controllerAs: "uploadedPhotosForm",
      })
      .when("/price-form", {
        templateUrl: "views/new-product/price-form.html",
        controller: "PriceFormCtrl",
        controllerAs: "priceForm",
      })
      .when("/new-product-splash", {
        templateUrl: "views/new-product/new-product-splash.html",
        controller: "NewProductSplashCtrl",
        controllerAs: "newProductForm",
      })
      .when("/dates-form", {
        templateUrl: "views/new-product/dates-form.html",
        controller: "DatesFormCtrl",
        controllerAs: "datesForm",
      })
      .when("/quantity-form", {
        templateUrl: "views/new-product/quantity-form.html",
        controller: "QuantityFormCtrl",
        controllerAs: "quantityForm",
      })
      .when("/splash-promos-top", {
        templateUrl: "views/promo-top/splash-promos-top.html",
        controller: "SplashPromosTopCtrl",
        controllerAs: "splashPromosTopForm",
      })
      .when("/splash-promos-top-second", {
        templateUrl: "views/promo-top/splash-promos-top-second.html",
        controller: "SplashPromosTopSecondCtrl",
        controllerAs: "splashPromosTopSecondForm",
      })
      .when("/promo-top-title", {
        templateUrl: "views/promo-top/promo-top-title.html",
        controller: "PromoTopTitleCtrl",
        controllerAs: "promoTopTitleForm",
      })
      .when("/promo-top-description", {
        templateUrl: "views/promo-top/promo-top-description.html",
        controller: "PromoTopDescriptionCtrl",
        controllerAs: "promoTopDescriptionForm",
      })
      .when("/promo-top-card-color", {
        templateUrl: "views/promo-top/promo-top-card-color.html",
        controller: "PromoTopCardColorCtrl",
        controllerAs: "promoTopCardColorForm",
      })
      .when("/promo-top-text-color", {
        templateUrl: "views/promo-top/promo-top-text-color.html",
        controller: "PromoTopTextColorCtrl",
        controllerAs: "promoTopTextColorForm",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
