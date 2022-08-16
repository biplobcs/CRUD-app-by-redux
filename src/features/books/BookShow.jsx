import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletebook } from "./BookSlice";

const BookShow = () => {
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletebook(id));
  };
  return (
    <div>
      <h1>Showing Book</h1>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, name, author } = book;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/update-book" state={{ id, name, author }}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookShow;
