import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { FTOC1 } from "./ftoc";
import { chainRule, productRule } from "./a31";
import { definiteIntegral, indefiniteIntegral } from "./definite_int";

export const substitutionRule: Theorem = {
  title: "Substitution Rule",
  image: ["/mata37/integration_techniques/substitution_rule.webp"],
  section: sections.int_techniques,
  toLearn: true,
  x: xInterval * 6,
  y: yInterval * 3,
  connectedTo: [FTOC1, chainRule, indefiniteIntegral, definiteIntegral],
}

export const integrationByParts: Theorem = {
  title: "Integration by Parts",
  image: ["/mata37/integration_techniques/integral_by_parts.webp"],
  section: sections.int_techniques,
  toLearn: true,
  x: xInterval * 7,
  y: yInterval * 3,
  connectedTo: [definiteIntegral, indefiniteIntegral, productRule],
}
