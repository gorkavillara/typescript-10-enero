// const button: HTMLButtonElement = document.querySelector("button#boton-alerta")!
const button = document.querySelector(
  "button#boton-alerta"
)! as HTMLButtonElement;

button.addEventListener("click", (evento: MouseEvent) => {
  console.log(evento);
  alert("Has hecho clic en el botón");
});

const formulario: HTMLFormElement = document.querySelector(
  "form#formulario-tareas"
)!;
const listaTareas: HTMLUListElement =
  document.querySelector("ul#lista-tareas")!;

formulario.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Se ha enviado el formulario");
  const input: HTMLInputElement = document.querySelector("input[name=tarea]")!
  nuevaEntrada(input.value)
  input.value = ""
  heading.dispatchEvent(miEvento)
};

const nuevaEntrada = (nuevaTarea: string) => {
  const li: HTMLLIElement = document.createElement("li");
  li.innerText = nuevaTarea;
  listaTareas.appendChild(li);
};

const submitButton: HTMLButtonElement = document.querySelector("button[type=submit]")!
submitButton.addEventListener("mouseover", 
    () => console.log("Haciendo hover")
)

const titulo: HTMLHeadingElement = document.querySelector("h1")!
titulo.addEventListener("dragstart", () => console.log("He empezado a arrastrar este elemento"))