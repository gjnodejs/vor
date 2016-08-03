angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);
var app = angular.module('app', ['ngMessages']);