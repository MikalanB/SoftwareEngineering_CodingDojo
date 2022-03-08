
// build out a class
class Sundae {
    //params for constructor
    constructor(flavor, numScoops, sauce, toppings, whipped, container) {
        this.flavor = flavor;
        this.numScoops = 3;
        this.sauce = sauce;
        this.toppings = toppings;
        this.whipped = whipped;
        this.container = container;
    }

    eat() {
        this.numScoops -=1;
        console.log("wow that's good! I really like ${this.flavor} ice cream!")
    }
}

const tinRoof = new Sundae("vanilla", 2, "chocolate syrup", ["peanuts", "rainbow spranks",], true, "tall sundae glass");
console.log(tinRoof);
const clevelandBrownies = new Sundae("vanilla", "hot fudge", ["peanuts", "rainbow spranks"], true, "tall sundae glass");
console.log(clevelandBrownies);
clevelandBrownies.eat();
console.log(clevelandBrownies);