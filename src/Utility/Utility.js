import { ToastContainer, toast } from 'react-toastify';

//function for stored Read Books

export const getBooks = () => {
  let books = [];
  let storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }

  return books;
};

export const saveBooks = (data) => {
  let books = getBooks();

  const isExist = books.find((b) => b.id == data.id);
  if (isExist) {
    return toast.error("Already Read");
  }
  books.push(data);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book added successfully");
};



//function for stored wishlist books

// export const getBooks = () => {
//     let books = [];
//     let storedBooks = localStorage.getItem("books");
//     if (storedBooks) {
//       books = JSON.parse(storedBooks);
//     }
  
//     return books;
//   };
  
//   export const saveBooks = (data) => {
//     let books = getBooks();
  
//     const isExist = books.find((b) => b.id == data.id);
//     if (isExist) {
//       return toast.error("Already Read");
//     }
//     books.push(data);
//     localStorage.setItem("books", JSON.stringify(books));
//     toast.success("Book added successfully");
//   };