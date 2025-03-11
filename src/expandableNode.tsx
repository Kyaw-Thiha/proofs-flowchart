import { useCallback } from 'react';
import { Handle, Node, NodeProps, Position } from '@xyflow/react';
import { motion } from "motion/react";


type expandableNodeData = { label: string };
type expandableNode = Node<expandableNodeData, 'label'>;;
function expandableNode({ data, isConnectable }: NodeProps<expandableNode>) {

  return (
    <div className="bg-white rounded-xl py-2 px-4">
      <Handle
        type="target"
        position={Position.Top}
        id="top-left"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-center"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-right"
        isConnectable={isConnectable}
      />
      <div className='relative cursor-pointer'>
        <div> Text: {data.label}</div>

        <motion.div className='absolute bg-white px-4 py-2 rounded-xl' whileHover={{ scale: 1.5 }}>
          Hey There!
        </motion.div>
      </div>


      {/* Bottom Handles */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-left"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-center"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-right"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default expandableNode;
