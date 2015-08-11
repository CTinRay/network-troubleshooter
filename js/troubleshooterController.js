'use strict';

var troubleshooterApp = angular.module( "networkTroubleshooter", [] );

troubleshooterApp.controller( "troubleshooterController", function( $scope ){
    $scope.enquiryHistory = [];
    $scope.currentEnquiry = model.enquiryMap["issue"];

    $scope.nextEnquiry = function ( next ){	
        if( next !== undefined ){
	    $scope.enquiryHistory.push( $scope.currentEnquiry );
	    $scope.currentEnquiry = model.enquiryMap[ next ];
            window.componentHandler.upgradeDom();
        }
    };

});
