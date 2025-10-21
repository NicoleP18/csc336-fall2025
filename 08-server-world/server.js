import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", async (req, res) => {
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/excite", async (req, res) => {
    const worldData = await fs.readFileSync("./world.json", "utf-8");
    const world = JSON.parse(worldData);

    const personToAddExcitementTo = req.body;
    
    for (let place of world.places) {
    for (let building of place.buildings) {
      for (let classroom of building.classrooms) {
        for (let employee of classroom.employees) {
          if (employee.name === personToAddExcitementTo.name) {
            employee.name += "!!!";
          }
        }
      }
    }
  }

    await fs.writeFileSync("world.json", JSON.stringify(world, null, 2));

    res.json(world);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));