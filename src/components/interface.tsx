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
}
export interface NodeData {
  nodeType: nodeTypes;
  title: string;
  image: string;
  section: sections;
  toLearn: boolean;
}

