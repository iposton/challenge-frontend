/*
    this is simply an example of a directive that
    conforms to the eslint style guide
    and not necessarily a baseline to follow
*/
(function ExampleDirectiveDirective() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .directive("exampleDirective", ExampleDirective);

    /** @ngInject */
    function ExampleDirective(nv, d3) {

        /*
            nv and d3 are defined in index.constants.js as
            injectible dependencies instead as window global
        */

        var config = {
            restrict: "E",
            templateUrl: "app/components/example-directive/example-directive.html",
            controller: ExampleDirectiveController,
            controllerAs: "vm",
            bindToController: true,
            scope: true,
            link: postLink
        };

        return config;

        function postLink(scope, iEl, iAttrs, vm) {

            var selectedBrowsers = {};
            var hasSelectedBrowsers = false;

            // create object when browser is checked in view
            scope.toggle = function(b) {
                if (selectedBrowsers[b.browser] == null) {
                    selectedBrowsers[b.browser] = true;
                  
                    if (Object.keys(selectedBrowsers).length >= 1) { scope.hasSelectedBrowsers = true; } else { scope.hasSelectedBrowsers = false; }
                } else {
                    delete selectedBrowsers[b.browser];
                    if (Object.keys(selectedBrowsers).length >= 1) { scope.hasSelectedBrowsers = true; } else { scope.hasSelectedBrowsers = false; }
                }

                vm.selectedBrowsers = Object.keys(selectedBrowsers);
                console.log(Object.keys(selectedBrowsers));
                vm.hasSelectedBrowsers = hasSelectedBrowsers;
            };

            // Create a simple toggle when checkboxes are checked show/hide div
            scope.showClicks = function() {
                vm.clicks = !vm.clicks;
            }

            scope.showCompleteImpressions = function() {
                vm.completions = !vm.completions;
            }

            scope.showFirstqPercent = function() {
                vm.firstqPercent = !vm.firstqPercent;
            }

            scope.showMidqPercent = function() {
                vm.midpointPercent = !vm.midpointPercent;
            }

            scope.showThirdqPercent = function() {
                vm.thirdPercent = !vm.thirdPercent;
            }

            scope.showFirstQ = function() {
                vm.firstqImpressions = !vm.firstqImpressions;
            }

            scope.showMid = function() {
                vm.midpointImpressions = !vm.midpointImpressions;
            }

            scope.showThirdQ = function() {
                vm.thirdqImpressions = !vm.thirdqImpressions;
            }


            // format pecentages for view
            scope.displayPercent = function(percent) {
                return (percent * 100).toFixed(3);
            };

            // format pecentages for view
            scope.displayCompletePercent = function(percent) {
                return (percent * 100).toFixed(0);
            };

            // Filter Browser Data in table view
            scope.searchBy = function() {
                return function(b) {

                    if (selectedBrowsers[b.browser] === true || Object.keys(selectedBrowsers).length == 0) {
                        return true;
                    }
                }
            };
            
            // Get the total number for each checked browser and add each if checked total
            scope.getTotal = function(){
                var total = 0;
                for(var i = 0; i < vm.browsers.length; i++){
                    var impressions = vm.browsers[i];
                     if (selectedBrowsers[impressions.browser] === true || Object.keys(selectedBrowsers).length == 0) {
                        total += (impressions.impressions);
                    }
                }
                return total;
            }; 

            scope.getTotalDay = function(){
                var totalDay = 0;
                var totalDay2 = 0;
                var totalDay3 = 0;
                var totalDay4 = 0;
                var totalDay5 = 0;
                var totalDay6 = 0;
                var totalDay7 = 0;
                var totalDay8 = 0;
                var totalDay9 = 0;
                var totalDay10 = 0;
                var totalDay11 = 0;
                var totalDay12 = 0;
                var totalDay13 = 0;
                var totalDay14 = 0;
                var totalDay15 = 0;
                var totalDay16 = 0;
                var totalDay17 = 0;
                var totalDay18 = 0;
                var totalDay19 = 0;
                var totalDay20 = 0;
                var totalDay21 = 0;
                var totalDay22 = 0;
                var totalDay23 = 0;
                var totalDay24 = 0;
                var totalDay25 = 0;
                var totalDay26 = 0;
                var totalDay27 = 0;
                var totalDay28 = 0;
                var totalDay29 = 0;
                var totalDay30 = 0;
                var totalDay31 = 0;

                for(var i = 0; i < vm.browsers.length; i++){
                    var impressions = vm.browsers[i];
                    var date = impressions.date;
                    var today = new Date(date).toISOString().split('T')[0];
                    
                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-01') {
                        totalDay += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-02') {
                        totalDay2 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-03') {
                        totalDay3 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-04') {
                        totalDay4 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-05') {
                        totalDay5 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-06') {
                        totalDay6 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-07') {
                        totalDay7 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-08') {
                        totalDay8 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-09') {
                        totalDay9 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-10') {
                        totalDay10 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-11') {
                        totalDay11 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-12') {
                        totalDay12 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-13') {
                        totalDay13 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-14') {
                        totalDay14 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-15') {
                        totalDay15 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-16') {
                        totalDay16 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-17') {
                        totalDay17 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-18') {
                        totalDay18 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-19') {
                        totalDay19 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-20') {
                        totalDay20 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-21') {
                        totalDay21 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-22') {
                        totalDay22 += (impressions.impressions);
                    }

                      if (selectedBrowsers[impressions.browser] === true && today === '2016-03-23') {
                        totalDay23 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-24') {
                        totalDay24 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-25') {
                        totalDay25 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-26') {
                        totalDay26 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-27') {
                        totalDay27 += (impressions.impressions);
                    }

                      if (selectedBrowsers[impressions.browser] === true && today === '2016-03-28') {
                        totalDay28 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-29') {
                        totalDay29 += (impressions.impressions);
                    } 

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-30') {
                        totalDay30 += (impressions.impressions);
                    }

                    if (selectedBrowsers[impressions.browser] === true && today === '2016-03-31') {
                        totalDay31 += (impressions.impressions);
                    } 

    
                }
               vm.totalDay = totalDay;
               vm.totalDay2 = totalDay2;
               vm.totalDay3 = totalDay3;
               vm.totalDay4 = totalDay4;
               vm.totalDay5 = totalDay5;
               vm.totalDay6 = totalDay6;
               vm.totalDay7 = totalDay7;
               vm.totalDay8 = totalDay8;
               vm.totalDay9 = totalDay9;
               vm.totalDay10 = totalDay10;
               vm.totalDay11 = totalDay11;
               vm.totalDay12 = totalDay12;
               vm.totalDay13 = totalDay13;
               vm.totalDay14 = totalDay14;
               vm.totalDay15 = totalDay15;
               vm.totalDay16 = totalDay16;
               vm.totalDay17 = totalDay17;
               vm.totalDay18 = totalDay18;
               vm.totalDay19 = totalDay19;
               vm.totalDay20 = totalDay20;
               vm.totalDay21 = totalDay21;
               vm.totalDay22 = totalDay22;
               vm.totalDay23 = totalDay23;
               vm.totalDay24 = totalDay24;
               vm.totalDay25 = totalDay25;
               vm.totalDay26 = totalDay26;
               vm.totalDay27 = totalDay27;
               vm.totalDay28 = totalDay28;
               vm.totalDay29 = totalDay29;
               vm.totalDay30 = totalDay30;
               vm.totalDay31 = totalDay31;
            };

           var dataWatcher = scope.$watch("vm.data", doSomething);

            scope.$on("$destroy", destroyWatchers);

            function doSomething(newValue) {

                // var d3Format = d3.format("05d");
                // var value = newValue[3].value;

                // vm.rawValue = value;
                // vm.formattedValue = d3Format(value);

            }

            function destroyWatchers() {

                dataWatcher();

            }

        }

    }

    /** @ngInject */
    function ExampleDirectiveController(MockDataBrowsers) {

        var vm = this;

        vm.browsers = MockDataBrowsers;
        //console.log(vm.browsers);

        var browserNames = [];
        var browserNamesMobile = [];
        var mb = [];
        var browserMetrics = [];

        // Parse data and push items into an array 
        for (var i = 0; i < vm.browsers.length; i++) {
            var browser = vm.browsers[i];
            browserNames.push(browser);
            browserNames.splice(4);
            browserNamesMobile.push(browser);
            var mb = browserNamesMobile.slice(4, 7);
            browserMetrics.push(browser);


            if (browser.browser == "chrome") {
                browser.label = "Chrome";
                browser.platform = "Desktop";
            }

            if (browser.browser == "ie") {
                browser.label = "Internet Explorer";
                browser.platform = "Desktop";
            }

            if (browser.browser == "safari") {
                browser.label = "Safari";
                browser.platform = "Desktop";
            }

            if (browser.browser == "firefox") {
                browser.label = "Firefox";
                browser.platform = "Desktop";
            }

            if (browser.browser == "chrome-mobile") {
                browser.label = "Chrome";
                browser.platform = "Mobile";
            }

            if (browser.browser == "androidwebkit") {
                browser.label = "Android Webkit";
                browser.platform = "Mobile";
            }

            if (browser.browser == "mobile-safari") {
                browser.label = "Safari";
                browser.platform = "Mobile";
            }

        }

        vm.browser = browser;
        vm.browserNames = browserNames;
        vm.mobileBrowsers = mb;
        vm.browserMetrics = browserMetrics;
        //console.log(vm.browsers);

    }

})();
