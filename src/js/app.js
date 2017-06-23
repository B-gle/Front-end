const app = angular.module('bgle', ['ngRoute', 'ngResource']);

app.factory('BgleMember', function ($resource) {
    let BgleMember = $resource('http://223.194.155.143:3000/member', {}, {
        'get': {method: 'GET'},
        'post': {method: 'POST', headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}},
        'put': {method: 'PUT'},
        'delete': {method: 'DELETE'}
    });
    return BgleMember;
});

app.factory('BgleGroup', function ($resource) {
    let BgleGroup = $resource('http://223.194.155.143:3000/group/59374d6d1d7d33832d021c1a', {}, {
        'get': {method: 'GET'},
        'post': {method: 'POST'},
        'put': {method: 'PUT'},
        'delete': {method: 'DELETE'}
    });
    return BgleGroup;
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/bgleGroup', {templateUrl: 'page/bgleGroup.html', controller: 'bgleGroupController'})
        .when('/sendBgle', {templateUrl: 'page/sendBgle.html', controller: 'sendBgleController'})
        .when('/bgleFriend', {templateUrl: 'page/bgleFriend.html', controller: 'bgleFriendController'})
        .otherwise({redirectTo: '/bgleGroup'});
}]);

app.controller('BgleController', function ($scope, BgleMember) {

});

app.controller('bgleGroupController', function ($scope, BgleMember) {
    BgleMember.get({name: 'Saimon', email: 'saimon@devdactic.com'},function(response){
        console.log(response);
        $scope.bgleGroup = response;
    });
});

app.controller('sendBgleController', function ($scope, BgleMember) {

});

app.controller('bgleFriendController', function ($scope, BgleMember) {

});