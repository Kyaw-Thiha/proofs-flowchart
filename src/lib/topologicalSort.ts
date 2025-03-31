export function topologicalSortWithLevels(graph: Record<string, string[]>): Record<string, number> {
  const inDegree: Record<string, number> = {};
  const level: Record<string, number> = {};
  const queue: string[] = [];

  // Initialize in-degree and level for each node
  for (const node in graph) {
    if (!(node in inDegree)) inDegree[node] = 0;
    for (const neighbor of graph[node]) {
      inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
    }
  }

  // Enqueue nodes with in-degree 0 and set their level to 0
  for (const node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
      level[node] = 0;
    }
  }

  while (queue.length > 0) {
    const node = queue.shift()!;

    for (const neighbor of graph[node] || []) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
        level[neighbor] = level[node] + 1;
      }
    }
  }

  return level;
}

