import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../../Utility/Utility";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const data = useLoaderData();
  console.log(data);
  //   const val = useParams();
  const { id } = useParams();
  console.log(id);
  const val = data.find((x) => x.id == id);
  console.log(val);
  const { book_image, author_name, book_summary, books_category } = val;
  console.log(author_name);

  const handleRead = (val) => {
    console.log(val);
    saveBooks(val);
  };
  const handleWishlist = (val) => {
    console.log(val);
    saveBooks(val);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            src={book_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">{books[0].title}</h2> */}
          <p>{book_summary}</p>
          <h2>{books_category}</h2>
          <div className="card-actions">
            <button onClick={() => handleRead(val)} className="btn btn-primary">
              Read
            </button>
            <button
              onClick={() => handleWishlist(val)}
              className="btn btn-secondary"
            >
              WishList
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
