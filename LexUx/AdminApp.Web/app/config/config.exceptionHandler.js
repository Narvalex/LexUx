'use strict';

angular.module('app').config(function ($provide) {
	$provide.decorator('$exceptionHandler',
		['$delegate', 'config',
			function ($delegate, config) {
				return function (exception, cause) {
					$delegate(exception, cause);
					console.log(config.appErrorPrefix + exception.message);
				};
		}]);
	});