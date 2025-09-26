class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //   v1, v2 meant vertex 1 and 2
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
}

const graph = new Graph();

graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");

graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");

console.log("::: BEFORE REMOVING EDGE :::");
console.log(graph.adjacencyList);

graph.removeEdge("Dallas", "Aspen");

console.log("::: AFTER REMOVING EDGE :::");
console.log(graph.adjacencyList);
