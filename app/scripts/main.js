angular.module('users', []).
    controller("userListController", ["$scope", function ($scope) {
        $scope.hello = "hi!";
    }]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/users', {templateUrl: 'scripts/templates/users.html', controller: "userListController"}).
            when('/users/:userId', {templateUrl: 'scripts/template/user.html', controller: "userController"}).
            otherwise({redirectTo: '/users'});
    }]);