import { componente1 } from './componente/componentes1/componentes1.js';

let DOM = document.querySelector("#root");

// Agregar Componente 1 al DOM
let comp1 = componente1();
DOM.appendChild(comp1);
