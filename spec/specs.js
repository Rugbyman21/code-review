describe('Pizza', function() {
  it('will create a pizza', function () {
    var testPizza = new Pizza("small", 2, "pepperoni");
      expect(testPizza.size).to.equal("small");
      expect(testPizza.quinity).to.equal(2);
      expect(testPizza.topping).to.equal("pepperoni");
  });

  it("will give a cost to a pizza base on the size, quinity, and topping", function() {
    var testPizza = new Pizza("small", 1, "pepperoni, cheese");

    expect(testPizza.totalCost()).to.equal(6);

  });
});
