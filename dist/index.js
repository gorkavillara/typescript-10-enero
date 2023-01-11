"use strict";
// const button: HTMLButtonElement = document.querySelector("button#boton-alerta")!
const button = document.querySelector("button#boton-alerta");
button.addEventListener("click", (evento) => {
    console.log(evento);
    alert("Has hecho clic en el botón");
});
const formulario = document.querySelector("form#formulario-tareas");
const listaTareas = document.querySelector("ul#lista-tareas");
formulario.onsubmit = (event) => {
    event.preventDefault();
    console.log("Se ha enviado el formulario");
    const input = document.querySelector("input[name=tarea]");
    nuevaEntrada(input.value);
    input.value = "";
    heading.dispatchEvent(miEvento);
};
const nuevaEntrada = (nuevaTarea) => {
    const li = document.createElement("li");
    li.innerText = nuevaTarea;
    listaTareas.appendChild(li);
};
const submitButton = document.querySelector("button[type=submit]");
submitButton.addEventListener("mouseover", () => console.log("Haciendo hover"));
const titulo = document.querySelector("h1");
titulo.addEventListener("dragstart", () => console.log("He empezado a arrastrar este elemento"));
