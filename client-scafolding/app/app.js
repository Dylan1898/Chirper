var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/list", {
        templateUrl : "views/list.html",
        // controller: 'RouteController'
    })
    .when("/single", {
        templateUrl : "views/single.html"
    })
});
//   myApp.controller("RouteController", function($scope) {

//     })


myApp.controller('ClickController', ['$scope', function($scope) {
  $scope.push = function(value) { return value * 2; };
}]);
