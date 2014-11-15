angular.module('myApp.shared.components.footer',['tmh.dynamicLocale'])
  .config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.2.20/i18n/angular-locale_{{locale}}.js');
  })    
  .controller('FootControl', ['$rootScope', 'tmhDynamicLocale', '$locale', '$scope', 'locale', 'localeSupported', 'localeEvents',
        function ($rootScope, tmhDynamicLocale, $locale, $scope, locale, localeSupported, localeEvents) {
            'use strict';
            
            $rootScope.$locale = $locale;
                
            $scope.supportedLang = localeSupported;
            $scope.localeData = {
                'ar-AE': {
                    flagClass: 'flag-ae',
                    langDisplayText: 'Arabic (UAE)'
                },
                'de-CH': {
                    flagClass: 'flag-ch',
                    langDisplayText: 'German (Swiss)'
                },
                'en-GB': {
                    flagClass: 'flag-gb',
                    langDisplayText: 'English (GB)'
                },           
                'en-US': {
                    flagClass: 'flag-us',
                    langDisplayText: 'English (US)'
                },
                'fr-FR': {
                    flagClass: 'flag-fr',
                    langDisplayText: 'French'
                },
                'ja': {
                    flagClass: 'flag-jp',
                    langDisplayText: 'Japanese'
                },
                'ko-KR': {
                    flagClass: 'flag-kr',
                    langDisplayText: 'Korean'
                },
                'zh-CN': {
                    flagClass: 'flag-cn',
                    langDisplayText: 'Chinese (China)'
                }
            };
            
            $scope.setLocale = function (loc) {
                locale.setLocale(loc);
            };

            locale.ready('common').then(function () {
                $scope.flagClass = $scope.localeData[locale.getLocale()].flagClass;
                $scope.langDisplayText = $scope.localeData[locale.getLocale()].langDisplayText;
            });

            $scope.$on(localeEvents.localeChanges, function (event, data) {
                $scope.flagClass = $scope.localeData[data].flagClass;
                $scope.langDisplayText = $scope.localeData[data].langDisplayText;
                tmhDynamicLocale.set(data.toLowerCase());
            });
        }
    ]);