const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.name = faker.name.findName();
    }
}

module.exports = User;