var data;

var myPortfolioApp = angular.module('myPortfolioApp', ['ui.router'])

// Config route provider
.config(function($stateProvider) {
	$stateProvider
	// Home page
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	// About me page
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html', 
		controller: 'AboutController',
	})
	// Photography page
	.state('photography', {
		url: '/photography',
		templateUrl: 'templates/photography.html',
		controller: 'PhotoController',
	})
})

// Landing page controller: define $scope.welcome as a string
.controller('HomeController', function($scope) {
	$scope.welcome = "Welcome to Jessie Zhang's website!"
	$scope.bunny = "img/bunny.jpg"
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope) {
	$scope.about = "Jessie Zhang is a student at the University of Washington in Seattle majoring in Informatics and minoring in Diversity. She has studied Psychology, Computer Science, Gender, Sexuality, and Women Studies, and American Ethnic Studies. She is interested in UI/UX Design, User Experience, Front-End Programming / Web Development, and Information Architecture."
})

// Photography page controller: define $scope.url as an image
.controller('PhotoController', function($scope, $http) {
	$http.get('data/data.json').then(function(response) {
		data = $scope.data = response.data,
		console.log($scope.data)
	})
})