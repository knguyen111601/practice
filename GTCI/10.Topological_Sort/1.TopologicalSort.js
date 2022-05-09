// Topological Sort (medium)

// Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of its vertices such that for every directed edge (U, V) from vertex U to vertex V, U comes before V in the ordering.

// Given a directed graph, find the topological ordering of its vertices.

const topological_sort = (vertices, edges) => {

    const sortedOrder = []

    if (vertices <= 0) {
        return sortedOrder;
    }

    // a. Initialize the graph
    const inDegree = Array(vertices).fill(0) // count of incoming edges
    const graph = Array(vertices).fill(0).map(()=> Array()) // adjacency list the graph
        // .map(()=> Array()) makes each 0 an empty array

    // b. Build the graph
    edges.forEach((edge) => {
        let parent = edge[0]
        let child = edge[1]
        graph[parent].push(child) // put the child into its parent's list
        inDegree[child] ++ // increments child's inDegree
    })

    // c. Find all sources i.e. all vertices will 0 in-degrees
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i)
        }
    }

    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach((child) => {
            inDegree[child] -= 1
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) {
        return []
    }

    return sortedOrder

}


///////////////////////////////////////////////////////////////////////////
// SOLUTION
///////////////////////////////////////////////////////////////////////////

// The basic idea behind the topological sort is to provide a partial ordering among the vertices of the graph such that if there is an edge from U to V then U≤V i.e., U comes before V in the ordering. Here are a few fundamental concepts related to topological sort:

    // 1. Source: Any node that has no incoming edge and has only outgoing edges is called a source
    // 2. Sink: Any node that only has incoming edges and no outgoing edge is called a sink
    // 3. So we can say that a topological ordering starts with one off the sources and ends at one of the sinks
    // 4. A topological ordering is possible only when the graph has no directed cycles, i.e. if the graph is a Directed Acrylic Graph (DAG) If the graph has a cycle, some vertices will have cyclic dependencies which makes it impossible to find a linear ordering among vertices 

// To Find the topological sort of a graph, we can traverse the grab in a Breadth First Search (BFS)
// Start with all the sources in a stepwise fashion, save all sources to a sorted list
// We will then remove all sources and their edges from the graph 
// After removal of the edges, we will have new sources, so we repeat the above until all vertices are visited 

// IMPLEMENTATION 
    // a. Initialization
        // 1. Store the graph in Adjacency Lists, which means each parent vertex will have a list containing all of its children. We will do this using a HashMap where the key will be the parent vertex number and the value will be a list containing children vertices
        // 2. To find the sources, we will keep a HashMap to count in-degrees i.e., count of incoming edges of each vertex. Any vertex with a '0' in-degree will be a source 
    // b. Build the graph and find in-degree of a vertices 
        // 1. We will build the graph from the input and populate the in-degrees HashMap
    // c. Find all the sources
        // 1. All vertices with '0' in-degrees will be our sources and we will store them in a queue
    // d. Sort
        // 1. For each source do the following:
            // Add it to sorted list
            // Get all of its children from the graph
            // Decrement the in-degree of each child by 1
            // If a child's in-degree becomes '0' add it to the sources Queue
        // 2. Repeat step 1, until the source Queue is empty 

console.log(`Topological sort: ${
  topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`);

console.log(`Topological sort: ${
  topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`);
console.log(`Topological sort: ${
  topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`);