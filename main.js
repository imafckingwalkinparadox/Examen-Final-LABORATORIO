import { componente1 } from './componente/componentes1/componentes1.js';
import { componente2 } from './componente/componente2/componentes2.js';

let DOM = document.querySelector("#root");

// Agregar Componente 1 al DOM
let comp1 = componente1();
DOM.appendChild(comp1);

let comp2 = componente2();
DOM.appendChild(comp2);
