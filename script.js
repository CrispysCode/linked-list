class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    //to the end
    append(value) {
       const newNode = new Node(value); 
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }
    //to the start
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    //returns number of nodes
    size() {
        let length = 0;
        let currentNode = this.head;
        while (currentNode) {
            length++;
            currentNode = currentNode.nextNode;
        }
        return length;
    }
}