Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', { name : 'hello'});

Router.route('/noUpdate');

Router.route('/noUpdateSelector')