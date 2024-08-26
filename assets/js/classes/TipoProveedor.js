import { Proveedor } from "./Proveedor.js";

export class TipoProveedor extends Proveedor {
  constructor({
    nombre,
    email,
    telefono,
    articulos,
    internacional = false,
    pais = "Chile",
  }) {
    super({ nombre, email, telefono, articulos });
    this.internacional = !!internacional;
    this.pais = pais;
  }

  getInfoProveedor() {
    return `
${super.getInfoProveedor()}Internacional: ${this.internacional ? "Sí" : "No"}
País: ${this.pais}

`;
  }
}
