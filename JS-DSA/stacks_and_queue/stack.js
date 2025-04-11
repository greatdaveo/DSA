class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    console.log("----- PUSH -----");
    stack.printList();
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    console.log("----- POP -----");
    stack.printList();
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

const stack = new Stack();

stack.push(20);
stack.push(50);
stack.push(100);
stack.push(500);
stack.push(1000);
stack.push(2000);

stack.pop();
