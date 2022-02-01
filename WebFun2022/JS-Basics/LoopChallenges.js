// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

// while loop version
var num = 0;
while (num < 20) {
    num++; // increment num variable
    if (num % 2 != 0) { // checks to see if a number is odd
        console.log(num); // prints number
    }
}

// for loop version
for (var i = 0; i < 21; i++) { // starts at 0 and increments until it reaches 20
    if (i % 2 != 0) { // checks if number is odd
        console.log(i); // prints number
    }
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

//for loop version
for (var i = 100; i >= 0; i--) {
    if (i % 3 ==0) {
        console.log(i);
        i--;
    }
}

// while loop version
num = 100; // set number variable to 100
while (num >= 0) {
    num--;
    if (num % 3 == 0) {
        console.log(num);
    }
}

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
num = 4;
// while loop version
while (num > -5) { // num has to be set to a value to break out of while loop
    console.log(num);
    num -= 1.5; // decrement num after printing it by 1.5
}

// for loop version 
for(var i = 4; i > -5; i -= 1.5) {
    console.log(i);
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum = 0;
for (var i = 0; i < 101; i++) {
    sum += i; // keeps adding i to sum until i == 100
}

console.log(sum);

// while loop version
num = 0;
sum = 0;
while (num < 101) {
    sum+= num; // keeps adding i to sum until i == 100
    num++; // increments num until 100
}

console.log(sum);
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
var product = 0;
// for loop version
for (var i = 1; i < 13; i++) {
    if (product == 0) {
        product = i;
    } else {
        product *= i;
    }
}

console.log(product);

//while loop version
num = 1;
var product = 1;
while (num < 13) {
    product *= num;
    num++;
}

console.log (product)
