import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "data", "books.json");

function readData() {
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}
app.get("/api/books", (req, res) => {
  const books = readData();
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const {
    title,
    author,
    rating,
    yearRead,
    monthRead,
    otherNotes = ""
  } = req.body;

  if (!title || !author || !rating || !yearRead || !monthRead) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const books = readData();

  const exists = books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  if (exists) {
    return res.status(400).json({ error: "Book already exists" });
  }

  const newBook = {
    title,
    author,
    rating,
    yearRead,
    monthRead,
    otherNotes
  };

  books.push(newBook);
  writeData(books);

  res.status(201).json(newBook);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
