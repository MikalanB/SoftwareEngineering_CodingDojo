const { faker } = require('@faker-js/faker');

class Order {
    constructor() {
        const bases = ["espresso shot", "creamer", "ice", "chai tea", "green tea", "hot water", "drip", "columbian", "black tea", "light roast"]
        const additives = ["vanilla syrup", "sugar", "splenda", "honey", "scoop of ice cream", "bricks", "milk", "pumpkin spice", "hot fudge", "chocolate syrup"]
        const toppings = ["whipped cream", "nothing", "unwhipped cream", "sprinkled cinnamon", "caramel drizzle"]
        
        this.name = faker.name.findName(),
        this.base = bases[Math.floor(Math.random() * bases.length)]
        this.additive = additives[Math.floor(Math.random() * additives.length)]
        this.topping = toppings[Math.floor(Math.random() * toppings.length)]

        this.coffeShop = faker.company.companyName() + "Coffee Roasters Inc" ;
        this.cost = "$" + faker.finance.amount();
        this.barista = faker.image.avatar();
    }
}

module.exports = Order;