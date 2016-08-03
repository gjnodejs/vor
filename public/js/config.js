//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dashboard', {
            templateUrl: 'views/vor/dashboard.html'
        }).
        when('/vor/create', {
            templateUrl: 'views/vor/create.html'
        }).
        when('vor/:vorId/edit', {
            templateUrl: 'views/vor/edit.html'
        }).
        when('/vor/:vorId', {
            templateUrl: 'views/vor/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);