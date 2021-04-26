import { produce } from "immer";

let movie = { title: "Lord of the Rings" };

function release(movie) {
  return produce(movie, (directorsCut) => {
    directorsCut.isReleased = true;
  });
}
let updatedMovie = release(movie);
console.log(movie);
console.log(updatedMovie);

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}
let updatedBook = publish(book);
console.log(book);
console.log(updatedBook);
