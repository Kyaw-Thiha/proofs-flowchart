import { useMemo, } from 'react'
import './App.css'
import { ReactFlow, Background, Node, } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ExpandableNode from "@/components/expandableNode";
import { generateEdges, generateNodes } from '@/lib/dataToNode';
import { mata37Data } from './data/mata37';
import { AnimatedSvgEdge } from './components/animated-svg-edge';


const edges = generateEdges(mata37Data);
const nodes = generateNodes(mata37Data);

function App() {
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
