const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // will print "Tesla"
console.log(otherRandomCar) // print Mercedes and not Honda9

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name) // will cause an error as there is only one name in the employee object and when defined on line 13, it is not defined correctly
console.log(otherName); // will not run because of error on previous line

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345'; 
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //will print 12345
console.log(hashedPassword); // will undefined as we don't have a hashedPassword variable declared anywhere


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // this is not ture. [2] != [5]
console.log(first == third); // this is true as [2] == [2]


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // will print value
console.log(secondKey); // will print the entire array [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // will print the value at index 0 which is 1
console.log(willThisWork); // will skip the first value of the array and print the second one at index 1 which is 5