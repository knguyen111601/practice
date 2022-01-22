// Instantiate a new instance of a graph:
const g = new Graph()

// Add three nodes, 'A', 'B', and 'C':
g.addNode('A')
g.addNode('B')
g.addNode('C')

// Create edges between our nodes:
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'C');
g.addEdge('C', 'A');

// Each node now has at least one edge:
// A -> B, C
// B -> CC
// C -> A

