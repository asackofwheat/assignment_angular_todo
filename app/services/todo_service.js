toDo.factory('todoService', [function() {

  var stub = {}

  _items = [{
    text: "Eat a sandwich",
    dueDate: new Date(),
    completed: false
  }, {
    text: "Walk some",
    dueDate: new Date(),
    completed: false
  }];

  stub.getItems = function() {
    return _items;
  }

  stub.createItem = function(item) {
    item.completed = false;
    _items.push(item);
  };

  stub.removeItem = function(item) {
    var index = _items.indexOf(item);
    _items.splice(index, 1);
  }

  stub.clearCompleted = function() {
    for (var i = _items.length - 1; i >= 0; i--) {
      if (_items[i].completed) {
        stub.removeItem(_items[i]);
      }
    }
  }

  return stub;

}]);
