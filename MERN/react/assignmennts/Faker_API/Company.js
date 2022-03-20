const { faker } = require('@faker-js/faker');

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.bs = faker.company.bs();
    }
}

module.exports = Company;