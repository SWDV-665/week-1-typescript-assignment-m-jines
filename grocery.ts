class Grocery {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let groceryList = [
    new Grocery("Eggs", 2.99, 2),
    new Grocery("Milk", 3.50, 1),
    new Grocery("Coffee", 4.99, 1),
    new Grocery("Bananas", 0.99, 6)

];

const ele = document.getElementById("app");

groceryList.forEach(e => {
    const p = document.createElement('p');
    p.textContent = 'Item: ${e.name}, Quantity: ${e.quantity}, Price per unit: $${e.price}';
    ele?.appendChild(p);
})