function componente2() {
    let div = document.createElement('div');
    div.className = "componente2";

    div.innerHTML = `
        <input type="text" placeholder="Buscar..." class="input-busqueda">
        <button class="btn-enviar">Enviar</button>
    `;

    return div;
}

export { componente2 };

