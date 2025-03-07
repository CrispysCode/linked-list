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

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) return null;
        let currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (index < 0 || index >= this.size()) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.nextNode) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let currentNode = this.head;
        while (currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        const value = currentNode.nextNode.value;
        currentNode.nextNode = null;
        return value;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            } 
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }
}