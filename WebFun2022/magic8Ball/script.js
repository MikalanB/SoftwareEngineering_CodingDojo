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
var answer = document.querySelector('.answer p')
var mybutton = document.querySelector('button')
var timer = 1000;
var timediv = document.getElementById('timediv')
var timedivx = -125;
mybutton.addEventListener('click',mydelay)
timediv.style.left = ""+ timedivx + 'px';

function mydelay(){
    timediv.style.left = '-125px';
    timedivx = -125;
    timediv.style.backgroundColor = 'red';
    movediv()
    setTimeout(shake,2000)
}

function movediv(time = timer){
    if(time > 100){
        setTimeout(movediv,200,time-100)
        }
    else{
        timediv.style.backgroundColor='black';
    }
        timedivx += 25;
    timediv.style.left = ""+ timedivx + 'px';
    // console.log('timer:' , time)
}


function shake(){
    var rand = Math.floor(Math.random()*lifesAnswers.length)
    
    answer.innerHTML = lifesAnswers[rand]
    
    
    // var newtext = document.createTextNode(lifesAnswers[rand])
    // answer.appendChild(newtext)
}