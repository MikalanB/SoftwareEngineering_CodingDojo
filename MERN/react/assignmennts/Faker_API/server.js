const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require('./User')
const Company = require('./Company')

app.get("/api/users/new", (req, res) => {
    res.json({ user: new User() });
});

app.get("/api/companies/new", (req, res) => {
    res.json({ company: new Company() });
});

app.get("/api/user/company", (req, res) => {
    const response = {
        user: new User(),
        company: new Company()
    }
    
    res.json(response);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );