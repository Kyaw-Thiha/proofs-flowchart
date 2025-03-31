import { FC } from "react";
import type { Edge, EdgeProps, Position } from "@xyflow/react";
import {
  BaseEdge,
  getBezierPath,
  getStraightPath,
  getSmoothStepPath,
} from "@xyflow/react";

export type AnimatedSvgEdge = Edge<{
  /**
   * The amount of time it takes, in seconds, to move the shape one from end of
   * the edge path to the other.
   */
  duration: number;
  /**
   * The direction in which the shape moves along the edge path. Each value
   * corresponds to the following behavior:
   *
   * - `forward`: The shape moves from the source node to the target node.
   *
   * - `reverse`: The shape moves from the target node to the source node.
   *
   * - `alternate`: The shape moves from the source node to the target node and
   *   then back to the source node.
   *
   * - `alternate-reverse`: The shape moves from the target node to the source
   *   node and then back to the target node.
   *
   * If not provided, this defaults to `"forward"`.
   */
  direction?: "forward" | "reverse" | "alternate" | "alternate-reverse";
  /**
   * Which of React Flow's path algorithms to use. Each value corresponds to one
   * of React Flow's built-in edge types.
   *
   * If not provided, this defaults to `"bezier"`.
   */
  path?: "bezier" | "smoothstep" | "step" | "straight";
  /**
   * The number of times to repeat the animation before stopping. If set to
   * `"indefinite"`, the animation will repeat indefinitely.
   *
   * If not provided, this defaults to `"indefinite"`.
   */
  repeat?: number | "indefinite";
  shape: keyof typeof shapes;
}>;

/**
 * The `AnimatedSvgEdge` component renders a typical React Flow edge and animates
 * an SVG shape along the edge's path.
 */
export function AnimatedSvgEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  style,
  data = {
    duration: 2,
    direction: "forward",
    path: "bezier",
    repeat: "indefinite",
    shape: "circle",
  },
  ...delegated
}: EdgeProps<AnimatedSvgEdge>) {
  const Shape = shapes[data.shape];

  const [path] = getPath({
    type: data.path ?? "bezier",
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const animateMotionProps = getAnimateMotionProps({
    duration: data.duration,
    direction: data.direction ?? "forward",
    repeat: data.repeat ?? "indefinite",
    path,
  });

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} {...delegated} />
      <Shape animateMotionProps={animateMotionProps} />
    </>
  );
}

type AnimateMotionProps = {
  dur: string;
  keyTimes: string;
  keyPoints: string;
  repeatCount: number | "indefinite";
  path: string;
};

type AnimatedSvg = FC<{ animateMotionProps: AnimateMotionProps }>;

const shapes = {
  circle: ({ animateMotionProps }) => (
    <circle r="5" fill="#ff0073">
      <animateMotion {...animateMotionProps} />
    </circle>
  ),

  package: ({ animateMotionProps }) => (
    <g fill="#dfc7b1" stroke="#2b2a2a" transform="translate(-10,-10)">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
      <path d="M12 22V12" />
      <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
      <path d="m7.5 4.27 9 5.15" />
      <animateMotion {...animateMotionProps} />
    </g>
  ),

  arrow: ({ animateMotionProps }) => (
    <g transform="translate(0.000000,9.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <animateMotion {...animateMotionProps} />
    </g>
  ),

  // package: ({ animateMotionProps }) => (
  //   <g version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
  //     <path d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C13.3 10 16.6 10 20 10 C20 13.3 20 16.6 20 20 C16.7 20 13.4 20 10 20 C10 23.3 10 26.6 10 30 C6.7 30 3.4 30 0 30 C0 26.7 0 23.4 0 20 C-23.1 20 -46.2 20 -70 20 C-70 16.7 -70 13.4 -70 10 C-46.9 10 -23.8 10 0 10 C0 6.7 0 3.4 0 0 Z " fill="#CBDBFC" transform="translate(70,30)" />
  //     <path d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z " fill="#CBDBFC" transform="translate(60,60)" />
  //     <path d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C6.7 10 3.4 10 0 10 C0 6.7 0 3.4 0 0 Z " fill="#CBDBFC" transform="translate(60,20)" />
  //     <animateMotion {...animateMotionProps} />
  //   </g>
  // ),

} satisfies Record<string, AnimatedSvg>;

/**
 * Chooses which of React Flow's edge path algorithms to use based on the provided
 * `type`.
 */
function getPath({
  type,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: {
  type: "bezier" | "smoothstep" | "step" | "straight";
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
}) {
  switch (type) {
    case "bezier":
      return getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
      });

    case "smoothstep":
      return getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
      });

    case "step":
      return getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        borderRadius: 0,
      });

    case "straight":
      return getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
      });
  }
}

/**
 * Construct the props for an `<animateMotion />` element based on an
 * `AnimatedSvgEdge`'s data.
 */
function getAnimateMotionProps({
  duration,
  direction,
  repeat,
  path,
}: {
  duration: number;
  direction: "forward" | "reverse" | "alternate" | "alternate-reverse";
  repeat: number | "indefinite";
  path: string;
}) {
  const base = {
    path,
    repeatCount: repeat,
    // The default calcMode for the `<animateMotion />` element is "paced", which
    // is not compatible with the `keyPoints` attribute. Setting this to "linear"
    // ensures that the shape correct follows the path.
    calcMode: "linear",
  };

  switch (direction) {
    case "forward":
      return {
        ...base,
        dur: `${duration}s`,
        keyTimes: "0;1",
        keyPoints: "0;1",
      };

    case "reverse":
      return {
        ...base,
        dur: `${duration}s`,
        keyTimes: "0;1",
        keyPoints: "1;0",
      };

    case "alternate":
      return {
        ...base,
        // By doubling the animation duration, the time spent moving from one end
        // to the other remains consistent when switching between directions.
        dur: `${duration * 2}s`,
        keyTimes: "0;0.5;1",
        keyPoints: "0;1;0",
      };

    case "alternate-reverse":
      return {
        ...base,
        dur: `${duration * 2}s`,
        keyTimes: "0;0.5;1",
        keyPoints: "1;0;1",
      };
  }
}
