const prompt = require("prompt-sync")({ sigint: true });

const Menu = require("./menu.js");
const Order = require("./order.js");

class orderApp {
  constructor() {
    this.running = true;
    this.order = new Order();
    this.menu = new Menu();
  }

  async start() {
    console.log("Welcome to the Restaurant!");
    this.getUserSelection();
  }

  getUserSelection() {
    console.log("getUserSelection: ");
    console.log(
      "what would you like to do?\n 1. Add item to order\n 2. Remove item from order\n 3. Place order\n 4. Exit\n"
    );
    let selection = prompt("Enter the number of the action you would like to take: "
    );
    return this.processUserSelection(selection);
  }

  exit() {
    console.log("Goodbye!");
    process.exit(0);
    return (this.running = false);
  }

  processUserSelection(selection) {
    console.log("processUserSelection: ");
    while (this.running) {
      if (selection === "1") {
        this.menu.printMenu();
        console.log("Add item to order");
        let item = prompt(
          "Enter the id of the item you would like to add: "
        );
        this.order.addItem(item);
        this.getUserSelection();
      }
      if (selection === "2") {
        let canceledItem = prompt(
          "what is the item number of the item you want to remove?"
        );
        console.log("Remove item from order");
        this.order.removeItem(canceledItem);
        this.getUserSelection();
      }
      if (selection === "3") {
        console.log("Place order");
        this.order.listItems();
        this.order.getTotal();
        this.getUserSelection();
      }
      if (selection === "4") {
        console.log("Exit");
        this.exit();
      } else {
        console.log("Invalid selection in processUserSelection");
      }
      this.getUserSelection();
    }
  }
}

let oa = new orderApp();
oa.start();
