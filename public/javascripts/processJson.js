/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getJson = angular.module('getJson', ['ngRoute']).controller('controller1', function ($scope, $http) {
    var url = "../../routes/fields.js";
    console.log(url);
    $http.get(url).success(function (data) {
        $scope.posts = data.data;
    });

});