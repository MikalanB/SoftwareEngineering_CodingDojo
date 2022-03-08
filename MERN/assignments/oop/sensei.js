const Ninja = require('./ninja')

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake(this);
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("master Splinter");
superSensei.speakWisdom();
superSensei.showStats();