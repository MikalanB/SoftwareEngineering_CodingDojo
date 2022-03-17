//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    var count = 0;
    newString = ""
    while (count <= num) {
        newString += str.length-1;
    }   
    // while (count <= num) {
    //     temp = str.length-1;
    //     var start = str[0];
    //     str[0] = temp
    //     console.log(str)
    //     count++;
    // }
    return str
}

let testString = "012345";
console.log(rotateString(testString, 3));
// let shoes = "Did I shine my shoes today?";
// console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
}

// console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
// console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));