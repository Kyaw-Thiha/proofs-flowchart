import { sections, Theorem, xInterval, yInterval } from "@/lib/interface";

const xFactor = 0;

export const sequence: Theorem = {
  title: "Sequence",
  image: "/mata37/sigma/sequence.webp",
  section: sections.sigma,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 0,
  connectedTo: [],
}

export const sigmaNotation: Theorem = {
  title: "Sigma Notation",
  image: "/mata37/sigma/sigma_notation.webp",
  section: sections.sigma,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 1,
  connectedTo: [sequence],
}

export const propertiesOfSigmaNotation: Theorem = {
  title: "Properties of Sigma Notation",
  image: "/mata37/sigma/properties_of_sigma_notation.webp",
  section: sections.sigma,
  toLearn: true,
  x: xInterval * xFactor,
  y: yInterval * 2,
  connectedTo: [sigmaNotation],
}
