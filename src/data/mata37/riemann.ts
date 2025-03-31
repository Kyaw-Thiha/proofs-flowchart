import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { sigmaNotation } from "./sigma";

// export const riemannDefinition: Theorem = {
//   title: "Riemann Definition",
//   image: "/mata37/riemann/riemann_defn.png",
//   section: sections.riemann,
//   toLearn: true,
//   x: 400,
//   y: 0,
//   connectedTo: [],
// }
//
// export const riemannDefinitionA: Theorem = {
//   title: "Riemann Definition A",
//   image: "/mata37/riemann/riemann_defn.png",
//   section: sections.riemann,
//   toLearn: true,
//   x: 200,
//   y: 150,
//   connectedTo: [riemannDefinition],
// }
//
// export const riemannDefinitionB: Theorem = {
//   title: "Riemann Definition B",
//   image: "/mata37/riemann/riemann_defn.png",
//   section: sections.riemann,
//   toLearn: false,
//   x: 600,
//   y: 150,
//   connectedTo: [riemannDefinition],
// }
//

const xFactor = 1;

export const partition: Theorem = {
  title: "Partition",
  image: "/mata37/riemann/partition.webp",
  section: sections.riemann,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 0,
  connectedTo: [],
}

export const riemannPartition: Theorem = {
  title: "Riemann Partition",
  image: "/mata37/riemann/partition.webp",
  section: sections.riemann,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 1,
  connectedTo: [partition],
}

export const riemannSum: Theorem = {
  title: "Riemann Sum",
  image: "/mata37/riemann/riemann_sum.webp",
  section: sections.riemann,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 2,
  connectedTo: [sigmaNotation, riemannPartition],
}

export const leftRightMidpointSums: Theorem = {
  title: "Left, Right, Midpoint Sums",
  image: "/mata37/riemann/left_right_midpoint_sums.webp",
  section: sections.riemann,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 3,
  connectedTo: [riemannSum],
}



