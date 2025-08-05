// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function agregarAmigo() {
    let amigo = document.querySelector("#amigo").value.trim();
    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        if (listaAmigos.includes(amigo)) {
            alert('Este amigo ya está en la lista');
        } else {
            listaAmigos.push(amigo);
            console.log(listaAmigos);
            limpiarCaja();
            actualizarListaAmigos();
        }
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let nombre = document.createElement('li');
        nombre.textContent += `${listaAmigos[i]}`;
        lista.appendChild(nombre);
    }
}

function sortearAmigo() {
    let nombreAleatorio = Math.floor(Math.random()*listaAmigos.length);

    if (listaAmigos.length < 2) {
        alert('Debe tener al menos 2 amigos para realizar el sorteo');
    } else {
        asignarTextoElemento('h2', `El Amigo Secreto es ${listaAmigos[nombreAleatorio]}`)
    }
    return;
}

function reiniciarJuego() {
    listaAmigos = [];
    limpiarCaja();
    actualizarListaAmigos();
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
    return;
}