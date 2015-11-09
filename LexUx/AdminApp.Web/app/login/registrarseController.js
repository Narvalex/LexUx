(function () {
    'use strict';
    
    angular.module('app').controller('registrarseController',
        ['$scope', 'bus', 'loginApi', registrarseController]);

    function registrarseController($scope, bus, loginApi) {
        var vm = $scope;

        vm.onRegistrarseBtnClick = onRegistrarseBtnClick;

        activate();

        function activate() {
        }

        function onRegistrarseBtnClick() {

            var dto = {
                usuario : 'Alexis',
                passworkd : 'passowrd...'
            };

            loginApi.registrarNuevoUsuario(dto)
                .then(function () {
                    toastr.success('Llego al endpoint');
                }, function () {
                    toastr.error('No llego al endpoint');
                });
        }
    }
})();