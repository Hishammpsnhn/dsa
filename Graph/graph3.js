class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdge(v1, v2) {
    if (!this.adjList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjList[v2]) {
      this.addVertex(v2);
    }
    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }
  display() {
    for (let val in this.adjList) {
      console.log(val + "->" + [...this.adjList[val]]);
    }
  }
  rmEdge(v1, v2) {
    this.adjList[v1].delete(v2);
    this.adjList[v2].delete(v1);
  }
  rmVertex(v1) {
    if (this.adjList[v1]) {
      for (let val of this.adjList[v1]) {
        this.rmEdge(v1, val);
      }
    }
    delete this.adjList[v1];
  }
  isEdge(v1, v2) {
    return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
  }
  bfs(vertex) {
    if (!this.adjList[vertex]) return null;
    let q = [];
    let visited = new Set();
    q.push(vertex);
    visited.add(vertex);
    while (q.length > 0) {
      let node = q.shift();
      console.log(node);
      for (let val of this.adjList[node]) {
        if (!visited.has(val)) {
          q.push(val);
          visited.add(val);b 
        }
      }
    }
  }
  dfs(vertex, visited = new Set()) {
    if (!vertex) return;
    console.log("j", vertex);
    visited.add(vertex);
    for (let val of this.adjList[vertex]) {
      if (!visited.has(val)) {
        visited.add(val);
        this.dfs(val, visited);
      }
    }
  }

  shortestPath(start, target) {
    if (start === target) return [start];
    let q = [];
    let visit = new Set();
    q.push([start]);
    visit.add(start);

    while (q.length > 0) {
      let node = q.shift();
      let newNode = node[node.length - 1];
      console.log("ne", newNode);
      for (let nei of this.adjList[newNode]) {
        if (!visit.has(nei)) {
          const path = [...node, nei];
          q.push(path);
          visit.add(nei);
          if (target === nei) return path;
        }
      }
    }
  }

  cycle(start) {
    let q = [[start, null]];
    let visit = new Set();
    while (q.length > 0) {
        const [node,parent] = q.shift()

        if(visit.has(node)){
            return true
        }
        visit.add(node)
        for(let val of this.adjList[node]){
            if(parent != val){
                q.push([val,node])
            }
        }
    }
    return false
  }
}
const obj = new Graph();
obj.addVertex(10);
obj.addVertex(20);
obj.addVertex(30);
obj.addVertex(40);
obj.addEdge(10, 20);
obj.addEdge(20, 30);
obj.addEdge(30, 40);
obj.addEdge(10, 40);

// obj.rmVertex(10);
obj.display();
console.log(obj.isEdge(10, 40));
// obj.bfs(10);
obj.dfs(10);
console.log(obj.shortestPath(10, 40));
console.log(obj.cycle(10))