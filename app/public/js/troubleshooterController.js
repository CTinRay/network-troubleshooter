'use strict';

var defaultLanguage = 'zh';
var model = model || { enquiryMap: {} };
var troubleshooterApp = angular.module( "networkTroubleshooter", ["ngSanitize", "ngAnimate"] )
/*  
var troubleshooterApp = 
angular
    .module( "networkTroubleshooter", ["ngSanitize", "ngAnimate", "ngRoute"] )
    .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/welcome.html',
            })
            .when('/DIY', {
                controller: 'homeController'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html',
            })
            .when('/term_of_service', {
                templateUrl: 'partials/termOfService.html',
            });
        $locationProvider.html5Mode(true);
    }]);
*/
troubleshooterApp.controller( "troubleshooterController", [ '$scope', '$http', '$location', function( $scope , $http , $location ){

    var troubleshooter = {

        done: function () {
            console.log("TroubleShooter--Done");
        },

        contact: function () {
            showOverlay('termOfService');
            console.log("TroubleShooter--Contact");
        }
    };

    
    function showOverlay( url ){
        $scope.overlay_url = 'partials/' + url + '.html'; 
    };
    function hideOverlay(){
        $scope.overlay_url = '';
    };
    $scope.currentLanguage = defaultLanguage;

    $scope.hideOverlay = false;
    $scope.guide = { url: "guides/check-ip.html" };
    
    $scope.enquiryHistory = [];

    $scope.chooseLanguage = function (lang) {
        // Load the enquiry map corresponding to the specified language
        $http.get('data/' + lang + '/issues.json').
            success(function(enquiryMap) {
                model.enquiryMap = enquiryMap;
                $scope.currentEnquiry = enquiryMap["issue"];
            }).
            error(function() {
              console.log('data/' + lang + '/issues.json' + " cannot be loaded!");
            });

        // Update current language
        $scope.currentLanguage = lang;
        
    };

    $scope.nextAction = function (action) {
        // Do the specified action
        troubleshooter[action]();
    };

    $scope.nextEnquiry = function ( next, action ){	
        if( next ){
            $scope.enquiryHistory.push( $scope.currentEnquiry );
            $scope.currentEnquiry = model.enquiryMap[ next ];
            window.setTimeout(  window.componentHandler.upgradeDom, 100 );
        }
    };

    $scope.historyBacktrack = function ( index ){
        $scope.currentEnquiry = $scope.enquiryHistory[index];
        $scope.enquiryHistory = $scope.enquiryHistory.slice( 0, index );
        window.setTimeout(  window.componentHandler.upgradeDom, 100 );
    };

    $scope.showGuide = function (url) {
        $scope.guide_url = url;
        showOverlay('guide');
    }

    $scope.showOverlay = showOverlay;

    $scope.hideOverlay = hideOverlay;


}]);

troubleshooterApp.controller( 'homeController', [ '$scope', function( $scope ){
    $scope.hideOverlay = true;
}]);