var vertxFeedsApp = angular.module('vertxFeeds', ['ngResource', 'ui.router', 'ngMaterial', 'mdColorPicker']);

vertxFeedsApp.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
})
.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          template: '<home-page></home-page>',
        });

    
    $stateProvider
        .state('login', {
          url: '/login',
          template: '<login-page></login-page>',
        });
        
    $stateProvider
        .state('register', {
          url: '/register',
          template: '<register-page></register-page>',
        });


    $stateProvider
        .state('subscription', {
          url: '/subscription',
          template: '<subscription-page></subscription-page>',
        });

    $stateProvider
        .state('feed', {
          url: '/feed',
          template: '<feed-page></feed-page>',
        });

    $urlRouterProvider.otherwise('/');
});