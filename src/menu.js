const { it } = require("node:test");
const fs = require('fs');

class Menu {
  constructor(sections) {
    this.sections = [];
    this.allMenuItems = {
      "Salads":[
        {"name":"Caesar Salad", "price":"$7.99"},
        {"name":"Garden Salad", "price":"$6.99"},
        {"name":"Greek Salad", "price":"$8.99"},
        {"name":"Cobb Salad", "price":"$9.99"},
        {"name":"Chef Salad", "price":"$10.99"},
        {"name":"Spinach Salad", "price":"$8.99"},
        {"name":"Kale Salad", "price":"$9.99"},
        {"name":"Waldorf Salad", "price":"$10.99"},
        {"name":"Caprese Salad", "price":"$8.99"},
        {"name":"Nicoise Salad", "price":"$10.99"},
      ],
      "Appetizers":[
        {"name":"Mozzarella Sticks", "price":"$6.99"},
        {"name":"Chicken Wings", "price":"$8.99"},
        {"name":"Onion Rings", "price":"$5.99"},
        {"name":"Fried Pickles", "price":"$5.99"},
        {"name":"Spinach Dip", "price":"$7.99"},
        {"name":"Bruschetta", "price":"$6.99"},
        {"name":"Nachos", "price":"$9.99"},
        {"name":"Cheese Fries", "price":"$5.99"},
        {"name":"Potato Skins", "price":"$7.99"},
        {"name":"Calamari", "price":"$10.99"},
      ],
      "Entrees":[
        {"name":"Steak", "price":"$19.99"},
        {"name":"Chicken", "price":"$14.99"},
        {"name":"Salmon", "price":"$16.99"},
        {"name":"Pasta", "price":"$12.99"},
        {"name":"Burger", "price":"$11.99"},
        {"name":"Tacos", "price":"$10.99"},
        {"name":"Pizza", "price":"$13.99"},
        {"name":"Sandwich", "price":"$9.99"},
        {"name":"Soup", "price":"$6.99"},
        {"name":"Salad", "price":"$8.99"},
      ],
      "Desserts":[
        {"name":"Cake", "price":"$5.99"},
        {"name":"Pie", "price":"$4.99"},
        {"name":"Ice Cream", "price":"$3.99"},
        {"name":"Cookies", "price":"$2.99"},
        {"name":"Brownies", "price":"$3.99"},
        {"name":"Cupcakes", "price":"$2.99"},
        {"name":"Donuts", "price":"$2.99"},
        {"name":"Candy", "price":"$1.99"},
        {"name":"Pudding", "price":"$3.99"},
        {"name":"Cheesecake", "price":"$5.99"},
      ],
      "Drinks":[
        {"name":"Water", "price":"$1.99"},
        {"name":"Soda", "price":"$2.99"},
        {"name":"Tea", "price":"$2.99"},
        {"name":"Coffee", "price":"$2.99"},
        {"name":"Juice", "price":"$3.99"},
        {"name":"Milk", "price":"$2.99"},
        {"name":"Beer", "price":"$4.99"},
        {"name":"Wine", "price":"$5.99"},
        {"name":"Cocktail", "price":"$6.99"},
        {"name":"Mocktail", "price":"$5.99"},
      ]
  };
  }



  addSection(section) {
    this.sections.push(section);
  }
  deleteSection(section) { 
    delete this.sections.indexOf(section);
  }
  printMenu() {
    this.sections.forEach((section) => {
      section.listSectionItems();
    });
  }
  generateMenuHTML() {
      let htmlContent = '<!DOCTYPE html><html><head><title>Menu</title></head><body>';
      htmlContent += '<h1>Our Menu</h1>';
  
      const menu = new Menu(); // Assuming menu is already populated with sections and items
  
      for (const [sectionName, items] of Object.entries(menu.allMenuItems)) {
        htmlContent += `<h2>${sectionName}</h2><ul>`;
        items.forEach(item => {
          htmlContent += `<li>${item.name} - ${item.price}</li>`;
        });
        htmlContent += '</ul>';
      }
  
      htmlContent += '</body></html>';
      return htmlContent;
    }
  
    writeMenuHTMLToFile() {
      // Write the HTML content to menu.html
      fs.writeFile('menu.html', this.generateMenuHTML(), (err) => {
        if (err) throw err;
        console.log('menu.html has been saved!');
      });
    }
  }
class Section {
    constructor(title, items) {
      this.title = title;
      this.items = [];
    }

    addItem(item) {
      this.items.push(item);
    }
    deleteItem(item) {
      delete this.items.indexOf(item);
    }

    describe() {
      console.log(`${this.title}`);
      return `${this.title}`;
    }
    listSectionItems() { // list items in a section
      this.items.forEach((item) => {
        item.describe();
      });
    }
  }

  class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    describe() {
      console.log(`${this.name} $${this.price} added to order.`);
      return `${this.name} $${this.price}`;
    }
  }

  let menu = new Menu();
  let drinks = new Section('Drinks');
  let coca_cola = new Item('Coca-Cola', 2.99);
  drinks.addItem(coca_cola);
  menu.addSection(drinks);
  menu.printMenu();

  


module.exports = {Menu, Section, Item};

