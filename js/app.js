"use strict";

angular
.module('app', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "index_view/home.html"
        })
        .state('home_cn', {
            url: "/home_cn",
            templateUrl: "index_view/home_cn.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "index_view/about.html"
        })
        .state('about_cn', {
            url: "/about_cn",
            templateUrl: "index_view/about_cn.html"
        })
        .state('group', {
            url: "/group",
            templateUrl: "index_view/group.html"
        })
        .state('group_cn', {
            url: "/group_cn",
            templateUrl: "index_view/group_cn.html"
        })
        .state('global', {
            url: "/global",
            templateUrl: "index_view/global.html"
        })
        .state('global_cn', {
            url: "/global_cn",
            templateUrl: "index_view/global_cn.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "index_view/contact.html"
        })
        .state('contact_cn', {
            url: "/contact_cn",
            templateUrl: "index_view/contact_cn.html"
        })
}])
.run(['$state','$rootScope',function($state, $rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){      
        $rootScope.$state = $state;
    });
}])
;