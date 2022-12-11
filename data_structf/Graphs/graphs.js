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

//  ADJACENCY LIST UNDIRECTED
class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vName) {
        if (!this.adjList[vName]) this.adjList[vName] = []
    }
    addEdge(v1, v2) {
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }
    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1)
    }

    removeVertex(vName) {
        if (this.adjList[vName]) {
            while (this.adjList[vName].length) {
                const v = this.adjList[vName].pop()
                this.removeEdge(vName, v)
            }
            delete this.adjList[vName]
        }
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
mg.removeEdge('Berne', 'Geneva')
mg.removeEdge('Paris', 'Lausanne')
mg.removeVertex('Paris')
mg.removeVertex('Sion')
console.log(mg)
