(function () {


    'use strict';

    angular.module('myApp.chores', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/chores', {
                templateUrl: 'chores/kid.html',
                controller: 'ChoreCtrl'
            });
        }])

        .controller('KidCtrl', [function () {

        }]);


    angular.module('myApp.chores')
        .directive('kid', function () {
            return {
                restrict: 'E',
                scope: {
                    done: '&'
                },
                template: '<input type="text" ng-model="chore" placeholder="input chore">' +
                '  {{chore}}' +
                '<div class="button" ng-click="done({chore:chore})">i\'m done</div>'

            }

        })
        .controller('ChoreCtrl', ['$scope', function ($scope) {
            $scope.logChore = function (somechore) {
                alert(somechore + " is done");
            }
        }]);
})();