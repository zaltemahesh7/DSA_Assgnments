// Practical Assignment No : 1
// Program Name : Implementation of Singly Linked List
// Name : Zalte Mahesh Babasahesh
// Roll No. : MC222467
// Date : 09/01/2023

// Program :-

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    create(data) {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = new Node(data);
        }
        this.count = this.count + 1;
    }

    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }

    insert(data, pos) {
        if (this.head == null) {
            console.log("LonkedList is Empty");
        }
        else if (pos == 0) {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            this.count = this.count + 1;
            console.log("After Insertion : ");
            this.display();
        }
        else if (pos <= this.count) {
            let temp = this.head;
            let i = 1;
            while (i < pos - 1) {
                temp = temp.next;
                i = i + 1;
            }
            let newNode = new Node(data);
            let tempNext = temp.next;
            temp.next = newNode;
            newNode.next = tempNext;
            this.count = this.count + 1;
            console.log("After Insertion : ");
            this.display();
        }
    }

    delete(data) {
        if (this.head == null) {
            clonsole.log("Linked List is Empty.");
        }
        else if (this.head == data) {
            let temp = this.head.next;
            this.head = temp;
            this.count = this.count - 1;
            console.log("After Deletion : ");
            this.display();
        }
        else {
            let temp = this.head;
            let found = false;
            let prev = null;
            while (temp != null) {
                if (temp.data == data) {
                    found = true;
                    break;
                }
                prev = temp;
                temp = temp.next;
            }
            if (found) {
                prev.next = temp.next;
                this.count = this.count - 1;
                console.log("After Deletion : ");
                this.display();
            }
            else {
                console.log(" Data NOT Found ");
            }
        }git 
    }
}

const list = new LinkedList();
list.create(90);
list.create(70);
list.create(80);
list.create(55);
list.create(34);
list.create(33);
list.create(67);
list.create(56);
list.create(34);
list.create(99);

list.display();

list.delete(55);

list.display();

list.insert(55, 4);

list.display();