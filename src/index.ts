interface Pelicula {
  titulo: string;
  director: string;
  anyo: number;
}

const peliculas: Pelicula[] = [
  {
    titulo: "Avatar",
    director: "James Cameron",
    anyo: 2009,
  },
  {
    titulo: "Star Wars",
    director: "George Lucas",
    anyo: 1977,
  },
  {
    titulo: "Jurassic Park",
    director: "Steven Spielberg",
    anyo: 1994,
  },
];

for (let i = 0; i < peliculas.length; i++) {
  console.log(
    `La película ${peliculas[i].titulo} se estrenó en ${peliculas[i].anyo} y el director fue ${peliculas[i].director}`
  );
}

// function devuelveTitulos(films: Pelicula[]) {
//     return
// }

// const titulos: string[] = peliculas.map((pelicula: Pelicula) => {
//     return pelicula.titulo
// })

const ordenaPeliculas = (films: Pelicula[]) =>
  films.sort((a: Pelicula, b: Pelicula) => (a.anyo > b.anyo ? -1 : 1));

const devuelveTitulos = (films: Pelicula[]) => {
  const peliculasOrdenadas: Pelicula[] = ordenaPeliculas(films);
  const titulos: string[] = peliculasOrdenadas.map(
    (pelicula: Pelicula) => pelicula.titulo
  );
  return titulos
};

console.log(devuelveTitulos(peliculas));
