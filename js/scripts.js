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


  if (this.size === "medium") {
    sizeCost = 7;
  } else if (this.size === "small") {
    sizeCost = 5;
  } else {
    sizeCost = 10;
  }
// debugger;


  var totalCost = toppingCost + (sizeCost * (parseInt(this.quinity)));


  return totalCost;

};
