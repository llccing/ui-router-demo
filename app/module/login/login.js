'use strict';

angular.module('myApp.login', ['ui.router'])

    .config(function ($stateProvider) {

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/module/login/login.html',
            controller: 'LoginController'
        });
    })

    .controller('LoginController', ['$rootScope','$scope',function ($rootScope, $scope) {
        var login = {
            name: '',
            password: '',
            error: false
        };

        login.submit = function () {
            if (login.name === 'admin' && login.password === '123') {
                login.error = false;

                $rootScope.$state.go('index')
            } else {
                login.error = true;
            }
        };

        $scope.login = login;
    }])

    // 权限服务
    .factory('AuthService',['$http',function ($http) {
        var authService = {};
        authService.login = function (credentials) {
            var api = $resource('http://localhost:8000/')
        }
    }])
;