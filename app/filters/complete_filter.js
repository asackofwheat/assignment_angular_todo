toDo.filter('completeFilter', function() {

  return function(collection, activateCompleteFilter) {

    if (!activateCompleteFilter) {
      return collection;
    }

    var filteredCollection = []

    angular.forEach(collection, function(item) {
      if (!item.completed) {
        filteredCollection.push(item)
      }
    })
    return filteredCollection;
  };
});
