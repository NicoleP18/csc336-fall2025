let world;

async function getWorld(){
    let response = await fetch("/world");
    world = await response.json();
}

getWorld()

function setup(){
    console.log("p5 loaded!");
    createCanvas(800,600);
    colorMode(HSB);
    
}

function draw(){
    background(frameCount%360, 100, 100);
    
}