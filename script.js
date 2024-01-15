const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};
const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);