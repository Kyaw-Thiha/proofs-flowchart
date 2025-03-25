import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { ReactFlow, Controls, Background, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ExpandableNode from "@/components/expandableNode";
import { NodeData, nodeTypes, sections } from './components/interface';

interface NodeInterface extends Omit<Node, "data"> {
  data: NodeData;
}

const edges: Edge[] = [
  { id: '1-2', source: '1', target: '2' },
  { id: '1-3', source: '1', target: '3' },
];
const nodes: NodeInterface[] = [
  {
    id: '1',
    type: 'expandableNode',
    data: { nodeType: nodeTypes.defintion, title: "Riemann Definition", image: "testing.png", section: sections.riemann, toLearn: true },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'expandableNode',
    data: { nodeType: nodeTypes.theorem, title: "Hi", image: "testing.png", section: sections.riemann, toLearn: true },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'expandableNode',
    data: { nodeType: nodeTypes.theorem, title: "Hi", image: "testing.png", section: sections.riemann, toLearn: true },
    position: { x: -100, y: 100 },
  },
];

function App() {
  const [count, setCount] = useState(0)
  const nodeTypes = useMemo(() => ({ expandableNode: ExpandableNode }), []);

  return (
    <div className='h-screen w-screen'>
      <ReactFlow colorMode='dark' nodes={nodes as unknown as Node[]} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  )
}

export default App
