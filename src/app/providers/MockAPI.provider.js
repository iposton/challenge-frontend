/**
    This service is provided as a mock API

    This file is NOT to be modifed
    for ANY reason by applicants!

    DO NOT EDIT THIS FILE
*/
(function MockAPIProvider() {

    "use strict";

    angular
        .module("va.challenge.frontend")
        .factory("MockAPI", MockAPI);

    /** @ngInject */
    function MockAPI(MockDataBrowsers, $q, $timeout) {

        var config = {};
       // console.log(config);

        config.get = getData;

        return config;

        function getData(params) {

            // Clone to avoid binding to `MockData`
            var data = _.chain(MockDataBrowsers).cloneDeep();
            var defer = $q.defer();
            var browsers = _.get(params, "browser");

            // If the "browser" param is missing
            // Or if the "browser" param length is equal to the amount of avaiable browsers (7)
            // Then we fail the request immediately
            if (!browsers || browsers.length === 7) {

                defer.reject();

            } else {

                if (browsers.length !== 0) {

                    data = data.filter(filterData);

                }

                $timeout(resolveData, 650);

            }

            return defer.promise;

            function filterData(item) {

                return _.includes(browsers, item.browser);

            }

            function resolveData() {

                defer.resolve(data.value());

            }

        }

    }

})();
