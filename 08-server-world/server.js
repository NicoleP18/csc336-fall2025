import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/world", (req, res) => {
  const data = fs.readFileSync("./world.json", "utf-8");
  const world = JSON.parse(data);
  res.json(world);
});

app.post("/employee", (req, res) => {
  const newEmployee = req.body;
  const world = JSON.parse(fs.readFileSync("./world.json", "utf-8"));

  world.regions[0].buildings[0].classrooms[0].employees.push(newEmployee);

  fs.writeFileSync("./world.json", JSON.stringify(world, null, 2));
  res.json(world);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
