class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  hasEdge(vertex, vertex2) {
    return (
      this.adjList[vertex].has(vertex2) && this.adjList[vertex2].has(vertex)
    );
  }
  rmEdge(v1, v2) {
    this.adjList[v1].delete(v2);
    this.adjList[v2].delete(v1);
  }
  //o(length of set)
  rmVertex(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    for (let v of this.adjList[vertex]) {
      this.rmEdge(vertex, v);
    }
    delete this.adjList[vertex];
  }
  display() {
    for (let vertex in this.adjList) {
      console.log(vertex, "->", [...this.adjList[vertex]]);
    }
  }
  bfs(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    let queue = [vertex];
    let visited = new Set();
    visited.add(vertex);

    while (queue.length > 0) {
      let p = queue.shift();
      console.log(p);

      for (let vs of this.adjList[p]) {
        if (!visited.has(vs)) {
          queue.push(vs);
          visited.add(vs);
        }
      }
    }
  }
  dfs(vertex, visited = new Set()) {
    if (!this.adjList[vertex]) {
      return;
    }
    console.log(vertex);
    visited.add(vertex);

    for (let vs of this.adjList[vertex]) {
      if (!visited.has(vs)) {
        this.dfs(vs,visited)
      }
    }
  }
  shortestPath(start,target){
    if(start === target) return [start];

    const visited = new Set()
    const queue = [[start]]
    visited.add(start)

    while(queue.length >0){
      const path = queue.shift()
      const node = path[path.length -1]
      for(let nei of this.adjList[node]){
        console.log("path,node",path,node)
        console.log("neibour",nei)
        if(!visited.has(nei)){
            const newPath = [...path,nei]
            console.log("new path",newPath)
            queue.push(newPath)
            visited.add(nei)

            if(nei === target){
              return newPath
            }
        }
      }
    }

  }
}
const obj = new Graph();
obj.addVertex(0);
obj.addVertex(1);
obj.addVertex(2);
obj.addVertex(3);
obj.addVertex(4);
obj.addEdge(0, 1);
obj.addEdge(0, 2);
obj.addEdge(1, 3);
obj.addEdge(2, 4);
obj.addEdge(3, 4);
// console.log(obj.hasEdge("b","h"))
// obj.rmEdge("h","b")

obj.display();
obj.bfs(0)
console.log("///")
console.log(obj.shortestPath(0,4))
