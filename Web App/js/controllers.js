function MainCtrl($scope, $rootScope, $modal, itemsFactory) {
    $rootScope.items = [];

    $scope.addItem = function () {
        // Open a modal to add an item
        var modalInstamnce = $modal.open({
            templateUrl: 'templates/addItem.html',
            controller: AddItemModalCtrl
        });
    };

    $scope.refresh = function () {

    };

    $scope.removeChecked = function () {
        var changed = false;

        do {
            changed = false;
            for (var i = 0; i < $rootScope.items.length; i++) {
                if ($rootScope.items[i].checked) {
                    $rootScope.items.splice(i, 1);
                    changed = true;
                }
            }
        } while (changed);
    };

    $scope.save = function () {

    };
}

function AddItemModalCtrl($scope, $rootScope, $modalInstance) {
    $scope.item = {
        'checked': false,
        'name': ''
    };

    $scope.save = function () {
        if (!!$scope.item.name) {
            $rootScope.items.push($scope.item);
            $modalInstance.close();
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}
