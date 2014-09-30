app.factory('itemsFactory', function ($rootScope, $http, $q) {
    var getItems = function () {
        var deferred = $q.defer();

        var request = $http({
            method: "post",
            url: "shopping.php",
            data: {
                'load': 'down'
            }
        });

        request.success(function (data) {
            var temp = data.split('-');

            $rootScope.items = [];

            angular.forEach(temp, function (itemName) {
                $rootScope.items.push({
                    'checked': false,
                    'name': itemName
                });
            });

            deferred.resolve();
        }).error(function () {
            deferred.reject();
        });

        return deferred.promise;
    };

    var saveItems = function () {
        var deferred = $q.defer();
        var all = "";

        angular.forEach($rootScope.items, function (item) {
            all += "-" + item.name;
        });

        all = all.substr(1);

        var request = $http({
            method: "post",
            url: "shopping.php",
            data: {
                'load': 'up',
                'shopping': all
            }
        });

        request.success(function (data) {
            deferred.resolve();
        }).error(function () {
            deferred.reject();
        });

        return deferred.promise;
    };

    return {
        'getItems': getItems,
        'saveItems': saveItems
    };
});
