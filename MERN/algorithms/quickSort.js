const partition = (arr) => {
    const pivot = arr[0];
    let pivi = 0;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            ++pivi;
            for (let j = i  -1; j >= 0; --j) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

const quickSort = (arr) => {
    const pivi = partition(arr)

    if (arr.length <= 1) return arr;

    let leftSide = arr.slice(0, pivi);
    let rightSide = arr.slice(pivi + 1)

    leftSide = quickSort(leftSide);
    rightSide = quickSort(rightSide);

    return [...leftSide, arr[pivi], ...rightSide]

}

console.log(quickSort([7,45,2,67,3,2,1]));
