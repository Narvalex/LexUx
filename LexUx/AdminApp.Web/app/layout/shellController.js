(function () {
    'use strict';
    
    angular.module('app').controller('shellController',
        ['$rootScope', '$scope', shellController]);

    function shellController($rootScope, $scope) {
        var root = $rootScope;
        var vm = $scope;

        vm.loginStatus = '';

        activate();

        function activate() {
            root.showSplashPage = false;
        }

        vm.$on('login.ingresarComoInvitado', function () {
            vm.loginStatus = 'loggedIn';
        });
    }
})();