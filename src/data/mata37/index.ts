import { bounded, lupAndGlp } from "./a31";
import { darbouxIntegrable, darbouxIntegral, upperLowerSum } from "./darboux";
import { definiteIntegral, definiteIntegralProperty, riemannIntegrable } from "./definite_int";
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
  definiteIntegralProperty,
  riemannIntegrable,

  // A31
  bounded,
  lupAndGlp,

  // Darboux Integral
  upperLowerSum,
  darbouxIntegral,
  darbouxIntegrable,
]


