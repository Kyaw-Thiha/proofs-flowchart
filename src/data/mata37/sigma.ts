import { sections, Theorem } from "@/lib/interface";

export const sequence: Theorem = {
  title: "Sequence",
  image: "/mata37/sigma/sequence.webp",
  section: sections.sigma,
  toLearn: true,
  x: 0,
  y: 0,
  connectedTo: [],
}

export const sigmaNotation: Theorem = {
  title: "Sigma Notation",
  image: "/mata37/sigma/sigma_notation.webp",
  section: sections.sigma,
  toLearn: true,
  x: 0,
  y: 150,
  connectedTo: [sequence],
}

export const propertiesOfSigmaNotation: Theorem = {
  title: "Properties of Sigma Notation",
  image: "/mata37/sigma/properties_of_sigma_notation.webp",
  section: sections.sigma,
  toLearn: true,
  x: 0,
  y: 300,
  connectedTo: [sigmaNotation],
}
