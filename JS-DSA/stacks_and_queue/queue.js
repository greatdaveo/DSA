class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //   Push
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    console.log("----- ENQUEUE -----");
    queue.printList();
    return ++this.size;
  }

  //   Shift()
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    console.log("----- DEQUEUE -----");
    queue.printList();
    return temp.val;
  }

  printList() {
    let current = this.first;
    let output = "";
    while (current) {
      output += current.val + "->";
      current = current.next;
    }
    output += "NULL";
    console.log(output);
  }
}

const queue = new Queue();

queue.enqueue(20);
queue.enqueue(50);
queue.enqueue(100);
queue.enqueue(500);
queue.enqueue(1000);
queue.enqueue(2000);

queue.dequeue();
