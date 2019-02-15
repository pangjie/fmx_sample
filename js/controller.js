"use strict";

angular
.module('app')
.controller("NavCtrl", ["$scope",function($scope) {
	$scope.lang_switch = function () {
		$scope.home = 'home_en';
	};
	$scope.test_hide = function () {
		angular.element('#navbarCollapse').collapse('hide');
	};
}])
;