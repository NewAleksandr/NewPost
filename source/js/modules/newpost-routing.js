
NewpostApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainPageController'
        })

        .when('/tracking', {
            templateUrl : 'pages/tracking.html',
            controller  : 'trackingPageController'
        })

        .when('/price', {
            templateUrl : 'pages/price.html',
            controller  : 'pricePageController'
        })

        .when('/delivery-time', {
            templateUrl : 'pages/delivery-time.html',
            controller  : 'delivery-timeController'
        })

        .when('/nearest-department', {
            templateUrl : 'pages/nearest-department.html',
            controller  : 'nearest-departmentPageController'
        })

        .when('/work-schedule', {
            templateUrl : './pages/work-schedule.html',
            controller  : 'work-scheduleController'
        })

        .when('/list-mode', {
            templateUrl : './pages/map-view/list-mode.html',
            controller  : 'list-modeController'
        })

        .otherwise({
            redirectTo: '/'
        });

});
