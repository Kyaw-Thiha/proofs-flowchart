import { bounded, boundedness, chainRule, continuous, derivative, diffImpliesCont, evt, lupAndGlp, MVT, productRule, squeezeTheorem } from "./a31";
import { darbouxBiconditionalRiemann, darbouxIntegrable, darbouxIntegral, integralReformulation, upperLowerSum } from "./darboux";
import { antiderivative, definiteIntegral, definiteIntegralProperty, indefiniteIntegral, riemannIntegrable } from "./definite_int";
import { FTOC1, FTOC2, MVTForInt } from "./ftoc";
import { integrationByParts, substitutionRule } from "./integration_techniques";
import { leftRightMidpointSums, partition, riemannPartition, riemannSum } from "./riemann";
import { propertiesOfSigmaNotation, sequence, sigmaNotation } from "./sigma";
import { contImpliesIntegrable, contImpliesUniCont, uniformlyContinuous } from "./uniformly_continuous";

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
  antiderivative,
  indefiniteIntegral,

  // A31
  bounded,
  lupAndGlp,
  diffImpliesCont,
  MVT,
  squeezeTheorem,
  derivative,
  chainRule,
  productRule,
  continuous,
  evt,
  boundedness,

  // Darboux Integral
  upperLowerSum,
  darbouxIntegral,
  darbouxIntegrable,
  integralReformulation,
  darbouxBiconditionalRiemann,

  // FTOC-1
  FTOC1,
  MVTForInt,
  FTOC2,

  // Integration Techniques
  substitutionRule,
  integrationByParts,

  // Uniformly Continuous
  uniformlyContinuous,
  contImpliesUniCont,
  contImpliesIntegrable,
]


