angular.module('users', ['store']).
    controller("userListController", ["$scope", 'User', function ($scope, userResource) {
        var result = userResource.query();
        $scope.page = result;
    }]).controller("userController", ["$scope", '$routeParams', 'User', function ($scope, $routeParams, userResource) {
        var result = userResource.get({'id': $routeParams.id});
        $scope.user = result;
        $scope.update = function(){
            var updatedUser = angular.copy($scope.user);
            //Workaround over Jersey deserializer if property exists it returns empty list =(
            delete updatedUser.contacts;
            delete updatedUser.groups;
            delete updatedUser.avatar;
            //end of workaround
            updatedUser.$save();
        }
    }]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/users', {templateUrl: 'scripts/templates/users.html', controller: "userListController"}).
            when('/users/:id', {templateUrl: 'scripts/templates/user.html', controller: "userController"}).
            otherwise({redirectTo: '/users'});
    }]);