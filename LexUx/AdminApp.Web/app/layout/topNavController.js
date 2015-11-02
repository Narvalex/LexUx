(function () {
    'use strict';
    angular.module('app').controller('topNavController', ['$rootScope', topNavController]);

    function topNavController($rootScope) {
        var root = $rootScope;

        activate();

        function activate() {
            root.showSplashPage = false;
        }
    }
})();