(function () {
    'use strict';

    angular.module('app').controller('topNavController',
        ['$scope', '$timeout', topNavController]);

    function topNavController($scope, $timeout) {
        var vm = $scope;

        vm.collapsed = true;

        vm.onCollapseButtonClicked = onCollapseButtonClicked;
        vm.collapseIfApplicable = collapseIfApplicable;

        activate();

        function activate() {

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