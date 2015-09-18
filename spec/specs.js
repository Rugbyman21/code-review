describe('Pizza', function() {
  it('will create a pizza', function () {
    var testPizza = new Pizza ("small", 2, "pepperoni");
      expect(testPizza.size).to.equal("small");
      expect(testPizza.quinity).to.equal(2);
      epect(testPizza.topping).to.equal("pepperoni");
  });
});
