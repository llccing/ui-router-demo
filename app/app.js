'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.router',
    'myApp.login',
    'myApp.welcome',
    'myApp.version'
]);

myApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$state.isLogin = false;
});

myApp.config(function ($stateProvider, $urlRouterProvider) {
    // 'ngInject';
    $urlRouterProvider.otherwise('/login');



    var aboutState = {
        name: 'index',
        url: '/index',
        template: '<h3>这里是首页</h3>'
    };

    $stateProvider.state(aboutState);
});
