"use strict";
const miEvento = new Event("mievento");
const heading = document.querySelector("h1");
const alertButton = document.querySelector("button#boton-alerta");
alertButton.addEventListener("click", () => {
    heading.dispatchEvent(miEvento);
});
heading.addEventListener("mievento", () => {
    heading.style.color = "blue";
    heading.style.fontSize = "4rem";
});
