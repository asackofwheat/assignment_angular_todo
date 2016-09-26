var toDo = angular.module('toDo', []);

toDo.controller('ToDoCtrl', ['$scope', function($scope){

  $scope.items = [{ text: "Eat a sandwich",
                    dueDate: new Date(),
                    completed: false },
                  { text: "Walk some",
                    dueDate: new Date(),
                    completed: false }];

  $scope.item = { };

  $scope.addItem = function() {
    var item = {
      text: $scope.item.text,
      dueDate: $scope.item.dueDate,
      completed: false
    };
    console.log($scope.item.text);
    console.log($scope.item.dueDate);
    $scope.items.push(item);
    $scope.item.text = "";
    $scope.item.dueDate = "";
  };

}]);