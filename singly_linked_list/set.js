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
    console.log("-----PUSH----");
    list.printList();
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var currentPosition = this.head;
    while (counter !== index) {
      currentPosition = currentPosition.next;
      counter++;
    }
    list.printList();
    console.log("----- GET -----");
    console.log(currentPosition.val);
    return currentPosition;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      console.log("----- SET -----");
      list.printList();
      console.log(foundNode.val);
      return true;
    }

    return false;
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

list.get(1);
list.set(2, "!!!");
