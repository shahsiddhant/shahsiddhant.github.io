/**
 * Created by SiddhantShah on 6/27/16.
 */
$(document).ready(function(){
    $('.nav').click(function(){
        $('#nav-icon').toggleClass('open');
        if($('.overlay').height()==0){
            $('.overlay').css('height','100%');

        }
        else{
            $('.overlay').css('height','0');

        }

    });

});
var webApp = angular.module("webApp",["ngRoute"]);



webApp.controller("webController",['$scope','$location', function($scope,$location){
    $scope.go = function(hash){
        $location.path(hash);
    };
}]);




webApp.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "App/Views/homeView.html"
  })
      .when("/work",{
          templateUrl: "App/Views/workView.html"
      })
      .when("/about",{
          templateUrl: "App/Views/aboutView.html"
      })
      .when("/contact",{
          templateUrl: "App/Views/contactView.html"
      })
      .when("/webDes",{
          templateUrl: "App/Views/webDesView.html"
      })
      .when("/animation",{
          templateUrl: "App/Views/animationView.html"
      })
      .when("/cc",{
          templateUrl: "App/Views/ccView.html"
      })
      .when("/video",{
          templateUrl: "App/Views/videoView.html"
      })
      .when("/game",{
          templateUrl: "App/Views/gameView.html"
      })
      .when("/branding",{
          templateUrl: "App/Views/brandingView.html"
      })
  .otherwise("/");
});
