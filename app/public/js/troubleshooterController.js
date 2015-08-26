'use strict';

var defaultLanguage = 'zh';

var languages = {
    'zh': {
        title: '中文版',
    },
    'en': {
        title: 'English Version',
    }
};

var model = model || { enquiryMap: {} };

var troubleshooterApp = angular.module( "networkTroubleshooter", ["ngSanitize", "ngAnimate"] );

troubleshooterApp.controller( "troubleshooterController", function( $scope , $http ){

    $scope.languages = languages;
    $scope.currentLanguage = defaultLanguage;

    $scope.guideOpen = false;
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

    $scope.showGuide = function( guide ){
        $scope.guide = guide;
        $scope.guideOpen = true;
    };

    $scope.hideGuide = function(){
        $scope.guideOpen = false;
    };

});
