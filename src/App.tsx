import { useCallback, useMemo, useState } from 'react'
import './App.css'
import { ReactFlow, Controls, Background, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import expandableNode from './expandableNode';

const edges: Edge[] = [{ id: '1-2', source: '1', target: '2', sourceHandle: 'bottom-center' }];

const nodes: Node[] = [
  {
    id: '1',
    type: 'expandableNode',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'expandableNode',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

function App() {
  const [count, setCount] = useState(0)
  const nodeTypes = useMemo(() => ({ expandableNode: expandableNode }), []);

  return (
    <div className='h-screen w-screen'>
      <ReactFlow colorMode='dark' nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  )
}

export default App
