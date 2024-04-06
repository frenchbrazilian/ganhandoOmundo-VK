function mostrarOcultarDiv() {
    var div = document.getElementById("contextodiv");
    var button = document.querySelector("button");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        button.textContent = "Clique aqui para fechar o contexto";
    } else {
        div.style.display = "none";
        button.textContent = "Clique aqui para ver o contexto";
    }
}