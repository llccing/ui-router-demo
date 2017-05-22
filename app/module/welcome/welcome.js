'use strict';

angular.module('myApp.welcome', [])

    .config(function ($stateProvider) {

        $stateProvider.state('welcome', {
            url: '/welcome',
            templateUrl: '/module/welcome/welcome.html',
            controller: 'welcomeController'
        });
    })

    .controller('welcomeController', function ($scope, $rootScope) {
        $scope.time = new Date();

        $scope.toLogin = function () {
            console.log('denglu!');
            $rootScope.$state.go('login');
        };

        $scope.lookWithoutLogin = function () {
            $rootScope.$state.go('welcome');
        };
    });


