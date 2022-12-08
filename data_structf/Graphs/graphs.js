/**
 * * TERMINOLOGY
 * Nodes are called (vertex) VERTICES and links EDGES
 * Graphs can be un directed or undirected depending if edges have direction => (DIRECTED) or not <=> (UNDIRECTED)
 *  Graphs can be Weighted or not, that's it, if edges have some value.
 *
 * * STORING GRAPHS:    ADJACENCY LIST  vs   ADJACENCY MATRIX
 *      add vertex:     O(1)                    O(|V^2|)
 *      add Edge        O(1)                    O(1)
 *      remove vertex   O(|V| + |E|)            O(|V^2|)
 *      remove edge     O(|E|)                  O(1)
 *      Query           O(|V| + |E|)            O(1)
 *      Storage         O(|V| + |E|)            O(|V^2|)
 * ?    |V| = number of verticies   |E| = number of edges
 */

/**
 * ADJACENCY LIST UNDIRECTED
 */

class Graph {
    constructor() {
        this.adjList = new Map()
    }

    addVertex(vertexName) {
        if (!this.adjList.has(vertexName)) this.adjList.set(vertexName, [])
    }

    addEdge(vertexName1, vertexName2) {
        if (this.adjList.has(vertexName1) && this.adjList.has(vertexName2)) {
            const vertex1prevValues = this.adjList.get(vertexName1)
            vertex1prevValues.push(vertexName2)
            this.adjList.set(vertexName1, vertex1prevValues)
            const vertex2prevValues = this.adjList.get(vertexName2)
            vertex2prevValues.push(vertexName1)
            this.adjList.set(vertexName2, vertex2prevValues)
        }
    }

    removeVertex(vertexName) {
        this.adjList.delete(vertexName)
    }

    removeEdge(vertexName1, vertexName2) {
        if (this.adjList.has(vertexName1) && this.adjList.has(vertexName2)) {
            const vertex1prevValues = this.adjList.get(vertexName1)
            const index = vertex1prevValues.indexOf(vertexName2)
            vertex1prevValues.splice(index, 1)
            this.adjList.set(vertexName1, vertex1prevValues)
            const vertex2prevValues = this.adjList.get(vertexName2)
            const index2 = vertex2prevValues.indexOf(vertexName1)
            vertex2prevValues.splice(index2, 1)
            this.adjList.set(vertexName2, vertex2prevValues)
        }
    }

    printGraph() {
        // for (const vertex of this.adjList) {
        console.log(this.adjList)
        // }
    }
}

const mg = new Graph()
mg.addVertex('Lausanne')
mg.addVertex('Berne')
mg.addVertex('Zurich')
mg.addVertex('Basel')
mg.addVertex('Geneva')
mg.addVertex('Sion')
mg.addVertex('Paris')
mg.addEdge('Lausanne', 'Berne')
mg.addEdge('Zurich', 'Berne')
mg.addEdge('Zurich', 'Basel')
mg.addEdge('Basel', 'Berne')
mg.addEdge('Geneva', 'Berne')
mg.addEdge('Geneva', 'Lausanne')
mg.addEdge('Paris', 'Lausanne')
mg.addEdge('Sion', 'Lausanne')
mg.printGraph()
