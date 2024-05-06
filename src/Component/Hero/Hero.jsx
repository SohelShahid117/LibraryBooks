import React from "react";
import Books from "../Books/Books";
import { Link, useLoaderData } from "react-router-dom";

const Hero = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(data[0]);
  console.log(data[0].title);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            src={data[0].book_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{data[0].title}</h1>
            <p className="py-6">{data[0].book_summary}</p>
            <Link to="/listedBooks" className="btn btn-primary">
              View the list
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2>Books</h2>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* {data.map((blg) => (
            <SingleCard key={blg.id} blg={blg}></SingleCard>
          ))} */}
        {data.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </>
  );
};

export default Hero;
