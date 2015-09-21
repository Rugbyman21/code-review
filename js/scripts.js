function Pizza(size, quinity, topping) {
// debugger;
  this.size = size;
  this.quinity = quinity;
  this.topping = topping;
};

Pizza.prototype.totalCost = function() {
// debugger;

  var toppingList = this.topping.split(" ");
  var toppingCost = ((toppingList.length * .50) * (this.quinity));
  var sizeCost = 0;


  if (this.size === "large") {
    sizeCost = 10;
  } else if (this.size === "medium") {
    sizeCost = 7;
  }  else if (this.size === "small") {
      sizeCost = 5;
  } else {
    sizeCost = 12;
  }
// debugger;


  var totalCost = toppingCost + (sizeCost * (parseInt(this.quinity)));


  return totalCost;

};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    var costForAll = 0;
    event.preventDefault();

    $(".pizzaCreation").each(function() {
    var pizzaTopping = $("input#topping").val().toString();
    var size = $("select#size").val();
    var quinity = $("input#quinityOfPizza").val();
    var pizza1 = new Pizza(size, quinity, pizzaTopping);
    $("#pizzaCostDisplay").text(quinity + " " + size + " " + "pizza with " + pizzaTopping + " " + "will cost $" + pizza1.totalCost());
    costForAll += pizza1.totalCost();
  });

  $("#costForAllPizza").text("total cost for all pizza's will be $" + costForAll);
    $("select#size").val("Select Size");
    $("input#topping").val("");
    $("input#quinityOfPizza").val("");

  });
});
