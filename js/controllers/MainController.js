var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books!';
  $scope.promo = 'FREE shipping! One week only!';
}]);