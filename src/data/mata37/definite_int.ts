import { sections, Theorem } from "@/lib/interface";
import { riemannSum } from "./riemann";

export const definiteIntegral: Theorem = {
  title: "Definite Integral",
  image: "/mata37/definite_int/definite_integral.webp",
  section: sections.definite_int,
  toLearn: true,
  x: 600,
  y: 300,
  connectedTo: [riemannSum],
}

export const riemannIntegrable: Theorem = {
  title: "Riemann Integrable",
  image: "/mata37/definite_int/riemann_integrable.webp",
  section: sections.definite_int,
  toLearn: true,
  x: 900,
  y: 300,
  connectedTo: [definiteIntegral],
}

