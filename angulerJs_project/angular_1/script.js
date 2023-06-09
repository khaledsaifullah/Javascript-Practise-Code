	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);



	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider
		

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			
			// route for the blog page
			.when('/blog', {
				templateUrl : 'pages/blog.html',
				controller  : 'blogController'
			});
	});
	

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($rootScope, $scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$rootScope.myTitle = "Khaled";
		
	});

	scotchApp.controller('aboutController', function($rootScope,$scope) {
		$scope.message = 'Look! I am an about page.';
		$rootScope.myTitle = "Saifullah";
	});

	scotchApp.controller('contactController', function($rootScope,$scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		$rootScope.myTitle = 'Blog Title';
	});
	
	scotchApp.controller('blogController', function($scope) {
		$scope.message = 'Blog content goes here';
	});
	
	
	
	