'use strict';

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testMotoSmartApp
 */
angular.module('testMotoSmartApp')
  .controller('MainCtrl', function ($scope) {
    this.goBackHistory = () => {
      $scope.history.back();
    }
  });
