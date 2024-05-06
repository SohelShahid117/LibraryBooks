import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
          <div className="card-actions">
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-secondary">WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
