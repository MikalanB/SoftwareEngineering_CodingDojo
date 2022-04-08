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

removeBack() {
    if (this.head == null) {
        return this;
    } 
    let runner = this.head;
    while (runner.next.next != null) {
        runner = runner.next
    }
    let temp = runner.next.value
    runner.next = null;
    console.log(temp)
    return temp;
}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @returns {boolean}
 */
contains(val) {
    if (this.head == null) {
        return this;
    }
    let runner = this.head;
    while (runner.value != val && runner.next != null) {
        runner = runner.next;
    }

    if (runner.value != val) {
        return false;
    } else {
        return true;
    }
}

/**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?ListNode} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
containsRecursive(val, current = this.head) {
    if (current === null) {
        return false;
    }
    if (current.value === val) {
        return true;
    }

    return this.containsRecursive(val, current.next);
}

secondToLast(){
    if(this.head == null){
        return null;
    }
    if(this.head.next == null){
        return this.head.data;
    }
    let runner = this.head;
    while(runner.next.next != null){
        runner = runner.next;
    }
    return runner.data;
}

removeVal(val){
    if(this.head == null){
        console.log("You can't remove a value from an empty list!")
        return; 
    }
    if(this.head.data == val){
        this.removeFromFront();
        return;
    }
    let runner = this.head;
    while(runner.next != null && runner.next.data != val){
        runner = runner.next;
    }
    if(runner.next == null){
        console.log("The value was not in the list!");
        return;
    }
    runner.next = runner.next.next;
}

prepend(targetVal, newVal){
    if(this.head == null){
        console.log("Can't prepend to a value that doesn't exist!");
        return;
    }
    if(this.head.data == targetVal){
        this.addToFront(newVal);
        return;
    }

    let runner = this.head;
    while(runner.next != null && runner.next.data != targetVal){
        runner = runner.next;
    }

    if(runner.next == null){
        console.log("Value was not found in the list.");
        return;
    }

    let newNode = new Node(newVal);
    newNode.next = runner.next;
    runner.next = newNode;

}


/**
 * Concatenates the nodes of a given list onto the back of this list.
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {
    
}

/**
 * Finds the node with the smallest number as data and moves it to the front
 * of this list.
 * @returns {SinglyLinkedList} This list.
 */
moveMinToFront() {

}

// EXTRA
/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {}

// EXTRA
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
recursiveMax(runner = this.head, maxNode = this.head) {
    if (runner.next === null) {
        return maxNode;
    }

    runner = runner.next;
    if(runner.val > maxNode.val) {
        maxNode = runner
    }

    return this.recursiveMax(runner, maxNode)
}

/**
 * Retrieves the data of the second to last node in this list.
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
secondToLast() {
    
}

/**
 * Removes the node that has the matching given val as it's data.
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {}
 
 // EXTRA
 /**
  * Inserts a new node before a node that has the given value as its data.
  * @param {any} newVal The value to use for the new node that is being added.
  * @param {any} targetVal The value to use to find the node that the newVal
  *    should be inserted in front of.
  * @returns {boolean} To indicate whether the node was pre-pended or not.
  */
prepend(newVal, targetVal) {
    
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
list.insertAtFront(test_data5)
list.removeBack(); 
// list.removeHead()
console.log(list.containsRecursive(234));
console.log(list.recursiveMax())
/* Insert array of nodes into the list: */
// list.PushBackN(test_data4);
list.printValues()

/* Iterate our list, so we can see our node values */
//list.Iterate(value=>console.log(value));
