const prompt = require("prompt-sync")({ sigint: true });


// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
class Menu{
  constructor(){
    this.menu=[
      {"name":"Steak", "price":"$19.99"},
      { "name":"Chicken", "price":"$14.99"},
      { "name":"Pasta", "price":"$12.99"},
      { "name":"Salad", "price":"$9.99"}
    ]
    this.selections = [];
    
  }
  
  start(){
    console.log("Welcome to the Restaurant!");
    let selection = this.getUserSelection();

    while(selection !== "4"){
      if(selection == "1"){
        this.addItem();
      }else if(selection == "2"){
        this.removeItem();
      }else if(selection === "3"){
        this.placeOrder();
      }else{
        console.log("Invalid selection");
      }
      selection = this.getUserSelection();
    }

  }

  getUserSelection(){
    let question = "What would you like to do?\n 1. Add item to order\n 2. Remove item from order\n 3. Place order\n 4. Exit\n"
    let selection = prompt(`${question}
Enter the number of the action you would like to take: `);
    return selection;
  }

  addItem(){
    let itemSelection = "Select an item by number: \n";
    for(let i = 0; i < this.menu.length; i++){
      itemSelection+= `${i}. ${this.menu[i].name} - ${this.menu[i].price}\n`;
    }
    console.log(itemSelection);
    let item = prompt(`Enter the number of the item you would like to select: 
${itemSelection}`);
    this.selections.push(this.menu[item]);
    console.log(this.selections);
  }
}

let menu = new Menu();
menu.start();