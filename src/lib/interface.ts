import { Node } from '@xyflow/react';

export const xInterval = 300;
export const yInterval = 150;

export enum nodeTypes {
  defintion,
  theorem,
}
export enum sections {
  sigma,
  riemann,
  definite_int,
  darboux,
  antiderivative_and_indefinite,
  ftoc,
  int_techniques,
  improper_int,
  a31,
  uniformly_continuous
}
export interface NodeData {
  nodeType: nodeTypes;
  title: string;
  image: string[];
  section: sections;
  toLearn: boolean;
}

export interface Theorem {
  title: string;
  image: string[];
  section: sections;
  toLearn: boolean;
  x: number,
  y: number,
  connectedTo: Array<Theorem>
}

export interface NodeInterface extends Omit<Node, "data"> {
  data: NodeData;
}
export type { Edge } from '@xyflow/react';
