'use strict';

var troubleshooterApp = angular.module( "networkTroubleshooter", ["ngSanitize", "ngAnimate"] );

troubleshooterApp.controller( "troubleshooterController", function( $scope ){

    $scope.guideUrl = "guides/check-ip.html";
    $scope.guideOpen = true;
    
    $scope.enquiryHistory = [];
    $scope.currentEnquiry = model.enquiryMap["issue"];

    $scope.nextEnquiry = function ( next ){	
        if( next !== undefined ){
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

    $scope.showGuide = function( url ){
        $scope.guideUrl = url;
        $scope.guideOpen = true;
    };

    $scope.hideGuide = function(){
        $scope.guideOpen = false;
    };

});
