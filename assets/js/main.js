import { Articulo } from "./classes/Articulo.js";
import { Proveedor } from "./classes/Proveedor.js";
import { TipoProveedor } from "./classes/TipoProveedor.js";


// leefood
const tomatesSanMarzano = new Articulo({
  nombre: "Tomates San Marzano 2.5kg",
  precio: 15000,
});
const harina = new Articulo({
  nombre: "Harina Caputo Pizzería 25kg",
  precio: 53990,
});
const semola = new Articulo({ nombre: "Semola Caputo 1kg", precio: 3990 });
const leefood = new Proveedor({
  nombre: "Leefod",
  email: "contacto@leefod.cl",
  telefono: "5699846531",
  articulos: [tomatesSanMarzano, harina, semola],
});

const soju = new Articulo({ nombre: "Soju original", precio: 3000 });
leefood.agregarArticulo(soju);
console.log(leefood.getInfoProveedor());
console.log(leefood.calcularImpuesto());



// qifood
const tomate = new Articulo({
  nombre: "Tomates Podomori Pelatti 2.5kg",
  precio: 13980,
});
const quesoMozzarella = new Articulo({
  nombre: "Queso Mozzarella Fior di Late 1kg",
  precio: 19990,
});
const semolaViola = new Articulo({
  nombre: "Semola Caputo 5kg",
  precio: 15000,
});
const qifood = new TipoProveedor({
  nombre: "Qi Food",
  email: "contacto@qifood.cl",
  telefono: "56912616921",
  articulos: [tomate, quesoMozzarella, semolaViola],
  internacional: true,
  pais: "Italia",
});

console.log(qifood.getInfoProveedor());
console.log(qifood.calcularImpuesto());
