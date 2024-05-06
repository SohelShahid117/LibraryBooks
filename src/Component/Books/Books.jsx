import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  console.log(book);
  const { id } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            src={book.book_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">{books[0].title}</h2> */}
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
