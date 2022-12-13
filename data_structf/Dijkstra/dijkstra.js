/**
 * * Dijkstra's
 * * algo finds the shortes path between two gaph*
 */

/**
 * * The Algo
 * steps:
 * 		- every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
 * 		- Once we've moved to the node we're going to visit, we look at each of its neighbors
 * 		- For each neighboring node, we calculate the distance by summing the total edges the lead to the node we're checking form the start.
 * 		-If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
 */

// Priority Queue
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let obj = { val, priority }
		this.values.push(obj);
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => (a.priority < b.priority));
	}
	size() {
		return this.values.length
	}
}

/**\
 * * Weighted Graph
 */

class WeightedGraph {
	constructor() {
		this.adjList = {};
		this.pq = new PriorityQueue();
	}

	addVertex(vName) {
		if (!this.adjList[vName]) this.adjList[vName] = [];s
	}

	addEdge(v1, v2, weight) {
		this.adjList[v1].push({ node: v2, weight });
		this.adjList[v2].push({ node: v1, weight });
	}

	dijkstra(startVertex, endVertex) {
		let distanceTable = {};
		let previous = {};
		let visited = [];

		let distanceArray = Object.keys(this.adjList);
		for (const key of distanceArray) {
			distanceTable[key] = { distance: Infinity };
			previous[key] = {value: null}
		}
		distanceTable[startVertex] = { distance: 0 };
		let idx = distanceArray.indexOf(startVertex)
		distanceArray.splice(idx, 1)
		this.pq.enqueue(startVertex, 0)
		distanceArray.forEach(val => this.pq.enqueue(val, Infinity))
		while (this.pq.size() !== 0){
			let currentVertex = this.pq.dequeue()
			if (currentVertex.val === endVertex) return
		}

	}
}

const wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("E", "B", 7);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "F", 1);
wg.addEdge("D", "E", 3);
wg.addEdge("F", "E", 1);
wg.dijkstra("A", "F");

console.log(wg);
