var vikasBlog = angular.module('vikasBlog', ['ui.router', 'ui.bootstrap']);
vikasBlog.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

vikasBlog.config(function ($stateProvider, $urlRouterProvider) {
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

vikasBlog.controller('MainCtrl', function ($scope) {
    //;
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName('preloader')[0].style.display = 'none';
});