toDo.directive('todoItem', function(){

  return {
    templateUrl: "/app/directives/todo_item.html",
    restrict: "AE",
    scope: {
      deleteItem: "&",
      item: "="
    }
  }
});
