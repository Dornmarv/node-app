var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'stuController'
		})
		.when('/students', {
			templateUrl:'templates/list.html',
			controller:'stuController'
		})
		.when('/students/create', {
			templateUrl:'templates/add.html',
			controller:'stuController'
		})
		.when('/students/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'stuController'
		})
		.when('/students/:id/show', {
			templateUrl:'templates/show.html',
			controller:'stuController'
		});
});
