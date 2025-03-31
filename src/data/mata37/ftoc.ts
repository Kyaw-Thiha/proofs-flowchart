import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { antiderivative, definiteIntegral } from "./definite_int";
import { diffImpliesCont, MVT, squeezeTheorem } from "./a31";

export const FTOC1: Theorem = {
  title: "FTOC-1",
  image: ["/mata37/ftoc/ftoc_1.webp"],
  section: sections.ftoc,
  toLearn: true,
  x: xInterval * 3,
  y: yInterval * 3,
  connectedTo: [definiteIntegral, diffImpliesCont, MVT, antiderivative],
}

export const MVTForInt: Theorem = {
  title: "MVT for Integral",
  image: ["/mata37/ftoc/mvt_for_integrals.webp"],
  section: sections.ftoc,
  toLearn: true,
  x: xInterval * 4,
  y: yInterval * 4,
  connectedTo: [MVT],
}

export const FTOC2: Theorem = {
  title: "FTOC-2",
  image: ["/mata37/ftoc/ftoc_2.webp"],
  section: sections.ftoc,
  toLearn: true,
  x: xInterval * 5,
  y: yInterval * 3,
  connectedTo: [MVTForInt, definiteIntegral, squeezeTheorem],
}
