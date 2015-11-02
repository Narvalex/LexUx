'use strict';

// Collect the routes
angular.module('app').constant('routes', function () {

    // Define the routes
    return [
        {
            url: '/',
            config: {
                templateUrl: 'app/dashboard/dashboard.html',
                title: 'Dashboard',
            }
        },
        {
            url: '/about',
            config: {
                title: 'About',
                templateUrl: 'app/about/about.html',
            }
        }
    ];
}());