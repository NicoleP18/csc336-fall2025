let button = document.querySelector("#callbackDemoButton");

// function clickEventHappened(e){
//     console.log("clicked");
// }

// button.addEventListener("click", clickEventHappened);

//arrow functions, same output/function operation as above
// button.addEventListener("click", (e) => {console.log("clicked!")});


// function doSomething(numTimes){
//     for (let i = 0; i<numTimes; i++){
//         sum += i *numTimes / 4;
//     }
//     return sum
//     }
//  let result = doSomething(100);
//  console.log(result);



//let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");

let beforeRequest = Date.now();


// dogRequest
//     .then( (response) => {return response.json() })
//     .then((dogData)=> {
//         let timePassed = Date.now()-beforeRequest;
//         console.log(`It took ${timePassed} for the request`);
//         console.log(dogData);
//         let dogImageHTML = document.createElement("img");
//         dogImageHTML.src = dogData.message;
//         document.querySelector("body").appendChild(dogImageHTML);
//         })  

//         .catch( () => console.log("something went wrong"));

async function getAndDisplayDogImage(){
    let dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    let dogData = await dogResponse.json();

    let timePassed = Date.now()-beforeRequest;
    console.log(`It took ${timePassed} for the request`);
    console.log(dogData);
    let dogImageHTML = document.createElement("img");
    dogImageHTML.src = dogData.message;
    document.querySelector("body").appendChild(dogImageHTML);
}


getAndDisplayDogImage()