// Header: Use the same scope of AppCtrl, and will display the logo at top.
angular.module('showcasedMoviesApp')
.directive('showcasedMoviesAppHeader', function() {
	return {
		scope: false,
		restrict: 'E',
		templateUrl: 'app/header/templates/header.tpl.html'
	};
});