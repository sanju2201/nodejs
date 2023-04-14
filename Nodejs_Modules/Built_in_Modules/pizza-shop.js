// Build our own module on top of Event Emitter module

const EventEmitter = require("events")
class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayOrder() {
        console.log("Current Order number is: " + this.orderNumber)
    }
}

module.exports = PizzaShop;