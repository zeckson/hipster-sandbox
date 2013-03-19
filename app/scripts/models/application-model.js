// Requires Ember-Data
App.User = DS.Model.extend({
//    id: DS.attr('string'),
    name: DS.attr('string'),
    avatar: DS.belongsTo('App.Avatar', {embedded: true}),
    details: DS.hasMany('App.UserDetail')
});

App.UserDetail = DS.Model.extend({
    user: DS.belongsTo('App.User')
});

App.Avatar = DS.Model.extend({
    pictureUrl: DS.attr('string', { key: 'pictureUrl' })
});
