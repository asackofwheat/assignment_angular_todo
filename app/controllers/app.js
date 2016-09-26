var toDo = angular.module('toDo', []);

toDo.controller('ToDoCtrl', ['$scope', 'todoService', function($scope, todoService){

  $scope.items = todoService.getItems();
  $scope.item = {};

  $scope.activateCompleteFilter = false;

  $scope.addItem = function() {
    var item = {
      text: $scope.item.text,
      dueDate: $scope.item.dueDate,
    };
    todoService.createItem(item);
    $scope.item.text = "";
    $scope.item.dueDate = "";
  };

  $scope.deleteItem = function(item) {
    todoService.removeItem(item)
  }

  $scope.clearCompleted = function() {
    todoService.clearCompleted();
  }

  $scope.showCompleteButton = function(filter) {
    return filter ? "Show Completed" : "Hide Completed"
  }

}]);
