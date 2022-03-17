class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next
        } 
        return this;
    }


    // remove and return the front value from the queue
    dequeue() {
        if(!this.head) {
            console.log("Nothing is in the queue!")
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
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

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if (this.head == null) {
            console.log("Nothing is in the queue!")
            return null;
        }

        var runner = this.head;
        var min = runner.value;

        while (runner != null) {
            if 
        }
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }

}

const sll = new SLQueue();
sll.enqueue(-3)
sll.enqueue(5)
sll.enqueue(8)
sll.enqueue(-9)
sll.shift()
console.log(sll)
