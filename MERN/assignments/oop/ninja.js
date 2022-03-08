class Ninja {
    constructor (name, health, speed = 3, strength =3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName () {
        console.log(`${this.name} is my name`);
    }

    showStats () {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake (ninja) {
        ninja.health += 10;
        console.log(`Health is now +10 to equal ${ninja.health}`)
    }
}

const mikalan = new Ninja('Mikalan', 80, 5);
//console.log(mikalan)
// mikalan.sayName();
// mikalan.showStats();
// mikalan.drinkSake(mikalan);
// mikalan.showStats();


module.exports = Ninja