(function () {
    'use strict';
    
    angular.module('app').controller('loginController',
        ['$scope', 'bus', loginController]);

    function loginController($scope, bus) {
        var vm = $scope;

        vm.onIngresarComoInvitadoClicked = onIngresarComoInvitadoClicked;

        activate();

        function activate() {

        }

        function onIngresarComoInvitadoClicked() {
            bus.send('login.ingresarComoInvitado');
        }
    }
})();