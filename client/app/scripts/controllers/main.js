'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location, Extractor, Content) {
    $scope.getContent=function(url){
    	Extractor.getContent($scope.url).success(function(data){
    		$scope.content=Content;
    		$scope.content.data=data;
    		$location.path('/content');
    	});
    }
  });
