const formulario: HTMLFormElement = document.querySelector("form#user-login")!
const logoutButton: HTMLButtonElement = document.querySelector("button#user-logout")!
const saludoH3: HTMLHeadingElement = document.querySelector("h3#user-welcome")!
const inputUsuario: HTMLInputElement = document.querySelector("input#input-usuario")!

const getUser = (): string | null => {
  const cookie: string = document.cookie;
  
  const cookieValues: string[] = cookie.split("; ");
  const userPairIndex: number = cookieValues.findIndex((pair: string) => {
    if (pair.substr(0, 7) === "usuario") return true;
    return false;
  });
  
  const pair: string | null =
    userPairIndex === -1 ? null : cookieValues[userPairIndex];
  
  const usuario: string | null = pair === null ? null : pair.split("=")[1]
  return usuario
}
const checkUser = (): void => {
  // Chequear si hay usuario
  const usuario: string | null = getUser()
  if (usuario !== null) {
    // 1 - Si hay usuario -> Mostramos el saludo
    // Ocultar el user login
    formulario.style.display = "none"
    // Mostrar el saludo
    saludoH3.style.display = "block"
    logoutButton.style.display = "block"
    saludoH3.innerText = `Bienvenid@ ${usuario}`
  } else {
    // 2 - Si no hay usuario -> Mostramos el formulario
    // Ocultar el saludo
    saludoH3.style.display = "none"
    logoutButton.style.display = "none"
    // Mostrar el user-login
    formulario.style.display = "block"
  }
}

formulario.onsubmit = event => {
  event.preventDefault()
  // 1 - Obtenemos el input
  const username: string = inputUsuario.value
  inputUsuario.value = ""
  // 2 - Damos de alta la cookie
  const ahora: Date = new Date()
  const luego: Date = new Date(ahora.getTime() + 1 * 60 * 1000) // Le sumamos un minuto (60000 milisegundos)
  console.log(luego)
  document.cookie = `usuario=${username};expires=${luego.toUTCString()}`
  checkUser()
}

logoutButton.onclick = () => {
  // Destruya la cookie (poner una expiración pasada o ahora)
  const ahora: Date = new Date()
  document.cookie = `usuario=dummy;expires=${ahora.toUTCString()}`
  checkUser()
}

checkUser()