//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {    // loop through the string
    var newArray = [];
    var newString = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (newString.length > 0) {
                newArray.push(newString);
                newString = ""
            } else {
                continue;
            }
        } else if (i == str.length-1) {
            newString += str[i];
            newArray.push(newString);
        }
        else {
            newString += str[i];
        }
    }
    return newArray;
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    var newArray = [];
    var newString = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (newString.length > 0) {
                newArray.unshift(newString);
                newString = ""
            } else {
                continue;
            }
        } else if (i == str.length-1) {
            newString += str[i];
            newArray.unshift(newString);
        }
        else {
            newString += str[i];
        }
    }
    return newArray;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));