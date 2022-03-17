REVERSE STRING
// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    var newString = ""
    for(var i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("creature")); // "erutaerc"


ACRONYM


// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym (str) {
    var acro = "";
    var splitWords = str.split(" ");
    for (var i = 0; i < splitWords.length; i++) {
        acro += splitWords[i][0].toUpperCase()
    }
    return acro;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));