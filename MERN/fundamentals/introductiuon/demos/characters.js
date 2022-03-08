const fighter = require('./fighters')

class Samus extends fighter {
    constructor(playerNum) {
        super("Samus", playerNum, 8,6,8);
        this.charged = false;
    }

    special (opponent) {
        if (this.charged) {
            this.charged = false;
            opponent.percent += 35;
            console.log(`Samus fired her charge shot at ${opponent.name} and dealt 35%`);
        }
        else {
            this.charged = true;
            console.log('Samus is charging her arm cannon!')
        }
    }
}

class Jigglypuff extends fighter {
    constructor(playerNum) {
        super("Jigglypuff", playerNum,3, 8, 1)
    }
}

const rob = new Fighter("Rob", 1,8,7, 5);
const samus = new Samus(2);

samus.special(rob);
samus.special(rob);
console.log(rob)