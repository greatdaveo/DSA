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
    console.log(list.printList());
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

    console.log("-----POP----_");
    console.log(list.printList());
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
    console.log("-----SHIFT-----");
    console.log(list.printList());

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    console.log("-----UNSHIFT-----");
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

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    var prevIndex = this.get(index - 1);
    var tempIndex = prevIndex.next;
    prevIndex.next = newNode;
    newNode.next = tempIndex;
    this.length++;

    console.log("----- INSERT -----");
    list.printList();
    console.log(newNode.val);

    return true;
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

// list.pop();
// list.shift();
// list.unshift(8);
// list.unshift(5);
// list.unshift(2);

list.insert(1, 100);
