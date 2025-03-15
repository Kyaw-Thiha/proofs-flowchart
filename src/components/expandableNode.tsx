import { memo, useState } from "react";

import { NodeProps, Position } from "@xyflow/react";
import { BaseNode } from "@/components/base-node";
import { BaseHandle } from "@/components/base-handle";
import { motion } from "motion/react";
import { NodeData, nodeTypes } from "./interface";
import { cn } from "@/lib/utils";

interface ExpandableNodeProps extends Omit<NodeProps, "data"> {
  data: NodeData;
}

const ExpandableNode = memo(({ selected, data }: ExpandableNodeProps) => {
  const [isSeleted, setIsSelected] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const toggleIsSelected = () => {
    setWidth(isSeleted ? 0 : 300);
    setHeight(isSeleted ? 0 : 350);
    setX(isSeleted ? 0 : 150);
    setY(isSeleted ? 0 : -75);
    setOpacity(isSeleted ? 0 : 1);

    setIsSelected(!isSeleted);
  }

  return (
    <BaseNode className={cn(data.nodeType == nodeTypes.defintion ? "rounded-[50%]" : "rounded-md")} selected={selected} onClick={toggleIsSelected}>
      <BaseHandle id="target-1" type="target" position={Position.Top} />
      <div className="flex flex-col" >
        <div className="cursor-pointer">
          {data.title}
        </div>
        <motion.div
          className="absolute bg-black z-10 rounded-xl border border-white px-4 py-4"
          animate={{
            width: width,
            height: height,
            opacity: opacity,
            x: x,
            y: y,
          }}
          transition={{ type: "spring" }}
          drag
        >
          Hey
        </motion.div>

      </div>
      <BaseHandle id="source-1" type="source" position={Position.Bottom} />
    </BaseNode>
  );
});

export default ExpandableNode;
