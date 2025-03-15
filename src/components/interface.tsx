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
  claims: Array<string>; // This will not be used for definitions
  text: string;
  section: sections;
  toLearn: boolean;
}

