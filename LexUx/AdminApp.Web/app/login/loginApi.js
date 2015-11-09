(function () {
    'use strict';

    angular.module('app').factory('loginApi',
        ['$http', loginApi]);

    function loginApi($http) {

        return {
            registrarNuevoUsuario: registrarNuevoUsuario
        }

        function post(url, dto) {
            return $http.post(url, dto);
        }

        function registrarNuevoUsuario(dto) {
            return post('login/registrar-nuevo-usuario', dto);
        }
    }
})();