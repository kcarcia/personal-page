angular.module('app.directives', [])
	.directive('navigationbar', [function(){
		return {
			controller: ['$scope', '$http', function($scope, $http){
				$http.get('data/pages.json').success(function(data){
					$scope.pages = data;
				});
			}],
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'partials/navigationbar.html',
			replace: true
		};
	}]);;