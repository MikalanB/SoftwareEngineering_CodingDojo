//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    // for loop to loop through left arr
    var sortedArr = [];
    for (var i = 0; i < leftArr.length; i++) {
        // for loop to loop through right arr
        for (var j = 0; j < rightArr.length; j++) {
            //check index 0 of both arrays 
            // if index 0 in left array is less than index 0 at right array, add that value to sorted array
            if (leftArr[i] < rightArr[j] && sortedArr.includes(leftArr[i]) != true) {
                sortedArr.push(leftArr[i]);
                leftArr[i+1]
            } else if (rightArr[j] < leftArr[i] && sortedArr.includes(rightArr[j]) != true) {
                sortedArr.push(rightArr[j]);
                rightArr[i+1]
            }
        }
    }         return sortedArr;
}

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
console.log(combine([1],[0]));
