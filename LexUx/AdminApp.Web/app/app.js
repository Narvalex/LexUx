(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules
        'ngAnimate',
        'ngRoute'

        // Custom modules


        // 3rd Party Modules

    ]);

    // Handle routing errors and success events
    app.run(['$route', '$rootScope', 'config',
        function ($route, $rootScope, config) {
            // Include $route to kick start the router
            $rootScope.docTitle = config.docTitle;
            $rootScope.showSplashPage = true;
    }]);
})();