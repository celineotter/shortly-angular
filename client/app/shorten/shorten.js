angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.addLink = function (newLink) {
    $scope.loading = true;

    $http({
      method: 'POST',
      url: '/api/links'
    })
    .success(function(data, status, headers, config) {
      $scope.newLink = '';
      $scope.loading = false;
    })
    .error(function(data, status, headers, config) {
    });

  };



});
