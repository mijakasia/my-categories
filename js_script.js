var myCategories = angular.module('myCategories', []);

myCategories.controller("categoriesController", function categoriesController($scope){
  $scope.categories = [
    {
      name: "flowers",
      item: [{name:"roses", changing: false}, {name:"tulips", changing: false}],
      active: false,
      editing: false 
    },

    {
      name: "hobbies",
      item: [{name:"coding", changing: false}, {name:"volleyball", changing: false},{ name:"movies", changing: false}],
      active: false,
      editing: false
    },

    {
      name: "goals",
      item: [{name:"Become Angular Ninja", changing: false}, {name: "Visit Japan",changing: false},
      {name: "Visit China", changing: false}],
      active: false,
      editing: false
    }
  ]

  $scope.removeCategory = function (index) {
    $scope.categories.splice(index,1);
  }

  $scope.addCategory = function(){
    if (!$scope.newCategory) return

    var categoryToAdd = {
      name: $scope.newCategory,
      item: [],
      active: false,
      editing: false
    }
    $scope.categories.push(categoryToAdd );
    $scope.newCategory = "";
  }
  $scope.toggleItems = function(category){
      category.active = !category.active;
  }

  $scope.addItem = function(category){
    if (!category.itemName) return
    category.item.push({name: category.itemName, changing: false});
    category.itemName = "";
  }

  $scope.removeItem = function(category, index){
    category.item.splice(index,1);
  }

  $scope.startEditing = function(category) {
    category.editing = true;
  }

  $scope.doneEditing  = function(category){
    if (category.name) {
      category.editing = false;
    }
  }

  $scope.startChanging = function(item){
    item.changing = true;
  }

  $scope.doneChanging = function  (item){
    if (item.name) {
      item.changing = false;
    }
  }
})