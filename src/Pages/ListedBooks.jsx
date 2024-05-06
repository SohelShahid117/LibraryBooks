import React, { useEffect, useState } from "react";
import { getBooks } from "../Utility/Utility";
import Books from "../Component/Books/Books";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    console.log(storedBooks);
    setBooks(storedBooks);
  }, []);
  console.log(books);

  //bellow system for wishlist books
  //   const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     const storedBooks = getBooks();
  //     console.log(storedBooks);
  //     setBooks(storedBooks);
  //   }, []);
  //   console.log(books);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <Books key={book.id} book={book}></Books>
      ))}
    </div>
  );
};

export default ListedBooks;
