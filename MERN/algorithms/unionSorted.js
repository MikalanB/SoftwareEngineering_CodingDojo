//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const unionSorted = (arrLeft, arrRight) => {
    var union = [];
    var iLeft =  0;
    var iRight = 0;

    while(iLeft <= arrLeft.length - 1){
        if(arrLeft[iLeft] === arrRight[iRight]){
            union.push(arrLeft[iLeft])
            iLeft++;
            iRight++;
        }else if(arrLeft[iLeft] >  arrRight[iRight]){
            union.push(arrRight[iRight]);
            iRight++;
        }else{
            // console.log(`left i:${iLeft}, right i:${iRight}`);
            union.push(arrLeft[iLeft]);
            iLeft++;
        }
    }
    while(iRight <= arrRight.length - 1){
        union.push(arrRight[iRight]);
        ++iRight;
    }
    return union;
}

console.log(unionSorted([2,4,7,9,10,13,17,22],[2,3,5,7,9,10]));
console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
console.log(unionSorted([1,5,9],[2,6,10,15,24,36]));

// console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
// console.log(unionSorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr,rightArr) => {
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));