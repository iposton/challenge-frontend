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

          scope.toggle = function(b) {
            if (selectedBrowsers[b.browser] == null) {
                selectedBrowsers[b.browser] = true;
                if(Object.keys(selectedBrowsers).length >= 1){scope.hasSelectedBrowsers = true;}
                else{scope.hasSelectedBrowsers = false;}
            }
            else {
                delete selectedBrowsers[b.browser];
                if(Object.keys(selectedBrowsers).length >= 1){scope.hasSelectedBrowsers = true;}
                else{scope.hasSelectedBrowsers = false;}
            }
           vm.selectedBrowsers = selectedBrowsers;
           console.log(Object.keys(selectedBrowsers));
           vm.hasSelectedBrowsers = hasSelectedBrowsers;
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

         for (var i = 0; i < vm.browsers.length; i++) {
            var browser = vm.browsers[i];
                browserNames.push(browser);
                browserNames.splice(4);
                browserNamesMobile.push(browser);
                var mb = browserNamesMobile.slice(4, 7);
                browserMetrics.push(browser);
                browserMetrics.splice(1);

                 if(browser.browser == "chrome") {
                    browser.label = "Chrome";
                    browser.platform = "Desktop";
                  }

                 if(browser.browser == "ie") {
                    browser.label = "Internet Explorer";
                    browser.platform = "Desktop";
                 }

                 if(browser.browser == "safari") {
                    browser.label = "Safari";
                    browser.platform = "Desktop";
                 }
                
                 if(browser.browser == "firefox") {
                    browser.label = "Firefox";
                    browser.platform = "Desktop";
                 }

                if(browser.browser == "chrome-mobile") {
                    browser.label = "Chrome";
                    browser.platform = "Desktop";
                 }

                 if(browser.browser == "androidwebkit") {
                    browser.label = "Android Webkit";
                    browser.platform = "Desktop";
                 }
                
                 if(browser.browser == "mobile-safari") {
                    browser.label = "Safari";
                    browser.platform = "Desktop";
                 }
            
          }
           vm.browser = browser;

           vm.browserNames = browserNames;
           vm.mobileBrowsers = mb;
           vm.browserMetrics = browserMetrics;
           console.log(vm.browser);

    }

})();
