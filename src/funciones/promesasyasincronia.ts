const waitFor = (segundos: number) => {
    return new Promise((resolve, reject) => {
      Math.random() < 0.5
        ? reject("Error de cálculo")
        : setTimeout(() => resolve("He terminado"), segundos * 1000);
    });
  };
  
  // then - catch
  // Todos los loaders activados
  waitFor(5)
    .then(() => console.log("Then ejecutado"))
    .catch(() => console.error("Ha habido un error"))
    .finally(() => console.log("El finally se ha lanzado"));
  
  // await
  const espera = async () => {
    // lanzar el waitfor -> Esperar 2 segundos
    await waitFor(2).catch(error => console.error(error))
    // Después de los dos segundos lanzar un mensaje a la consola
    console.log("Ya he esperado dos segundos");
  };
  
  espera();
  