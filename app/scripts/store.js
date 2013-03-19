//Requires Ember-Data
var myCustomAdapter = DS.RESTAdapter.extend({
    url: 'http://localhost:8080/rest',
    findAll: function (store, type, since) {
        var root = this.rootForType(type);

        this.ajax(this.buildURL(root) + "?fields=id,name,avatar,contacts,groups(name)", "GET", {
            data: this.sinceQuery(since),
            success: function (json) {
                Ember.run(this, function () {
                    this.didFindAll(store, type, json);
                });
            }
        });
    }
});
myCustomAdapter.map('App.User', {
    avatar: { embedded: 'always' }
});
myCustomAdapter.map('App.Avatar', {
    pictureUrl: { key: 'pictureUrl' }
});
App.Store = DS.Store.extend({
    revision: 11,
    adapter: myCustomAdapter.create()
});
