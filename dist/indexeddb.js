"use strict";
const formulario = document.querySelector("form#form-tareas");
const inputTarea = document.querySelector("input#input-tarea");
const ulTareas = document.querySelector("ul#tareas");
// Creamos la base de datos
const database = window.indexedDB;
if (database) { // Significa que el navegador soporta la funcionalidad indexedDB
    console.log("Lo soporta");
    let db;
    let objectStore;
    const request = database.open("tareasDB", 1);
    request.onupgradeneeded = () => {
        db = request.result;
        console.log("creada", db);
        objectStore = db.createObjectStore("mistareas", { autoIncrement: true });
    };
    const nuevaTarea = (tarea) => {
        const transaction = db.transaction(["mistareas"], "readwrite");
        const objectStore = transaction.objectStore("mistareas");
        const request = objectStore.add(tarea);
        request.onsuccess = () => console.log("✅ Tarea creada con éxito");
    };
    formulario.onsubmit = event => {
        event.preventDefault();
        const textoNuevaTarea = inputTarea.value;
        nuevaTarea(textoNuevaTarea);
    };
}
