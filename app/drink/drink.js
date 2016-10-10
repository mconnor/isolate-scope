/**
 * Created by mikeconnor on 10/7/16.
 */
'use strict';

angular.module('myApp.drink', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/drink', {
            templateUrl: 'drink/drink.html',
            controller: 'DrinkCtrl'
        });
    }])
    .controller('DrinkCtrl', ['$scope', function ($scope) {
$scope.ctrlFlavor='blackberry';

    }])
    .directive('drink', function () {
        return {
            scope:{
                flavor: '@'
            },
           /* link: function (scope, element, attr) {
                scope.flavor = attr.flavor;
            },*/
            template: '<div>{{flavor}}</div>'
        };
    });