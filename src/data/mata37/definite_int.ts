import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";
import { riemannSum } from "./riemann";
import { bounded, derivative } from "./a31";


export const definiteIntegral: Theorem = {
  title: "Definite Integral",
  image: ["/mata37/definite_int/definite_integral.webp"],
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * 2,
  y: yInterval * 2,
  connectedTo: [riemannSum, bounded],
}

export const definiteIntegralProperty: Theorem = {
  title: "Definite Integral Property",
  image: ["/mata37/definite_int/properties_of_definite_integral.webp"],
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * 2,
  y: yInterval * 1,
  connectedTo: [definiteIntegral],
}

export const riemannIntegrable: Theorem = {
  title: "Riemann Integrable",
  image: ["/mata37/definite_int/riemann_integrable.webp"],
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * 3,
  y: yInterval * 2,
  connectedTo: [definiteIntegral],
}

export const antiderivative: Theorem = {
  title: "Antiderivative",
  image: ["/mata37/definite_int/antiderivative.webp"],
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * 3,
  y: yInterval * 4,
  connectedTo: [derivative],
}

export const indefiniteIntegral: Theorem = {
  title: "Indefinite Integral",
  image: ["/mata37/definite_int/indefinite_integral.webp"],
  section: sections.definite_int,
  toLearn: true,
  x: xInterval * 3,
  y: yInterval * 5,
  connectedTo: [antiderivative],
}
