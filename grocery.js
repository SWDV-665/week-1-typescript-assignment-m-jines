var Grocery = /** @class */ (function () {
    function Grocery(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryList = [
    new Grocery("Eggs", 2.99, 2),
    new Grocery("Milk", 3.50, 1),
    new Grocery("Coffee", 4.99, 1),
    new Grocery("Bananas", 0.99, 6)
];
var ele = document.getElementById("app");
groceryList.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "Item: ".concat(e.name, " Quantity: ").concat(e.quantity, " Price per Unit: $").concat(e.price);
    ele.appendChild(p);
});
