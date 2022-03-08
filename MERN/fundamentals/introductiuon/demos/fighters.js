class Fighter {
    constructor(name, playerNum, strength, defense, weight) {
        this.name = name;
        this.playerNum = playerNum;
        this.strength = strength;
        this.defense = defense;
        this.weight = weight;
        this.percent = 0;
    }

    attack(opponent) {
        opponent.percent += 5;
        console.log(`${this.name} attacked ${opponent.name} and dealt 5%!`)
    }

    special (opponent) {
        if(opponent instanceof Fighter) {
            opponent.percent += 15
            console.log(`${this.name} performed a special attack on ${opponent.name} and dealt 15%!`)
        }
    }
}

// const rob = new Fighter("Rob", 1,8,7, 5);
// console.log(rob);
// const kirby = new Fighter("Kirby",2,5,5,3);
// kirby.attack(rob);
// console.log(rob);

module.exports = Fighter