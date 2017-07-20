
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/list", {
            templateUrl: "views/list.html",
            // controller: 'RouteController'
        })
        .when("/single/:id", {
            templateUrl: "views/single.html"
        })
    // $locationProvider.html5Mode(true);
});


    // myApp.controller('oneController', function($scope, $routeParams, $http)
    //      {
    //         //Get ID out of current URL
    //         var currentId = $routeParams.id;
    //         console.log(currentId)
    // $http.get("http://localhost:3000/api/chirps/" + currentId)
    //     .then(function (response) {
    //         $scope.thisChirp = response.data;
    //         console.log(location.hash)
    //         console.log(response.data)
    //     })
// })
myApp.controller('allGetController', function ($scope, $http, $location) {
    $http.get("http://localhost:3000/api/chirps")
        .then(function (response) {
            $scope.allChirps = response.data
        })
    $scope.insertdata = function () {
        console.log('clicked')
        $http.post("http://localhost:3000/api/chirps", { 'user': $scope.user, 'message': $scope.message })
            .success(function (data, status, headers, config) {
                $scope.user = ''
                $scope.message = ''
                $http.get("http://localhost:3000/api/chirps")
                    .then(function (response) {
                        $scope.allChirps = response.data;

                    })
            });
    }
    $scope.goToSingle = function (id) {
        $http.get('/api/chirps/')
            .then(function () {
                $location.path('/single/' + id)
                id = ($location.path('/single/' + id))
            })

    }


});

 myApp.controller('oneController', function($scope, $routeParams, $http)
         {
            //Get ID out of current URL
            var currentId = $routeParams.id;
            console.log(currentId)
    $http.get("http://localhost:3000/api/chirps/" + currentId)
        .then(function (response) {
            $scope.thisChirp = response.data;
            console.log(location.hash)
            console.log(response.data)
        })
         });
myApp.controller('deleteController', function($scope, $http) {    
    console.log('dbl')
         $scope.deleteSingle = function (id) {
        $http.get('/api/chirps/')
            .then(function () {
                $location.path('/single/' + id)
                id = ($location.path('/single/' + id))
            })

  }})