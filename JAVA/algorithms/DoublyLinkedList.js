/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
/**
 * Executed when the new keyword is used to construct a new DoublyLInkedList
 * instance that inherits these methods and properties.
 */
constructor() {
// TODO: implement the constructor.
    
}

/**
 * Creates a new node and adds it at the front of this list.
 * @param {any} data The data for the new node.
 * @returns {DoublyLinkedList} This list.
 */
insertAtFront(data) {}

/**
 * Creates a new node and adds it at the back of this list.
 * @param {any} data The data for the new node.
 * @returns {DoublyLinkedList} This list.
 */
insertAtBack(data) {}

/*
@returns {any} The data of the removed node.
*/
removeMiddleNode() {}

/**
 * Determines if this list is empty.
 * @returns {boolean} Indicates if this list is empty.
 */
isEmpty() {
return this.head === null;
}

}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);