var idleStates = ['Active', 'Idle', 'Inactive'];
SmartReload.configure({
    reload: {
        firstStart: true,
        router: true,
        idle: true,
        selector: true
    },
    idleTracker: {
        detectorMs: 1000,
        idleThreshold: 4,
        inactiveThreshold: 20,
        disconnectInactive: false
    },
    debug: true,
    splashScreen: true
});

SmartReload.selectors = {
    form: {
        selector: 'form',
        enabled: false
    }
};

SmartReload.routes = {
    noUpdate : true
};

Template.hello.events({
    'click #no-update-page': function() {
        Router.go('noUpdate');
    },
    'click #no-update-selector-page': function() {
        Router.go('noUpdateSelector');
    }
});

Template.noUpdate.events({
    'click #update-page': function() {
        Router.go('/');
    }
});

Template.noUpdateSelector.events({
    'click #update-page': function() {
        Router.go('/');
    }
});

Template.layout.helpers({
    userStatus: function () {
        var status = IdleWatcher.getStatus();
        return status ? idleStates[status] : 'Active';
    },
    templateReload: function () {
        var status = SmartReload.getReloadTemplateStatus();
        return status || 'false';
    },
    hasRetry: function () {
        var status = SmartReload.getRetryStatus();
        return status || 'false';
    },
    blacklistSelectorStatus: function() {
        var status = SmartReload.getBlacklistSelectorStatus();
        return status || 'false';
    }
});
