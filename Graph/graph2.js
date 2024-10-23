class Graph{
    constructor(){
        this.adjList = {}
    }
    addVertex(ver){
        if(!this.adjList[ver]){
            this.adjList[ver] = new Set()
        }
    }
    addEdge(ver1,ver2){
        if(!this.adjList[ver1]){
            this.addVertex(ver1)
        }
        if(!this.adjList[ver2]){
          this.addVertex(ver2)
        }

        this.adjList[ver1].add(ver2)
        this.adjList[ver2].add(ver1)
    }
    rmvEdge(ver1,ver2){
        this.adjList[ver1].delete(ver2)
        this.adjList[ver2].delete(ver1)
    }
    rmvVertex(ver){
        if(!this.adjList[ver]){
            return;
        }
        for(let edge of this.adjList[ver]){
            this.rmvEdge(ver,edge)
        }
        delete this.adjList[ver]
    }
    hasEdge(v1,v2){
        return (this.adjList[v1].has(v2) && this.adjList[v2].has(v1))
    }
    display(){
        for(let obj in this.adjList){
            console.log(`${obj} -> ${[...this.adjList[obj]]}`)
        }
    }
    bfs(vertex){
        if(!this.adjList[vertex]) return;
        let q = [vertex]
        const visited = new Set()
        visited.add(vertex)
        while(q.length >0){
            let node = q.shift()
            console.log(node)
            for(let ver of this.adjList[node]){
                if(!visited.has(ver)){
                    q.push(ver)
                    visited.add(ver)

                }
            }
        }
    }
    dfs(vertex,visited = new Set()){
        if(!vertex) return ;
        console.log(vertex)
        visited.add(vertex)
        for(let vs of this.adjList[vertex]){
            if(!visited.has(vs)){
                this.dfs(vs,visited)
            }
        }
    }
    shortestPath(start,target){
        if(start === target) return[start]
        console.log(start,target)
        const visited = new Set()
        const queue = [[start]]
        visited.add([start])
       
        while(queue.length >0){
            let node = queue.shift()
            let newNode = node[node.length-1]
            // console.log(newNode)
            for(let neighbour of this.adjList[newNode]){
                // console.log(neighbour)
                if(!visited.has(neighbour)){
                    const newPath = [...node,neighbour]
                    queue.push(newPath)
                    visited.add(neighbour)
                    if(target === neighbour) return newPath
                }
            }
        }
    }
    cycle(start){
        let queue = [[start,null]]
        let visited = new Set()
        while(queue.length >0){
            const [node,parent] = queue.shift()
            console.log(node,parent)
            if(visited.has(node)){
                return true
            }
            visited.add(node)
            for(let nei  of this.adjList[node]){
                if(parent != nei){
                    queue.push([nei,node])
                }
            }
        }
        return false
    }

}
const obj = new Graph()
console.log(obj)
obj.addVertex(1)
obj.addVertex(2)
obj.addVertex(3)
obj.addVertex(4)
obj.addEdge(1,3)
obj.addEdge(3,2)
obj.addEdge(2,3)
obj.addEdge(4,3)
obj.addEdge(4,2)
obj.addEdge(2,1)
obj.display()
// obj.rmvEdge(1,2)
// obj.rmvVertex(1)
// obj.display()

// console.log(obj.hasEdge(2,3))
// obj.bfs(1)
// obj.dfs(2)
console.log(obj.shortestPath(1,4))
console.log(obj.cycle())