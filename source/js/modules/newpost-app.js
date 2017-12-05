var NewpostApp = angular.module('NewpostApp', ['ngSanitize', 'ui.select' , 'ngRoute']);

    NewpostApp.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
