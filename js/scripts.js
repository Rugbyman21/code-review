function Pizza(size, quinity, topping) {
  this.size = size;
  this.quinity = quinity;
  this.topping = topping;
}

Pizza.prototype.totalCost = function() {

  var toppingList = this.topping.split(" ");
  var toppingNum = toppingList.length;
  var toppingCost = ((toppingNum * .50) * this.quinity));
  var sizeCost = 0;


  if (this.size === "medium") {
    sizeCost = 7;
  } else if (this.size === "small") {
    sizeCost = 5;
  } else {
    sizeCost === 10;
  }



  var totalCost = toppingCost + (sizeCost * (parseInt(this.quinity)));
  return totalCost;

};
