import { Articulo } from "./Articulo.js";

export class Proveedor {
  #articulos;
  constructor({ nombre, email, telefono, articulos }) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.#articulos = articulos;
  }

  get articulos() {
    return this.#articulos;
  }

  set articulos(nuevosArticulos = []) {
    this.#articulos = nuevosArticulos.filter((a) => a instanceof Articulo);
  }

  agregarArticulo(articulo) {
    if (!articulo instanceof Articulo) {
      throw new Error("Articulo no válido");
    }
    this.#articulos = [...this.#articulos, articulo];
  }

  eliminarArticulo(nombreArticulo) {
    const index = this.#articulos.findIndex((a) => a.nombre === nombreArticulo);
    if (index < 0) {
      throw new Error("Articulo no encontrado");
    }
    this.#articulos = this.#articulos.splice(index, 1);
  }

  getInfoProveedor() {
    return `
Proveedor: ${this.nombre},
Email: ${this.email},
Teléfono: ${this.telefono}
Artículos: 
${this.articulos.reduce((acc, item) => `${acc} - ${item.nombre}\n`, "")}`;
  }

  calcularImpuesto() {
    const iva = 19;

    const totalPrecios = this.#articulos.reduce(
      (acc, item) => acc + item.precio,
      0
    );

    const totalImpuesto = Math.round((totalPrecios * iva) / 100);

    return `La empresa ${this.nombre} debe pagar un impuesto (iva) de $${totalImpuesto}`;
  }
}
