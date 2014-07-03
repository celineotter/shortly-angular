angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    $http({
      method: 'GET',
      url: '/api/links'
    })
    .success(function(data, status, headers, config) {
      var linkInfo = [];
      for (var i=0; i < data.length; i++){
        linkInfo.push(data[i]);
      }

      $scope.data.links = linkInfo;
    })
    .error(function(data, status, headers, config) {
    });
  };
  $scope.getLinks();
});
