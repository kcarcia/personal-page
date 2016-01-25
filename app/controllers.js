angular.module('app.controllers', [
	'app.directives'
])
	// http://codepen.io/SkiWether/pen/lzjAq
	.controller('NavigationController', ['$scope', function($scope){
		$scope.states = {};
		$scope.states.activeItem = 'About';
		$scope.items = [{
			href: '#/',
			title: 'About'
		}, {
			href: '#/blog',
			title: 'Blog'
		}, {
			href: '#/contact',
			title: 'Contact'
		}];
	}])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;	
		});
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);