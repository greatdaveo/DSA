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
    // console.log(list);
    this.printList();
    return this;
  }
  
  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.val + " → ";
      current = current.next;
    }
    output += "NULL";
    console.log(output);
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
