function componente2() {
    let div = document.createElement('div');
    div.className = "componente2";

    // Estructura del componente
    div.innerHTML = `
        <h2>Componente 2</h2>
        <p>Este es el contenido del componente 2.</p>
    `;

    return div;
}

export { componente2 };
