(function () {
    'use strict';
    
    angular.module('app').factory('bus', 
        ['$rootScope', bus]);

    function bus($rootScope) {

        var service = {
            send: publish,
            publish: publish
        };

        return service;

        function publish(messageName, payload) {
            $rootScope.$broadcast(messageName, payload);
        }
    }
})();