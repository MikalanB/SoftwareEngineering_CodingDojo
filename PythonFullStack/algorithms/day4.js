function getStringFromArray (arr) {
    if(arr.length > 1) {
        return arr[0].toString() + '-' + arr[arr.length-1].toString();
    } else if (arr.length === 1) { // triple equal sign to make this work
        return arr[0].toString();
    } else {
        return 'Error, This array is empty!'
    }
}

function bookIndex(arr) {
    var final_string = "";
    var start = 0;
    var end = 0;
    while(end < arr.length) {
        if(arr[end+1] === arr[end]+1) {
            end++;
        } else {
            final_string += getStringFromArray(arr.slice(start,end+1)) + "," 
            start = end +1;
            end++;
        }
    } return final_string.substring(0,final_string.length-1)
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))

//console.log(getStringFromArray([]))