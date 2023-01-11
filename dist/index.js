"use strict";
var peliculas = [
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
for (var i = 0; i < peliculas.length; i++) {
    console.log("La pel\u00EDcula ".concat(peliculas[i].titulo, " se estren\u00F3 en ").concat(peliculas[i].anyo, " y el director fue ").concat(peliculas[i].director));
}
// function devuelveTitulos(films: Pelicula[]) {
//     return
// }
// const titulos: string[] = peliculas.map((pelicula: Pelicula) => {
//     return pelicula.titulo
// })
var ordenaPeliculas = function (films) {
    return films.sort(function (a, b) { return (a.anyo > b.anyo ? -1 : 1); });
};
var devuelveTitulos = function (films) {
    var peliculasOrdenadas = ordenaPeliculas(films);
    var titulos = peliculasOrdenadas.map(function (pelicula) { return pelicula.titulo; });
    return titulos;
};
console.log(devuelveTitulos(peliculas));
//# sourceMappingURL=index.js.map