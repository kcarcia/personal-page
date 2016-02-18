angular.module('app.directives', [])

// Navigation bar directive
.directive('navigationbar', [function(){
	return {
		restrict: 'E', // E = Element
		templateUrl: 'partials/navigationbar.html',
		replace: true // replace tag with specified partial
	};
}]);;