import { sections, Theorem } from "@/lib/interface";

export const riemannDefinition: Theorem = {
  title: "Riemann Definition",
  image: "/mata37/riemann/riemann_defn.png",
  section: sections.riemann,
  toLearn: true,
  x: 400,
  y: 0,
  connectedTo: [],
}

export const riemannDefinitionA: Theorem = {
  title: "Riemann Definition A",
  image: "/mata37/riemann/riemann_defn.png",
  section: sections.riemann,
  toLearn: true,
  x: 200,
  y: 150,
  connectedTo: [riemannDefinition],
}

export const riemannDefinitionB: Theorem = {
  title: "Riemann Definition B",
  image: "/mata37/riemann/riemann_defn.png",
  section: sections.riemann,
  toLearn: false,
  x: 600,
  y: 150,
  connectedTo: [riemannDefinition],
}
