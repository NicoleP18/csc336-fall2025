import { useEffect, useState } from "react";
import React from "react";
import BookCard from "./bookCard";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("api/books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </div>
  );
}

