class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
      // console.log(this.values);
    }
  }
}

let heap = new MaxBinaryHeap();

// heap.push(41);
// heap.push(39);
// heap.push(33);
// heap.push(18);
// heap.push(27);
// heap.push(12);

heap.insert(55);
heap.insert(45);

console.log(heap.values);
