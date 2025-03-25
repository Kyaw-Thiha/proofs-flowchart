import { definiteIntegral, riemannIntegrable } from "./definite_int";
import { leftRightMidpointSums, partition, riemannPartition, riemannSum } from "./riemann";
import { propertiesOfSigmaNotation, sequence, sigmaNotation } from "./sigma";

export * from "./riemann";

export const mata37Data = [
  // Sigma
  sequence,
  sigmaNotation,
  propertiesOfSigmaNotation,

  // Riemann
  partition,
  riemannPartition,
  riemannSum,
  leftRightMidpointSums,

  // Definite Integral
  definiteIntegral,
  riemannIntegrable,
]


