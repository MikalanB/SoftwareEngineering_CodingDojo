const insertionSort = (arr) => {
    //first sort the first and second values in the array
    let sortedArr = [];
    let tempArr = [];
    var temp;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = 1; j < arr.length-1; j++){
            if(arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }

    return arr;
    //add another number 
}

console.log(insertionSort([6,4,5,2,8,14,1,3]));