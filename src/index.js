import { produce } from "immer";

const movie = { title: "Lord of the Rings" };

function release(movie) {
  return produce(movie, (directorsCut) => {
    directorsCut.isReleased = true;
  });
}
const updatedMovie = release(movie);
console.log(movie);
console.log(updatedMovie);

const book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}
const updatedBook = publish(book);
console.log(book);
console.log(updatedBook);
