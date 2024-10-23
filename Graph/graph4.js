class Graph{
    constructor(){
        this.adjList = {}
    }
    addVertex(data){
        if(!this.adjList[data]){
            this.adjList[data] = new Set()
        }
    }
    addEdge(v1,v2){
        if(!this.adjList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjList[v2]){
            this.addVertex(v2)
        }
        this.adjList[v1].add(v2)
        this.adjList[v2].add(v1)
    }
    shortestPath(vertex,target){
        let q = [[vertex]]
        let visited = new Set()
        visited.add(vertex)
        while(q.length){
            let node = q.shift()
            let newNode = node[node.length-1]
            for(let nei of this.adjList[newNode]){
                const path = [...node,nei]
                if(nei === target){
                    return path
                }
                q.push(path)
                visited.add(nei)
            }
        }
    }
    cycle(vertex){
        let q = [[vertex,null]]
        let visited = new Set()

        while(q.length>0){
            const [node,parent] = q.shift()
            if(visited.has(node)){
                return true
            }
            visited.add(node)
            for(let val of this.adjList[node]){
                if(parent!=val){
                    q.push([val,node])
                }
            }
        }
        return false
    }
    dfs(vertex,visited = new Set()){
        if(!vertex) return;
        console.log(vertex)
        visited.add(vertex)
        for(let nei of this.adjList[vertex]){
            if(!visited.has(nei)){
                visited.add(nei)
                this.dfs(nei,visited)

            }
        }
    }
}
const obj = new Graph()
obj.addVertex(10)
obj.addVertex(20)
obj.addVertex(30)
console.log(obj)
obj.addEdge(10,20)
obj.addEdge(20,30)

// console.log(obj)
// console.log(obj.shortestPath(10,30))
console.log(obj.cycle(10))
obj.dfs(10)