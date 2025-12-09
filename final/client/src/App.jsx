import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';



export default function App() {

  return (
    <div>
      <nav style={{marginLeft: "20px", marginRight: "20px", display: "flex", gap: "15px"}}>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/add">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}