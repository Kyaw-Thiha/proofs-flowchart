import { memo, useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { NodeProps, Position, useReactFlow } from "@xyflow/react";
import { BaseNode } from "@/components/base-node";
import { BaseHandle } from "@/components/base-handle";
import { motion } from "motion/react";
import { NodeData, nodeTypes } from "@/lib/interface";
import { cn } from "@/lib/utils";


interface ExpandableNodeProps extends Omit<NodeProps, "data"> {
  data: NodeData;
}

const ExpandableNode = memo(({ selected, data, id }: ExpandableNodeProps) => {
  const { getNode } = useReactFlow();
  const node = getNode(id);

  const [isSeleted, setIsSelected] = useState(false);
  const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  const [x, setX] = useState(node?.position.x ?? 0);
  const [y, setY] = useState(node?.position.y ?? 0);
  const [opacity, setOpacity] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const toggleIsSelected = () => {
    const position_x = (node?.position.x ?? 0);
    const position_y = (node?.position.y ?? 0);
    if (!isDragging) {
      // setWidth(isSeleted ? 0 : 300);
      // setHeight(isSeleted ? 0 : 350);
      setWidth(isSeleted ? 0 : 600);
      // setHeight(isSeleted ? 0 : 450);
      setX(isSeleted ? position_x : position_x + 150);
      setY(isSeleted ? position_y : position_y - 200);
      setOpacity(isSeleted ? 0 : 1);

      setIsSelected(!isSeleted);
    }
  }

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    // Prevent the parent from overriding the dragging behavior
    event.stopPropagation();
    event.preventDefault();
  }, []);
  const targetElement = document.getElementsByClassName("react-flow__container")[0];


  return (
    <BaseNode
      className={
        cn(data.nodeType == nodeTypes.defintion ? "rounded-[50%]" : "rounded-md",
          data.toLearn ? "border" : "border-dashed",
          "dark:border-white",
        )}
      selected={selected}
      onClick={toggleIsSelected}
    >
      <BaseHandle id="target-1" type="target" position={Position.Top} />
      <div className="flex flex-col" >
        <div className="cursor-pointer">
          {data.title}
        </div>
        {targetElement &&
          createPortal(
            <motion.div
              className="absolute bg-black z-10 rounded-xl border border-white px-4 py-4 pointer-events-auto"
              onPointerDown={handlePointerDown} // Stops React Flow panning
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setTimeout(() => setIsDragging(false), 100)} // Small delay to prevent flicker
              animate={{
                width: width,
                // height: height,
                opacity: opacity,
                x: x,
                y: y,
              }}
              transition={{ type: "spring" }}
              drag
            >
              <h2 className="mb-4 text-center text-3xl dark:text-white">{data.title}</h2>
              <img src={data.image} alt={data.title} />
            </motion.div>, targetElement
          )
        }

      </div>
      <BaseHandle id="source-1" type="source" position={Position.Bottom} />
    </BaseNode>
  );
});

export default ExpandableNode;
