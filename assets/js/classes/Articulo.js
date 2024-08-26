export class Articulo {
    #nombre;
    #precio;
    constructor({ nombre, precio }) {
      this.#nombre = nombre;
      this.#precio = precio;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    set precio(nuevoPrecio) {
      if (precio <= 0) {
        throw new Error("El precio ingresado no es correcto");
      }
      this.#precio = nuevoPrecio;
    }
  }
  