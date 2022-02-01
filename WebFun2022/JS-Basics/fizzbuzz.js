/*
Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/

for (var i = 1; i < 101; i++) { // for loop to iterate over each number starting at 1 to 100
    // Order matters so we have to put first if i is a multiple of both 3 and 5 print "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0) { 
        console.log("FizzBuzz"); // print response
    } else if (i % 5 == 0) { // checking if 5 is a multiple
        console.log("Buzz");
    } else if (i % 3 == 0) { // checking if 3 is a multiple
        console.log("Fizz");
    } else { // if none of the conditions above are met, print the value of i
        console.log(i); 
    }
}