import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { riemannSum } from "./riemann";

const xFactor = 2;

export const definiteIntegral: Theorem = {
  title: "Definite Integral",
  image: "/mata37/definite_int/definite_integral.webp",
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 0,
  connectedTo: [riemannSum],
}

export const riemannIntegrable: Theorem = {
  title: "Riemann Integrable",
  image: "/mata37/definite_int/riemann_integrable.webp",
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 1,
  connectedTo: [definiteIntegral],
}

