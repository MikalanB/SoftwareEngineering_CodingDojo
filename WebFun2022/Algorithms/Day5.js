var fruit1 = "apples";
var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

var array = ["a", "b", "c", "d", "e"];

function reverse(arr) {
    var reversed = [];
    var start = 0;
    var end = arr.length-1;
    while (start <= end) {
        reversed.push(arr[end]);
        end--;
    }

//     return reversed;
// }

// console.log(reverse(array));
// console.log(reverse([1,2,3,4,5]))

// function reverse (arr){
//     var i = 0;
//     var j= arr.length-1;

//     while(i<j){
//         var temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
//     return arr;
// }

// var result = reverse([1,2,3,4,5])
// console.log(result)

console.log(array[-1])