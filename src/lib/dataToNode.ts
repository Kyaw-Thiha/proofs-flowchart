import { MarkerType } from "@xyflow/react";
import { Edge, NodeInterface, nodeTypes, Theorem } from "./interface";

export const generateNodes = (dataList: Array<Theorem>) => {
  const nodes: Array<NodeInterface> = [];

  for (const data of dataList) {
    // Adding the node
    const nodeId = data.title.toLocaleUpperCase().split(" ").join('_');

    const node: NodeInterface = {
      id: nodeId, // Riemann Sum ---> riemann_sum
      type: 'expandableNode',
      data: {
        nodeType: nodeTypes.defintion,
        title: data.title,
        image: data.image,
        section: data.section,
        toLearn: data.toLearn
      },
      position: { x: data.x, y: data.y },
    }

    nodes.push(node);
  }

  return nodes;
}

export const generateEdges = (dataList: Array<Theorem>) => {
  const edges: Array<Edge> = [];

  for (const data of dataList) {
    // Riemann Sum ---> riemann_sum
    const nodeId = data.title.toLocaleUpperCase().split(" ").join('_');

    // Adding the edges
    for (const connection of data.connectedTo) {
      const sourceId = connection.title.toLocaleUpperCase().split(" ").join('_');

      const edge: Edge = {
        id: `${sourceId}-${nodeId}`,
        source: sourceId,
        target: nodeId,
        type: "animatedSvgEdge",
        markerEnd: {
          type: MarkerType.Arrow,
        },
        data: {
          duration: 2,
          shape: "package",
          path: "smoothstep",
        },
      };

      edges.push(edge);
    }
  }

  return edges
}

