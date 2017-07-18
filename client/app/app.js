var myApp = angular.module("myApp", ["ngRoute" ]);

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


myApp.controller('allGetController', function($scope, $http) {
  $http.get("http://localhost:3000/api/chirps")
  .then(function(response) {
      $scope.allChirps = response.data;
  })



$scope.add= function(clicker){
    $http.post('http://localhost:3000/api/chirps',{text:$scope.new.chirp.user}) .sucess(function(data){
        $scope.chirp.user=data;
        $scope.new.chirp.user=''
        console.log('yeh')
    })
}
// myApp.controller('postController', function clicker($scope, $http) {
//     console.log('in')
//     $scope.chirp;
//     $scope.submit.Form=function(){
//     // $scope.postFunc= function(){
//     //     console.log('clicked')
// $http({
//                 method: "POST",
//                 url: "http://localhost:3000/api/chirps",
// 				data: $scope.chirp,
//                 datatype: "json",
//             }).then(function mySucces(response) {
//                console.log(response);
//             }, function myError(response) {
//                  console.log(response);
//             }); 


//     }








    //   $http.post("http://localhost:3000/api/chirps")
//   .then(function(response) {
      
//       console.log(response.data)
//       $scope.allChirps = response.data;
//         })
});

// angular.module('postController', [])
// .controller('myCtrl', function ($scope, $http) {
//     $scope.hello = {name: "Boaz"};
//     $scope.newName = "";
//     $scope.sendPost = function() {
//         var data = $.param({
//             json: JSON.stringify({
//                 name: $scope.newName
//             })
//         });
//         $http.post("/echo/json/", data).success(function(data, status) {
//             $scope.hello = data;
//         })
//     }                   
// })