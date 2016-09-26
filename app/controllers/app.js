var toDo = angular.module('toDo', []);

toDo.controller('ToDoCtrl', ['$scope', 'todoService', function($scope, todoService){

  $scope.items = todoService.getItems();
  $scope.item = {};
  $scope.dropOptions = ["Completed on Top",
                        "Completed on Bottom",
                        "Due Date Descending",
                        "Due Date Ascending",
                        "None"];

  $scope.activateCompleteFilter = false;
  $scope.dropSort;

  $scope.optionToSort = function() {
    switch($scope.dropOption) {
      case 'Completed on Top':
        $scope.dropSort = "completed"
        break;
      case 'Completed on Bottom':
        $scope.dropSort = "-completed"
        break;
      case 'Due Date Descending':
        $scope.dropSort = "-dueDate"
        break;
      case 'Due Date Ascending':
        $scope.dropSort = "dueDate"
        break;
      case 'None':
        $scope.dropSort = ""
        break;
    }
  }

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
