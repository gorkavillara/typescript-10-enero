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

const devuelveTitulos = (films: Pelicula[]) => films.map((pelicula: Pelicula) => pelicula.titulo)

console.log(devuelveTitulos(peliculas))
