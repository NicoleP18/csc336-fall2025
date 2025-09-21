let animals = [
{
    type: "cat",
    strength: 10,
    charisma: 16,
   

},

{
    type: "dog",
    strength: 13,
    charisma: 9,

},

{
    type: "rabbit",
    strength: 7,
    charisma: 12,

},

{
    type: "seahorse",
    strength: 2,
    charisma: 20,

},
];


function populateAnimalInfoDiv(){
    let AnimalInfoDiv = document.querySelector("#all-animal-info");
    AnimalInfoDiv.innerHTML="";
    //for (let i = 0; i< animals.length; i++){
        //let animal = animals[i];
    
    for (let animal of animals){ 
        let animalDiv = createAnimalDiv(animal);
        AnimalInfoDivnimalInfoDiv.innerHTML += animalHTML;
    }
}
function createAnimalDiv(animal){
    return `
        <div>
        <h1>${animal.type}</h1>
        <div class = 'stats'>
            <div> strength; ${animal.strength}</div>
            <div> charisma; ${animal.charisma}</div>
        </div>
        </div>
    `;

}

let addAnimalForm = document.querySelector("#add-animal-form");
addAnimalForm.addEventListener("submit", addNewAnimal);

populateAnimalInfoDiv();

function addNewAnimal(e){
    e.preventDefault();

    let strengthInput = document.querySelector("#animal-type-field").value;
    let typeInput = document.querySelector("#animal-type-field").value;
    let newAnimal = {
        type: typeInput,
        strength: strengthInput,
    }
    animals.push(newAnimal);
populateAnimalInfoDiv();
}


