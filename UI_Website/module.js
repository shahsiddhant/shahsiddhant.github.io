var uiApp = angular.module('uiApp',['ngRoute']);
uiApp.config(function($routeProvider){
  $routeProvider
  .when("/content",{
      templateUrl: 'UI_Website/Views/ContentView/ContentView.html'
  })
  .otherwise('/');


});
