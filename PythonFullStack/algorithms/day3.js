// checks to see if string is palindrome
function isPalindrome(new_string) {
    //new_string = str.split(' ');
    // new_string = new_string.join();
    for (var i = 0; i < new_string.length/2; i++){
        var right = new_string.length-1-i;
        if (new_string[i] != new_string[right]) {
            console.log("Is not a Palindrome")
            return false;
        } else {
            console.log("Is a Palindrome!");
            return true;
        }
    }
}

isPalindrome("oh mano")

// Checks to see what is the longest Palindrome in the string
function longestPalindrome (str) {
    var new_new = str.split(" ")
    console.log(new_new)
}