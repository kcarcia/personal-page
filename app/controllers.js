angular.module('app.controllers', ['app.directives'])

// Navigation bar controller: loads nav bar, sets active link
.controller('NavigationController', ['$scope', function($scope){
	// Active link
	$scope.states = {};
	$scope.states.activeItem = 'About';
	
	// Navigation links	
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

// Blog post controller: loads blog posts
.controller('PostController', ['$scope', '$http', function($scope, $http){
	$http.get('data/posts.json').success(function(data){
		$scope.posts = data;	
	});
}])

// Single blog post controller: loads single blog post
.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('data/posts.json').success(function(data){
		$scope.post = data[$routeParams.id];
	});
}])

// Contact form controller: makes request POST to send mail 
.controller('ContactController', function ($scope, $http) {
    $scope.submit = function(contactform) {
        if (contactform.$valid) {
            $http({
                method: 'POST',
                url: 'contact-form.php',
                data: $.param($scope.formData),  //param method from jQuery
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            });
        }
    }
});
