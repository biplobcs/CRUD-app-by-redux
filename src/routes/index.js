import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addbook from "../features/books/Addbook";
import BookShow from "../features/books/BookShow";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navigation from "../layouts/Navigation";
import Footer from "../layouts/Footer";
import BookUpdate from "../features/books/BookUpdate";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<Addbook />} />
            <Route path="/show-book" element={<BookShow />} />
            <Route path="/update-book" element={<BookUpdate />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default Index;
