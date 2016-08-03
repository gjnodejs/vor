angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Dashboard",
        "link": "dashboard"
    }, {
        "title": "Create New VoR",
        "link": "vor/create"
    }];
    
    $scope.isCollapsed = false;
}]);