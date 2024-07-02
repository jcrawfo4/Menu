const Menu = require("./menu.js");

class Order {
  constructor() {
    this.items = [];
    this.menu = new Menu();
  }

  addItem(item_id) {
    const item = this.findItem(item_id);
    this.items.push(item);
  }

  findItem(item_id) {
    for (let i = 0; i < this.menu.menu.length; i++) {
      if (this.menu.menu[i].id === parseInt(item_id)) {
        return this.menu.menu[i];
      }
    }
  }

  removeItem(item) {
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i].id === parseInt(item)){
        this.items.splice(i, 1);
      }
    }
  }

  listItems() {
    if (this.items.length > 0) {
      console.log("your order so far: ");
      this.items.forEach((item) => {
        console.log(`${item.id}. ${item.name} - $${item.price}`);
      });
      console.log("Total: $" + this.getTotal());
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

module.exports = Order;