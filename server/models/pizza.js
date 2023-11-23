const db = require("../util/database");

module.exports = class Pizza {
  constructor(name, toppings, cost) {
    this.name = name;
    this.toppings = toppings;
    this.cost = cost;
  }

  // SQL Querries ---------------------------------

  static getListOfNames() {
    return db.execute(
        'SELECT * FROM pizzamenu;'
    );
  }

};


