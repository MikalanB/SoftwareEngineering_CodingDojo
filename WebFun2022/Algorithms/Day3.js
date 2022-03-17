var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");

var numbers = [3, 4, -2, 7, 16, -8, 0];
// your code here!

// var countPositives = 0;
//     for (var i= 0; i<= nums.length; i++) {
//         if (nums[i] > 0) {
//             countPositives++;
//         } 
//     }

function a (nums) {
    var countPositives = 0;
    for (var i= 0; i<= nums.length; i++) {
        if (nums[i] > 0) {
            countPositives++;
        } 
    }
    return countPositives;
}

console.log("there are " + a(numbers) + " positive values");
