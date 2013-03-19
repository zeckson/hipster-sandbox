//App.Router = Em.Router.extend({
//    root: Em.Route.extend({
//        index: Em.Route.extend({
//            route: '/'
//        })
//    })
//});

App.Router.map(function() {
    this.route("users", { path: "/users" });
    this.route("user", { path: "/users/:user_id" });
});

App.IndexRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo('users');
    }
});

App.UsersRoute = Em.Route.extend({
    model: function() {
        return App.User.find();
    },
    setupController: function(controller, users) {
        this._super(controller, users);
    }
});

App.UserRoute = Em.Route.extend({
    model: function(params) {
        return App.User.find(params.post_id);
    }
});

