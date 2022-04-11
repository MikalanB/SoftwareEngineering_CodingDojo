    /**
     * Class to represent a Node in a Binary Search Tree (BST).
     */
    class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
    }

    /**
     * Represents an ordered tree of nodes where the data of left nodes are <= to
     * their parent and the data of nodes to the right are > their parent's data.
     */
    class BinarySearchTree {
        constructor() {
            /**
             * Just like the head of a linked list, this is the start of our tree which
             * branches downward from here.
             *
             * @type {BSTNode|null}
             */
            this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root === null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.root === null) {
            return null;
        }

        while (current.left) {
            current = current.left
        }

        return current.data;
    }

    /** 
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        //check if null
        if (current === null) {
            return null;
        }
         // once current.left is null, we return the current value as that would be the last value in the tree and we know it is the minimum value
        if (current.left === null) {
            return current.data;
        }

        // will call the function again until current.left hits null
        return this.minRecursive(current.left)
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.root === null) {
            return null;
        }

        while (current.right) {
            current = current.right
        }

        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
                //check if null
                if (current === null) {
                    return null;
                }
                 // once current.left is null, we return the current value as that would be the last value in the tree and we know it is the minimum value
                if (current.right === null) {
                    return current.data;
                }
        
                // will call the function again until current.left hits null
                return this.maxRecursive(current.right)
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
        return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    insert (newVal) {
        const node = new BSTNode(newVal)
    
    if (this.isEmpty()) {
        this.root = node
        return this
    }

    let current = this.root

    while (true) {
        if (newVal <= current.data) {
        if (!current.left) {
            current.left = node
            return this
        }

        current = current.left
        } else {
        // newVal is greater than current.data
        if (!current.right) {
            current.right = node
            return this
        }

        current = current.right
        }
    }

    }
}

    const emptyTree = new BinarySearchTree();
    const oneNodeTree = new BinarySearchTree();
    oneNodeTree.root = new BSTNode(10);

    /* twoLevelTree
            root
            10
        /   \
        5     15
    */
    const twoLevelTree = new BinarySearchTree();
    twoLevelTree.root = new BSTNode(10);
    twoLevelTree.root.left = new BSTNode(5);
    twoLevelTree.root.right = new BSTNode(15);

    /* threeLevelTree 
            root
            10
        /   \
        5     15
    / \    / \
    2   4  13  20
    */
    const threeLevelTree = new BinarySearchTree();
    threeLevelTree.root = new BSTNode(10);
    threeLevelTree.root.left = new BSTNode(5);
    threeLevelTree.root.left.left = new BSTNode(2);
    threeLevelTree.root.left.right = new BSTNode(4);
    threeLevelTree.root.right = new BSTNode(15);
    threeLevelTree.root.right.right = new BSTNode(20);
    threeLevelTree.root.right.left = new BSTNode(13);
    threeLevelTree.min()


    /* fullTree
                        root
                    <-- 25 -->
                /            \
                15             50
            /    \         /    \
            10     22      35     70
        /   \   /  \    /  \   /  \
        4    12  18  24  31  44 66  90
    */
  /***************** Uncomment after insert method is created. ****************/
  const fullTree = new BinarySearchTree();
  fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(1000)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

    console.log(fullTree.maxRecursive())
