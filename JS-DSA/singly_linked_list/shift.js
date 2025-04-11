class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    list.printList();
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentEndOfList = this.head;
    let newTail = currentEndOfList;

    while (currentEndOfList.next) {
      newTail = currentEndOfList;
      currentEndOfList = currentEndOfList.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    list.printList();
    return currentEndOfList;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.val + "->";
      current = current.next;
    }
    output += "NULL";
    console.log(output);
  }
}

var list = new SinglyLinkedList();
list.push(10);
list.push(50);
list.push(200);
console.log("----------------------------");
list.pop();
