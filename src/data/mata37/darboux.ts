import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { bounded, lupAndGlp } from "./a31";
import { riemannIntegrable } from "./definite_int";

export const upperLowerSum: Theorem = {
  title: "Upper/Lower Sums",
  image: ["/mata37/darboux/upper_lower_sum.webp"],
  section: sections.darboux,
  toLearn: true,
  x: xInterval * 4,
  y: yInterval * 1,
  connectedTo: [bounded],
}

export const darbouxIntegral: Theorem = {
  title: "Darboux Integral",
  image: ["/mata37/darboux/darboux_integral.webp"],
  section: sections.darboux,
  toLearn: true,
  x: xInterval * 5,
  y: yInterval * 1,
  connectedTo: [upperLowerSum],
}

export const darbouxIntegrable: Theorem = {
  title: "Darboux Integrable",
  image: ["/mata37/darboux/darboux_defn_of_integrable.webp"],
  section: sections.darboux,
  toLearn: true,
  x: xInterval * 6,
  y: yInterval * 1,
  connectedTo: [darbouxIntegral],
}

export const darbouxBiconditionalRiemann: Theorem = {
  title: "Super Secret Theorem :)",
  image: ["/mata37/darboux/secret_proof.webp"],
  section: sections.darboux,
  toLearn: true,
  x: xInterval * 6,
  y: yInterval * 2,
  connectedTo: [darbouxIntegrable, riemannIntegrable],
}

export const integralReformulation: Theorem = {
  title: "Integral Reformulation",
  image: ["/mata37/darboux/integral_reformulation.webp", "/mata37/darboux/integral_reformulation_2.webp"],
  section: sections.darboux,
  toLearn: true,
  x: xInterval * 7,
  y: yInterval * 2,
  connectedTo: [lupAndGlp, darbouxIntegrable],
}
