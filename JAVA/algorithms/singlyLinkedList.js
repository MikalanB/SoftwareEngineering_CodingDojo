class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
    }

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        /* Your Code Here */
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this.head;
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        if (this.head == null) {
            this.head = arr[0];
            return this;
        } 
        for (var i = 0; i < arr.length; i++) {
            this.PushBack(arr[i]);
        }
        return this;
    }

 //Creates a new node with the given data and inserts that node at the front
 //of this list.
 //@param {any} data The data for the new node.
//@returns {SinglyLinkedList} This list.

insertAtFront(data) {
    var newValue = new Node(data);
    if (this.head == null) {
        this.head = newValue;
        return this;
    }

    newValue.next = this.head;
    this.head = newValue;

    return this;
}

/**
 * Removes the first node of this list.
 * returns {any} The data from the removed node.
 */
removeHead() {
    if (this.head == null) {
        return this;
    }
    this.head = this.head.next;
    return this;
}

// EXTRA
/**
 * Calculates the average of this list.
 * @returns {number|NaN} The average of the node's data.
 */
average() {
    // this is our list
    if (this.head == null) {
        return NaN;
    }

    var counter = 0;
    var sum = 0;
    let runner = this.head;
    while (runner != null) {
        sum += runner.value;
        counter++;
        runner = runner.next
    }
    var average = sum / counter;
    console.log("the average is: " + average);
    return this;
}

printValues() {
    // step #0 [EDGE CASE]) handle a case where there is nothing in the list
    if(this.head == null){
        console.log("There's nothing in the list! Dummy!")
        // return 'this' to end function and allow chaining of methods
        return this
    }
    //step #1) establish a runner to traverse through the list
    var runner = this.head;

    // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
    while(runner != null) {
        // step #2) print the values at each iteration before moving the runner!
        console.log(`The current value is: ${runner.value}`)
        runner = runner.next
    }
    console.log("We have hit the end of the list!")
    // return 'this' to end function and allow chaining of methods
    return this
}

};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];
let test_data5 = 125;

/* Create our list */
let list=new List();
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
// list.insertAtFront(test_data5)
list.average()
// list.removeHead()
/* Insert array of nodes into the list: */
// list.PushBackN(test_data4);
list.printValues()
/* Iterate our list, so we can see our node values */
//list.Iterate(value=>console.log(value));
