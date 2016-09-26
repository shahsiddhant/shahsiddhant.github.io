var uiApp = angular.module('uiApp',['ngRoute']);
uiApp.config(function($routeProvider){
  $routeProvider
  .when("/content",{
      templateUrl: 'uiWebsite/Views/ContentView/ContentView.html'
  })
  .otherwise('/');


});
