var uiApp = angular.module('uiApp',['ngRoute']);
uiApp.config(function($routeProvider){
  $routeProvider
  .when("/content",{
      templateUrl: 'Views/ContentView.html'
  })
  .otherwise('/');


});
