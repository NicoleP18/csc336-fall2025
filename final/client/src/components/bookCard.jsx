import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <p><strong>Read:</strong> {book.monthRead} {book.yearRead}</p>
      {book.otherNotes && <p><em>{book.otherNotes}</em></p>}
    </div>
  );
}
