import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: "red" }}>Ooops, page not found</h1>
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
};

export default Error;
