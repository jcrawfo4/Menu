class Menu {
  constructor() {
    this.menu = 
      [
        { name: "Steak", price: 19.99, id: 1, category: "entrees"},
        { name: "Chicken", price: 14.99, id: 2, category: "entrees"},
        { name: "Pasta", price: 12.99, id: 3 , category: "entrees"},
        { name: "Salad", price: 9.99, id: 4 , category: "entrees"},
 
        { name: "Caesar", price: 7.99, id: 5, category: "salads"},
        { name: "Waldorf", price: 8.99, id: 6, category: "salads"},
        { name: "Cobb", price: 9.99, id: 7, category: "salads"},
        { name: "House", price: 6.99, id: 8 , category: "salads"},
        { name: "Garden", price: 6.99, id: 9, category: "salads"},
        { name: "Nicoise", price: 10.99, id: 10 , category: "salads"},
        { name: "Spinach", price: 8.99, id: 11 , category: "salads"},
        { name: "Kale", price: 7.99, id: 12 , category: "salads"},
        { name: "Arugula", price: 7.99, id: 13, category: "salads"},
        { name: "Greek", price: 8.99, id: 14 , category: "salads"},
        { name: "Caprese", price: 9.99, id: 15, category: "salads"},

        { name: "Fries", price: 2.99, id: 18, category: "sides"},
        { name: "Mashed Potatoes", price: 3.99, id: 19, category: "sides"},
        { name: "Rice", price: 2.99, id: 20, category: "sides"},
        { name: "Vegetables", price: 3.99, id: 21, category: "sides"}
      ];
}
  printMenu() {
    console.log("Menu:");
    for(let i = 0; i < this.menu.length; i++){
      console.log(`${this.menu[i].id}. ${this.menu[i].name} - $${this.menu[i].price}`);
    }
  }
}
module.exports = Menu;
