var app = angular.module('app', ['ngRoute', 'app.controllers'])

// Configures routes for application
.config(['$routeProvider', function($routeProvider) {
	// Root page is about
	$routeProvider.when('/', {
		templateUrl: 'views/about.html'
	// Blog
	}).when('/blog', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	// Single blog post
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	// Contact form
	}).when('/contact', {
		templateUrl: 'views/contact.html'
	// Otherwise, redirect back to root (about)
	}).otherwise({
		redirectTo: '/'
	});
}]);
