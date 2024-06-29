const prompt = require("prompt-sync")({sigint: true});
const Order = require("./order");

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

class orderApp {
    constructor() {
        this.running = true;
        this.order = new Order();
    }

    async start() {
        console.log("Welcome to the Restaurant!");
        this.getUserSelection();
    }

    getUserSelection() {
        prompt(
            "what would you like to do?\n 1. Add item to order\n 2. Remove item from order\n 3. Place order\n 4. Exit\n",
            (answer) => {
                this.processUserSelection(answer);
            }
        );
    }

    exit() {
        console.log("Goodbye!");
        //readline.close();
        process.exit(0);
        return (this.running = false);
    }

    processUserSelection(selection) {
        console.log("processUserSelection: ")
        while (!this.running) {
            switch (selection) {
                case "1":
                    this.order.addItem();
                    this.order.listItems();
                    this.order.getTotal();
                case "2":
                    this.order.removeItem(this.items[order.length-1]);
                    break;
                case "3":
                    this.placeOrder();
                    break;
                case "4":
                    process.exit();

                    break;
                case "5":
                    console.log("Cancel order");
                    this.order.deleteOrder();
                default:
                    console.log("Invalid selection");
            }
            this.getUserSelection();
        }
    }

    deleteOrder() {
        this.order = [];
        alert("order is canceled")
    }
}

let oa = new orderApp();
oa.start();
