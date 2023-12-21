angular.module('restTest', ['restTest.filters', 'restTest.services', 'restTest.directives', 'restTest.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'UserListCtrl'});
        $routeProvider.when('/edit/:id', {templateUrl: 'partials/edit.html', controller: 'UserDetailCtrl'});
        $routeProvider.when('/create/', {templateUrl: 'partials/create.html', controller: 'UserCreationCtrl'});
    }]);
