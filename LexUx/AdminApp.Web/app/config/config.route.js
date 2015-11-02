(function () {
	'use strict';

	var app = angular.module('app');

	// Configure the routes and route resolvers
	app.config(['$routeProvider', 'routes', routeConfigurator]);

	function routeConfigurator($routeProvider, routes) {

		routes.forEach(function (r) {
			$routeProvider.when(r.url, r.config);
		});
		$routeProvider.otherwise({ redirectTo: '/' });
	}
})();