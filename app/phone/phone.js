/**
 * Created by mikeconnor on 10/7/16.
 */
'use strict';

angular.module('myApp.phone', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phone', {
            templateUrl: 'phone/phone.html',
            controller: 'PhoneCtrl'
        });
    }])
    .controller('PhoneCtrl', ['$scope',function ($scope) {

        $scope.callHome = function (msg) {
            alert(msg);
        };
    }])
    .directive('phone', function () {
        return {
            scope: {
                dial: "&"
            },
            template: '<input type="text" ng-model="value" placeholder="input msg">'
            + '<div class="button" ng-click="dial({message:value})">Call home</div>'
        };
    });