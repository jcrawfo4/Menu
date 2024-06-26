

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Added ${item.name} to order.`);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }

  listItems() {
    if (this.items.length > 0) {
      console.log("Your order items:");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    } else {
      console.log("Your order is currently empty.");
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

module.exports = Order;