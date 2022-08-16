import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatebook } from "./BookSlice";

const BookUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.name);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateBook = { id, title, author };
    dispatch(updatebook(updateBook));
    navigate("/show-book", { replace: true });
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <h1>Update Book</h1>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default BookUpdate;
