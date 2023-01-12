const formulario: HTMLFormElement = document.querySelector("form#form-tareas")!
const inputTarea: HTMLInputElement = document.querySelector("input#input-tarea")!
const ulTareas: HTMLUListElement = document.querySelector("ul#tareas")!

// Creamos la base de datos
const database: IDBFactory = window.indexedDB

if (database) { // Significa que el navegador soporta la funcionalidad indexedDB
    console.log("Lo soporta")
    let db: IDBDatabase
    let objectStore: IDBObjectStore
    const request = database.open("tareasDB", 1)

    request.onupgradeneeded = () => {
        db = request.result
        console.log("creada", db)
        objectStore = db.createObjectStore("mistareas", { autoIncrement: true })
    }

    const nuevaTarea = (tarea: string) => {
        const transaction = db.transaction(["mistareas"], "readwrite")
        const objectStore = transaction.objectStore("mistareas")
        const request = objectStore.add(tarea)
        request.onsuccess = () => console.log("✅ Tarea creada con éxito")
    }

    formulario.onsubmit = event => {
      event.preventDefault()
      const textoNuevaTarea: string = inputTarea.value
      nuevaTarea(textoNuevaTarea)
    }
}

