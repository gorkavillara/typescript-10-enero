"use strict";
const formulario = document.querySelector("form#user-login");
const logoutButton = document.querySelector("button#user-logout");
const saludoH3 = document.querySelector("h3#user-welcome");
const inputUsuario = document.querySelector("input#input-usuario");
const getUser = () => {
    const cookie = document.cookie;
    const cookieValues = cookie.split("; ");
    const userPairIndex = cookieValues.findIndex((pair) => {
        if (pair.substr(0, 7) === "usuario")
            return true;
        return false;
    });
    const pair = userPairIndex === -1 ? null : cookieValues[userPairIndex];
    const usuario = pair === null ? null : pair.split("=")[1];
    return usuario;
};
const checkUser = () => {
    // Chequear si hay usuario
    const usuario = getUser();
    if (usuario !== null) {
        // 1 - Si hay usuario -> Mostramos el saludo
        // Ocultar el user login
        formulario.style.display = "none";
        // Mostrar el saludo
        saludoH3.style.display = "block";
        logoutButton.style.display = "block";
        saludoH3.innerText = `Bienvenid@ ${usuario}`;
    }
    else {
        // 2 - Si no hay usuario -> Mostramos el formulario
        // Ocultar el saludo
        saludoH3.style.display = "none";
        logoutButton.style.display = "none";
        // Mostrar el user-login
        formulario.style.display = "block";
    }
};
formulario.onsubmit = event => {
    event.preventDefault();
    // 1 - Obtenemos el input
    const username = inputUsuario.value;
    inputUsuario.value = "";
    // 2 - Damos de alta la cookie
    const ahora = new Date();
    const luego = new Date(ahora.getTime() + 1 * 60 * 1000); // Le sumamos un minuto (60000 milisegundos)
    console.log(luego);
    document.cookie = `usuario=${username};expires=${luego.toUTCString()}`;
    checkUser();
};
logoutButton.onclick = () => {
    // Destruya la cookie (poner una expiración pasada o ahora)
    const ahora = new Date();
    document.cookie = `usuario=dummy;expires=${ahora.toUTCString()}`;
    checkUser();
};
checkUser();
