angular.module('svyphonegapLaunchNavigator', ['servoy'])
    .factory("svyphonegapLaunchNavigator", function($services) {
        var scope = $services.getServiceScope('svyphonegapLaunchNavigator');
        return {
            launchNavigator: function(address) {
                try {
                    launchnavigator.navigate(address);

                } catch (e) {
                    window.alert('error opening link' + e.message);
                }
            }
        }
    })
    .run(function($rootScope, $services) {})