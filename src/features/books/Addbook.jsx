import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addbook } from "./BookSlice";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { id: uuidv4(), name: title, author };
    dispatch(addbook(book));
    navigate("/show-book", { replace: true });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h1>Add Book</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Name : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Enter book name"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            placeholder="Enter author name"
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Addbook;
