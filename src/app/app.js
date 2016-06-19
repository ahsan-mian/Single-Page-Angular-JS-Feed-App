// Name of the angular module designed for this app is 'showcasedMoviesApp'.
var module = angular.module('showcasedMoviesApp', []);

// AppCtrl is the only parent controller, that controls all page routing,
// it will create the child scope from the $rootscope, AppCtrl has maintained the states about which page is currently
// displayed.
module.controller('appCtrl', ['$scope', '$location', function($scope, $location) {

	// path for the pages.
	$scope.FEED_PAGE_VIEW_PATH = '/feed';
	
	var onLocationChange = function(event) {
		$scope.locationPath = $location.path();
		console.log($scope.locationPath);
	};

	// initially showing the feed page,
	$location.path('/feed');

	// listening the change in url.
	$scope.$on('$locationChangeSuccess', onLocationChange);
}]);