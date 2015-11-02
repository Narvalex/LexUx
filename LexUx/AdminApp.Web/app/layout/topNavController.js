(function () {
    'use strict';

    angular.module('app').controller('topNavController',
        ['$rootScope', '$scope', '$timeout', topNavController]);

    function topNavController($rootScope, $scope, $timeout) {
        var root = $rootScope;
        var vm = $scope;

        vm.collapsed = true;

        vm.onCollapseButtonClicked = onCollapseButtonClicked;
        vm.collapseIfApplicable = collapseIfApplicable;

        activate();

        function activate() {
            root.showSplashPage = false;
        }

        function onCollapseButtonClicked() {
            vm.collapsed = !vm.collapsed;
        }

        function collapseIfApplicable() {
            if (vm.collapsed) {
                return;
            }

            // collapse topnav click
            $timeout(function () {
                document.getElementById('collapseTopnavButton').click();
            }); 
        }
    }
})();