import express from "express"
import fs from "fs"

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", (req, res) =>{
    let world;
    try{
        let fileContents = fs.readFileSync("./world.json", "utf-8");
        world = JSON.parse(fileContents);
    } catch(error){
        console.log("Error fs. read rile sync threw an error");

    }

    console.log(world.regions[0].name);

    res.json(world);
    });

    app.listen(3000)