let buttonA = document.querySelector("#activityButton");

buttonA.addEventListener("click", e => getAndDisplayActivity() );

let timeBeforeRequest;
async function getAndDisplayActivity() {
    timeBeforeRequest = Date.now();

    let activityResponse = await fetch("https://api.adviceslip.com/advice");
    let activityData = await activityResponse.json();

    let timePassed = Date.now() - timeBeforeRequest;
    console.log(`It took ${timePassed} for the request.`);
    console.log(activityData);
    let adviceText = activityData.slip.advice;
    
    let activityPiece = document.createElement("p");
    activityPiece.textContent = `"${adviceText}"`; //had to adjust because of the "slip" type 

    document.querySelector("#activityDiv").appendChild(activityPiece);
}



let buttonB = document.querySelector("#jokeButton");
buttonB.addEventListener("click", e => getAndDisplayJoke() );

async function getAndDisplayJoke() {
    timeBeforeRequest = Date.now();

    let jokeResponse = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokeData = await jokeResponse.json();

    let timePassed = Date.now() - timeBeforeRequest;
    console.log(`It took ${timePassed} for the request.`);
    console.log(jokeData);
    
    let jokeText = `${jokeData.setup} — ${jokeData.punchline}`;

    let jokePiece = document.createElement("p");
    jokePiece.textContent = jokeText;


    
    jokePiece.textContent = `"${jokeText}"`; 

    document.querySelector("#jokeDiv").appendChild(jokePiece);
}