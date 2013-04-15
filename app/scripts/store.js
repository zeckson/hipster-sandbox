//Requires Ember-Data
angular.module('store', ['ngResource']).
    factory('User', function ($resource) {
        var User = $resource('http://localhost\\:8080/rest' +
            '/users',
            {fields: 'id,name,avatar,contacts,groups(name)'}, {
                update: { method: 'PUT' }
            }
        );
        return User;
    });
