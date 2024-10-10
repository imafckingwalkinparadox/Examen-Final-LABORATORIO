function componente3() {
    let div = document.createElement('div');
    div.className = "componente3";

    // Estructura del componente
    div.innerHTML = `
        <h2>Lista de Proyectos</h2>
        <ul class="lista-proyectos">
            <li>Proyecto 1</li>
            <li>Proyecto 2</li>
            <li>Proyecto 3</li>
        </ul>
    `;

    return div;
}

export { componente3 };
