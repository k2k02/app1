/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var getJson = angular.module('getJson', ['ngRoute']).controller('controller1', function ($log) {
//    
//    $log.debug('hello');
//    
////    var url = '/fields/fieldlist';
////    console.log(url);
////    $http.get(url).success(function (data,$log) {
////        //$scope.posts = data;
////       $log.debug('hello');
////       
////    });
//
//
//});

angular.module('app', [])

.controller('MainCtrl', ['$log', function($log){
    $log.debug('Hello Debug!');
}]);
