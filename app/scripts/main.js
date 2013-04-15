angular.module('users', ['store']).
    controller("userListController", ["$scope", 'User', function ($scope, userResource) {
        var result = userResource.query();
        $scope.page = result;
    }]).controller("userController", ["$scope", '$routeParams', 'User', function ($scope, $routeParams, userResource) {
        var result = userResource.get({'id': $routeParams.id});
        $scope.user = result;
    }]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/users', {templateUrl: 'scripts/templates/users.html', controller: "userListController"}).
            when('/users/:id', {templateUrl: 'scripts/templates/user.html', controller: "userController"}).
            otherwise({redirectTo: '/users'});
    }]);