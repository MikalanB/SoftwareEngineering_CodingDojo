// Singly Linked List


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}



class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);
        
        // Check to see if there is a head
        if(this.head == null) {
            this.head = newNode;

            return this;
        }

        // if there is a head
        newNode.next = this.head;
        this.head = newNode;

        return this;


    }

    addToBack(value) {
        var last_value = new Node(value);
        if (this.head == null) {
            this.head = last_value;
            return this;
        } 
        var runner = this.head;
        while(runner.next != null) {
            // step #2) print the values at each iteration before moving the runner!
            //console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        runner.next = last_value;
        return this;
    }

    removeFromFront() {
        if(this.head == null) {
            return null;
        }
        else {
            this.head = this.head.next
            return this;
        }
    }

    removeFromBack() {

}


    minToFront() {
        if(this.head == null) {
            return false;
        } else {
            var runner = this.head;
            var minVal = this.head.value;
            while (runner != null) {
                // console.log("x");
                if (runner.value <= minVal) {
                    minVal = runner.value;
                }
                runner = runner.next;
            }
            sll.addToFront(minVal);
            return this;
        }
    }

    contains(value){
        // Check to see if there is a head
        if(this.head == null) {
            return false;
        } else {
            var runner = this.head;
            while (runner.value != value && runner.next != null) {
                runner = runner.next;
            }
            if (runner.value != value) {
                return false;
            }else {
                return true;
            } 
        }
    }

    prependValue(value, loc) {
        // find the given node
        var newNode = new Node(value);
        if(this.head == null) {
            return false;
        }
        if (loc == 0) {
            addToFront(value)
        } else {
            var runner = this.head;
            count = 0;
            while (runner.next != null && count < location -1) {
                runner = runner.next;
                count++;
            }
            var locNode = runner.next; // this stores the next value that we don't want to lose
            runner.next = newNode; // we set that next value to the newNode value that we want to insert
            newNode.next = locNode; // we set the next value of the node that we just inserted back to the previous one that we stored
            return this;
        }
    }

    appendValue(value, loc) {
        // your code here
        var newNode = new Node(value);
        if(this.head == null) {
            return false;
        }
        if (loc == 0) {
            addToBack(value)
        } else {
            var runner = this.head;
            count = 0;
            while (runner.next != null && count < location -1) {
                runner = runner.next;
                count++;
            } 
            var locNode = 
        }
    }

    queues(value, loc) {
        var newNode = new Node(value);
        if(this.head == null) {
            return false;
        }
        if (loc == 0) {
            addToBack(value)
        }

   // print the singly linked list
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
}
const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(5)
sll.addToFront(8)
sll.addToFront(-9)
sll.addToBack(99)
sll.addToBack(21)
sll.addToBack(55)
sll.contains(7)
sll.contains(99)
sll.contains(24)
sll.contains(-3)
sll.minToFront()
sll.printValues()