import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { ReactFlow, Background, Node, Controls, applyNodeChanges, applyEdgeChanges, addEdge, Connection, EdgeChange, Edge, NodeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ExpandableNode from "@/components/expandableNode";
import { generateEdges, generateNodes } from '@/lib/dataToNode';
import { mata37Data } from './data/mata37';
import { AnimatedSvgEdge } from './components/animated-svg-edge';


// const edges: Edge[] = [
//   { id: '1-2', source: '1', target: '2' },
//   { id: '1-3', source: '1', target: '3' },
// ];
// const nodes: NodeInterface[] = [
//   {
//     id: '1',
//     type: 'expandableNode',
//     data: { nodeType: nodeTypes.defintion, title: "Riemann Definition", image: "mata37/riemann/riemann_defn.png", section: sections.riemann, toLearn: true },
//     position: { x: 0, y: 0 },
//   },
//   {
//     id: '2',
//     type: 'expandableNode',
//     data: { nodeType: nodeTypes.theorem, title: "Hi", image: "mata37/riemann/riemann_defn.png", section: sections.riemann, toLearn: true },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     type: 'expandableNode',
//     data: { nodeType: nodeTypes.theorem, title: "Hi", image: "mata37/riemann/riemann_defn.png", section: sections.riemann, toLearn: true },
//     position: { x: -100, y: 100 },
//   },
// ];
const edges = generateEdges(mata37Data);
const nodes = generateNodes(mata37Data);

function App() {
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState(initialEdges);

  // const onNodesChange = useCallback(
  //   (changes: NodeChange<Node>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes],
  // );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange<Edge>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges],
  // );
  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges],
  // );
  const nodeTypes = useMemo(() => ({ expandableNode: ExpandableNode }), []);
  const edgeTypes = useMemo(() => ({ animatedSvgEdge: AnimatedSvgEdge }), []);


  return (
    <div className='h-screen w-screen'>
      <ReactFlow
        colorMode='dark'
        nodes={nodes as unknown as Node[]}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        // nodesDraggable={false}
        // panOnDrag={false}
        fitView
      >
        <Background />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  )
}

export default App
