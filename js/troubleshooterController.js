'use strict';

var troubleshooterApp = angular.module( "networkTroubleshooter", [] );

troubleshooterApp.controller( "troubleshooterController", function( $scope ){
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
});
