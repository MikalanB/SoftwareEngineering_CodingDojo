// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function d6() {
//     var roll = Math.random();
//     // your code here
//     roll = Math.ceil(roll*6);
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle(answers) {
    var response = answers[Math.ceil(Math.random() * answers.length)]

    return response;
}

console.log(oracle(lifesAnswers));

var userQ='';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ask the oracle: ', (answer) => {
    userQ=answer;
    
    oracle(userQ);
    rl.close();
});