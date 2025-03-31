import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { boundedness, continuous, evt } from "./a31";
import { integrationByParts } from "./integration_techniques";


export const uniformlyContinuous: Theorem = {
  title: "Uniformly Continuous",
  image: ["/mata37/uniformly_continuous/uniformly_cont.webp"],
  section: sections.uniformly_continuous,
  toLearn: true,
  x: xInterval * 8,
  y: yInterval * 2,
  connectedTo: [],
}

export const contImpliesUniCont: Theorem = {
  title: "Cont Implies Uniformly Cont",
  image: [
    "/mata37/uniformly_continuous/cont_implies_uniformly_cont_1.webp",
    "/mata37/uniformly_continuous/cont_implies_uniformly_cont_2.webp",
    "/mata37/uniformly_continuous/cont_implies_uniformly_cont_3.webp"
  ],
  section: sections.uniformly_continuous,
  toLearn: true,
  x: xInterval * 9,
  y: yInterval * 2,
  connectedTo: [continuous, uniformlyContinuous],
}

export const contImpliesIntegrable: Theorem = {
  title: "Cont Implies Integrable",
  image: ["/mata37/uniformly_continuous/cont_implies_int.webp"],
  section: sections.uniformly_continuous,
  toLearn: true,
  x: xInterval * 8,
  y: yInterval * 3,
  connectedTo: [integrationByParts, uniformlyContinuous, evt, boundedness],
}
