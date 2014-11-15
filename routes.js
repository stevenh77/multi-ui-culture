angular.module('myApp.core.router')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';

            $routeProvider.
                when('/home', {
                    templateUrl: 'views/_home.html'
                }).
                when('/demo', {
                    templateUrl: 'views/demo.part.html'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ])
    .value('localeSupported', [
        'ar-AE',
        'de-CH',
        'en-GB',
        'en-US',
        'fr-FR',
        'ja',
        'ko-KR',
        'zh-CN'
    ]);
    
    
    /*
    
    ar-AE:  Arabic - UAE
    de-CH:  German - Switzerland
    en-GB:  English - Great Britain
    en-US:  English - USA
    fr-FR:  French - France
    ja-JA:  Japan
    ko-KO:  Korea
    zh-CN:  China
    
    */