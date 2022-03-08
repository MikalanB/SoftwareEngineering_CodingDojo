// Given
console.log(hello);                                   
var hello = 'world';
//after hoisting - would still print as undefined
//var hello;
//console.log(hello);
// hello = 'world';

// this will work - function will be hoisted after the needle variable declaration and will console log 'magnet' to the console
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// this wwill print super cool and ignore print() function as it was never called
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


var food = 'chicken';
console.log(food); // this will print food
// eat function will be hoisted and will print "half-chicken" to the console
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// this will run into an error as mean is considered a varuiable and not a function
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); // won't get to this line



console.log(genre); // line will return undefined as genre is declared after the console log
var genre = "disco";
rewind(); // after function is hoisted, this will return "rock" and "r&b"
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // this will print disco as it is after the global variable genre is declared

dojo = "san jose";
console.log(dojo); // this will return "san jose"
learn(); // function below willbe hoisted and return "seattle" and "burbank" to the console
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // this will go back to printing "san jose"

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; // javascript would hoist this but then when trying to run it would run into an error hear as a const variable is immutable
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}