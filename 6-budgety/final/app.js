var budgetController = (function() {


  var Expense = function(id, description, value) {
    this.id = id;
    this, (description = description);
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
     allItems = {
       exp = [],
       inc = []
     },
      
     total = {
       exp = 0,
       inc = 0

     }
  }
})();


var UIController = (function() {})();

var Controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    console.log("it works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
