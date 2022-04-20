class MinHeap {
    constructor() {
        this.heap = [null];
    }

    add(vol){
        this.heap.push(vol);
        this.shiftUp();
    }

    shiftUp(){
        //index of new value which is the last value added to the array
        let currentIndex = this.heap.length-1;
        //parent Index
        let parentIndex = Math.floor(currentIndex/2) // done to find the parent 
        //left child = index * 2 
        //right chile = index * 2 + 1

        //while parent value is bigger
            // swap the values
            // set currentIndex to parentIndex
            //find parent of currentIndex
        while (this.heap[parentIndex] > this.heap[currentIndex] && currentIndex !== 1) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex =parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
                
                
    min() {
        return this.heap.length < 2 ? null : this.heap[1]; // as long as there are values, return the heap value at index one. Else null
    }

    //We ALWAYS remove the top value (the value at index 1)
    remove() {
        //scenario 1: the heap is empty
        // How do we know if the heap is empty? 
        // It should have a length of less than 2 (this will account for the first value which is null)
        if(this.heap.length < 2) return null;

        //scenario 2: the heap only has one value
        // if there is only one value, there is nothing left to shift up after value is removed
        const min = this.heap[1];
        if (this.heap.length === 2) {
            this.heap.pop();
            return min;
        }
        //scenario 3: there are values left after the min is removed
        //at the end return min;
        this.heap[1] = this.heap.pop();
        this.shiftDown();
        return min;
    }

    shiftDown() {
        // take the top value and shift it down untril it is in its propper place (both children are larger than it)
        let indexToShiftDown = 1;
        // we need to keep trake of the left value
        let leftIndex = indexToShiftDown * 2;
        // we need to check if there is a left to look at 
        while (leftIndex < this.heap.length) {
            // store the right index because we might need it
            let rightIndex = leftIndex + 1;
            // we needto figure out which is the smallest value
            let indexOfSmallest = leftIndex;
            // should I replace that with the right index
            if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]) {
                indexOfSmallest = rightIndex;
            }
            // we need to see if a swap needs to happen - is the parent value larger than the smaller child?
            if (this.heap[indexToShiftDown] <= this.heap[indexOfSmallest]) {
                //this means that we are done as the parent index is in the right place
                console.log("The value to shift down has found its home. Breaking out of loop, bye.")
                break;
            }

            // the parent value was larger and NEEDS to be swapped with a smaller value
            console.log("Have not found its home yet. Swappping with smaller value")
            // time to swap values
            let temp = this.heap[indexToShiftDown];
            this.heap[indexToShiftDown] = this.heap[indexOfSmallest];
            this.heap[indexOfSmallest] = temp;
            // the value being moved down the heap has shifted and we need to track it
            indexToShiftDown = indexOfSmallest;
            // reset our left
            leftIndex = indexToShiftDown * 2;
        }

    }
}

const myHeap = new MinHeap();
myHeap.add(4);
myHeap.add(18);
myHeap.add(90);
myHeap.add(1);
myHeap.add(2000);
myHeap.add(3);
// myHeap.add(2);
// myHeap.add(17);
// myHeap.add(18);
// myHeap.add(0);
console.log(myHeap.remove());
console.log(myHeap.min())
