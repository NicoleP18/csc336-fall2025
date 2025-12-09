import { useState } from "react";
import React from 'react';


export default function BookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    rating: "",
    yearRead: "",
    monthRead: "",
    otherNotes: ""
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        rating: Number(formData.rating),
        yearRead: Number(formData.yearRead)
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(true);
          setFormData({
            title: "",
            author: "",
            rating: "",
            yearRead: "",
            monthRead: "",
            otherNotes: ""
          });
        }
      })
      .catch(() => setError("Server error"));
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Book added!</p>}

      <input
        className="input"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <select name="rating" className="input" value={formData.rating} onChange={handleChange} required>
        <option value="">Rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <input
        className="input"
        name="yearRead"
        placeholder="Year Read"
        value={formData.yearRead}
        onChange={handleChange}
        required
      />

      <input
        className="input"
        name="monthRead"
        placeholder="Month Read"
        value={formData.monthRead}
        onChange={handleChange}
        required
      />

      <textarea
        className="input"
        name="otherNotes"
        placeholder="Notes (optional)"
        value={formData.otherNotes}
        onChange={handleChange}
      />

      <button type="submit" className="submit-button">Add Book</button>
    </form>
  );
}
