angular.module('users', ['store']).
    controller("userListController", ["$scope", 'User', function ($scope, userResource) {
        var result = userResource.query();
        $scope = result.users;
    }]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/users', {templateUrl: 'scripts/templates/users.html', controller: "userListController"}).
            when('/users/:userId', {templateUrl: 'scripts/template/user.html', controller: "userController"}).
            otherwise({redirectTo: '/users'});
    }]);