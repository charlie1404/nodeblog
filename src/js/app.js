var nodeBlog = angular.module('nodeBlog', ['ui.router', 'ui.bootstrap']);
nodeBlog.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

nodeBlog.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'assets/templates/home.html' //templateURL
            })
            .state('blog', {
                url: '/exam',
                template: 'assets/templates/blog.html'
            })
            .state('about', {
                url: '/about',
                template: 'assets/templates/about.html'
            });
});

nodeBlog.controller('MainCtrl', function ($scope) {
    //;
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName('preloader')[0].style.display = 'none';
});